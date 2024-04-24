import React from 'react'
import Graph from './chart'
import Card from './card'

function Payment() {
  return (
    <div className='my-10'>
    <div>
       <Graph/>
    </div>
     <div className='overview block justify-center'>
      <h2 className='font-bold text-lg text-center'>Overview</h2>
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center my-10 w-5/12 lg:ml-80 ml-24 lg:gap-10 gap-10'>
      <Card
     title='Total Paid'
     ppl={359}
     />

     <Card
     title='Total Unpaid'
     ppl={35}
     />
  
      </div>
     </div>
    </div>
  )
}

export default Payment
