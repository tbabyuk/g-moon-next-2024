import Link from "next/link"


export const GiftCardAmountCard = ({amount}) => {


    return(
        <Link className="text-white h-[50px] w-[100px] rounded-md bg-green-600 hover:bg-green-700 cursor-pointer flex justify-center items-center" href={`/gift-cards/${amount}-dollars`}>${amount.toFixed(2)}</Link>
    )
}