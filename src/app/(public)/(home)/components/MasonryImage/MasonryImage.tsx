/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import Image from 'next/image';
import { Masonry } from 'react-masonry';

const MasonryImage = () => {
    const boxes = [
        {
            width: `33%`,
            height: 350,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            image: 'https://i.ibb.co/vHd8znG/pexels-akbar-nemati-17240838.jpg',
            animation: 'fade-right'
        },
        {
            width: `33%`,
            height: 700,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            image: 'https://i.ibb.co/XC2pXhn/pexels-pixabay-2166.jpg',
            animation: 'fade-down'
        },
        {
            width: `33%`,
            height: 350,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            image: 'https://i.ibb.co/vHd8znG/pexels-akbar-nemati-17240838.jpg',
            animation: 'fade-left'
        },
        {
            width: `33%`,
            height: 700,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            // image: 'https://i.ibb.co/qn927Jf/moon.jpg',
            image: 'https://i.ibb.co/WzhPSq8/pexels-ekam-juneja-17138137.jpg',
            animation: 'fade-right'
        },
        {
            width: `33%`,
            height: 700,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            // image: 'https://i.ibb.co/vHd8znG/pexels-akbar-nemati-17240838.jpg',
            image: 'https://i.ibb.co/WzhPSq8/pexels-ekam-juneja-17138137.jpg',
            animation: 'fade-left'
        },
        {
            width: `33%`,
            height: 350,
            border: '10px solid #fff',
            boxSizing: 'border-box',
            image: 'https://i.ibb.co/XC2pXhn/pexels-pixabay-2166.jpg',
            animation: 'fade-up'
        }
    ];

    return (
        <div className='container pt-16 pb-64 overflow-hidden'>
            <Masonry>
                {boxes.map((box: any, index) => (
                    <div key={index} style={box} data-aos={box?.animation}>
                        <div className='flex items-center justify-center h-full text-base font-semibold md:text-xl p-2'>
                            <Image
                                className='h-full w-auto'
                                src={box.image}
                                width={100}
                                height={60}
                                unoptimized
                                alt='tru-brand'
                            />
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default MasonryImage;
