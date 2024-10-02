import "./globals.css";
import { Manrope, Montserrat } from "next/font/google"
import Header from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import Script from "next/script";


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


export const metadata = {
  title: "G Moon Wellness Centre",
  description: "Spa in North York",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} ${montserrat.variable}`}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
}
