import React, { useState } from 'react';
import './App.css';
import CreateJobForm from './components/CreateJobForm';
import JobCard from './components/JobCard';

const App = () => {
  const [step, setStep] = useState(1)
  const [jobData, setJobData] = useState([])

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1)
  }

  const handleSaveJob = (data) => {
    const newArray = jobData
    newArray.push(data)
    setJobData(newArray)
    setStep(3)
  }

  return (
    <div className='App'>
      <div className='min-h-screen flex justify-center'>
        {(step === 1 || step === 2) && (
          <CreateJobForm
            onNext={handleNextStep}
            onSave={handleSaveJob}
            step={step}
          />
        )}
        {step === 3 && jobData && (
          <JobCard jobData={jobData} setStep={setStep} />
        )}
      </div>
    </div>
  )
}

export default App;
