import { cva } from "class-variance-authority";
import CardTag from "./CardTag";

const readMoreButton = cva(
  "inline-flex items-center gap-1 text-base border border-transparent rounded-lg px-0.5 py-0.5 focus:outline-none focus:ring-2 transition-colors",
  {
    variants: {
      intent: {
        primary: "text-[#4338CA] hover:text-[#3730A3] focus:ring-[#4338CA]/20 cursor-pointer",
        disabled: "opacity-50 cursor-not-allowed text-[#A3A3A3]",
      },
    },
    defaultVariants: { intent: "primary" },
  }
);

interface BlogCardProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  tag: string;
  url?: string;
  handleButtonClick?: () => void;
}

export default function BlogCard({
  imageAlt,
  imageSrc,
  title,
  subtitle,
  tag,
  url,
  handleButtonClick,
}: BlogCardProps) {
  return (
    <div className="w-85 h-126 rounded-lg">
      <img alt={imageAlt} src={imageSrc} className="rounded-t-lg w-85 h-72" />
      <div className="px-4 py-6 bg-white rounded-b-lg shadow-md flex flex-col gap-2">
        <CardTag
          tag={tag}
          bgColor="bg-[#F0FDF4]"
          borderColor="border-[#BBF7D0]"
          textColor="text-[#15803D]"
        />
        <div className="flex flex-col justify-between gap-3">
          <h1 className="font-bold text-lg">{title}</h1>
          <div className="flex flex-col justify-between h-24">
            <h2 className="text-[#525252] text-base">{subtitle}</h2>
            <div>
              <button
                onClick={handleButtonClick}
                disabled={!url}
                className={readMoreButton({ intent: url ? "primary" : "disabled" })}
              >
                Read more <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
