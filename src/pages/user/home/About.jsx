import React, { useEffect, useState } from "react";

const About = () => {
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem("visitCount");
        const newCount = storedCount ? parseInt(storedCount, 10) + 1 : 1;
        setVisitCount(newCount);
        localStorage.setItem("visitCount", newCount);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-8 mt-[108px]">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-gray-800">About Us</h1>
                <p className="text-xl text-gray-600 mt-2">
                    Trusted source for breaking news, exclusive reports, and in-depth analysis.
                </p>
            </header>

            <div className="text-center mb-8">
                <p className="text-lg font-semibold text-gray-700">
                    🌍 Visited by <span className="text-blue-600 text-xl">{visitCount}</span> users.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    { title: "Our Mission", text: "We aim to deliver accurate, unbiased, and timely news to keep our audience informed.", img: "https://parasparivaar.org/assets/storage/event/event.webp" },
                    { title: "Our Vision", text: "To be the most trusted and innovative news platform, delivering impactful stories worldwide.", img: "https://parasparivaar.com/assets/images/about_img.png" },
                    { title: "Our History", text: "Founded in 2005, we have grown from a small newsroom to an international media powerhouse.", img: "https://parasparivaar.com/assets/blog/paras-parivar-3.jpg" },
                    { title: "Editorial Team", text: "Our team consists of award-winning journalists, editors, and field reporters dedicated to truth.", img: "https://img-cdn.thepublive.com/fit-in/1200x675/filters:format(webp)/newsnation/media/post_attachments/images/2019/03/18/parasmaharaj-94.jpg" },
                    { title: "Our Services", text: "We provide 24/7 live updates, exclusive interviews, investigative reports, and multimedia content.", img: "https://parasparivaar.com/assets/gallery/007%20(2).jpg" },
                    { title: "Global Reach", text: "Our news is available in 10+ languages and reaches millions across 150+ countries.", img: "https://i.ytimg.com/vi/J14t6Rk1QE8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAw51ev_cPuV9NGoFL9N8GMyteQbA" },
                ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1">
                        <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h2 className="text-3xl font-semibold text-gray-800 mb-3">{item.title}</h2>
                        <p className="text-gray-600">{item.text}</p>
                    </div>
                ))}
            </div>

            <section className="mt-16 bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
                <p className="text-gray-600 text-lg">
                    We are committed to fearless journalism, fact-checking, and investigative reporting that empowers
                    the public.
                </p>
            </section>

        </div>
    );
};

export default About;
