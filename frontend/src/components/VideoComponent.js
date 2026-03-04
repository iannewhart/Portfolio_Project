import React, { useEffect, useState, useRef, useCallback } from "react";
import VimeoPlayer from '@vimeo/player';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {NextArrow, PrevArrow} from "./carouselarrows";
function VideoComponent({ style }) {
    const [videoList, setVideoList] = useState([]);
    const [mainVideoIndex , setMainVideoIndex] = useState(0)
    const playerRefs = useRef([]);
    const sliderRef = useRef(null);
    const handleIframeLoad = (iframe, index) => {
        if (iframe && !playerRefs.current[index]) {
            const player = new VimeoPlayer(iframe);
            // console.log(player,index);
            playerRefs.current[index] = player;

        }
    };
    const handleSlideChange = (oldIndex, newIndex) => {
        // console.log("Slide changing from:", oldIndex, "to:", newIndex);
        console.log("Player refs:", playerRefs.current);
        const oldPlayer = playerRefs.current[oldIndex];
        console.log(playerRefs)
        if (oldPlayer) {
            oldPlayer.pause();
        }
    };
    const thumbSettings = {
        slidesToShow: 4,
        swipeToSlide: true,
        focusOnSelect: true,
        arrows: false,
        variableWidth: true,

    }
    const settings = {
        arrows: true,
        swipe: false,
        autoplay: false,
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        overflow: false,
        centerPadding: "280px",   // <-- MUST be a string
        beforeChange: handleSlideChange,
        initialSlide: mainVideoIndex,
        //
        // responsive: [
        //     { breakpoint: 900, settings: { centerPadding: "90px" } },
        //     { breakpoint: 600, settings: { centerPadding: "40px" } },
        // ],
    };
    useEffect(() => {
        const fetchVideoList = async () => {
            try {

                const response = await fetch(`${process.env.REACT_APP_API_URL}/media/${style}`);
                const result = await response.json();
                setVideoList(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchVideoList();
        }, [style]); // Empty dependency array so it runs once when the component mounts

    return (
        <div>
            <div className="carousel-outer">
                <div className="video-carousel">
                    <Slider ref={sliderRef} {...settings}>
                        {videoList.length > 0 ? (
                            videoList.map((video, index) => (
                                <div key={video.id} className="slide">
                                    <div className="videoFrame">
                                        <iframe
                                            ref={(el) => (el ? handleIframeLoad(el, index) : null)}
                                            src={video.url}
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            title={video.title || "video"}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Loading Videos...</p>
                        )}
                    </Slider>
                </div>
            </div>
            <div className="thumbnail-strip">
                <Slider {...thumbSettings}>
                    {videoList.length > 0 ? (
                        videoList.map((video, index) => (
                            <div key={video.id}>
                                <img
                                    src={video.thumbnail_Url}
                                    alt="thumbnail"
                                    loading="lazy"
                                    onClick={() => {
                                        setMainVideoIndex(index);
                                        if (sliderRef.current) {
                                            sliderRef.current.slickGoTo(index);
                                        }
                                    }}
                                />
                            </div>
                        ))
                    ) : (
                        <p>Loading Images...</p>
                    )}
                </Slider>
            </div>
        </div>
    );

}

export default VideoComponent;
