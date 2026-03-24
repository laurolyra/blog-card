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

interface TagItem {
  tag: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

interface BlogCardProps {
  image: {
    src: string;
    alt: string;
  };
  title: string;
  subtitle: string;
  tags: TagItem[];
  url?: string;
  handleButtonClick?: () => void;
}

export default function BlogCard({
  image: { src, alt },
  title,
  subtitle,
  tags,
  url,
  handleButtonClick,
}: BlogCardProps) {
  return (
    <div className="w-85 h-126 rounded-lg">
      <img alt={alt} src={src} className="rounded-t-lg w-85 h-72" />
      <div className="px-4 py-6 bg-white rounded-b-lg shadow-md flex flex-col gap-2">
        <div className="flex flex-wrap gap-1">
          {tags.map(({ tag, bgColor, borderColor, textColor }) => (
            <CardTag
              key={tag}
              tag={tag}
              bgColor={bgColor}
              borderColor={borderColor}
              textColor={textColor}
            />
          ))}
        </div>
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
