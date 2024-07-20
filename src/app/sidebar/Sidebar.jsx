"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BiSolidDashboard, BiHome, BiMenu } from 'react-icons/bi';
import { usePathname } from 'next/navigation';
import report from '../../../public/assets/report.png';

const NavLink = ({ href, children, icon }) => {
  const currentRoute = usePathname();
  const isActive = currentRoute === href;

  return (
    <li className={`flex ${isActive ? 'bg-white text-black pr-6 py-3 rounded-l-3xl ' : 'text-white pr-6'}`}>
      {icon && React.cloneElement(icon, { className: 'w-6 h-6 ml-4' })}
      <Link href={href} className='ml-2'>{children}</Link>
    </li>
  );
};

function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-yellow-default h-screen fixed">
      <div className="links pt-40 ">
       
        <div className="lg:hidden text-white cursor-pointer" onClick={toggleMenu}>
          <BiMenu className="w-8 h-8" />
        </div>

        
        <ul className={`flex flex-col gap-y-8 pl-4 lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
          {/* <NavLink href="/home" icon={<BiHome />}>
            Home
          </NavLink> */}
          <NavLink href='/dashboard/client' icon={<BiSolidDashboard  />}>
           <h2> Dashboard</h2>
          </NavLink>
          <NavLink href="/report" icon={<Image src={report} width={20} height={20} alt="logo" className="ml-10" />}>
            Report
          </NavLink>
        </ul>
      </div>

      
      <style jsx>{`
        @media (max-width: 768px) {
          .links {
            padding-top: 20px; /* Adjust as needed */
          }

          ul {
            padding-left: 2rem; /* Adjust as needed */
          }
        }
      `}</style>
    </div>
  );
}

export default Sidebar;
