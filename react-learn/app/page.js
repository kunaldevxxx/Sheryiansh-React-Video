'use client';
import React  from 'react'
import { useState } from 'react';

const page = () => {
  const [Marks, setMarks] = useState(80)
  return (
    <>
    <h1 className='text-xl text-purple-500 font-extralight'>
         hello your {Marks}
    </h1>
    <button onClick={()=>{
      setMarks(33)
    }} className='bg-purple-700 rounded-3xl mt-7 px-5 py-2 ml-5 text-white font-normal'>Update</button>
    </>
  )
}

export default page