
import { SectionHeader } from "../components/SectionHeader"
import { teamMembersList } from "../data/services"

export const TeamSection = () => {

    return (
        <div className="px-6 py-28 bg-gray-100">
            <SectionHeader title="OUR TEAM" />
            <div className="flex md:px-20 lg:px-32 justify-center flex-wrap gap-x-4 gap-y-10">
                {teamMembersList.map((member) => (
                    <div className="min-h-[430px] w-[300px] bg-g-moon-very-light-gray">
                        <div className="h-[80%] flex justify-center items-center overflow-hidden">
                            <img src={member.image} className="w-[100%]" alt="" />
                        </div>
                        <div className="h-[20%] px-3 flex justify-center items-center">
                            <div>{member.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}