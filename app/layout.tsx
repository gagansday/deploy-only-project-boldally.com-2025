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
      <body className={`${plusJakartaSans.variable}  font-sans relative`}>
        <div className="w-[528px] aspect-square bg-secondary rounded-full -z-50 blur-[100px] absolute left-1/2 -translate-1/2"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
