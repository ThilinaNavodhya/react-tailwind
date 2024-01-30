import React, { useState } from 'react';
import DarkModeSwitch from './DarkModeSwitch';

function Nevbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className='absolute'>
      <nav className="bg-gray-700 hide-scrollbar fixed overflow-hidden dark:bg-gray-800 md:w-2/3 xl:w-5/6 w-full right-0 ">
        
        <div className="hide-scrollbarbg-gray-700  dark:bg-gray-800 sm:px-6 lg:px-8">
          <div className="flex h-17 md:py-2 xl:py-2 py-3 md:justify-end xl:justify-end justify-between">
            <div className="flex items-center">


              <div className="invisible md:visible lg:visible xl:visible me-10">
                <div className="flex items-center">
                  <DarkModeSwitch />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="flex flex-row bg-white dark:bg-gray-700 dark:hover:bg-gray-700  hover:bg-gray-700 items-center rounded-md py-1 px-2">
                  <div>
                    <svg
                      className="rounded-full w-10 inline bg-sky-400 text-white"
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
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>

                  <div className="ms-2">
                    <div>
                      <p className="text-md font-medium dark:text-gray-300">Admin</p>
                    </div>
                    <div>
                      <p className="text-sm dark:text-gray-300">Super Admin</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:hidden me-7 bg-white hover:bg-gray-700 rounded-md py-1 px-2 left-5 top-2 absolute">
              <div>
                <svg
                  className="rounded-full w-10 inline bg-sky-400 text-white"
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
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="flex md:absolute xl:absolute items-center">
              <div className="visible md:invisible lg:invisible xl:invisible me-10 md:me-0 xl:me-0">
                <div className="flex items-center">
                  <DarkModeSwitch />
                </div>
              </div>
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="relative -left-4 inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
                  onClick={toggleMobileMenu}
                >
                  <span className="absolute -left-4"></span>
                  <span className="sr-only">Open main menu</span>

                  <svg
                    className={`block h-6 w-6 ${isMobileMenuOpen ? '' : ''
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    className={`hidden h-6 w-6 ${isMobileMenuOpen ? '' : ''
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">
              Dashboard
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Staff Management
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Reports
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Analytics
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              System Setting
            </a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">
              Globle Setting
            </a>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Nevbar
