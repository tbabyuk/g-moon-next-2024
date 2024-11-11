import { PageHeader } from "../components/PageHeader";
import { GiftCardAmountCard } from "./GiftCardAmountCard";


const giftCardAmountOptions = [30, 40, 50, 60, 75, 80, 90, 95, 100, 105, 110, 120]


const GiftCardsPage = () => {

    return(
        <main>
            <PageHeader title="Gift Cards" />
            <div className="py-28 px-5 mx-auto md:max-w-[650px] lg:max-w-[1200px]">
                <p className="mb-10">Treat your loved ones to the ultimate relaxation and rejuvenation with a spa gift card - the perfect way to show you care and offer them an unforgettable experience of pampering and tranquility.</p>
                <p className="mb-12 text-center">Please choose the desired dollar amount for your gift card:</p>
                <div className="max-w-[700px] mx-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 place-items-center gap-4">
                    {giftCardAmountOptions.map((amount, index) => (
                        <GiftCardAmountCard key={index} amount={amount} />
                    ))}
                </div>
            </div>
            </main>
    )
}


export default GiftCardsPage;