import { Heroarea } from './Heroarea';
import { ParallaxImage } from './Parallax';
import { Stories } from './Stories';
import { TimeLine } from './TimeLine';
import { Video } from './Video';
import { SliderImage } from './SliderSection';
import { MasonryImage } from './MasonryImage';

const Homepage = () => {
    return (
        <div>
            <Video />
            <Heroarea />
            <ParallaxImage />
            <Stories />
            <MasonryImage />
            <TimeLine /> 
            <SliderImage />
        </div>
    );
};

export default Homepage;
