"use client";
import React, { useState, useEffect } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Surah } from '../components/data/surah'; // Import your Surah data here
import Footer from '../components/Footer';
import Swal from 'sweetalert2';
const DragAndDropGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedNumber, setSelectedNumber] = useState(2); // Default value
  const [surahNames, setSurahNames] = useState([]);
  const [timer, setTimer] = useState(0);
  const [playerMark, setPlayerMark] = useState(null);
  const [displayNumbers, setDisplayNumbers] = useState(false);
  const playerName = localStorage.getItem('playerName');
  

  // Function to shuffle array randomly
  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Retrieve selected number from local storage
    const storedSelectedNumber = localStorage.getItem('selectedNumber');
    if (storedSelectedNumber) {
      setSelectedNumber(parseInt(storedSelectedNumber, 10));
    }

    // Get selected number of random surah names
    const shuffledSurahs = shuffleArray(Surah).slice(0, selectedNumber);
    setSurahNames(shuffledSurahs);

    // Start the timer
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    setIsLoading(false);

    return () => {
      clearInterval(interval);
    };
  }, [selectedNumber]);

  const calculateMark = () => {
    const isCorrectOrder = checkSurahOrder();
  
    if (isCorrectOrder) {
      const playerScore = selectedNumber; // Player's score is the selected number
  
      // Save the player's score to local storage
      localStorage.setItem('playerScore', playerScore);
  
      // Reset the timer and any other necessary state
      setTimer(0);
      // Reset the displayNumbers state
      setDisplayNumbers(false);
      Swal.fire({
        title: 'Congratulations!',
        text: `Your mark: ${playerScore}/${selectedNumber}`,
        icon: 'success',
      });
    } else {
      // Handle the case when the order is incorrect
      Swal.fire({
        title: 'Incorrect Order',
        text: 'Please rearrange the surah names in the correct order.',
        icon: 'error',
      });
    }
  };

  
  const checkSurahOrder = () => {
    for (let i = 0; i < surahNames.length - 1; i++) {
      if (surahNames[i].number > surahNames[i + 1].number) {
        return false;
      }
    }
    return true;
  };
  
    
  
  const handleOnDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
  
    // Reorder surahNames based on drag and drop result
    const updatedSurahNames = Array.from(surahNames);
    const [draggedSurah] = updatedSurahNames.splice(result.source.index, 1);
    updatedSurahNames.splice(result.destination.index, 0, draggedSurah);
  
    setSurahNames(updatedSurahNames);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h2 className="mb-4 text-2xl font-bold">ترتيب السور</h2>
    <p>اسم اللاعب: {playerName}</p>
    <p>عدد السور: {selectedNumber}</p>
    <p>الوقت: {timer} seconds</p>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="mt-4 space-x-2 flex"
          >
            {surahNames.map((surah, index) => (
              <Draggable key={surah.number} draggableId={surah.name} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    className="bg-[#93BFCF] p-2 rounded-md"
                  >
                    {displayNumbers ? surah.number : surah.name}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>

    <button
      onClick={calculateMark}
      className="bg-green-500 text-white px-4 py-2 rounded-lg mt-2"
    >
      تمّ
    </button>
    <Footer />
  </div>
  );
};

export default DragAndDropGame;
