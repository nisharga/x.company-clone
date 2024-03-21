import { Icons } from '@/components/Icons';
import Link from 'next/link';

const ParallaxImage = () => {
    return (
        <div className=''>
            <div className='bg-[#FFB300] py-6 px-20 max-w-[350px] md:max-w-[480px] dark:bg-orchid-100'>
                <p className='text-xl md:text-2xl font-semibold dark:text-gray-500'>
                    PUBLIC X PROJECTS
                </p>
            </div>
            {/* <div className='h-screen moonImg'></div> */}

            <div className='relative'>
                <div className='moonImg relative'>
                    <div className='bg-transparent'>
                        <div
                            className='absolute top-60 left-10 md:left-20 text-xl md:text-3xl  text-white font-semibold'
                            data-aos='fade-up'
                        >
                            <p>
                                What if beams of light could provide <br />
                                global access to fast, affordable connectivity?
                            </p>
                            <Link
                                href='/'
                                className='font-bold flex gap-4 mt-8 transition-colors duration-200 group'
                                data-aos='fade-right'
                            >
                                <span className='  bg-white mr-2 p-2 group-hover:bg-orchid-500 '>
                                    <Icons.ArrowRight className='stroke-2 text-black group-hover:text-black hover:animate-ping rounded-md' />
                                </span>
                                <span className=' group-hover:text-orchid-500 duration-300'>
                                    Explore Taara
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='rocketImg relative'>
                    <div className='bg-transparent'>
                        <div
                            className='absolute top-60 left-10 md:left-20 text-xl md:text-3xl  text-white font-semibold'
                            data-aos='fade-up'
                        >
                            <p>
                                What if we could make the worlds electric grid
                                visible <br />
                                so everyone could access clean, reliable energy
                            </p>
                            <Link
                                href='/'
                                className='font-bold flex gap-4 mt-8 transition-colors duration-200 group'
                                data-aos='fade-right'
                            >
                                <span className='  bg-white mr-2 p-2 group-hover:bg-orchid-500 '>
                                    <Icons.ArrowRight className='stroke-2 text-black group-hover:text-black hover:animate-ping rounded-md' />
                                </span>
                                <span className=' group-hover:text-orchid-500 duration-300'>
                                    Explore Tapestry
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='snowImg relative'>
                    <div className='bg-transparent'>
                        <div
                            className='absolute top-60 left-10 md:left-20 text-xl md:text-3xl  text-white font-semibold'
                            data-aos='fade-up'
                        >
                            <p>
                                What if we could protet the ocean <br />
                                while feeding the world sustainably?
                            </p>
                            <Link
                                href='/'
                                className='font-bold flex gap-4 mt-8 transition-colors duration-200 group'
                                data-aos='fade-right'
                            >
                                <span className='  bg-white mr-2 p-2 group-hover:bg-orchid-500 '>
                                    <Icons.ArrowRight className='stroke-2 text-black group-hover:text-black hover:animate-ping rounded-md' />
                                </span>
                                <span className=' group-hover:text-orchid-500 duration-300'>
                                    Explore Tidal
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxImage;
