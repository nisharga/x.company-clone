const Video = () => {
    return (
        <div data-aos='zoom-out'>
            <div className='container bg-fuchsia-500 p-0'>
                <div className='w-full h-[540px] relative'>
                    <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-cover'
                    >
                        <source src='/x-company.mp4' type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Video;
