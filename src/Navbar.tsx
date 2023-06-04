import React from 'react'

function Navbar() {
    return (
        <div>
            <div className=" pb-6 sm:pb-8 lg:pb-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <header className="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                        {/* <!-- logo - start --> */}
                        <a href="/" className="text-white inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">


                            Zaptos
                        </a>
                        {/* <!-- logo - end --> */}

                        {/* <!-- nav - start --> */}
                        <nav className="hidden gap-12 lg:flex">
                            <a href="/" className="text-lg font-semibold  text-white">Home</a>
                            <a href="/" className="text-lg font-semibold text-white transition duration-100 ">Features</a>
                            <a href="/" className="text-lg font-semibold text-white transition duration-100 ">Pricing</a>
                            <a href="/" className="text-lg font-semibold text-white transition duration-100 ">About</a>
                        </nav>
                        {/* <!-- nav - end --> */}

                        {/* <!-- buttons - start --> */}
                        <a href="/" className="hidden rounded-lg border-[1px] px-8 py-3 text-center transparent text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 focus-visible:ring  md:text-base lg:inline-block">Book A Call</a>

                        {/* <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-white ring-indigo-300 focus-visible:ring active:text-white-700 md:text-base lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>

        Menu
      </button> */}
                        {/* <!-- buttons - end --> */}
                    </header>

                    <section className="mb-8 flex flex-col justify-between gap-6 sm:gap-10 md:mb-16 md:gap-16 lg:flex-row">
                        {/* <!-- content - start --> */}
                        <div>
                            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-11/12">
                                {/* <p className="mb-4 font-semibold text-white md:mb-6 md:text-lg xl:text-xl"> </p> */}

                                <h1 className="text-white mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl"> Boost up your exam prep for <br />CET and LEET exams.</h1>

                                <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                                    {/* <a href="/" className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a> */}
                                    <p className="mb-4 font-semibold text-white md:mb-6 md:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur. Sit enim vestibulum mauris cursus sit. Et at fermentum nec faucibus tempor morbi ipsum. </p>

                                    {/* <a href="/" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-white-700 md:text-base">Take tour</a> */}
                                </div>
                            </div>
                            <section className="flex flex-col items-center justify-center gap-10  pt-8 lg:flex-row lg:gap-8 justify-center  md:w-[70%]">


                                {/* <!-- stats - start --> */}
                                <div className="-mx-6 grid grid-cols-2 gap-4 md:-mx-8 md:flex md:divide-x bg-custom-opacity-white p-[15px] ">
                                    <div className="px-6 md:px-8 ">
                                        <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">200</span>
                                        <span className="block text-center text-sm font-semibold text-white md:text-left md:text-base">People</span>
                                    </div>

                                    <div className="px-6 md:px-8">
                                        <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">500+</span>
                                        <span className="block text-center text-sm font-semibold text-white md:text-left md:text-base">Projects</span>
                                    </div>

                                    <div className="px-6 md:px-8">
                                        <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">250+</span>
                                        <span className="block text-center text-sm font-semibold text-white md:text-left md:text-base">Customers</span>
                                    </div>

                                    <div className="px-6 md:px-8">
                                        <span className="block text-center text-lg font-bold text-white md:text-left md:text-xl">A couple</span>
                                        <span className="block text-center text-sm font-semibold text-white md:text-left md:text-base">Coffee breaks</span>
                                    </div>
                                </div>

                            </section>
                        </div>

                        {/* <!-- content - end --> */}

                        {/* <!-- image - start --> */}
                        <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0  justify-center items-center mt-10">
                            {/* <div className="bg-[#FFFBEC] rounded-xl"> */}
                            <div className="flex flex-col  rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96  ">
                                <div className="border-b text-start p-8">
                                    {/* <Link href="/account/campaigns" > */}
                                    <a className=" px-4 py-2 hover:bg-gray-100 flex">
                                        <div className="text-green-600">

                                        </div>
                                        <div className="pl-3 ">
                                            <p className="text-sm font-medium text-gray-400 leading-none pb-[5px]">
                                                Batches will start on
                                            </p>
                                            <p className="text-xs text-black text-[20px]">September 1st</p>
                                        </div>
                                    </a>
                                    {/* </Link> */}
                                    {/* <Link href="/account/donations" > */}
                                    <a className="px-4 py-2 hover:bg-gray-100 flex">
                                        <div className="text-gray-800">

                                        </div>
                                        <div className="pl-3">
                                            <p className="text-sm font-medium text-gray-400 leading-none pb-[5px]">Available Seats</p>
                                            <p className="text-xs  text-black text-[20px]">60</p>
                                        </div>
                                    </a>

                                    <a className="px-4 py-2 hover:bg-gray-100 flex">
                                        <div className="text-gray-800">

                                        </div>
                                        <div className="pl-3">
                                            <p className="text-sm font-medium text-gray-400 leading-none pb-[5px]">Cost</p>
                                            <p className="text-xs text-black text-[20px]">₹ 4,999/- Only</p>
                                        </div>
                                    </a>
                                    {/* </Link> */}
                                </div>
                                <div className='bg-[#ECF3F1] w-[100%] h-[100%] p-[10px]'>
                                    <button className="inline-flex items-center bg-black text-white border-0 py-1 px-3 py-[10px] px-[40px] focus:outline-none  hover:scale-[125%]  rounded text-base mt-4 md:mt-0">Button
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* </div> */}
                            </div>

                        </div>
                        {/* <!-- image - end --> */}

                    </section>


                </div>
            </div>

        </div>
    )
}

export default Navbar