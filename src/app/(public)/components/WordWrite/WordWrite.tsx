'use client';
import { TypeAnimation } from 'react-type-animation';

const WordWrite = () => {
    return (
        <TypeAnimation
            sequence={[
                'We create radical new technologies to solve some of the worlds hardest problem', // Types 'One'
                500,
                () => {
                    console.log('Sequence completed');
                }
            ]}
            wrapper='span'
            // cursor={true}
            // repeat={Infinity}
            style={{
                fontSize: '60px',
                display: 'inline-block',
                wordSpacing: '27px',
                letterSpacing: '2px',
                paddingRight: '150px',
                fontWeight: '500',
            }}
            className='wordwrite'
        />
    );
};

export default WordWrite;
