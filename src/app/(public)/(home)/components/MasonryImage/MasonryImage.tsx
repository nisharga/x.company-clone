/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';
import { Masonry } from 'react-masonry';

const MasonryImage = () => {
    const boxes = [
        {
            width: `30%`,
            height: 200,
            background: '#ff00ff',
            padding: '10px',
            border: '10px solid #fff',
            boxSizing: 'border-box',
            borderRadius: '10px',
        },
        {
            width: `30%`,
            height: 400,
            background: 'green',
            padding: '10px', 
            boxSizing: 'border-box'
        },
        {
            width: `30%`,
            height: 200,
            background: 'yellow',
            padding: '10px', 
            boxSizing: 'border-box'
        }
    ];

    return (
        <div className='container'>
            <Masonry gutter={5} updateOnWindowResize>
                {boxes.map((box: any, index) => (
                    <div key={index} style={box}>
                        {index + 1}
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default MasonryImage;
