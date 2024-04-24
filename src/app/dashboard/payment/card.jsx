import React from 'react'

function Card({title,ppl}) {
  return (
    <div className='w-40 p-5 h-40 flex rounded-xl bg-yellow-default'>
        <div className="text-center self-center">
       <h2 className='font-bold text-md text-center'>{title}</h2>
      <h2 className='text-sm font-bold'> <span className='text-lg'>{ppl}</span> people</h2>  
        </div>
    
    </div>
  )
}

export default Card
