interface CardTagProps {
  tag: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export default function CardTag({ tag, bgColor, borderColor, textColor }: CardTagProps) {
  return (
    <div className={`py-0.5 px-2 ${bgColor} border ${borderColor} rounded-2xl w-fit`}>
      <p className={`${textColor} text-sm`}>{tag}</p>
    </div>
  );
}
