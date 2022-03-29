import React from 'react'

import one from '../images/one.gif'
import two from '../images/two.gif'
import three from '../images/three.gif'
import vector from '../images/Vector1.png'
import vector2 from '../images/Vector2.png'

function Section3() {
  return (
    <div class='mt-36  block m-auto '>
        <p class='text-6xl text-center mb-28 font-bold'><span class='text-blue-ribbon'>Cruise</span> Through Backend</p>

        {/* Sec1 ****************************************************/}
        <div class='flex flex-row relative  '>

            <p class='absolute text-chido-gray text-9xl font-black left-14 top-0 '>#1</p>

            <div class='basis-1/2 pt-14 pl-32 pr-8  z-10 ' >
                <p class='text-3xl'>Choose from <br></br> 1000+ integrations</p>
                <p class='my-5 text-pale-sky'>
                    Vade Studio is designed to work seamlessly with your favourite databases or web services.
                <span class='font-bold test-oxford-blue'>Tweak a template or start from scratch.</span><br></br><br></br>
                We've baked-in over 100 integrations directly into the platform, so you can integrate quickly and
                easily with other services, databases and applications out there.
                </p>

            </div>
            
            {/* image */}
            <div class='basis-1/2 px-4 pt-12 '>
                <img src={one} alt='section images' class='shadow-tw-shad2 rounded-lg'></img>
            </div>
            
        </div>

        {/* Weird line */}
        <div class='h-60 w-fit block m-auto'>
            <img src={vector} alt='wiggle'></img>
        </div>


        {/* Sec2 ****************************************************/}
        <div class='flex flex-row relative  '>
        <p class='absolute text-chido-gray text-9xl font-black right-20 top-0'>#2</p>

            {/* image */}
            <div class='basis-1/2 p-4 '>
                <img src={two} alt='section images' class='shadow-tw-shad2 rounded-lg'></img>
            </div>

            <div class='basis-1/2 pt-20  pl-20 pr-20  z-10' >
                <p class='text-3xl'>Configure & Connect.</p>
                <p class='my-5 text-pale-sky'>
                Get all of your 
                <span class='font-bold test-oxford-blue'>data sources connected into a content mesh, in the same place, in real time.</span><br></br><br></br>
                This provides you a unified API for data navigation across all your integrated services.
                </p>

            </div>    
            
        </div>

        {/* Weird line */}
        <div class='h-60 w-fit block m-auto '>
            <img src={vector2} alt='wiggle'></img>
        </div>


         {/* Sec3 **************************************************/}
         <div class='flex flex-row  relative '>

            <p class='absolute text-chido-gray text-9xl font-black left-14 top-0'>#3</p>

            <div class='basis-1/2 pt-14 pl-32 pr-8 z-10' >
                <p class='text-3xl'>Test. Build. Deploy.</p>
                <p class='my-5 text-pale-sky'>
                <span class='font-bold test-oxford-blue'>Play around with the generated APIs. </span>
                Once configured – test, build and deploy the unified API into our secure and reliable infrastructure.<br></br><br></br>
                Run your queries in the editor and use our intuitive interface to
                <span class='font-bold test-oxford-blue'> navigate through your data - clean, organised & at your fingertips</span>
               
                </p>

            </div>
            
            {/* image */}
            <div class='basis-1/2 px-4 pt-12'>
                <img src={three} alt='section images' class='shadow-tw-shad2 rounded-lg'></img>
            </div>
            
        </div>




        
    </div>
  )
}

export default Section3