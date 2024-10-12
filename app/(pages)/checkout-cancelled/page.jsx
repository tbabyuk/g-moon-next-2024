import Link from "next/link";


const CheckoutCancelledPage = () => {

    return (
        <main>
            <div className="px-5 h-[125px] bg-[url('/images/page-header-bg.jpg')] bg-center bg-cover grid place-items-center">
                <h1 className="text-3xl font-semibold text-g-moon-white">Checkout - Cancelled</h1>
            </div>            
            <div className="g-moon-content-padding">
                <p className="font-medium text-center text-2xl text-red-500 mb-6">Ooops - your checkout was not completed!</p>
                <p className="font-medium leading-9 md:text-center">It appears that something went wrong during your checkout process. <br /> Please return to the <Link href="/booking-form" className="g-moon-link font-extrabold underline">BOOKING PAGE</Link> to try again or call us to book your appointment instead!</p>
            </div>
        </main>
    )
}


export default CheckoutCancelledPage;