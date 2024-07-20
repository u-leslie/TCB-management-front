"use client"
import React from 'react'
import Card from './card'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


function AppBar() {
  const AppLink = ({ href, children }) => {
    const currentRoute = usePathname();
    const isActive = currentRoute === href;

    return (
      <button className={`flex ${isActive ? 'bg-yellow-default px-12 py-3 rounded-md' : 'border px-12 py-3 rounded-md'}`}>
        <Link href={href}>{children}</Link>
      </button>
    );
  };
  

  return (
    <div className='lg:w-[100%]'>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-32 mt-32 lg:ml-48 ml-4'>
      <Card
      title="Daily records"
      desc="Daily payment of rent charges"
      col={"#5B7C99"}
      ppl={50}
      />
      <Card
      title="Monthly records"
      desc="Monthly payment of charges"
      col="#A8CA85"
      ppl={50}
      />
      <Card
      title="Yearly records"
      desc="Yearly payment of rent charges"
      col="#846C5B"
      ppl={50}
      />
    </div>
    <div className="button items-center justify-center mt-10 lg:flex lg:ml-48 gap-3 flex lg:float-none float-left ">
    <AppLink href='/dashboard/client'>
      Client
    </AppLink>
    <AppLink href='/dashboard/payment'>
      Payment
    </AppLink>
</div>

    </div>
  )
}

export default AppBar




// "use client"
// import React, { useEffect, useState } from 'react';
// import Card from './card';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import axios from 'axios';

// function AppBar() {
//   const AppLink = ({ href, children }) => {
//     const currentRoute = usePathname();
//     const isActive = currentRoute === href;

//     return (
//       <button className={`flex ${isActive ? 'bg-yellow-default px-12 py-3 rounded-md' : 'border px-12 py-3 rounded-md'}`}>
//         <Link href={href}>{children}</Link>
//       </button>
//     );
//   };

//   const [weeklyRecords, setWeeklyRecords] = useState(0);
//   const [dailyRecords, setDailyRecords] = useState(0);
//   const [yearlyRecords, setYearlyRecords] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/v1/clients'); 
//         const data = response.data;

//         setWeeklyRecords(data.weeklyRecords);
//         setDailyRecords(data.dailyRecords);
//         setYearlyRecords(data.yearlyRecords);
//       } catch (error) {
//         console.error('Error fetching records:', error);
//       }
//     };

//     fetchData();
//   }, []); 

//   return (
//     <div className='lg:w-[1000px] pt-16'>
//       <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10 lg:ml-10 ml-4'>
//         <Card title='Daily records' desc='Daily payment of rent charges' col={'#5B7C99'} ppl={dailyRecords} />
//         <Card title='Weekly records' desc='Weekly payment of charges' col='#A8CA85' ppl={weeklyRecords} />
//         <Card title='Yearly records' desc='Yearly payment of rent charges' col='#846C5B' ppl={yearlyRecords} />
//       </div>
//       <div className='button items-center justify-center mt-10 lg:flex gap-3 flex lg:float-none float-left '>
//         <AppLink href='/dashboard/client'>Client</AppLink>
//         <AppLink href='/dashboard/payment'>Payment</AppLink>
//       </div>
//     </div>
//   );
// }

// export default AppBar;
