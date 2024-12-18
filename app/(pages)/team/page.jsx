import { teamMembersList } from "@/app/data/data";
import { TeamMemberProfile } from "@/app/sections/components/TeamMemberProfile";
import { PageHeader } from "../components/PageHeader";


export const metadata = {
    title: "Team | G Moon Wellness Centre",
    description: "Our skilled professionals specialize in delivering top-notch wellness services, including massages, body treatments, and more, ensuring your ultimate relaxation.",
}

const TeamPage = () => {

    return(
        <main>
            <PageHeader title="Our Team" />
            <div className="py-28 flex md:px-20 lg:px-36 pb-28 justify-center flex-wrap gap-x-4 gap-y-10">
                {teamMembersList.map((member, index) => (
                    <TeamMemberProfile member={member} key={index} />
                ))}
            </div>
        </main>
    )
}

export default TeamPage;