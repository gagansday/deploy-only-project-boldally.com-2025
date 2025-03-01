import BackgroundLight from "@/components/BackgroundLight";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    title: "UI/UX Design",
    description:
      "We design beautiful, user-friendly experiences that keep your audience engaged.",
    href: "/services/ui-ux-design",
  },
  {
    title: "Web Development",
    description:
      "We build fast, secure, and scalable websites that deliver results.",
    href: "/services/web-development",
  },
  {
    title: "Mobile Development",
    description: "We develop high-performance mobile apps for all platforms.",
    href: "/services/mobile-development",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions to improve efficiency and business operations.",
    href: "/services/custom-software-development",
  },
  {
    title: "Integration Services",
    description:
      "Seamlessly connect third-party tools to enhance your digital ecosystem.",
    href: "/services/integration-services",
  },
  {
    title: "API Development",
    description: "We build secure, scalable APIs for seamless data exchange.",
    href: "/services/integration-services",
  },
];

export default function Services() {
  return (
    <section className="py-24 max-w-7xl w-full mx-auto">
      <div className="flex flex-col relative">
        <BackgroundLight className="top-1/5 -translate-y-1/5" />
        <h2 className="uppercase">Our Services</h2>
        <div className="flex justify-between gap-8 ">
          <div className="mt-2 capitalize text-6xl">What We Do</div>
          <div className="max-w-2xl">
            At Boldally, we create smart, scalable, and high-performing digital
            solutions tailored to your business needs. From stunning UI/UX
            design to seamless web and mobile development, we build digital
            experiences that drive growth.
          </div>
        </div>
      </div>
      <div className="mt-16">
        {services.map((service, index) => (
          <Link href={service.href} key={service.title}>
            <div
              className={cn(
                "relative flex items-center gap-8 py-6 px-8 border-b border-slate-200 hover:text-slate-950 transition-all hover:border-white hover:bg-white group",
                {
                  "border-t": index === 0,
                }
              )}
            >
              <h3 className="flex-none text-3xl font-semibold w-96">
                {service.title}
              </h3>
              <div className="flex-none text-slate-200">
                {service.description}
              </div>

              <div className="ml-auto size-12 rounded-full border-2 flex justify-center items-center border-slate-200 group-hover:bg-primary group-hover:border-primary group-hover:text-white group-hover:-rotate-45 transition-all">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6895 11.25H3.75C3.55109 11.25 3.36032 11.329 3.21967 11.4696C3.07902 11.6103 3 11.8011 3 12C3 12.1989 3.07902 12.3896 3.21967 12.5303C3.36032 12.671 3.55109 12.75 3.75 12.75H17.6895L12.219 18.219C12.0782 18.3598 11.9991 18.5508 11.9991 18.75C11.9991 18.9491 12.0782 19.1401 12.219 19.281C12.3598 19.4218 12.5508 19.5009 12.75 19.5009C12.9492 19.5009 13.1402 19.4218 13.281 19.281L20.031 12.531C20.1008 12.4613 20.1563 12.3785 20.1941 12.2874C20.2319 12.1963 20.2513 12.0986 20.2513 12C20.2513 11.9013 20.2319 11.8036 20.1941 11.7125C20.1563 11.6214 20.1008 11.5386 20.031 11.469L13.281 4.71897C13.1402 4.57814 12.9492 4.49902 12.75 4.49902C12.5508 4.49902 12.3598 4.57814 12.219 4.71897C12.0782 4.8598 11.9991 5.05081 11.9991 5.24997C11.9991 5.44913 12.0782 5.64014 12.219 5.78097L17.6895 11.25Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
