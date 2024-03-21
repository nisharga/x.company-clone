/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { Masonry } from 'react-masonry';

const MasonryImage = () => {
    const boxes = [
        {
            width: `33%`,
            height: 350,
            background: '#FFF9DF',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Blond 10% color',
            animation: 'fade-right'
        },
        {
            width: `33%`,
            height: 700,
            background: '#FFF3BF',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Blond 30% color',
            animation: 'fade-down'
        },
        {
            width: `33%`,
            height: 350,
            background: '#FFE99E',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Blond 60% color',
            animation: 'fade-left'
        },
        {
            width: `33%`,
            height: 700,
            background: '#FFE07E',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Sunglow 10% color',
            animation: 'fade-right'
        },
        {
            width: `33%`,
            height: 700,
            background: '#FFD65D',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Sunglow 30% color',
            animation: 'fade-left'
        },
        {
            width: `33%`,
            height: 350,
            background: '#FFCC3D',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            colourName: 'Sunglow 60% color',
            animation: 'fade-up'
        }
    ];

    return (
        <div className='container pt-16 pb-64 overflow-hidden'>
            <Masonry>
                {boxes.map((box: any, index) => (
                    <div key={index} style={box} data-aos={box?.animation}>
                        <div className='flex items-center justify-center h-full text-base font-semibold md:text-xl p-2'>
                            {box?.colourName}
                        </div>
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default MasonryImage;
