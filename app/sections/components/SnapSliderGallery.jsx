"use client"

import { useRef } from "react";
// import Link from "next/link";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";


const galleryImagesArray = [
    { src: "/images/gallery/outside-1.jpg", alt: "outside view of our facility" },
    { src: "/images/gallery/reception-1.jpeg", alt: "our reception area" },
    { src: "/images/gallery/corridor-1.jpg", alt: "corridor" },
    { src: "/images/gallery/inside-1.jpeg", alt: "the inside of our facility" },
    { src: "/images/gallery/room-1.jpeg", alt: "one of our rooms" },
    { src: "/images/gallery/reception-2.jpeg", alt: "front door" },
    { src: "/images/gallery/room-2.jpeg", alt: "another one of our rooms" },
    { src: "/images/gallery/outside-2.jpg", alt: "another outside view of our facility" },
    { src: "/images/gallery/reception-3.jpeg", alt: "another reception shot" },
    { src: "/images/gallery/reception-4.jpeg", alt: "our waiting area" }
];



export const SnapSliderGallery = () => {

    const scrollContainerRef = useRef(null);
    const itemWidth = 325 + 8 // item width + gap width

    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
          }    
    }

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
          }    
    }

    return(
        <div className="relative mt-14">
            <FaArrowAltCircleLeft className="hidden md:flex z-10 absolute left-0 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer" size={50} onClick={handleScrollLeft} />
            <div className="flex gap-2 overflow-x-auto snap-x snap-mandatory g-moon-hide-scrollbar" ref={scrollContainerRef}>
                {galleryImagesArray.map((image, index) => (
                    <div key={index} className="relative rounded-lg flex-shrink-0">
                        <img
                            src={image.src}
                            className="rounded-lg"
                            width={325}
                            height={300}
                        />
                    </div>
                ))}
            </div>
            <FaArrowAltCircleRight className="hidden md:flex z-10 absolute right-0 top-1/2 -translate-y-1/2 text-white/60 cursor-pointer" size={50} onClick={handleScrollRight} />
      </div>
    )
}