import React from 'react'

function Header(props) {  //just pass props here and see page.js
  return (
    <div className='h-8 bg-green-500 flex gap-[83vw]'>
        <h2 className='ml-2'>{props.user}</h2> 

        <div className='flex gap-4'>
            <h4>{props.about}</h4>  //props driling use of prop of any other components
            <h4>{props.Contact}</h4>
            <h4>{props.menu}</h4>
          
        </div>
    </div>
  )
}

export default Header