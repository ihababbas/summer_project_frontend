'use client';

// Random50QuestionsPage.js
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import Link from 'next/link';
import Footer from '../components/Footer';

const Random50QuestionsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [player1Score, setPlayer1Score] = useState(50);
  const [player2Score, setPlayer2Score] = useState(50);
  const [currentPlayer, setCurrentPlayer] = useState(1); // Start with player 1
  const [isAnswered, setIsAnswered] = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  useEffect(() => {
    // Retrieve players' names from local storage
    const playerOneName = localStorage.getItem('playerOne');
    const playerTwoName = localStorage.getItem('playerTwo');

    // Retrieve the chosen player from local storage (coinOutcome)
    const coinOutcome = localStorage.getItem('coinOutcome');

    // Set the current player based on the coin outcome
    setCurrentPlayer(coinOutcome === playerOneName ? 1 : 2);
  }, []);

  const fetch50RandomQuestions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/random50/');
      const data = response.data;

      // Sort the answer options before setting the questions state
      const sortedQuestions = data.map((question) => ({
        ...question,
        options: question.options.sort((a, b) => a.text.localeCompare(b.text)),
      }));

      setQuestions(sortedQuestions);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch 50 random questions from the API and sort the options
    fetch50RandomQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (!isAnswered) {
      setIsAnswered(true);
      if (isCorrect) {
        if (currentPlayer === 1) {
          setPlayer1Score((prevScore) => prevScore + 10);
          setPlayer2Score((prevScore) => Math.max(0, prevScore - 10));
        } else {
          setPlayer2Score((prevScore) => prevScore + 10);
          setPlayer1Score((prevScore) => Math.max(0, prevScore - 10));
        }
      }
    }
  };

  const handleNextQuestion = () => {
    if (isGameFinished) return; // Stop if the game is finished

    setIsAnswered(false);

    // Check if any player reached exactly 100 points
    if (player1Score === 100 || player2Score === 100) {
      setIsGameFinished(true);
      showResult();
      return;
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCurrentPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1)); // Toggle to the next player
    } else {
      // All questions answered, check if any player reached 100%
      if (player1Score >= 100 || player2Score >= 100) {
        setIsGameFinished(true);
        showResult();
      } else {
        // Reset the question index and start a new round
        setCurrentQuestionIndex(0);
        setCurrentPlayer(1); // Start with player 1
      }
    }
  };

  const handleRestartGame = () => {
    // Clear players' scores and set the current player back to Player One
    setPlayer1Score(50);
    setPlayer2Score(50);
    setCurrentPlayer(1);

    // Reset game state
    setIsAnswered(false);
    setIsGameFinished(false);
    setCurrentQuestionIndex(0);

    // Fetch new set of questions and update the state
    fetch50RandomQuestions();
  };

  const showResult = () => {
    const player1Percentage = (player1Score / 100) * 100;
    const player2Percentage = (player2Score / 100) * 100;

    let winner;
    if (player1Percentage === 100 && player2Percentage === 100) {
      winner = 'Both players';
    } else if (player1Percentage === 100) {
      winner = 'Player 1';
    } else if (player2Percentage === 100) {
      winner = 'Player 2';
    }

    Swal.fire({
      title: 'النتيجة النهائية',
      html: `
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div>
          ${localStorage.getItem('playerOne')} : ${player1Percentage}%
          </div>
          <div>
          ${localStorage.getItem('playerTwo')} : ${player2Percentage}%
          </div>
        </div>
        <div style="text-align: center; margin-top: 16px;">
          ${winner ? `${winner} wins!` : 'It\'s a tie!'}
        </div>
      `,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  return (
    <>
        <div className="flex flex-wrap items-center justify-center flex flex-col items-center justify-center h-screen text-black">
        {isLoading ? (
          // Loading state
          <div className="text-center">
            <div className="animate-spin text-3xl mb-4">&#128259;</div>
            <p>Loading...</p>
          </div>
        ) : isGameFinished ? (
          // Game finished state
          <div className="flex items-center justify-center h-full">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
              {/* Animation for the winning player */}
              {player1Score === 100 ? (
                <div className="text-center text-3xl text-green-500">
                  {localStorage.getItem('playerOne')} Wins!
                  {/* Add your animation or celebration effect here */}
                </div>
              ) : (
                <div className="text-center text-3xl text-green-500">
                  {localStorage.getItem('playerTwo')} Wins!
                  {/* Add your animation or celebration effect here */}
                </div>
              )}
              <div className="col-span-1 flex flex-col justify-center items-center">
                <button
                  className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full"
                  onClick={handleRestartGame}
                >
                  اللعب من جديد
                </button>
                <Link href={'/startqustionsgame'}>
                  <button className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full">
                    العودة الى بداية اللعبة
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          // Game state with questions
          <div className="flex justify-center items-center space-x-4 mt-[100px] w-full h-full">
          {/* Player Information Card */}
          <div className={`bg-blue-200 p-6 rounded-lg flex flex-col items-center ${
          currentPlayer === 1 ? 'border-yellow-500 border-4' : ''
        }`}>
            <div className="text-center mb-4">
              {currentPlayer === 1 ? (
                <span className="font-bold underline">
                  {localStorage.getItem('playerOne')} : {player1Score} نقطة
                </span>
              ) : (
                <span>
                  {localStorage.getItem('playerOne')} : {player1Score} نقطة
                </span>
              )}
            </div>
            <div className="relative h-32 w-32 mb-4">
              {/* Player One Tank */}
              <div
                className="absolute bottom-0 left-0 w-full h-0 bg-blue-500 transition-all duration-500"
                style={{ height: `${player1Score}%` }}
              />
            </div>
          </div>
  
          {/* Question Card */}
          <div className="bg-white p-6 rounded-lg">
            <div className="border border-solid border-black p-4 mb-4">
              {questions[currentQuestionIndex].question}
            </div>
  
            <div className="grid grid-cols-2 gap-4">
              {/* Display the answer options */}
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                  key={index}
                  className={`border border-solid border-black p-4 mb-4 text-center ${
                    isAnswered && option.is_correct
                      ? 'bg-green-300'
                      : isAnswered && !option.is_correct
                      ? 'bg-red-300'
                      : ''
                  }`}
                  onClick={() => handleAnswer(option.is_correct)}
                >
                  {option.text}
                </div>
              ))}
            </div>
  
            {/* Next Question button */}
            {isAnswered && !isGameFinished && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleNextQuestion}
              >
                السؤال التالي
              </button>
            )}
          </div>
  
          {/* Player Information Card */}
          <div className={`bg-green-200 p-6 rounded-lg flex flex-col items-center ${
          currentPlayer === 1 ? '' : 'border-yellow-500 border-4'
        }`}>
            <div className="text-center mb-4">
              {currentPlayer === 2 ? (
                <span className="font-bold underline">
                  {localStorage.getItem('playerTwo')} : {player2Score} نقطة
                </span>
              ) : (
                <span>
                  {localStorage.getItem('playerTwo')} : {player2Score} نقطة
                </span>
              )}
            </div>
            <div className="relative h-32 w-32 mb-4">
              {/* Player Two Tank */}
              <div
                className="absolute bottom-0 right-0 w-full h-0 bg-green-500 transition-all duration-500"
                style={{ height: `${player2Score}%` }}
              />
            </div>
          </div>
        </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Random50QuestionsPage;
