import { Heroarea } from './Heroarea'; 
import { ParallaxImage } from './Parallax';
import { Video } from './Video';

const Homepage = () => {
    return (
        <div>
            <Video />
            <Heroarea />
            <ParallaxImage />
        </div>
    );
};

export default Homepage;
