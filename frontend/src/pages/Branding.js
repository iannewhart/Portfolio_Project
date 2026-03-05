import VideoComponent from "../components/VideoComponent";
import '../css/Carousel.css'
import '../css/Branding.css'
import {useNavigate} from "react-router-dom";
function Branding() {
    const navigate = useNavigate();
    return (
            <div>
                <h1>Branding Videos</h1>
                <div className="carousel-wrapper">
                    <VideoComponent style="branding"></VideoComponent>
                </div>
                <button className="contact" onClick={() => navigate('/contact')}>Contact us</button>
            </div>

        // </div>
    );
}

export default Branding;
