import React from 'react'

function Hero() {
    return (
        <div>
            <div className=" py-6 sm:py-8 lg:py-12 bg-custom-opacity-white">
                <div className="mx-auto max-w-screen-xl px-4 md:px-8">


                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                        {/* <!-- stat - start --> */}
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
                            <div className="text-sm font-semibold text-white sm:text-base">People</div>
                        </div>
                        {/* <!-- stat - end --> */}

                        {/* <!-- stat - start --> */}
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
                            <div className="text-sm font-semibold sm:text-base text-white">People</div>
                        </div>

                        {/* <!-- stat - start --> */}
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
                            <div className="text-sm font-semibold  text-white sm:text-base font-white">Customers</div>
                        </div>
                        {/* <!-- stat - end --> */}

                        {/* <!-- stat - start --> */}
                        <div className="flex flex-col items-center md:p-4">
                            <div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
                            <div className="text-sm font-semibold sm:text-base text-white">Coffee breaks</div>
                        </div>
                        {/* <!-- stat - end --> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero