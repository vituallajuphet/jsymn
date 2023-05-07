import React from 'react'

const Loading = () => {

  return (
    <div className='bg-[#b9e0fa] fixed w-full h-full left-0'>
      <div className='items-center justify-center flex flex-col h-full'>
        <img src='/logo.png' className='w-[80px] h-[80px] block animate-spin' alt="Jsync logo"/>
      </div>
    </div>
  )
}

export default Loading