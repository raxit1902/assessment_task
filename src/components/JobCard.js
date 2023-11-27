import React from 'react';
import Card from './common/Card';

const JobCard = ({ jobData, setStep }) => {

  const handleBack = () => {
    setStep(1);
  }
  return (
    <div className='bg-gray-200 p-4 m-4 rounded w-full'>
      <button className="bg-white font-medium text-blue-500 ring-1 ring-inset ring-blue-500 py-2 px-4 rounded mb-2" onClick={handleBack} >Create a Job </button>
      <div class='flex flex-wrap gap-4'>
        <Card jobData={jobData} />
      </div>
    </div>
  )
}

export default JobCard;
