import '../css/Home.css'
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <div className="hero-banner"
                 style={{backgroundImage: `url(https://i.vimeocdn.com/video/2037203696-726f44aaedc4159127ae5cdedc2a983e6a5caf215d8b919facd5635855c03745-d)`}}>
                <h1 className="hero-banner-text"> Sunvio Video Production</h1>
            </div>
            <div className="flex-row">
                <div className="column">
                    <h3 className="branding-title">Branding Videos</h3>
                    <p className="branding-description">Tell your brand's story with style and clarity. We create
                        cinematic videos that showcase who you are, what you do,
                        and why it matters—helping you connect with your customers and stand out in a crowded
                        market.</p>
                    <div className="category-card" onClick={() => navigate('/branding')}
                         style={{backgroundImage: `url( https://i.vimeocdn.com/video/2086231026-f392d921e513ff55f362f8a7c5eecec7ce70025af3af4d095c00b0653e0970aa-d)`}}>
                        <div className="card-overlay">
                            <h3>See Demos</h3>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <h3 className="branding-title">Social Media Content</h3>
                    <p className="branding-description">Capture attention in seconds. Our short-form videos are made
                        to stop the scroll—perfect for Instagram, TikTok,
                        YouTube, and beyond. We design content that's fast, fresh, and aligned with your brand
                        voice.</p>
                    <div className="category-card" onClick={() => navigate('/socialmedia')}
                         style={{backgroundImage: `url(https://i.vimeocdn.com/video/2022913315-b71d67044faea9561da4ede059c9b861ad0d1eb7517ecf6814522efecee0352c-d)`}}>
                        <div className="card-overlay">
                            <h3>See Demos</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
