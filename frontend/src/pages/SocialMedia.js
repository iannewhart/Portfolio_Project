import VideoComponent from "../components/VideoComponent";
import '../css/Carousel.css'
import '../css/SocialMedia.css'
import {useNavigate} from "react-router-dom";

function SocialMedia() {
    const navigate = useNavigate();
    return (

        <div>
            <h1>Social Media Videos</h1>
            <div className="carousel-wrapper">
                <VideoComponent style="social"></VideoComponent>
            </div>
            <button className="contact" onClick={() => navigate('/contact')}>Contact us</button>
        </div>

    );
}

export default SocialMedia;
