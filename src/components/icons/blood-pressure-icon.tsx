import { cn } from "@/lib/utils";

const BloodPressureIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={cn("w-8 h-8", className)}
    {...props}
  >
    <path
      d="M192 448a32 32 0 01-32-32V64a32 32 0 0164 0v352a32 32 0 01-32 32z"
      fill="currentColor"
    ></path>
  </svg>
);

export default BloodPressureIcon;
