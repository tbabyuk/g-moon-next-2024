import "./globals.css";
import { Manrope, Montserrat } from "next/font/google"
import Header from "./components/Header";
import HolidayPromoBanner from "./components/HolidayPromoBanner";
import { Footer } from "./components/Footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google"
import { CartContextProvider } from "./context/CartContext";



<Script 
  src="https://kit.fontawesome.com/386f0d29b2.js"
  strategy="beforeInteractive"	
/>

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <CartContextProvider>
          <body className={`${manrope.className} ${montserrat.variable}`}>
            <Header />
            {/* <HolidayPromoBanner /> */}
              {children}
            <Footer />
          </body>
        </CartContextProvider>
        <GoogleAnalytics gaId="G-EZ73CK0BH6" />
    </html>
  );
}
