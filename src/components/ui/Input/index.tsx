import { ComponentProps } from "react";

interface inputInterface extends ComponentProps<"input"> {
  label: string;
  id: string;
  error: boolean;
}

export default function Input({ label, id, error, ...props }: inputInterface) {
  return (
    <div
      className={`relative w-full rounded border-2 ${
        error ? "border-Red" : "border-border"
      }`}
    >
      <label
        htmlFor={id}
        className="absolute left-3.5 -top-3 bg-white text-textSecondary"
      >
        &lt;{label}&gt;
      </label>
      <input className="w-full p-4 rounded" id={id} {...props} />
    </div>
  );
}
