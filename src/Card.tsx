
function Card({ data }: any) {
    return (
        <div>
            <div className="pb-[25px]">
                <section className="text-white body-font overflow-hidden ">
                    <div className="container px-5 py-14 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <div className='flex  items-start flex-col text-right'>
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
                                <p className=" leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                            </div>


                        </div>

                    </div>
                </section>
            </div>
            <div className=" xl:flex justify-center gap-[50px] xl:flex-row md:justify-center flex flex-col md:items-center ">
                {
                    data.map(() => {
                        return (
                            <div className="flex flex-wrap -m-4 Card_bottom_Radius xl:w-auto md:w-[50%]">

                                <div className="p-4 xl:w-1/4  w-full">
                                    <div className="h-full  rounded-lg bg-custom-opacity-white flex flex-col relative overflow-hidden gap-[17px]  xl:w-[350px] h-[400px] pt-[20px] ">
                                        <div className='flex items-center justify-center flex-col gap-[10px]'>
                                            <div className='bg-[#7F47FF]  rounded-[50%] w-[50px]  h-[50px] flex items-center justify-center'>
                                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                            </div>

                                            <h1 className="text-5xl text-gray-900 leading-none flex items-center   border-gray-200">

                                                <span className="text-lg ml-1 font-normal text-gray-500">One Time Payment</span>
                                            </h1>
                                        </div>

                                        <div className='flex justify-center flex-col gap-[10px]'>
                                            <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                <p className="flex items-center text-white mb-2  ">Course Fee
                                                </p>
                                                <span>
                                                    ₹ 6,000
                                                </span>
                                            </div>
                                            <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                <p className="flex items-center text-white mb-2  ">GST
                                                </p>
                                                <span>
                                                    ₹ 6,000
                                                </span>
                                            </div>
                                            <div className='w-[100%] flex justify-around border-b border-[#AB9C9C] '>
                                                <p className="flex items-center text-white mb-2  ">Discount
                                                </p>
                                                <span>
                                                    ₹ 6,000
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
                                            <button className="flex items-center  text-white  border border-gray-100 py-2 px-4   rounded">Button
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                        </div>


                                    </div>
                                </div>


                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}
export default Card