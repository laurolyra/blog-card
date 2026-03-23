interface BlogCardProps {
  imageAlt: string;
  imageSrc: string;
}

export default function BlogCard({ imageAlt, imageSrc }: BlogCardProps) {
  return (
    <div className="w-85 h-126 rounded-lg">
      <img alt={imageAlt} src={imageSrc} className="rounded-t-lg w-85 h-72" />
      <div className="px-4 py-6 bg-white rounded-b-lg shadow-md gap-2">
        <div className="py-0.5 px-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl w-fit">
          <p className="text-[#15803D] text-sm">Interior</p>
        </div>
        <div className="flex flex-col justify-between gap-3">
          <h1 className="font-bold text-lg">Top 5 Living Room Inspirations</h1>
          <div className="flex flex-col justify-between h-24">
            <h2 className="text-[#525252] text-base">
              Curated vibrants colors for your living, make it pop & calm in the
              same time.
            </h2>
            <div>
                <p className="text-[#4338CA] text-base">Read more <span>→</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
