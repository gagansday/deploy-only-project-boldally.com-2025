import { cn } from "@/lib/utils";

export default function BackgroundLight(
  props: React.HtmlHTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      {...props}
      className={cn(
        `w-[528px] aspect-square bg-secondary rounded-full -z-50 blur-[100px] absolute left-1/2 -translate-1/2
        ${props.className}`
      )}
    ></div>
  );
}
