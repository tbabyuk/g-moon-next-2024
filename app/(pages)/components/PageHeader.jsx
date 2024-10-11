


export const PageHeader = ({title}) => {

    return(
        <div className="px-5 h-[125px] bg-[url('/images/page-header-bg.jpg')] bg-center bg-cover grid place-items-center">
            <h1 className="text-4xl font-semibold text-g-moon-white">{title}</h1>
        </div>
    )
}