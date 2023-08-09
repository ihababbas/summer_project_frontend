"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Footer from '../components/Footer';
import Link from 'next/link';
import axios from 'axios';

const QuestionsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [timer, setTimer] = useState(0);
  const [initialTimer, setInitialTimer] = useState(0);

  // Check the stored difficulty and apply it to selectedDifficulty state
  useEffect(() => {
    const storedSelectedDifficulty = localStorage.getItem('selectedDifficulty');
    if (storedSelectedDifficulty) {
      setSelectedDifficulty(storedSelectedDifficulty);
    }
  }, []);

  const setTimerBasedOnDifficulty = (difficulty) => {
    switch (difficulty) {
      case 'سهل':
        return 150;
      case 'متوسط':
        return 100;
      case 'صعب':
        return 50;
      default:
        return 0;
    }
  };

  useEffect(() => {
    // Set the timer based on the selected difficulty level
    const timerDuration = setTimerBasedOnDifficulty(selectedDifficulty);
    setTimer(timerDuration);
    setInitialTimer(timerDuration);
    // Fetch new questions from the API and sort the options when selectedDifficulty changes
    fetchQuestions();
  }, [selectedDifficulty]);

  useEffect(() => {
    // Start the countdown timer
    let countdownInterval;
    if (timer > 0) {
      countdownInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    // Handle game over when the timer reaches 0
    if (timer === 0 && score)  {
      // Add your logic for game over (e.g., show a game over message, redirect to a game over screen, etc.)
      console.log("Game Over!");
   
      showResult(); 
   
    }

    // Clear the interval when the timer reaches 0
    if (timer === 0) {
      clearInterval(countdownInterval);
      // Add your logic for when the timer reaches 0 (e.g., end the game)
      
    
    }

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(countdownInterval);
    };
  }, [timer]);
  
  
  
  useEffect(() => {
    // Retrieve selected difficulty from localStorage
    const storedSelectedDifficulty = localStorage.getItem('selectedDifficulty');
    if (storedSelectedDifficulty) {
      setSelectedDifficulty(storedSelectedDifficulty);
    }
  }, []);

  const fetchQuestions = async () => {
    try {
     
      const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/random10/');
      const data = response.data;
   
      // Sort the answer options before setting the questions state
      const sortedQuestions = data.map((question) => ({
        ...question,
        options: question.options.sort((a, b) => a.text.localeCompare(b.text)),
      }));
     
      setQuestions(sortedQuestions);
      setIsLoading(false);
      const timerDuration = setTimerBasedOnDifficulty(selectedDifficulty);
      setTimer(timerDuration);
      setInitialTimer(timerDuration);
    
    
    } catch (error) {
      console.error('Error fetching questions:', error);
      setIsLoading(false);
    }
  };

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
      title: 'النتيجة النهائية',
      html: `<div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
              <div style="width: 80px; height: 80px; border-radius: 50%; background: conic-gradient(
                from 0deg, #4CAF50 0% ${correctAnswers / totalQuestions * 100}%,
                #F44336 ${correctAnswers / totalQuestions * 100}% 100%
              ); display: flex; align-items: center; justify-content: center;">
                <span style="font-size: 24px; color: white;">${correctAnswers}</span>
              </div>
            </div>`,
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'العودة الى بداية اللعبة',
      cancelButtonColor: '#F44336',
      showCloseButton: true,
      showDenyButton: true,
      denyButtonText: 'اعادة اللعب',
      denyButtonColor: '#4CAF50',
      onClick: () => {
        <Link href={'/startquestionsgame'}></Link>
   
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
            <ul>
            <li >Level: {selectedDifficulty}</li>
            <li >Timer: {timer} seconds</li>
            </ul>

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
                {score > 0 ? `لقد حصلت على ${score}% من جوابك` : 'لم تجب بشكل صحيح.'}
              </div>
            )}

            {/* Next Question button */}
            {isAnswered && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleNextQuestion}
              >
                السؤال التالي
              </button>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default QuestionsPage;
