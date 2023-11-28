import React, { useState } from 'react'
import './createJobFrom.css'
import InputField from './common/InputField'

const CreateJobForm = ({ onSave, onNext, step }) => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    industry: '',
    location: '',
    remoteType: '',
    experienceMin: '',
    experienceMax: '',
    salaryMin: '',
    salaryMax: '',
    totalEmployees: '',
    applyType: 'quickApply',
  })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleNext = () => {
    onNext()
  }

  const handleSave = () => {
    onSave(formData)
  }

  return (
    <div className='flex flex-col justify-between bg-white p-8 m-6 rounded-md form-main-div'>
      <div className='flex flex-col gap-6'>
        <div className='flex justify-between'>
          <p className='text-2xl font-medium'>Create a job</p>
          <p className='font-medium'>Step {step}</p>
        </div>
        {step === 1 && (
          <>
            <InputField
              type={'text'}
              label={'Job title'}
              asterisk
              name={'jobTitle'}
              value={formData.jobTitle}
              onChange={handleInputChange}
              placeholder={'ex. UX UI Designer'}
            />

            <InputField
              type={'text'}
              label={'Company name'}
              asterisk
              name={'companyName'}
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder={'ex. Google'}
            />
            <InputField
              type={'text'}
              label={'Industry'}
              asterisk
              name={'industry'}
              value={formData.industry}
              onChange={handleInputChange}
              placeholder={'ex. Information Technology'}
            />
            <div className='flex flex-wrap justify-between gap-6'>
              <InputField
                type={'text'}
                label={'Location'}
                name={'location'}
                value={formData.location}
                onChange={handleInputChange}
                placeholder={'ex. Chennai'}
                className={'felx-input'}
              />
              <InputField
                type={'text'}
                label={'Remote type'}
                name={'remoteType'}
                value={formData.remoteType}
                onChange={handleInputChange}
                placeholder={'ex. In-office'}
                className={'felx-input'}
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className='flex flex-wrap justify-between gap-6'>
              <InputField
                type={'text'}
                label={'Experience'}
                name={'experienceMin'}
                value={formData.experienceMin}
                onChange={handleInputChange}
                placeholder={'Minimum'}
                className={'felx-input'}
              />
              <InputField
                type={'text'}
                label={''}
                name={'experienceMax'}
                value={formData.experienceMax}
                onChange={handleInputChange}
                placeholder={'Maximum'}
                className={'felx-input'}
              />
            </div>
            <div className='flex flex-wrap justify-between gap-6'>
              <InputField
                type={'text'}
                label={'Salary'}
                name={'salaryMin'}
                value={formData.salaryMin}
                onChange={handleInputChange}
                placeholder={'Minimum'}
                className={'felx-input'}
              />
              <InputField
                type={'text'}
                label={''}
                name={'salaryMax'}
                value={formData.salaryMax}
                onChange={handleInputChange}
                placeholder={'Maximum'}
                className={'felx-input'}
              />
            </div>
            <InputField
              type={'text'}
              label={'Total employees'}
              name={'totalEmployees'}
              value={formData.totalEmployees}
              onChange={handleInputChange}
              placeholder={'ex. 100'}
            />

            <div className={`flex flex-col gap-1 text-start justify-end `}>
              <label className='block font-semibold'>Apply type</label>
              <div className='flex gap-4'>
                <InputField
                  type={'radio'}
                  label={'Quick apply'}
                  name={'applyType'}
                  checked={formData.applyType === 'quickApply'}
                  value={'quickApply'}
                  onChange={handleInputChange}
                />
                <InputField
                  type={'radio'}
                  label={'External apply'}
                  name={'applyType'}
                  checked={formData.applyType === 'externalApply'}
                  value={'externalApply'}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className='flex justify-end'>
        {step === 1 && (
          <button
            onClick={handleNext}
            className='bg-blue-500 text-white py-2 px-3 rounded'
          >
            Next
          </button>
        )}
        {step === 2 && (
          <button
            onClick={handleSave}
            className='bg-blue-500 text-white py-2 px-3 rounded'
          >
            Save
          </button>
        )}
      </div>
    </div>
  )
}

export default CreateJobForm
