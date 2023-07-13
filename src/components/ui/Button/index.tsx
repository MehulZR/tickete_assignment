import { ComponentProps } from "react";

interface btnInterface extends ComponentProps<"button"> {
  label: string;
  iconSVG?: JSX.Element;
  btnType: "primary";
}

export default function Button({
  label,
  iconSVG,
  btnType,
  ...props
}: btnInterface) {
  return (
    <button
      {...props}
      className={`${
        btnType === "primary" && "bg-black"
      } p-4  rounded-lg text-[#F6F6F7] flex gap-2 w-full sm:w-auto items-center justify-center`}
    >
      {label}
      {iconSVG}
    </button>
  );
}
