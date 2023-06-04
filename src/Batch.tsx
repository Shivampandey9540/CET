
import React from 'react'
import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

interface BatchProps {
    data: any[];
}
function Batch({ data }: BatchProps) {

    const [width, setWidth] = useState(0)
    const carosuel = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (carosuel.current) {
            setWidth(carosuel.current?.scrollWidth - carosuel.current?.offsetWidth)
        }

    }, [])

    return (
        <div>
            <div className="pb-[25px]">
                <section className="text-white body-font overflow-hidden ">
                    <div className="container px-5 py-10 mx-auto">
                        <div className="flex flex-col text-center w-full ">
                            <div className='flex  items-start flex-col text-right'>
                                <div>

                                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">BATCHES</h1>
                                </div>
                                <div>

                                    <p className=" leading-relaxed  text-white text-[50px]" >We organise hybrid batched</p>
                                </div>
                                <div className='w-[50%] text-start'>

                                    <p>Lorem ipsum dolor sit amet consectetur. Sit enim vestibulum mauris cursus sit. Et at fermentum nec faucibus tempor morbi ipsum.</p>
                                </div>
                            </div>


                        </div>

                    </div>
                </section>
            </div>
            <div className='flex justify-center' >

                {/* loop */}
                <div className=' xl:flex justify-center  gap-[50px] xl:flex-row md:justify-center flex flex-col md:items-center w-[80%] ' >



                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        pagination={{ clickable: true }}
                    >
                        {
                            data.map(() => {
                                return (
                                    <SwiperSlide>
                                        <div className="flex flex-wrap -m-4 Card_bottom_Radius xl:w-auto md:w-[50%]">

                                            <div className="p-4 xl:w-1/4  w-full">
                                                <div className="h-full  rounded-lg bg-custom-opacity-white flex flex-col relative overflow-hidden gap-[17px]  xl:w-[350px] h-[400px] pt-[20px] ">
                                                    <div className='flex items-center justify-center flex-col gap-[10px] p-[20px]'>
                                                        <div className='flex items-center justify-center'>
                                                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium text-[30px] ">Batch 1</h2>
                                                        </div>

                                                    </div>

                                                    <div className='flex justify-center flex-col gap-[10px]'>
                                                        <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                            <p className="flex items-center text-white mb-2  ">Starting Date
                                                            </p>
                                                            <span>
                                                                September 1
                                                            </span>
                                                        </div>
                                                        <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                            <p className="flex items-center text-white mb-2  ">Hours/week
                                                            </p>
                                                            <span>
                                                                18-20 Hours
                                                            </span>
                                                        </div>
                                                        <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                            <p className="flex items-center text-white mb-2  ">Weeks
                                                            </p>
                                                            <span>
                                                                25 weeks
                                                            </span>
                                                        </div>
                                                        <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                            <p className="flex items-center text-white mb-2  ">
                                                                Total Cost
                                                            </p>
                                                            <span>
                                                                ₹ 6,000
                                                            </span>
                                                        </div>


                                                    </div>


                                                    <div className='flex p-[10px] items-center w-[100%] h-[100%] justify-center mt-[30px] Card_Bottom_blur Card_bottom_Radius'>
                                                        <button className="flex items-center  text-black-400  border border-gray-100 py-2 bg-white   px-4 rounded">Enroll Now
                                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>


                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

            </div>

            <div >

            </div>

        </div>
    )
}

export default Batch