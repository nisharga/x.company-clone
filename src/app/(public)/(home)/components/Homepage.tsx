import { Heroarea } from './Heroarea';
import { ParallaxImage } from './Parallax';
import { Stories } from './Stories';
import { TimeLine } from './TimeLine';
import { Video } from './Video';

const Homepage = () => {
    return (
        <div>
            <Video />
            <Heroarea />
            <ParallaxImage />
            <Stories />
             <TimeLine/>
        </div>
    );
};

export default Homepage;
