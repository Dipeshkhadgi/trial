

import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

// Placeholder images - replace these with your actual imports
const bannerImages = [
    {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1920&h=600&fit=crop",
        title: "Premium Birthday Cakes",
        subtitle: "Make every celebration memorable with our handcrafted cakes",
        cta: "Order Now"
    },
    {
        src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1920&h=600&fit=crop",
        title: "Wedding Cake Collection",
        subtitle: "Perfect centerpieces for your special day",
        cta: "View Collection"
    },
    {
        src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&h=600&fit=crop",
        title: "Custom Cake Designs",
        subtitle: "Bring your dream cake to life with our expert bakers",
        cta: "Get Quote"
    },
    {
        src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1920&h=600&fit=crop",
        title: "Anniversary Specials",
        subtitle: "Sweet treats for your sweet memories",
        cta: "Shop Now"
    },
    {
        src: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=1920&h=600&fit=crop",
        title: "Cupcake Paradise",
        subtitle: "Individual delights for every taste",
        cta: "Explore"
    }
];

const Header = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollContainerRef = useRef(null);
    const itemWidth = 100; // 100vw for full width

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const scrollToIndex = (index) => {
        if (scrollContainerRef.current && !isScrolling) {
            setIsScrolling(true);
            const scrollLeft = index * window.innerWidth;

            scrollContainerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });

            setCurrentIndex(index);

            setTimeout(() => {
                setIsScrolling(false);
            }, 500);
        }
    };

    const handleNext = () => {
        const nextIndex = (currentIndex + 1) % bannerImages.length;
        scrollToIndex(nextIndex);
    };

    const handlePrev = () => {
        const prevIndex = (currentIndex - 1 + bannerImages.length) % bannerImages.length;
        scrollToIndex(prevIndex);
    };

    const handleScroll = () => {
        if (scrollContainerRef.current && !isScrolling) {
            const scrollLeft = scrollContainerRef.current.scrollLeft;
            const newIndex = Math.round(scrollLeft / window.innerWidth);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < bannerImages.length) {
                setCurrentIndex(newIndex);
            }
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Main Slider Container */}
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                onScroll={handleScroll}
            >
                {bannerImages.map((banner, index) => (
                    <div
                        key={index}
                        className="min-w-full h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] relative snap-start"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={banner.src}
                                alt={banner.title}
                                className="w-full h-full object-cover object-center"
                                loading={index === 0 ? "eager" : "lazy"}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/60" />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center px-4 max-w-4xl mx-auto">
                                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 lg:mb-6 leading-tight">
                                    {banner.title}
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 lg:mb-8 max-w-3xl mx-auto">
                                    {banner.subtitle}
                                </p>
                                <button className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg md:text-xl rounded-full hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                                    {banner.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10 group"
                disabled={isScrolling}
            >
                <IoChevronBack size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10 group"
                disabled={isScrolling}
            >
                <IoChevronForward size={24} className="md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {bannerImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? 'w-12 h-3 bg-white'
                                : 'w-3 h-3 bg-white/50 hover:bg-white/70'
                            }`}
                        disabled={isScrolling}
                    />
                ))}
            </div>

            {/* Side Navigation Thumbnails */}
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 space-y-3 z-10">
                {bannerImages.map((banner, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToIndex(index)}
                        className={`block w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${index === currentIndex
                                ? 'ring-4 ring-white shadow-2xl scale-110'
                                : 'opacity-70 hover:opacity-100 hover:scale-105'
                            }`}
                        disabled={isScrolling}
                    >
                        <img
                            src={banner.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                <div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-500 ease-out"
                    style={{ width: `${((currentIndex + 1) / bannerImages.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default Header;


