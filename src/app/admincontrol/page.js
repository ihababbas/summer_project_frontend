'use client';



import Header from '../components/Header';
import Footer from '../components/Footer';


import React, { useEffect, useState } from 'react';

const AdminControlPage = () => {
  const [questions, setQuestions] = useState([]);
  const [typesAndCounts, setTypesAndCounts] = useState({});

  // Fetch QuestionsData objects from the API
  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/QC/questions/');
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Fetch types and counts from the API
  const fetchTypesAndCounts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/v1/QC/count/');
      const data = await response.json();
      setTypesAndCounts(data);
    } catch (error) {
      console.error('Error fetching types and counts:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
    fetchTypesAndCounts();
  }, []);

  return (
    <>

<div className="container mx-auto mt-8 mt-[150px] grid grid-cols-5 gap-4">
  {/* First column (80% width) */}
  <div className="col-span-4">
    <h1 className="text-3xl font-bold mb-4">Admin Control Panel</h1>

    {/* View Questions */}
    <div className="bg-white rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-4">Questions List</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            {question.question} - Type: {question.type}
          </li>
        ))}
      </ul>
    </div>

    {/* Display Types and Counts */}
    <div className="bg-white rounded-lg p-4 mb-4">
      <h2 className="text-xl font-semibold mb-4">Types and Counts</h2>
      <ul>
        {Object.entries(typesAndCounts).map(([type, count]) => (
          <li key={type}>
            Type: {type} - Count: {count}
          </li>
        ))}
      </ul>
    </div>

    {/* Edit and Delete Options */}
    {/* Add Form (Modal or separate page) */}
  </div>
   
  {/* Second column (20% width) */}
  <div className="col-span-1 flex flex-col justify-center items-center">
    <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mb-2 block">Upload</button>
    <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mb-2 block">Download</button>
    <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mb-2 block">Clear</button>
    <button className="bg-[#93BFCF] text-white px-4 py-2 rounded-lg mb-2 block">Add</button>
  </div>
</div>

    <Footer/>
    </>

  );
};

export default AdminControlPage;
