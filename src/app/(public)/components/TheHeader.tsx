import { Icons } from '@/components/Icons';
import Logo from '@/components/Logo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

const TheHeader = () => {
    return (
        <div className='bg-white dark:bg-gray-700'>
            <header className='container flex items-center justify-between pt-2  h-16 md:h-28 lg:h-36  px-4'>
                <Link href='/'>
                    <Logo className='w-16' />
                </Link>
                <div className='flex items-center gap-2'>
                    <ThemeSwitcher />

                    <Icons.Menu size={40} />
                </div>
            </header>
        </div>
    );
};

export default TheHeader;
