import React from 'react'
import FoodLogo from '../../assets/food-logo.png'
import { FaTelegramPlane} from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { RiFacebookCircleFill, RiInstagramLine  } from "react-icons/ri";
function Fooder() {
  return (
    <>
        <div className='bg-[#F3F4F6] dark:bg-[#030712] dark:text-white'>
            <div className='container grid grid-cols-1 md:grid-cols-5 gap-5'>
                <div className='md:col-span-2'>
                    <div className='flex items-center gap-5 pt-10'>
                        <img src={FoodLogo} alt="" className='w-10'/>
                        <h1 className='md:text-3xl font-bold'>FOODIE</h1>
                    </div>
                    <p className='mb-4 font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia accusantium dolores quisquam incidunt, repellendus nemo officiis quo mollitia. Ut eum similique aut atque. A hic quasi cumque, aut impedit excepturi.
                    </p>
                    <div className='flex gap-4'>
                        <FaTelegramPlane className='w-5 h-5'/>
                        <p> nfkodasnfokasdk nks</p>
                    </div>
                    <div className='flex gap-4'>
                        <IoMdPhonePortrait className='w-5 h-5'/>
                        <p> +591 1534894</p>
                    </div>
                    <div className='flex gap-4 my-5'>
                        <RiFacebookCircleFill className='w-10 h-10'/>
                        <RiInstagramLine className='w-10 h-10'/>
                    </div>
                </div>
                <div className='md:col-span-3'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 mt-10'>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-xl'>Important Links</h1>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p className='mb-16'>Login</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-xl'>Important Links</h1>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p className='mb-16'>Login</p>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h1 className='font-bold text-xl'>Important Links</h1>
                            <p>Home</p>
                            <p>About</p>
                            <p>Services</p>
                            <p className='mb-16'>Login</p>
                        </div>    
                    </div>                
                </div>
            </div>
            <div className='container border-t-2 py-10 text-center'>
                    @copyright 2024 All rights reserved || Made with ❤️ by lolo
                </div>
        </div>
    </>
  )
}

export default Fooder