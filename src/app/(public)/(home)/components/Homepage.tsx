import { Heroarea } from './Heroarea';
import { ParallaxImage } from './Parallax';
import { Stories } from './Stories';
import { Video } from './Video';

const Homepage = () => {
    return (
        <div>
            <Video />
            <Heroarea />
            <ParallaxImage />
            <Stories />
        </div>
    );
};

export default Homepage;
