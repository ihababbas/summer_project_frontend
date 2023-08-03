import React from 'react';
import CSVUploader from '../components/CSVUploader';

const UploadCSVPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-6">Upload and Display CSV</h1>
        <CSVUploader />
      </div>
    </div>
  );
};

export default UploadCSVPage;
