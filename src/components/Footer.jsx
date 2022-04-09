import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import globe from '../images/globe.png'
import phone from '../images/phone.png'
import backtop from '../images/backtop.png'

function Footer() {

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

  return (
    <div class='bg-pickled-bluewood  text-white md:flex md:flex-row h-468px md:h-60  relative'> 
        {/* col 1 */}
        <div class=' absolute md:relative  px-8 w-full md:px-0 md:bottom-auto bottom-12 sm:bottom-16  md:basis-1/3 md:mt-14 '>
            <p class='text-center mb-4'>© 2022 Vade Labs Pvt. Ltd.</p>

            {/* icons */}
            <div class='block m-auto  w-fit'> 
                <img src={twitter} alt='' class='inline-block pr-5 '></img>
                <img src={linkedin} alt='' class='inline-block  '></img>
               
                
                    
            </div>
            
             
        </div>

        {/* col 2 */}
        <div class=' px-8 sm:px-24 md:px-0  w-full absolute  md:relative md:top-auto top-36 mt-12 md:basis-1/3 md:mt-14 '>
            <p class='text-center text-dusty-gray mb-4 text-xl'>About Us</p>
            <p class='text-center'>We're a group of enthusiasts who love helping creatives build software applications.</p>
            
        </div>

        {/* col 3 */}
        <div class=' px-8 absolute  w-full md:relative md:top-auto top-12 md:basis-1/3 md:mt-14 '>
            <p class='text-center text-dusty-gray mb-4 text-xl'>Contact </p>

            <div class=' block m-auto w-fit'>
                 <img src={globe} alt='' class='inline-block pr-2'></img><p class='text-center inline-block'> hello@vadelabs.com</p>
            </div>

            <div class=' block m-auto w-fit'>
                <img src={phone} alt='' class='inline-block pr-2'></img> <p class='text-center inline-block'>+91-7829887887</p>
            </div>

            
            
            
            
        </div>
    </div>
  )
}

export default Footer