import React from 'react'
import twitter from '../images/twitter.png'
import linkedin from '../images/linkedin.png'
import globe from '../images/globe.png'
import phone from '../images/phone.png'

function Footer() {
  return (
    <div class='bg-pickled-bluewood text-white flex flex-row h-60'> 
        {/* col 1 */}
        <div class=' basis-1/3 mt-14 '>
            <p class='text-center mb-4'>© 2022 Vade Labs Pvt. Ltd.</p>

            {/* icons */}
            <div class='block m-auto  w-fit'> 
                <img src={twitter} alt='' class='inline-block pr-5'></img>
                <img src={linkedin} alt='' class='inline-block'></img>

            </div>
       
        </div>

        {/* col 2 */}
        <div class=' basis-1/3 mt-14 '>
            <p class='text-center text-dusty-gray mb-4'>About us</p>
            <p class='text-center'>We're a group of enthusiasts who love helping creatives build software applications.</p>
            
        </div>

        {/* col 3 */}
        <div class=' basis-1/3 mt-14 '>
            <p class='text-center text-dusty-gray mb-4'>Contact Us</p>

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