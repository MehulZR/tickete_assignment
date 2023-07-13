interface cardInterface {
  iconSVG: JSX.Element;
  title: string;
  description: string;
}
export default function Card({ iconSVG, title, description }: cardInterface) {
  return (
    <div className="flex flex-row gap-4 p-4 rounded-lg sm:border sm:flex-col border-border">
      <div className="flex items-center justify-center w-6 h-6 sm:w-12 sm:h-12">
        {iconSVG}
      </div>
      <div>
        <p className="font-semibold text-textPrimary sm:mt-6">{title}</p>
        <p className="text-textSecondary">{description}</p>
      </div>
    </div>
  );
}
