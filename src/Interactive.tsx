
function Interactive() {
    return (
        <div>
            <div className=" py-6 sm:py-8 lg:py-12 ">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    {/* <!-- text - start --> */}
                    <section className="text-white body-font overflow-hidden ">
                        <div className="container px-5 py-10 mx-auto">
                            <div className="flex flex-col text-center w-full mb-20">
                                <div className='flex  items-start flex-col text-right'>
                                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">WHAT’S INCLUDED</h1>
                                    <p className=" leading-relaxed text-base text-gray-500">
                                        An immersive and interactive learning experience                                        </p>
                                </div>


                            </div>

                        </div>
                    </section>
                    {/* <!-- text - end --> */}

                    <div className="grid gap-4 sm:grid-cols-2 md:gap-8 xl:grid-cols-3">
                        {/* <!-- feature - start --> */}
                        {
                            [1, 2, 3, 4, 5, 6].map((value) => {
                                return (
                                    <div className="flex flex-col rounded-lg gap-[15px]   p-[39px] md:p-6">
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
                                )
                            })
                        }

                        {/* <!-- feature - end --> */}
                        {/* <!-- feature - start --> */}

                        {/* <!-- feature - end --> */}



                    </div>
                </div>
            </div>
        </div>
    )
}
export default Interactive