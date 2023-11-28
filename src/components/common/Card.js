import React from 'react'
import cardImg from '../../assets/Netflix-Symbol.png'

const Card = ({ jobData }) => {
  return (
    <>
      {jobData &&
        jobData.map((item) => (
          <div className='bg-white rounded py-4 px-6 div-card'>
            <div className='flex gap-2'>
              <img
                src={cardImg}
                alt='card-img'
                className='w-20 h-20 rounded-lg'
              />
              <div className='text-left'>
                <div className='mb-6'>
                  <h2 className='text-2xl'>{item.jobTitle}</h2>
                  <p>
                    {item.companyName} - {item.industry}
                  </p>
                  <p className='text-slate-500'>
                    {item.location} ({item.remoteType})
                  </p>
                </div>
                <div className='mb-6'>
                  <p className='mb-2'>part-Time (9.00am - 5.00pm IST) </p>
                  <p className='mb-2'>
                    Experience ({item.experienceMin} - {item.experienceMax}{' '}
                    years)
                  </p>
                  <p className='mb-2'>
                    INR (₹) {item.salaryMin} - {item.salaryMax} / month
                  </p>
                  <p> {item.totalEmployees} employees </p>
                </div>
                <div className='flex text-left'>
                  {item.applyType === 'externalApply' ? (
                    <button className='bg-white text-blue-500 ring-1 ring-inset ring-blue-500 py-2 px-4 rounded'>
                      External Apply
                    </button>
                  ) : (
                    <button className='bg-blue-500 text-white py-2 px-4 rounded'>
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  )
}

export default Card
