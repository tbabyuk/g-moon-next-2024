import Link from "next/link"




export const GiftCard = ({card}) => {

    console.log("logging card =======================:", card.description)

    return(
        <Link className="w-[360px] max-w-[100%] h-[279px] g-moon-gift-card" style={{ backgroundImage: `url('${card.image}')`, backgroundSize: "cover", backgroundPosition: "center" }} href={`/gift-cards/${card.url}`}>
        </Link>
    )

}