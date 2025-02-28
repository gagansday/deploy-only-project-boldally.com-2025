import Hero from "@/components/sections/home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Boldally",
  description: "",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
