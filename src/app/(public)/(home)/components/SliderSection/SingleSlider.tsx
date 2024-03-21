import React, { FC } from "react";

interface ISlider{
    id: string;
    img: string;
    title1: string;
    title2: string;
}

interface IProps{
    slider : ISlider;
}

const SingleSlider:FC<IProps> = ({slider}) => {
    return (
        <div className='relative'>
            <div className={`${slider.img} relative overflow-hidden`}>
                <div className='container px-8'>
                    <div className='absolute bottom-36 left-10 md:left-20 flex items-center justify-between w-full '>
                        <div className=''>
                            <p
                                className='text-xl md:text-3xl  text-white font-semibold mb-4'
                                data-aos='fade-up'
                            >
                                {slider.title1}
                            </p>
                            <div className='w-4/5  md:w-2/5'>
                                <p
                                    className='text-base  text-white font-semibold'
                                    data-aos='fade-up'
                                >
                                    {slider.title2}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSlider;
