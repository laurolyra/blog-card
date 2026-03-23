import CardTag from './CardTag';

interface BlogCardProps {
  imageAlt: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  tag: string;
  url: string;
}

export default function BlogCard({ imageAlt, imageSrc, title, subtitle, tag, url }: BlogCardProps) {
  return (
    <div className="w-85 h-126 rounded-lg">
      <img alt={imageAlt} src={imageSrc} className="rounded-t-lg w-85 h-72" />
      <div className="px-4 py-6 bg-white rounded-b-lg shadow-md gap-2">
        <CardTag tag={tag} bgColor="bg-[#F0FDF4]" borderColor="border-[#BBF7D0]" textColor="text-[#15803D]" />
        <div className="flex flex-col justify-between gap-3">
          <h1 className="font-bold text-lg">{title}</h1>
          <div className="flex flex-col justify-between h-24">
            <h2 className="text-[#525252] text-base">
              {subtitle}
            </h2>
            <div>
                <a className="text-[#4338CA] text-base" href={url} target="_blank" rel="noopener noreferrer">Read more <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
