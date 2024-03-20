import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const TheHeader = () => {
    return (
        <header className='border-b w-full py-4 bg-slate-300 dark:bg-transparent dark:text-gray-50 text-center'>
            App header <ThemeSwitcher/>
        </header>
    );
};

export default TheHeader;
