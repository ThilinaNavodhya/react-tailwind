import React, { useState } from 'react';
import ImageOne from '../assets/images/market-share.png';


function Dashboard() {
  
  return (
    
      <html>
        <div class="bg-white md:h-screen xl:h-screen pb-10 pt-[65px]  pb-30 dark:bg-gray-900 ms-auto md:w-2/3 xl:w-10/12 w-4/4">
          <div class="px-6 lg:px-8 ">
            <div class=" flex justify-between">
              <h1 class="text-2xl font-bold tracking-tight mb:my-8 xl:my-8 my-5 dark:text-sky-600  text-gray-900">Dashboard</h1>
              <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                  <li class="inline-flex items-center">
                    <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 dark:text-white dark:hover:text-white">
                      <svg class="w-7" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                      </svg>

                    </a>
                  </li>
                  <li>
                    <div class="flex items-center">
                      <svg class="w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                      </svg>
                      <a href="#" class="ml-1 text-sm font-normal text-gray-700 md:ml-2 dark:text-white dark:hover:text-white">Dashboard</a>
                    </div>
                  </li>

                </ol>
              </nav>
            </div>




            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

              <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title font-bold dark:text-gray-600 text-[#707886]">Item Count</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">15</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
              </div>

              <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title font-bold dark:text-gray-600 text-[#707886]">Today's Profit</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">0</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
              </div>

              <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title font-bold dark:text-gray-600 text-[#707886]">Today's Sales</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">0</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
              </div>

              <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title dark:text-gray-600 font-bold text-[#707886]">Total Profit</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">-1980</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
                </div>

                <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title font-bold dark:text-gray-600 text-[#707886]">Total Sales</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">2000</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
                </div>

                <div class="flex bg-gray-200 dark:bg-gray-800 justify-between items-center rounded-[15px] shadow-md py-3 px-5">
                <div class="">

                  <p class="text-sm stat-title font-bold dark:text-gray-600 text-[#707886]">Total Bills</p>
                  <p class="text-4xl dark:text-gray-500 text-gray-800 font-black">0</p>
                </div>

                <div class="">
                  <img src={ImageOne} alt="" className='w-20' />
                </div>
                </div>           
                </div>
            </div>
          </div>
     
      
    </html>




  )


}


export default Dashboard
