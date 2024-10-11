

const CheckoutSuccessPage = () => {

    return (
        <main>
            <div className="px-5 h-[125px] bg-[url('/images/page-header-bg.jpg')] bg-center bg-cover grid place-items-center">
                <h1 className="text-3xl font-semibold text-g-moon-white">Checkout - Success!</h1>
            </div>         
            <div className="g-moon-content-padding">
                <p className="font-medium text-center text-2xl text-green-500 mb-6">Thank you for your order!</p>
                <p className="font-medium leading-9 md:text-center">Please check your email - you should be receiving your payment receipt as well as an email with your order details, such as the date and time of your appointment. If you don't see both emails within a few minutes - be sure to check your junk folder!</p>
            </div>
        </main>
    )
}


export default CheckoutSuccessPage;