import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function StorieSlider() {
    const sliderRef = useRef(null);
    const videoRefs = useRef([]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    useEffect(() => {
        // Load the YouTube IFrame API
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleVideoPlay = (index) => {
        videoRefs.current.forEach((player, i) => {
            if (player && i !== index) {
                player.pauseVideo();
            }
        });
    };

    const onPlayerReady = (event, index) => {
        videoRefs.current[index] = event.target;
    };

    const videos = [
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
        "https://www.youtube.com/embed/Em-VEHpc-tg?enablejsapi=1",
    ];

    return (
        <div className="w-full p-5 relative">
            <h2 className="text-2xl font-bold mb-4">Video Stories</h2>
            <div className="relative">
                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full shadow-lg z-10 cursor-pointer"
                    onClick={scrollLeft}
                >
                    <ChevronLeft size={24} />
                </button>

                <div
                    ref={sliderRef}
                    className="flex gap-4 scroll-smooth whitespace-nowrap overflow-hidden"
                    style={{ scrollBehavior: "smooth" }}
                >
                    {videos.map((videoSrc, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] h-64 md:h-96 bg-gray-900 text-white flex items-center justify-center rounded-lg shadow-lg relative overflow-hidden"
                        >
                            <iframe
                                id={`player-${index}`}
                                className="w-full h-full object-cover rounded-lg"
                                src={`${videoSrc}&enablejsapi=1`}
                                title={`video-${index}`}
                                frameBorder="0"
                                allow="autoplay; encrypted-media; picture-in-picture"
                                allowFullScreen
                                onLoad={() => {
                                    new window.YT.Player(`player-${index}`, {
                                        events: {
                                            onStateChange: (event) => {
                                                if (event.data === window.YT.PlayerState.PLAYING) {
                                                    handleVideoPlay(index);
                                                }
                                            },
                                            onReady: (event) => onPlayerReady(event, index),
                                        },
                                    });
                                }}
                            ></iframe>
                        </div>
                    ))}
                </div>

                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full shadow-lg z-10 cursor-pointer"
                    onClick={scrollRight}
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
}

export default StorieSlider;
