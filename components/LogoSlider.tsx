import aladdinmedia from "@/assets/client-logos/aladdinmedia.png";
import asnasoftwaresolution from "@/assets/client-logos/asnasoftwaresolution.png";
import attarshastra from "@/assets/client-logos/attarshastra.png";
import bhagyashaaliWelfareFoundation from "@/assets/client-logos/bhagyashaali-welfare-foundation.png";
import chromaTechServices from "@/assets/client-logos/chroma-tech-services.webp";
import cityLineCollection from "@/assets/client-logos/city-line-collection.png";
import companiesHouse from "@/assets/client-logos/companies-house.svg";
import dietitianMiksha from "@/assets/client-logos/dietitian-miksha.png";
import emerhub from "@/assets/client-logos/emerhub.svg";
import gaadiBuy from "@/assets/client-logos/gaadi-buy.png";
import galeciaGroup from "@/assets/client-logos/galecia-group.png";
import globusMachinesPvtLtd from "@/assets/client-logos/globus-machines-pvt-ltd.png";
import hasten from "@/assets/client-logos/hasten.png";
import heavenlyHome from "@/assets/client-logos/heavenly-home.png";
import jyotiAyurClinicLogo from "@/assets/client-logos/jyoti-ayur-clinic-logo.png";
import lazyBaby from "@/assets/client-logos/lazy-baby.svg";
import mspGlobal from "@/assets/client-logos/msp-global.png";
import myDreamHomeCare from "@/assets/client-logos/my-dream-home-care.png";
import niyaOverseas from "@/assets/client-logos/niya-overseas.svg";
import onKampus from "@/assets/client-logos/onkampus.svg";
import organishHerbal from "@/assets/client-logos/organish-herbal.png";
import seoscout from "@/assets/client-logos/seoscout.svg";
import texTrend from "@/assets/client-logos/tex-trend.svg";
import theInsuranceProblem from "@/assets/client-logos/the-insurance-problem.png";
import theNutritionBox from "@/assets/client-logos/the-nutrition-box.png";
import theAirApp from "@/assets/client-logos/theairapp.svg";
import triStates from "@/assets/client-logos/tri-states.png";
import upkarGroup from "@/assets/client-logos/upkar-group.png";
import vTeach from "@/assets/client-logos/v-teach.png";
import vkCarLoan from "@/assets/client-logos/vk-car-loan.png";
import vska from "@/assets/client-logos/vska.png";
import vyzionInnovations from "@/assets/client-logos/vyzion-innovations.svg";
import watsupUsa from "@/assets/client-logos/watsup-usa.png";

import { cn } from "@/lib/utils";
import Image from "next/image";
interface Logo {
  image: string;
  className?: string;
}
// invert grayscale brightness-0
const clientLogos: Logo[] = [
  { image: aladdinmedia, className: "h-8 brightness-0 invert" },
  {
    image: asnasoftwaresolution,
    className: "h-10 brightness-0 invert",
  },
  { image: attarshastra, className: "h-10 invert brightness-0" },
  {
    image: bhagyashaaliWelfareFoundation,
    className: "h-10 invert brightness-0",
  },
  { image: chromaTechServices, className: "h-10 invert brightness-0" },
  { image: cityLineCollection, className: "h-9 invert brightness-0" },
  { image: companiesHouse, className: "h-10 invert" },
  { image: dietitianMiksha, className: "h-10 invert brightness-0" },
  { image: emerhub, className: "h-10 invert" },
  { image: gaadiBuy, className: "h-10 invert brightness-0" },
  { image: galeciaGroup, className: "h-16 invert brightness-0" },
  { image: globusMachinesPvtLtd, className: "h-10 invert brightness-0" },
  { image: hasten, className: "h-12 invert brightness-0" },
  { image: heavenlyHome, className: "h-14 invert brightness-0" },
  { image: jyotiAyurClinicLogo, className: "h-10 invert brightness-0" },
  { image: lazyBaby, className: "h-10 invert brightness-0" },
  { image: onKampus, className: "h-10 invert brightness-0" },
  { image: mspGlobal, className: "h-10 invert brightness-0" },
  { image: myDreamHomeCare, className: "h-12 invert brightness-0" },
  { image: niyaOverseas, className: "h-10 invert brightness-0" },
  { image: organishHerbal, className: "h-10 invert brightness-0" },
  { image: seoscout, className: "h-10 invert grayscale brightness-50" },
  { image: texTrend, className: "h-10 invert brightness-0" },
  { image: theInsuranceProblem, className: "h-10 invert brightness-0" },
  { image: theNutritionBox, className: "h-10" },
  { image: theAirApp, className: "h-10 invert grayscale brightness-50" },
  { image: triStates, className: "h-10 invert brightness-0" },
  { image: upkarGroup, className: "h-10 invert brightness-0" },
  { image: vTeach, className: "h-10 invert brightness-0" },
  { image: vkCarLoan, className: "h-10 invert brightness-0" },
  { image: vska, className: "h-10 invert brightness-0" },
  { image: vyzionInnovations, className: "h-10 invert brightness-0" },
  { image: watsupUsa, className: "h-10 invert brightness-0" },
];

export default function LogoSlider() {
  return (
    <div className="relative overflow-clip">
      <div className="bg-logo-slider absolute z-10 inset-0"></div>
      <div className="flex items-center w-[max-content] gap-14 pr-14 animate-[scroll_50s_linear_infinite]">
        {Array.from({ length: 2 }).map((_, i) =>
          clientLogos.map((logo, index) => (
            <Image
              key={"key" + i + index}
              src={logo.image}
              alt=""
              priority={true}
              className={cn(`${logo.className}`, "flex-none w-fit")}
            />
          ))
        )}
      </div>
    </div>
  );
}
