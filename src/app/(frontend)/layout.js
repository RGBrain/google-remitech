import { Open_Sans, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Remitech",
  description: "Remitech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="bodyElement" className={`font-primary antialiased`}>
        {/* screen size indicator - for dev */}
        {/* <div className="fixed top-7 md:top-27 md:left-12 left-0 bg-red md:bg-blue z-100 font-bold w-20 h-20 lg:text-orange-500 text-amber-400 sm:text-red-500 md:text-blue-500 xl:text-green-500 after:content-['mobile(<640px)'] sm:after:content-['sm(>640px)'] md:after:content-['md(>768px)'] lg:after:content-['lg(>1024px)'] xl:after:content-['xl(>1280px)']">
          <p>Screen</p>
        </div> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
