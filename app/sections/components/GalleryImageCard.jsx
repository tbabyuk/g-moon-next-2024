import Image from "next/image"



export const GalleryImageCard = ({image}) => {

    return(
        <div className="w-full">
            <Image src={image.src} width="1000" height="600" alt={image.alt} className="w-full h-auto" />
        </div>
    )
}