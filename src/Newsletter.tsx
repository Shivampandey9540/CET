import React from 'react'

function Newsletter() {
    return (
        <div>
            <div className=" py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="flex flex-col items-center rounded-lg  Card_Bottom_blur  p-4 sm:p-8">
                        <div className="mb-4 sm:mb-8">
                            <h2 className="text-center text-xl font-bold text-white sm:text-2xl lg:text-3xl">Subscribe to Our Newsletter</h2>
                            <p className="text-center text-gray-500">Be the first one to know about discounts,offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</p>
                        </div>

                        <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                            <input placeholder="Email" className="bg-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                            <div className='relative bottom-[44px] left-[29px]'>
                                <div className=' button_shadow relative top-[35px] right-[28px] inline-block rounded-[5px] bg-[#ffffff] z-[1]  px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100  focus-visible:ring md:text-base'>
                                    <a href="/" className="">Subscribe</a>
                                </div>
                                <div className='absolute py-[21px] px-[70px] bg-[#FFD43C]  rounded-[5px]'>

                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter