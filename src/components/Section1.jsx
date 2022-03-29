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
    <div class=" bg-hero-pattern h-900px mt-20   ">
        <div class='max-w-full block m-auto border border-transparent relative'>
                <div class='max-w-4xl block m-auto  '>
                    {/* col 1 */}
                <div class='   w-480px '>
                    <div class=' mt-52  '>
                        <p class='text-6xl font-bold  '>Integrate APIs In Minutes</p>
                        <p class='text-xl w-4/5 font-semibold mt-5 mb-5'>Get ridiculously creative with your products and let us do the hard work for you!</p>

                        {confirm ? 
                            <div>
                            <input type='text'class=' focus:outline-none   border-2 rounded-l-xl border-blue-ribbon p-2 w-80'     placeholder='Enter your Email'></input><button onClick={clickHandler} class='p-2 border-2 border-blue-ribbon text-white w-fit rounded-r-xl bg-blue-ribbon '>Get Early Access</button>
                        </div>
                        : 
                        <div class=''>
                            <button class='p-2 border-2 border-blue-ribbon text-white w-440 rounded-xl bg-blue-ribbon'>Thank you for your interest!</button>
                            <div class=' relative p-2 w-440'>
                                    {/* received */}
                                <div class='inline-block  absolute left-2'>
                                    <img src={check} alt='check' class='inline-block mr-2'></img>
                                    <p class='inline-block'>An email has been sent to your inbox</p>
                                </div>
                                {/* not received */}
                                <div class='inline-block  absolute right-2'>
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
                <div class=' '>
                    {/* image */}
                    <div class="  bg-white border border-black top-24 rounded-l-3xl absolute right-0 border-r-0 shadow-tw-shad2">
                        <img src={group2} alt="youtube" class=' w-550px py-4 pl-4'/>
                    </div>
                    
                    
                </div>

                </div>
        </div>
        
        
       
    </div>
  )
}

export default Section1