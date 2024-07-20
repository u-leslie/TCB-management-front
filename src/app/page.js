import React from 'react'
import Login from './login/login'
import Loader from './loader/loader'
import './globals.css'

function page() {
  return (
    <div>
      <Login/>
      {/* <Loader/> */}
    </div>
  )
}
export default page