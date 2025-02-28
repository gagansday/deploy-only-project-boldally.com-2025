import BackgroundLight from "@/components/BackgroundLight";
import BackgroundLogo from "@/components/BackgroundLogo";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-title" content="Boldally" />
      <body className={`${plusJakartaSans.variable}  font-sans relative`}>
        <BackgroundLight className="left-1/2 -translate-1/2" />
        <Navbar />
        <BackgroundLogo />
        {children}
      </body>
    </html>
  );
}
