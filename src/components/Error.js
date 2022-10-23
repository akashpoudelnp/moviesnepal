import React from 'react'

export default function Error(props) {
    return (
        <div className=''>
            <div className='w-72 bg-neutral-700/50 h-40 rounded-md flex flex-col items-center justify-center text-red-400 mx-auto my-10'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                <span>Sorry</span>
                <span>We can't process your request</span>
            </div>
        </div>
    )
}
