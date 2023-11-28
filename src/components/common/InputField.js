import React from 'react'

const InputField = ({
  label,
  asterisk,
  name,
  value,
  onChange,
  placeholder,
  className,
  type,
  checked,
}) => {
  return (
    <>
      {type === 'text' && (
        <div
          className={`flex flex-col gap-1 text-start justify-end ${className}`}
        >
          <label className='block font-semibold'>
            {label}
            {asterisk && <span className='text-red-500'>*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          />
        </div>
      )}

      {type === 'radio' && (
        <div className={`flex items-center gap-1 ${className}`}>
          <input
            type={type}
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            className='w-4 h-4'
          />
          <label className='text-gray-400'>{label}</label>
        </div>
      )}
    </>
  )
}

export default InputField
