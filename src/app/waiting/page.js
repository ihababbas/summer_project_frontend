'use client';

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Link from 'next/link';
import axios from 'axios';

const WaitingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(timer);

  useEffect(() => {
    // Start the countdown timer when the component mounts
    const timerInterval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up the timer interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on unmount

    // Only run this effect once on initial mount
  }, []);
  useEffect(() => {
    // When the timer reaches 0, handle unanswered question
    if (secondsRemaining === 0 && !isAnswered) {
      handleAnswer(false);
    }
  }, [secondsRemaining]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/random10/');
      const data = response.data;

      // Sort the answer options before setting the questions state
      const sortedQuestions = data.map((question) => ({
        ...question,
        options: question.options.sort((a, b) => a.text.localeCompare(b.text))
      }));

      setQuestions(sortedQuestions);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Retrieve the selected difficulty from localStorage
    const selectedDifficulty = localStorage.getItem('selectedDifficulty');

    // Set the timer based on the selected difficulty
    switch (selectedDifficulty) {
      case 'سهل':
        setTimer(30);
        break;
      case 'متوسط':
        setTimer(20);
        break;
      case 'صعب':
        setTimer(10);
        break;
      default:
        // Default timer value if no difficulty is selected
        setTimer(30);
        break;
    }
  }, []);

  useEffect(() => {
    // Fetch questions from the API and sort the options
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (!isAnswered) {
      setIsAnswered(true);
      if (isCorrect) {
        setScore((prevScore) => prevScore + 10);
      }
    }
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // All questions answered, show the final result
      showResult();
    }
  };

  const showResult = () => {
    const totalQuestions = questions.length;
    const correctAnswers = score / 10;
    const wrongAnswers = totalQuestions - correctAnswers;
  
    Swal.fire({
      title: 'Final Score',
      html: `<div style="display: flex; align-items: center; justify-content: space-between;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background-color: #4CAF50; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; color: white;">${correctAnswers}</span>
              </div>
              <div style="width: 80px; height: 80px; border-radius: 50%; background-color: #F44336; display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; color: white;">${wrongAnswers}</span>
              </div>
            </div>`,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Go Back',
      cancelButtonColor: '#F44336',
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: 'Play Again',
      denyButtonColor: '#4CAF50',
      onClose: () => {
        window.location.href = '/startqustionsgame';
      },
    }).then((result) => {
      if (result.isDenied) {
        // Play again, reset the game
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsAnswered(false);
  
        // Fetch new questions from the API and sort the options
        fetchQuestions();
      }
    });
  };
  
  

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        {isLoading ? (
          // Loading state
          <div className="text-center">
            <div className="animate-spin text-3xl mb-4">&#128259;</div>
            <p>Loading...</p>
          </div>
        ) : (
          // Game state
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h1 className="text-2xl font-semibold mb-4">Timer: {secondsRemaining} seconds</h1>
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

            {isAnswered && (
              <div className="text-lg font-semibold">
                {score > 0 ? `You earned ${score}% for this question!` : 'You missed this question.'}
              </div>
            )}

            {/* Next Question button */}
            {isAnswered && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default WaitingPage;
