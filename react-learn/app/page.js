'use client';
import Header from '@/Components/Header';
import React  from 'react'
import { useState } from 'react';
import Link from 'next/link';
const page = () => {
  // const [user,setuser] = useState("Kunal")
  // const [About,setAbout]=useState("About") //this is how we make it
  // const [ContactUs,setContactUs]=useState("Contact Us")
  // const [Menu,setMenu]=useState("Menu")
  return (
    <>
    {/* <h1 className='text-xl text-purple-500 font-extralight'>
         hello your {Marks}
    </h1>
    <button onClick={()=>{
      setMarks(33)
    }} className='bg-purple-700 rounded-3xl mt-7 px-5 py-2 ml-5 text-white font-normal'>Update</button> */}
    {/* <Header user={user} about={About} Contact={ContactUs} menu={Menu}/> //pass here
    {user} */}

   
    {/* <a href="/About"> About
      </a>
      <a href="/Product"> Product
        </a>
        <a href="Courses"> Courses
          </a> */}  
           {/* //a tag method its reloading so we use LINK/NEXT  */}
    <Header/>
    <h1>HomePage</h1>
      

     

    </>
  )
}

export default page