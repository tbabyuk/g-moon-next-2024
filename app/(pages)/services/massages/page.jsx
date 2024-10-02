import { PageHeader } from "../../components/PageHeader"
import { massagesList } from "@/app/data/data"
import Link from "next/link"


const MassagesPage = () => {

    return(
        <main>
            <PageHeader title="MASSAGES" />
            <div className="py-28 xl:px-44 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {massagesList.map((massage, index) => (
                    <Link key={index} href={massage.url} className="h-[180px] w-1/4 min-w-[250px] bg-g-moon-very-light-gray hover:bg-g-moon-light-gray hover:cursor-pointer">
                        <div className="h-[70%] flex justify-center items-center">
                            <img src={massage.image} className="h-[70%]" alt="" />
                        </div>
                        <div className="h-[30%] flex justify-center items-center">
                            <div>{massage.name}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}


export default MassagesPage;