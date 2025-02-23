import { SectionHeader } from "../components/SectionHeader"
import { GalleryImageCard } from "./components/GalleryImageCard";


const galleryImagesArray = [
    { src: "/images/gallery/outside-1.jpg", alt: "outside view of our facility" },
    { src: "/images/gallery/reception-1.jpg", alt: "reception area" },
    { src: "/images/gallery/chairs-1.jpg", alt: "our seating area" },
    { src: "/images/gallery/corridor-1.jpg", alt: "hallway" },
    { src: "/images/gallery/plant-1.jpg", alt: "reception area plant" },
    { src: "/images/gallery/bed-1.jpg", alt: "one of our rooms" },
    { src: "/images/gallery/outside-2.jpg", alt: "another outside view of our facility" },
    { src: "/images/gallery/chairs-2.jpg", alt: "another view of our seating area" }
];



export const GallerySection = () => {

    return (
        <div className="py-24 bg-gray-100" id="gallery">
            <SectionHeader title="OUR FACILITY" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {galleryImagesArray.map((image, index) => (
                    <GalleryImageCard key={index} image={image} />
                ))}
            </div>
        </div>
    )
}