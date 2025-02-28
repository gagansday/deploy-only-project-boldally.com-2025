import heroImage from "@/assets/home/hero.png";
import LogoSlider from "@/components/LogoSlider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 max-w-7xl w-full mx-auto">
      <div className="flex gap-8 justify-center py-16">
        <div className="">
          <h1 className="text-7xl leading-tight font-semibold">
            We Build{" "}
            <span className="text-primary">Websites, Apps and Software</span>{" "}
            That People Love
          </h1>
          <p className="mt-6 text-xl">
            Simple, user-friendly, and high-performing—just the way it should
            be.
          </p>

          <Button asChild className="mt-10">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Image src={heroImage} width={500} alt="" />
      </div>

      <div className="mt-10">
        <div className="text-center">
          Trusted by 100+ satisfied clients across the globe.
        </div>
        <div className="mt-10">
          <LogoSlider />
        </div>
      </div>
    </section>
  );
}
