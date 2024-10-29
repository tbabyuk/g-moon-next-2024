import { SectionHeader } from "../components/SectionHeader"



export const GallerySection = () => {

    return (
        <div className="px-5 py-24">
            <SectionHeader title="OUR FACILITY" />
            <div className="flex flex-wrap justify-center gap-4 md:px-12 lg:px-28">
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/outside_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/reception_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/corridor_3x4.jpg" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/mosaic_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/plant_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/mosaic2_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] max-h-[336px]">
                    <img src="images/gallery/bed_3x4.jpg" alt="Image 1" className="w-full h-auto object-cover rounded-md" />
                </div>
                <div className="w-full max-w-[252px] h-[336px]">
                    <img src="images/gallery/flowers_3x4.jpg" alt="Image 2" className="w-full h-auto object-cover rounded-md" />
                </div>
            </div>
        </div>
    )
}