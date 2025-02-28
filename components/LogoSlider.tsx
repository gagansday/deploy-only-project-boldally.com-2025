interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://shadcnblocks.com/images/block/logos/astro.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://shadcnblocks.com/images/block/logos/figma.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://shadcnblocks.com/images/block/logos/react.png",
    className: "h-7 w-auto",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
    className: "h-4 w-auto",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
    className: "h-7 w-auto",
  },
];

export default function LogoSlider() {
  return (
    <div className="bg-white/20 flex items-center justify-center h-12">
      Logos
    </div>
  );
}
