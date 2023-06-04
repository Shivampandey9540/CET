import React from 'react'
import { start } from 'repl'

function Curriculum() {
    return (
        <div className='flex  flex-col items-center  '>
            <div className='flex text-center items-start w-[80%] flex-col justify-start' >
                <div>
                    <h1 className='text-[20px]'>Course CURRICULUM
                    </h1>
                </div>
                <div>
                    <span className='text-[50px]'>
                        Lorem ipsum dolor sit amet con consectetur.

                    </span>
                </div>

            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3 w-[70%]">
                {
                    [1, 2, 3].map((value) => {
                        return (
                            <div className={`${value !== 3 ? "border-r" : ""}`}>
                                <div className="flex flex-col rounded-lg gap-[15px]  p-[39px] md:p-6 ">
                                    <div className="w-[50px] h-[50px] rounded-[10px] bg-[#fff]"></div>
                                    <div className="flex justify-start">
                                        <h1 className="mt-auto font-bold  transition duration-100 text-white">Service {value}</h1>

                                    </div>
                                    <div className="text-start">

                                        <p className="mb-4 text-gray-500">
                                            Lorem ipsum dolor sit amet consectetur. Sit enim vestibulum mauris cursus sit. Et at fermentum nec faucibus tempor morbi ipsum.
                                        </p>
                                    </div>

                                </div>
                            </div>

                        )
                    })
                }
            </div>

            <div className='grid grid-cols-3 gap-[50px] pt-[50px] w-[80%]'>
                {
                    Array(12).fill(1).map((value) => {
                        return (
                            <div className='bg-custom-opacity-white flex p-[50px] flex-col'>
                                <div className='flex flex-col items-start gap-[15px] py-[10px]'>
                                    <div>
                                        <span>Week {value}</span>
                                    </div>
                                    <div>
                                        <span>Getting Started</span>
                                    </div>
                                </div>
                                <div>
                                    <ul className='flex  gap-[10px] flex-col items-start'>
                                        <li className='list-disc'>
                                            Lorem ipsum dolor sit amet con
                                        </li>
                                        <li className='list-disc'>
                                            Lorem ipsum dolor sit amet con
                                        </li>
                                        <li className='list-disc'>
                                            Lorem ipsum dolor sit amet con
                                        </li>
                                        <li className='list-disc'>
                                            Lorem ipsum dolor sit amet con
                                        </li>
                                        <li className='list-disc'>
                                            Lorem ipsum dolor sit amet con
                                        </li>



                                    </ul>
                                </div>
                                <div className='flex justify-end'>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Curriculum