import { cn } from "@/lib/utils";

export default function BackgroundLight(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={cn(
        `absolute w-[528px] aspect-square bg-secondary rounded-full -z-50 blur-[100px]
        ${props.className}`
      )}
    ></div>
  );
}
