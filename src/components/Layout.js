import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout(props) {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="flex h-screen justify-between flex-col-reverse md:flex-row">
                <div className="flex w-screen md:w-24  md:flex-col items-center justify-between bg-neutral-800/90 backdrop-blur px-5 py-2 md:py-8">
                    <Link to={'/'} className="rounded-xl bg-neutral-700 shadow p-3 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </Link>
                    <Link to={'/search'} className="rounded-xl bg-neutral-700 shadow p-3 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </Link>
                    <Link to={'/'} className="rounded-xl bg-neutral-700 shadow p-3 text-white ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                        </svg>

                    </Link>
                </div>
                <div className="flex flex-1 flex-col bg-neutral-900/90 backdrop-blur px-10 py-8  overflow-y-scroll">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
