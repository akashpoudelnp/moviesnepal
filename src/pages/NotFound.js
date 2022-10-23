import React from 'react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center mt-10 gap-2">
        <h1 className="text-3xl font-bold text-white">Sorry</h1>
        <p className='text-xl font-semibold text-white border-t-2'>Page Not Found</p>
      </div>
    </Layout>
  )
}
