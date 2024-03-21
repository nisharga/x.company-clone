import { Heroarea } from './Heroarea';
import { ParallaxImage } from './Parallax';
import { Stories } from './Stories';
import { TimeLine } from './TimeLine';
import { Video } from './Video';
import { SliderImage } from './SliderSection';

const Homepage = () => {
    return (
        <div>
            <Video />
            <Heroarea />
            <ParallaxImage />
            <Stories />
            <TimeLine />
            {/* <Slider /> */}
            <SliderImage />
        </div>
    );
};

export default Homepage;
