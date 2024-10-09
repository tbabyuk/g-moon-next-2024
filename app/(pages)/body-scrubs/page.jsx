import { PageHeader } from "../components/PageHeader"
import { bodyScrubsList } from "@/app/data/data"
import Link from "next/link"


export const metadata = {
    title: "G Moon Wellness Centre | Body Scrubs",
    description: "Choose from our selection of body scrubs!",
}


const BodyScrubsPage = () => {

    return(
        <main>
            <PageHeader title="BODY SCRUBS" />
            <div className="py-28 xl:px-44 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {bodyScrubsList.map((scrub, index) => (
                    <Link key={index} href={scrub.url} className="h-[180px] w-1/4 min-w-[250px] bg-g-moon-very-light-gray hover:bg-g-moon-light-gray hover:cursor-pointer">
                        <div className="h-[70%] flex justify-center items-center">
                            <img src={scrub.image} className="h-[70%]" alt="" />
                        </div>
                        <div className="h-[30%] flex justify-center items-center">
                            <div>{scrub.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}


export default BodyScrubsPage;