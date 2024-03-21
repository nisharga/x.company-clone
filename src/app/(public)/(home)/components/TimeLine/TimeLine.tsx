import React from 'react';

const TimeLine = () => {
    return (
        <div className='relative'>
            <div className='absolute left-0 -top-20' data-aos='fade-right'>
                <div className='bg-orchid-500 py-6 px-20'>
                    <p className='text-2xl font-semibold'>X TIMELINE</p>
                </div>
            </div>
            <div
                className='timeLineBg relative overflow-hidden'
                data-aos='fade-up'
                data-aos-easing='linear'
                data-aos-duration='1000'
            >
                <div className='container px-8'>
                    <div className='absolute top-28 left-10 md:left-20 flex items-center justify-between w-full '>
                        <div className=''>
                            <p
                                className='text-3xl md:text-5xl  text-white font-semibold'
                                data-aos='fade-up'
                            >
                                Ten years of moonshots
                            </p>
                            <div className='grid grid-cols-12'>
                                <div className='col-span-10 md:col-span-7 pr-6'>
                                    <p
                                        className='text-white font-normal mt-20 text-lg md:text-xl lg:text-2xl'
                                        data-aos='fade-up'
                                    >
                                        In 2010, Google founders Larry Page and
                                        Sergey Brin decided to form a new
                                        division of the company to work on
                                        moonshots: far-out, sci-fi sounding
                                        technologies that could one day make the
                                        world a radically better place. It was a
                                        grand experiment — some might say a
                                        moonshot unto itself. 10 years in, X has
                                        incubated hundreds of different moonshot
                                        projects, many of which have gone on to
                                        become independent businesses.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
