'use client';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import { SLIDER_DATA } from '@/static';
import { SingleSlider } from '.';
import { Icons } from '@/components/Icons';
// import { Icons } from '@/components/Icons';

const SliderImage = () => {
    const sliderRef = useRef<Slider | null>(null); // type: Slider | null

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        className: 'slick-container',
        centerMode: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0',
        dots: false,
        arrows: false,
        swipe: false,
        autoPlay: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='w-full relative'>
            <Slider ref={sliderRef} {...settings}>
                {(SLIDER_DATA ?? []).map((slider) => (
                    <SingleSlider key={slider?.id} slider={slider} />
                ))}
            </Slider>

            <div className='absolute right-6 bottom-16 w-[200px]'>
                <div className='flex gap-4'>
                    <button
                        onClick={prevSlide}
                        className='w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center'
                    >
                        <Icons.ChevronLeft size={40} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className='w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center'
                    >
                        <Icons.ChevronRight size={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SliderImage;
