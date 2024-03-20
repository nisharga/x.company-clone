import Link from 'next/link';

const TheFooter = () => {
    return (
        <div className='bg-black dark:bg-gray-700 py-12'>
            <div className='container'>
                <div className='py-8 text-white flex gap-8 font-semibold'>
                    <Link href='/'>PRIVACY  +  TERMS</Link>
                    <Link href='/'>GOOGLE</Link>
                    <Link href='/'>ALPHABET</Link>
                </div>
                <p className='text-gray-100'>X, a division of Google LLC. All rights reserved.</p>
            </div>
        </div>
    );
};

export default TheFooter;
