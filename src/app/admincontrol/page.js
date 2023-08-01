'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import cheerio from 'cheerio';

import Papa from 'papaparse';

const AdminControlPage = () => {
  const [questions, setQuestions] = useState([]);
  const [typesAndCounts, setTypesAndCounts] = useState([]);
  const [editedQuestion, setEditedQuestion] = useState(null);
  const [openform , setOpenForm] = useState(false)
  const [newQuestion, setNewQuestion] = useState({
    type: '',
    questions: '',
    correct: '',
    wrong1: '',
    wrong2: '',
    wrong3: '',
  });



  
const handleDownloadQuestions = async () => {
  try {
    // Make the API call to download the questions
    const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/download/');
    //const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/questions/');
    const csvData = response.data;

    // Create a Blob from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });

    // Create a download link for the Blob
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'questions.csv';

    // Append the download link to the document, trigger the click event, and remove the link
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    console.log('Downloaded questions successfully.');
  } catch (error) {
    console.error('Error downloading questions:', error);
  }
};
  
  
  const handleClearAllQuestions = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/api/v1/QC/clear/');
      console.log('All questions cleared successfully.');
      setQuestions()
    } catch (error) {
      console.error('Error clearing all questions:', error);
    }
  };

  
  const handleAddQuestion = () => {
    setOpenForm(true)
    console.log(newQuestion)
    setEditedQuestion(null); // Set editedQuestion to null to open the form
  };

  const handleEditQuestion = (questionId) => {
    
    // Find the question to edit based on questionId
    const questionToEdit = questions.find((question) => question.id === questionId);
    if (questionToEdit) {
      // Set the edited question state to the current question
      setEditedQuestion(questionToEdit);
      console.log(questionId)
    }
  };



  
  
  
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (editedQuestion) {
      try {
        // Send a PUT request to update the question
        await axios.put(`http://127.0.0.1:8000/api/v1/QC/question/${editedQuestion.id}/`, editedQuestion);
        console.log(`Question with ID ${editedQuestion.id} updated successfully.`);
        // Reset the edited question state after successful update
        setEditedQuestion(null);

        const data=questions.filter((e)=>{
          return e.id !==editedQuestion.id
        })
        setQuestions([editedQuestion,...data]);
    
      } catch (error) {
        console.error('Error updating question:', error);
      }

    } else {
      try {
        console.log(newQuestion)
        // Send a POST request to add a new question
        await axios.post('http://127.0.0.1:8000/api/v1/QC/questions/', newQuestion);
        console.log('New question added successfully.');
        // Clear the newQuestion state after successful addition
        setQuestions([newQuestion,...questions]);

        
      } catch (error) {
        console.error('Error adding new question:', error);
      }
    }
    setOpenForm(false)
  };


  const handleDeleteQuestion = async (questionId) => {
    try {
      // Send a DELETE request to your API endpoint with the given questionId
      await axios.delete(`http://127.0.0.1:8000/api/v1/QC/question/${questionId}`);
      console.log(`Deleted question with ID: ${questionId}`);

      // Update the state to remove the deleted question from the list
      setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== questionId));
      
    } catch (error) {
      console.error('Error deleting question:', error);
    }
  };

  useEffect(() => {
    async function fetchData() {
    
        const response =  axios.get('http://127.0.0.1:8000/api/v1/QC/questions/')
        .then((result) => {
          setQuestions(result.data);
          console.log(result.data)
        })
        .catch((err) => {
          console.log(err);
        });
      }
   
    fetchData();
  }, [setQuestions]);





  useEffect(() => {      
     async function fetchTypesAndCounts() {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/v1/QC/count/');
      const html = response.data;

      // Load the HTML into cheerio
      const $ = cheerio.load(html);

      // Select all list items within the ul element and extract the text
      const listItems = $('ul li').map((index, element) => $(element).text()).get();

      // Convert the list items to an array of objects
      const typesAndCountsData = listItems.map((item) => {
        const [type, count] = item.split(' - ');
        return { type, count: parseInt(count, 10) };
      });

      setTypesAndCounts(typesAndCountsData);
      console.log(typesAndCountsData);
    } catch (error) {
      console.error('Error fetching types and counts:', error);
    }
  }
  fetchTypesAndCounts();
},[]);

  return (
    <>

<div className="container mx-auto mt-8 mt-[150px] grid grid-cols-5 gap-4">
  
    {/* Second column (20% width) */}
    <div className="col-span-1 flex flex-col justify-center items-center">
    <button className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full">رفع الاسئلة</button>
    <button onClick= {handleDownloadQuestions} className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full">تحميل الاسئلة</button>
    <button  onClick={handleClearAllQuestions}  className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full">مسح الكل</button>
    <button onClick={handleAddQuestion} className="bg-[#93BFCF] text-xs text-white px-4 py-2 rounded-lg mb-2 block w-full">إضافة</button>
    {typesAndCounts && (
        <div className="bg-white rounded-lg p-4 mb-4 text-right">
          <h2 className="text-xl font-semibold mb-4">انواع الاسئلة وعددها</h2>
          <ul>
            {typesAndCounts.map(({ type, count }) => ( // Updated mapping to access type and count properties
              <li key={type}>
                النوع: {type} - العدد: {count}
              </li>
            ))}
          </ul>
        </div>
      )}
 

  
  
  </div>
    
  

  {/* First column (80% width) */}
  
  <div className="col-span-4 pb-[50px]">
    <h1 className="text-3xl font-bold mb-4 text-center">لوحة التحكم</h1>

    <div className="bg-white rounded-lg p-4 mb-4 text-right overflow-hidden">
    
    {(editedQuestion !== null || openform ) &&  (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center  ">
          <div className="bg-white p-8 rounded shadow-lg max-w-xl">
            <h2 className="text-2xl font-bold mb-4">{editedQuestion ? 'حفظ التعديل' : 'اضافة سؤال'}</h2>
            <form onSubmit={handleFormSubmit} className="space-y-4 ">
              <label className="block text-sm font-medium text-gray-700">
                النوع:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.type : newQuestion.type}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, type: e.target.value })
                      : setNewQuestion({ ...newQuestion, type: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                نص السؤال:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.questions : newQuestion.questions}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, questions: e.target.value })
                      : setNewQuestion({ ...newQuestion, questions: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                الاجابة الصحيحة:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.correct : newQuestion.correct}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, correct: e.target.value })
                      : setNewQuestion({ ...newQuestion, correct: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                الاجابة الخاطئة 1:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.wrong1 : newQuestion.wrong1}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, wrong1: e.target.value })
                      : setNewQuestion({ ...newQuestion, wrong1: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                الاجابة الخاطئة 2:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.wrong2 : newQuestion.wrong2}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, wrong2: e.target.value })
                      : setNewQuestion({ ...newQuestion, wrong2: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <label className="block text-sm font-medium text-gray-700">
                الاجابة الخاطئة 3:
                <input
                  type="text"
                  value={editedQuestion ? editedQuestion.wrong3 : newQuestion.wrong3}
                  onChange={(e) =>
                    editedQuestion
                      ? setEditedQuestion({ ...editedQuestion, wrong3: e.target.value })
                      : setNewQuestion({ ...newQuestion, wrong3: e.target.value })
                  }
                  className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </label>
              <button
                // onClick={() => {
                //   setOpenForm(false);}}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {editedQuestion ? 'حفظ التعديل' : 'اضافة سؤال'}
              </button>
  
            </form>
          </div>
        </div>
    )}
            <h2 className="text-xl font-semibold mb-4">قائمة الاسئلة</h2>
            <div
              style={{
                maxHeight: 'calc(100vh - 250px)', // Adjust this value to your preference
                overflowY: 'auto',
              }}
            >
              <table className="w-full table-fixed ">
                <thead>
                  <tr>
                  <th className="px-4 py-2">تعديل او حذف</th>
                    <th className="px-4 py-2">الخطأ 3</th>
                    <th className="px-4 py-2">الخطأ 2</th>
                    <th className="px-4 py-2">الخطأ 1</th>
                    <th className="px-4 py-2">الاجابة الصحيحة</th>
                    <th className="px-4 py-2">نص السؤال</th>
                    
                  </tr>
                </thead>
                <tbody>
                {questions !== null && (
                  questions.map((question) => (
                    <tr key={question.id}>
                            <td className="border px-4 py-2">
                        <button
                          className="text-blue-600 hover:text-blue-800 mr-2"
                          onClick={() => handleEditQuestion(question.id)}
                        >
                          تعديل
                        </button>
                        <button
                          className="text-red-600 hover:text-red-800"
                          onClick={() => handleDeleteQuestion(question.id)}
                        >
                          حذف
                        </button>
                      </td>
                      <td className="border px-4 py-2">{question.wrong3}</td>
                      <td className="border px-4 py-2">{question.wrong2}</td>
                      <td className="border px-4 py-2">{question.wrong1}</td>
                      <td className="border px-4 py-2">{question.correct}</td>
                      <td className="border px-4 py-2">{question.questions}</td> 
                    </tr>
                  ))
                )}
                </tbody>
              </table>
            </div>
          </div>

   
 

  </div>
   


</div>



    <Footer/>
    </>

  );
};

export default AdminControlPage;
