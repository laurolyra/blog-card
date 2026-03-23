interface BlogCardProps {
    imageAlt: string;
    imageSrc: string;
}

export default function BlogCard({imageAlt, imageSrc}: BlogCardProps) {
    
    return (
        <div className="w-85 h-129.5 font-sans rounded-lg">
            <img
            alt={imageAlt}
            src={imageSrc}
            className="rounded-t-lg"
            />
            <div className="p-4 pb-6 flex flex-col justify-between bg-white rounded-b-lg shadow-md">
                <div className="py-0.5 px-2 bg-[#F0FDF4] border border-[#BBF7D0] rounded-2xl w-fit">
                    <p className="text-[#15803D] text-sm">Interior</p>
                </div>
                    <h1 className="font-bold text-lg">Top 5 Living room Inspirations</h1>
                <div>
                    <h2 className="text-[#525252] text-base">Curated vibrants colors for your living, make it pop & calm in the same time.</h2>
                    <p className="text-[#4338CA] text-base">Read more</p>
                </div>
            </div>
        </div>
    )

}