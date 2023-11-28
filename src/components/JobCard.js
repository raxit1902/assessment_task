import React from 'react';
import Card from './common/Card';

const JobCard = ({ jobData }) => {

  return (
    <div className='bg-gray-200 p-4 m-4 rounded w-full'>
      <div className='flex flex-wrap gap-4'>
        <Card jobData={jobData} />
      </div>
    </div>
  )
}

export default JobCard;
