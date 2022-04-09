import React, { useState } from 'react'
import top from '../images/top.svg'
import group1 from '../images/Group85.png'
import Section3 from './Section3'
import backtop from '../images/backtop.png'
import check from '../images/check.png'
import resend from '../images/resend.png'

function Section2() {

    const[confirm, setConfirm] = useState(true);
    console.log(confirm);

    const clickHandler =()=>{
        setConfirm(false);
    }

    const clickHandler2 =()=>{
        setConfirm(true);
    }

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };
    
  return (
      
      <div class='shadow-tw-shad rounded-t-2rem lg:rounded-t-4rem   '>
           <div class='lg:max-w-5xl sm:max-w-xl md:max-w-3xl block m-auto border border-transparent  sm:px-0 px-2.5'>
                <p class='text-xl text-center  md:mx-44 mt-36 mb-20'>We understand your needs to <span class='bg-confetti'>build integrated applications</span> in today’s hyper-connected world. <span class='bg-confetti'>Skip the hassle</span> to repeat a cumbersome process <span class='bg-confetti'>for each unique integration.</span>  
                    Join us to build reliable connections with multiple providers and <span class='bg-confetti'>cruise through backend</span> with ease.</p>

                <div class=" block m-auto  w-fit my-12">
                    <img src={top} alt=''/>
                </div>
            

                <p class=' text-5xl md:text-6xl text-center mt-20 mb-16 font-bold'><span class='text-blue-ribbon'>Skip</span> The Hassle</p>

                <div class=' w-fit'>  
                    <img src={group1} alt=''/>
                </div>

                 <Section3/> 

                 <div class=" block m-auto  w-fit my-14">
                    <img src={top} alt=''/>
                </div>

                <p class=' md:mx-44 text-xl text-center mt-24 md:mt-36 mb-20'>We're building an ecosystem where <span class='bg-confetti'>anyone can get inspired </span> with application templates, discover novel ideas from top builders, and <span class='bg-confetti'>publish revolutionary applications</span> that could <span class='bg-confetti'>change the world.</span>  
                   </p>


                   {/* Input active and submit */}

                   {confirm ? 
                        <div class='block w-64 md:w-fit lg:w-fit m-auto mb-40 '>
                            <input type='text'class='text-center focus:outline-none rounded-t-xl  border-2 md:rounded-l-xl md:rounded-tr-none border-blue-ribbon p-2 w-64 md:w-80'     placeholder='Enter your Email'></input>
                            <button onClick={clickHandler} class='w-64  p-2 border-2 border-blue-ribbon text-white md:w-fit rounded-b-xl md:rounded-r-xl md:rounded-bl-none bg-blue-ribbon'>Get Early Access</button>
                        </div>
                        : 
                        <div class='block w-64 md:w-fit m-auto mb-40 '>
                            <button class='w-64 p-2 border-2 border-blue-ribbon text-white md:w-440 rounded-xl bg-blue-ribbon'>Thank you for your interest!</button>
                            <div class=' relative p-2 w-64 md:w-440 '>
                                    {/* received */}
                                <div class='block text-center md:inline-block  md:absolute md:left-2 mb-4 '>
                                    <img src={check} alt='check' class='inline-block mr-2 '></img>
                                    <p class='inline-block'>An email has been sent to your inbox</p>
                                </div>
                                {/* not received */}
                                <div class='text-center block md:inline-block  md:absolute md:right-2 '>
                                    <p>Didn't receive?</p>
                                    <div class='cursor-pointer ' onClick={clickHandler2}>
                                         <img src={resend} alt='resend' class='inline-block mr-1'></img><p class='inline-block text-red-500 '>Resend</p>
                                    </div>
                                   
                                
                                </div>
                            </div>
                            
                        </div>
                        }

                    {/* back to the top Div */}
                    <div class='h-fit  fixed bottom-4 right-4 md:right-12  cursor-pointer' onClick={scrollToTop}>
                        <div class='w-fit '>
                            <img src={backtop} alt='backtop' class='block m-auto'></img>
                            <p>Back to top </p>
                        </div>

                    </div>
                    
            </div>

           

    </div>
   
  )
}

export default Section2