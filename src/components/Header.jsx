import React from 'react'
import vade from '../images/vadelogo.png'

function Header() {
  return (
    <div class='px-2.5 h-16   md:h-20 shadow-md fixed w-screen z-20 bg-header backdrop-blur top-0'>
        <div class=' lg:my-0 my-2.5 sm:max-w-xl md:max-w-3xl  lg:max-w-6xl block m-auto flex flex-row'>
             {/* Logo */}
        <div class=' mt-1.5 basis-1/2 md:basis-1/3 md:mt-4 '>
            <img class='w-28 h-7 lg:h-10 lg:w-40 'src={vade} alt='logo'/>
        </div>
        

        <div class='hidden md:block md:basis-1/3 lg:mt-8 md:mt-2 md:text-center '>
            <a class='lg:mr-8  md:block lg:inline-block'>Skip the hassle </a>
            <a class='md:block lg:inline-block'>Cruise through backend</a>
        </div>

        <div class=" basis-1/2 md:basis-1/3 mt-1 md:mt-4 ">
        <button class="float-right text-sm py-2 px-2  lg:py-3.5 lg:px-7 text-white w-fit rounded-lg bg-blue-ribbon">Get Early Access</button>
        </div>

        
        </div>
       
    </div>
  )
}

export default Header