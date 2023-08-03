"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse';



const CSVUploader = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a CSV file.');
      return;
    }
  
    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const csvData = Papa.parse(event.target.result, { header: true }).data;
        console.log(csvData);
  
        // Loop through the JSON array and send individual POST requests
        const responses = await Promise.all(
          csvData.map(async (item) => {
            try {
              const response = await axios.post('http://127.0.0.1:8000/api/v1/QC/questions/', item, {
                headers: {
                  'Content-Type': 'application/json',
                  'X-CSRFToken': 'your_csrf_token_here',
                },
              });
              return response.data; // Return the data from the server response
            } catch (error) {
              console.error('Error uploading CSV item:', error);
              return null;
            }
          })
        );
  
        console.log(responses); // Array of responses from the server
        alert('Data added to the database successfully!');
      };
      reader.readAsText(file);
    } catch (error) {
      console.error('Error uploading CSV:', error);
      alert('Error uploading CSV. Please check the console for details.');
    }
  };
  



  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default CSVUploader;