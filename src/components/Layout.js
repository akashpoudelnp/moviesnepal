import React from 'react'

export default function Layout(props) {
    return (
        <div className="w-full h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 ">
            <div className="flex h-screen justify-between flex-col-reverse md:flex-row">
                <div className="flex flex-1 flex-col bg-neutral-900/90 backdrop-blur px-10 py-8  overflow-y-scroll">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
