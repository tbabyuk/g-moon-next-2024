import { PageHeader } from "../../components/PageHeader";
import { giftCardsArray } from "../gift-card-data";
import { AddAndGoToCartBtn } from "../AddAndGoToCartBtn";


export async function generateStaticParams() {
    return giftCardsArray.map((card) => ({
        slug: card.slug
    }))
  }


const SingleGiftCardPage = ({params}) => {

    const targetCard = giftCardsArray.find((card) => card.slug === params.slug)


    return(
        <main>
            <PageHeader title="Gift Card" />
            <div className="py-28 px-5 mx-auto w-full md:max-w-[650px] lg:max-w-[1200px]">
                <div className="w-[800px] max-w-[100%] min-h-[279px] flex flex-col lg:flex-row lg:gap-x-6 mx-auto">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-[360px] max-w-[100%] h-[279px] rounded-md bg-[url('/images/gift-certificates/gift-card.jpg')] bg-center bg-cover "> <div className="absolute bottom-4 h-[40px] w-full flex justify-center items-center text-xl text-g-moon-gold">${targetCard?.amount.toFixed(2)}</div> </div>
                    </div>
                    <div className="flex-1 mx-auto my-12 lg:my-0 flex flex-col justify-between min-h-[279px] w-[400px] max-w-[100%]">
                        <h2 className="font-semibold text-center border-b-2 pb-2 border-b-gray-300">A ${targetCard.amount}-dollar gift card from G Moon Wellness</h2>
                        <p className="text-[0.9rem] leading-7">With this gift card, the recipient can choose any of our services in the amount of ${targetCard?.amount.toFixed(2)}. Paper gift cards can be picked up in person from our spa. Or simply show us your purchase receipt when you come in for your appointment.</p>
                        <p><span className="italic text-sm">Note: Please call us to book your gift-card appointment before coming in.</span></p>
                        <AddAndGoToCartBtn amount={targetCard.amount} priceId={targetCard.priceId} />
                    </div>
                </div>
            </div>
        </main>
    )

}


export default SingleGiftCardPage;