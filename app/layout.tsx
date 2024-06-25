"ActiveSectionContext";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContext from "@/components/ActiveSectionContext";
import { ToastContainer } from 'react-toastify';
import Footer from "@/components/Footer";
import DarkModeBtn from "@/components/DarkModeBtn";
import {ThemeContextProvider} from "@/components/ThemeContext";


const inter = Inter({ subsets: ["greek"] });

export const metadata: Metadata = {
  title: "Jonathan Greenberg | Portfolio",
  description: "Greenberg is a full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        {/* left side of the page Color */}
        <div className="bg-[#f9d9da] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem] w-[31rem] rounded-full blur-[10rem] sm:w-[68rem] dark:bg-[#946263]"></div>
        {/* right side of the page Color */}
        <div className="bg-[#cac5f1] absolute top-[-1rem] -z-10 left-[-35rem] h-[31rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ToastContainer />
        <ThemeContextProvider>
          <ActiveSectionContext>
            <Header />
            {children}
            <Footer />
            <DarkModeBtn />
          </ActiveSectionContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
