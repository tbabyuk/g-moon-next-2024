



export const TeamMemberProfile = ({member}) => {

    return(
        <div className="min-h-[430px] w-[300px] bg-g-moon-very-light-gray">
            <div className="h-[75%] flex justify-center items-center overflow-hidden">
                <img src={member.image} className="w-[100%]" alt="" />
            </div>
            <div className="h-[25%] px-5">
                <div className="font-bold text-center py-2">{member.name}</div>
                <div className="text-[0.95rem]">{member.description}</div>
            </div>
        </div>
    )
}