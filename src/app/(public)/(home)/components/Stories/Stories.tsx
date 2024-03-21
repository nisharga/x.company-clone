import { Icons } from '@/components/Icons';
import Link from 'next/link';
import React from 'react';

const Stories = () => {
    return (
        <div className='relative'>
            <div className='absolute left-0 -top-20' data-aos='fade-right'>
                <div className='bg-[#FFB300] py-6 px-20 dark:bg-orchid-100'>
                    <p className='text-2xl font-semibold dark:text-gray-500'>
                        STORIES + NEWS{' '}
                    </p>
                </div>
            </div>
            <div
                className='stroyMoonImg relative overflow-hidden'
                data-aos='fade-up'
                data-aos-easing='linear'
                data-aos-duration='1000'
            >
                <div className='container px-8'>
                    <div className='absolute bottom-28 left-10 flex items-center justify-between w-full '>
                        <div className=''>
                            <p
                                className='text-xl md:text-3xl  text-white font-semibold'
                                data-aos='fade-up'
                            >
                                We Choose to go the moon
                            </p>
                            <p
                                className='text-orchid-500 mt-12'
                                data-aos='fade-up'
                            >
                                MOONSHOT THINKING
                            </p>
                        </div>
                        <Link
                            href='/'
                            className='font-bold mt-8 transition-colors duration-200 group mr-28 bg-gray-500 p-2 group hover:bg-orchid-500  rounded-md'
                            data-aos='fade-up-right'
                        >
                            <span className=''>
                                <Icons.ArrowRight className='stroke-2 text-white group-hover:text-white' />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
