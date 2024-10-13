import "./globals.css";
import { Manrope, Montserrat } from "next/font/google"
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google"


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
        <body className={`${manrope.className} ${montserrat.variable}`}>
          <Header />
            {children}
          <Footer />
        </body>
        <GoogleAnalytics gaId="G-EZ73CK0BH6" />
    </html>
  );
}
