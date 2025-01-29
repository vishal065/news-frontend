// import { useState } from "react";
// import { motion } from "framer-motion";

// const videoStories = [
//     { id: 1, title: "Story 1", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
//     { id: 2, title: "Story 2", src: "https://www.w3schools.com/html/movie.mp4" },
//     { id: 3, title: "Story 3", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
// ];

// export default function VideoStoriesSlider() {
//     const [currentVideo, setCurrentVideo] = useState(videoStories[0].src);

//     return (
//         <div className="flex flex-col items-center w-full max-w-lg mx-auto p-4">
//             {/* Video Player */}
//             <motion.div
//                 key={currentVideo}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="w-full h-64 bg-black rounded-xl overflow-hidden"
//             >
//                 <video
//                     src={currentVideo}
//                     controls
//                     autoPlay
//                     className="w-full h-full object-cover"
//                 />
//             </motion.div>

//             {/* Thumbnails */}
//             <div className="mt-4 flex space-x-4 overflow-x-auto w-full justify-center">
//                 {videoStories.map((video) => (
//                     <motion.button
//                         key={video.id}
//                         onClick={() => setCurrentVideo(video.src)}
//                         whileHover={{ scale: 1.1 }}
//                         className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentVideo === video.src ? "border-blue-500" : "border-gray-300"
//                             }`}
//                     >
//                         <video
//                             src={video.src}
//                             className="w-full h-full object-cover"
//                             muted
//                             loop
//                             autoPlay
//                         />
//                     </motion.button>
//                 ))}
//             </div>
//         </div>
//     );
// }













export default function HorizontalSlider() {
    return (
        <div className="w-full p-5">
            <h2 className="text-2xl font-bold mb-4">Horizontal Scroll Slider</h2>
            <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
                <div className="flex gap-4">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] h-40 bg-blue-500 text-white flex items-center justify-center rounded-lg shadow-lg"
                        >
                            Item {index + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
