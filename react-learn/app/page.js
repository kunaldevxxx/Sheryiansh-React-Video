'use client';
import Header from '@/Components/Header';
import React  from 'react'
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
const page = () => {
  const [Image, setImage] = useState([])
  const getimages=async()=>{
    try{
   const response = await axios.get("https://picsum.photos/v2/list")
   const data = response.data;
   console.log(response);
   setImage(data)
  } catch (error){
    console.log("error");
  }
  }
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
    {/* <Header/>
    <h1>HomePage</h1>
       */}

     <button onClick={getimages} className=' bg-purple-400 rounded-2xl px-6 py-2 '>Get Images</button>
     <div className='p-10'> 
       {Image.map((elem,i)=>{
        return <img key={i} src={elem.download_url} className=' w-32 h-32 rounded-md m-8 inline-block'></img>
       })}
     </div>

    </>
  )
}

export default page