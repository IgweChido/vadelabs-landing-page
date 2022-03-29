import React from 'react'
import vade from '../images/vadelogo.png'

function Header() {
  return (
    <div class=' h-20 shadow-md fixed w-full z-20 bg-header backdrop-blur top-0'>
        <div class='max-w-6xl block m-auto flex flex-row'>
             {/* Logo */}
        <div class='basis-1/3 mt-3.5 '>
            <img class='h-10 w-40 'src={vade} alt='logo'/>
        </div>

        <div class='basis-1/3 mt-7 text-center'>
            <a class='mr-12 '>Skip the hassle </a>
            <a class=''>Cruise through backend</a>
        </div>

        <div class="basis-1/3 mt-2.5 ">
        <button class="float-right  py-3.5 px-7 text-white w-fit rounded-lg bg-blue-ribbon">Get Early Access</button>
        </div>

        
        </div>
       
    </div>
  )
}

export default Header