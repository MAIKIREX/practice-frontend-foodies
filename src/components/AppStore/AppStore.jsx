import React from 'react'
import app_store from '../../assets/app_store.png'
import mobile from '../../assets/mobile_bike.gif'
function AppStore() {
  return (
    <div className='bg-white dark:bg-[#1F2937]'>
        <div className='container grid grid-cols-1 sm:grid-cols-2'>
            <div
                data-aos="fade-up"
                data-aos-duration="300"
                className='text-center text-black dark:text-gray-300'>
                <h1 className='text-3xl pt-10 sm:text-4xl md:text-5xl text-left font-medium'>Foodly is Available for Android and IOS</h1>
                <div className='flex justify-center gap-2 pt-5 sm:flex-col md:flex-row md:justify-start'>
                    <img src={app_store} alt="" className='max-w-[150px] sm:max-w-[200px]'/>
                    <img src={app_store} alt="" className='max-w-[150px] sm:max-w-[200px]' />
                </div>
            </div>
            <div className='flex justify-center'>
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                src={mobile} alt="" className='max-w-[300px] py-5 sm:py-20'/>
            </div>
        </div>
    </div>
  )
}

export default AppStore