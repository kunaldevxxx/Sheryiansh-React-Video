import React from 'react'

function Header(props) {
  return (
    <div className='h-8 bg-green-500 flex gap-[83vw]'>
        <h2 className='ml-2'>{props.user}</h2>

        <div className='flex gap-4'>
            <h4>About</h4>
            <h4>About</h4>
            <h4>About</h4>
            <h4>About</h4>
        </div>
    </div>
  )
}

export default Header