import React, { useState } from 'react'
import group2 from '../images/Group109.png'
import check from '../images/check.png'
import resend from '../images/resend.png'


        
function Section1() {
    const[confirm, setConfirm] = useState(true);
    console.log(confirm);

    const clickHandler =()=>{
        setConfirm(false);
    }

    const clickHandler2 =()=>{
        setConfirm(true);
    }
    
        

  return (
    <div class=" bg-hero-pattern  h-900px mt-16 md:mt-20 overflow-hidden  ">
        <div class=' md:w-1000px lg:w-1500px mx-2.5 md:block md:m-auto  relative'>{/*trans line*/}
                <div class='md:max-w-5xl block m-auto  '>
                    {/* col 1 */}
                <div class='   md:w-480px  md:absolute md:left-12 lg:left-48'>
                    <div class='mt-24  text-center md:text-left md:mt-36   '>  
                        <p class='text-5xl md:text-6xl font-bold  '>Integrate APIs In Minutes</p>
                        <p class='text-lg md:text-xl  md:px-0 px-6 md:w-4/5 md:font-semibold mt-5 mb-8'>Get ridiculously creative with your products and let us do the hard work for you!</p>


                      {/* Input active and submit */}

                   {confirm ? 
                        <div class='block w-64 md:w-fit lg:w-fit m-auto md:mx-0 mb-10 md:mb-40 '>
                            <input type='text'class='text-center md:text-left focus:outline-none rounded-t-xl  border-2 md:rounded-l-xl md:rounded-tr-none border-blue-ribbon p-2 w-64 md:w-80'     placeholder='Enter your Email'></input>
                            <button onClick={clickHandler} class='w-64  p-2 border-2 border-blue-ribbon text-white md:w-fit rounded-b-xl md:rounded-r-xl md:rounded-bl-none bg-blue-ribbon'>Get Early Access</button>
                        </div>
                        : 
                        <div class='block w-64 md:w-fit m-auto mb-10 md:mb-40 '>
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
                        
                        

                        
                        
                    </div>
                    

                </div>

                {/* col 2 */}
                <div class='py-2 px-4 mt-4'>
                    {/* image */}
                    <div class="py-8 md:py-1 px-5 block m-auto  bg-white md:pl-4 border-2 border-black  md:top-28 rounded-3xl md:absolute md:right-0  shadow-tw-shad2">
                        <img src={group2} alt="youtube" class='  md:w-756px py-4 md:h-468px  '/>
                    </div>
                    
                    
                </div>

                </div>
        </div>
        
        
       
    </div>
  )
}

export default Section1