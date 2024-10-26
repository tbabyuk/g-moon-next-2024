
import { SectionHeader } from "../components/SectionHeader"
import { teamMembersList } from "../data/data"
import { TeamMemberProfile } from "./components/TeamMemberProfile"

export const TeamSection = () => {

    return (
        <div className="px-5 py-24 bg-gray-100">
            <SectionHeader title="OUR TEAM" />
            <div className="flex md:px-20 lg:px-32 justify-center flex-wrap gap-x-4 gap-y-10">
                {teamMembersList.map((member, index) => (
                    <TeamMemberProfile member={member} key={index} />
                ))}
            </div>
        </div>
    )
}