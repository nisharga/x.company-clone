import { Icons } from '@/components/Icons';
import Logo from '@/components/Logo';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import Link from 'next/link';

const TheHeader = () => {
    return (
        <header className='container flex items-center justify-between pt-2 bg-white h-16 md:h-28 lg:h-36 dark:bg-gray-700'>
            <Link href='/'>
                <Logo className='w-16' />
            </Link>
            <div className='flex items-center gap-2'>
                <ThemeSwitcher />
                
                <Icons.Menu size={40}/>
            </div>
        </header>
    );
};

export default TheHeader;
