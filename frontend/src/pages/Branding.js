import VideoComponent from "../components/VideoComponent";
import '../css/Carousel.css'

function Branding() {
    return (
        // <div className="home-container">
        //
        //     <div className="home-container">
        //         <div className="flex-row">
        //             <div className="column">
        //                 <h3 className="branding-title">Branding Videos</h3>
        //                 <p className="branding-description">Tell your brand’s story with style and clarity. We create
        //                     cinematic videos that showcase who you are, what you do,
        //                     and why it matters—helping you connect with your customers and stand out in a crowded
        //                     market.</p>
        //
        //             </div>
        //             <div className="column">
        //                 <h3 className="branding-title">Social Media Content</h3>
        //                 <p className="branding-description">Capture attention in seconds. Our short-form videos are made
        //                     to stop the scroll—perfect for Instagram, TikTok,
        //                     YouTube, and beyond. We design content that’s fast, fresh, and aligned with your brand
        //                     voice.</p>
        //             </div>
        //         </div>
        //     </div>
            <div>
                <h1>Branding Videos</h1>
                <div className="carousel-wrapper">
                    <VideoComponent style="branding"></VideoComponent>
                </div>
            </div>

        // </div>
    );
}

export default Branding;
