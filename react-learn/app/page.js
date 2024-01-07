'use client';
import Header from '@/Components/Header';
import React  from 'react'
import { useState } from 'react';

const page = () => {
  const [user,setuser] = useState("Kunal")
  return (
    <>
    {/* <h1 className='text-xl text-purple-500 font-extralight'>
         hello your {Marks}
    </h1>
    <button onClick={()=>{
      setMarks(33)
    }} className='bg-purple-700 rounded-3xl mt-7 px-5 py-2 ml-5 text-white font-normal'>Update</button> */}
    <Header user={user}/>
    {user}
    </>
  )
}

export default page