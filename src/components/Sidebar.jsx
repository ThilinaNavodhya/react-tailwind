import React, { useState } from 'react';

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    // Close other dropdowns
    setIsSecondDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
  };

  const toggleSecondDropdown = () => {
    setIsSecondDropdownOpen(!isSecondDropdownOpen);
    // Close other dropdowns
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    // Close other dropdowns
    setIsDropdownOpen(false);
    setIsSecondDropdownOpen(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
  };

  const toggleDropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    // Close other dropdowns
    setIsDropdownOpen(false);
    setIsSecondDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
  };

  const toggleDropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
    // Close other dropdowns
    setIsDropdownOpen(false);
    setIsSecondDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen7(false);
  };
  const toggleDropdown7 = () => {
    setIsDropdownOpen7(!isDropdownOpen7);
    // Close other dropdowns
    setIsDropdownOpen(false);
    setIsSecondDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen6(false);  
  };

  return (
      <aside className="fixed top-0 md:w-1/3 xl:xl:w-2/12 left-0 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidebar">
      <div className="h-full hide-scrollbar py-2 overflow-y-auto bg-gray-50 dark:bg-gray-700 dark:text-white">
        <ul className="space-y-1 font-normal">
          <li>
            <a href="#" className="flex items-center px-3 justify-between p-2">
              <p className="text-xl dark:text-white font-medium">Staff Panel</p>
              <svg
                className="w-10 dark:text-sky-700"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                ></path>
              </svg>
            </a>
          </li>

          <li>
            <button
            type="button"
            className={`flex items-center w-full  text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75  ${isDropdownOpen7 ? 'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`}
            
            aria-controls="setIsDropdownOpen"
            data-collapse-toggle="setIsDropdownOpen"
            onClick={toggleDropdown7}
            >
               {isDropdownOpen7 && (
                <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
              )}
              <svg
                className="w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                ></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`flex items-center w-full  text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75  ${isDropdownOpen4 ? 'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`}
              
              aria-controls="setIsDropdownOpen"
              data-collapse-toggle="setIsDropdownOpen"
              onClick={toggleDropdown4}
            >
              {isDropdownOpen4 && (
                <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
              )}
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
             </svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">Staff Management</span>
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            <ul
              id="setIsDropdownOpen"
              className={`${
                isDropdownOpen4 ? 'block' : 'hidden'
              } py-2 bg-slate-200 dark:bg-gray-800`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                 Add User

                 <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                 User List

                 <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              
            </ul>
          </li>
 
          <li>
            <button
              type="button"
              className={`flex items-center w-full  text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75  ${isDropdownOpen ? 'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`}
              aria-controls="setIsDropdownOpen"
              data-collapse-toggle="setIsDropdownOpen"
              onClick={toggleDropdown}
            >
              {isDropdownOpen && (
                <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
              )}
              <svg className="w-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
             </svg>
              <span className="flex-1 ml-3 text-left whitespace-nowrap">Reports</span>
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            <ul
              id="setIsDropdownOpen"
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } py-2  bg-slate-200 dark:bg-gray-800`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Stock Report

                <svg class="w-2 me-2 h-3  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Stock Transfer Report

                <svg class="w-2 me-2 h-3  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                 BIN Card Report

                 <svg class="w-2 me-2 h-3  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Order Detail Report

                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
            </ul>
          </li>
       
          <li>
            <button
              type="button"
              className={`flex items-center w-full  text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75  ${isSecondDropdownOpen ? 'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`} aria-controls="setIsSecondDropdownOpen"
              data-collapse-toggle="setIsSecondDropdownOpen"
              onClick={toggleSecondDropdown}
            >
            {isSecondDropdownOpen && (
                <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
            )}
            
            <svg class=" w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="19" x2="20" y2="19" />  <polyline points="4 15 8 9 12 11 16 6 20 10" /></svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">Analytics</span>
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            <ul
              id="setIsDropdownOpen"
              className={`${
                isSecondDropdownOpen ? 'block' : 'hidden'
              } py-2  bg-slate-200 dark:bg-gray-800`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                 Customer Analytics

                 <svg class="w-2 me-2 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                  Sales Analytics

                  <svg class="w-2 me-2 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                  Rider Analytics

                  <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
            </ul>
          </li>
       
          <li>
            <button
              type="button"
              className={`flex items-center w-full text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75 ${isDropdownOpen3 ? 'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`}
              aria-controls="setIsDropdownOpen3"
              data-collapse-toggle="setIsDropdownOpen3"
              onClick={toggleDropdown3}
            >

              {isDropdownOpen3  && (
              <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
            )}
             <svg class="w-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>

              <span className="flex-1 ml-3 text-left whitespace-nowrap">System Setting</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            <ul
              id="setIsDropdownOpen3"
              className={`${
                isDropdownOpen3 ? 'block' : 'hidden'
              }  py-2  bg-slate-200 dark:bg-gray-800`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                  Measurement

                  <svg class="w-2 me-2 h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                 Area Code

                  <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Cash Management

                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Tax management

                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Location Management
                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Bank Management
                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Warranty Management
                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
            </ul>
          </li>
       

          <li>
            <button
              type="button"
              className={`flex items-center w-full  text-base dark:hover:bg-opacity-10 dark:hover:bg-sky-700 hover:text-sky-600 transition duration-75  ${isDropdownOpen6 ?'text-sky-600 dark:bg-sky-700 dark:bg-opacity-10 pe-3' : 'p-2 px-3'}`}
              aria-controls="setIsDropdownOpen6"
              data-collapse-toggle="setIsDropdownOpen6"
              onClick={toggleDropdown6}
            >

             {isDropdownOpen6  && (
              <div className="left-0 me-1 max-h-[40px] min-h-[40px] bg-sky-600  w-2 rounded-r-xl"></div>
            )}
              <svg className='w-5' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"></path>
              </svg>

              <span className="flex-1  ml-3 text-left whitespace-nowrap">Globle Setting</span>
              <svg
                className="w-3 h-3 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                ></path>
              </svg>
            </button>
            <ul
              id="setIsDropdownOpen6"
              className={`${
                isDropdownOpen6 ? 'block' : 'hidden'
              } py-2  bg-slate-200 dark:bg-gray-800`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full p-2 text-gray-900 dark:text-white transition duration-75  dark:hover:text-sky-600 pl-11 hover:text-sky-600 hover:bg-sky-600 hover:bg-opacity-5"
                >
                Globle Settings
                <svg class="w-2 me-2 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"/>
                </svg>
                </a>
              </li>
            </ul>
          </li>
       
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
