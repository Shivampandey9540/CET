import React from 'react'

function Faq() {
    const check = "checked"
    return (
        <div className='flex items-center justify-center'>
            <div className=''>
                <div className='flex'>
                    <h1 className='text-[50px]'>Frequently Asked Questions</h1>
                </div>
                <div className='flex flex-col'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" checked={true} />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content">
                                <p>hello</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Faq