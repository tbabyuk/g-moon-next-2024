
import { SectionHeader } from "../components/SectionHeader"
import { teamMembersList } from "../data/services"

export const TeamSection = () => {

    return (
        <div className="py-28 bg-g-moon-very-light-gray">
            <SectionHeader title="OUR TEAM" />
            <div className="px-72 flex justify-center flex-wrap gap-x-4 gap-y-8">
                {teamMembersList.map((member) => (
                    <div className="h-[150px] w-[190px] bg-g-moon-very-light-gray hover:bg-g-moon-light-gray hover:cursor-pointer">
                        <div className="h-[70%] flex justify-center items-center">
                            <img src={member.image} className="h-[70%]" alt="" />
                        </div>
                        <div className="h-[30%] flex justify-center items-center">
                            <div>{member.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}