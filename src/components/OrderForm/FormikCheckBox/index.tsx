"use client";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { FieldHookConfig, useField } from "formik";

type FormikCheckboxInterface = FieldHookConfig<any> & {
  label: string;
  bgColor?: string;
  id: string;
};

export default function FormikCheckbox(props: FormikCheckboxInterface) {
  const [field, meta, helper] = useField(props);
  return (
    <div
      className={`flex justify-start gap-3 items-center p-4 rounded-lg ${
        props.bgColor && props.bgColor
      }`}
    >
      <RadixCheckbox.Root checked={field.value} asChild>
        <div>
          <input {...field} type="checkbox" id={props.id} hidden />
          <label
            htmlFor={props.id}
            className="flex items-center justify-center w-6 h-6 border-[2.5px] border-black rounded-full"
          >
            <RadixCheckbox.Indicator>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#0A0A0A"
                  stroke="#0A0A0A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  fill="#F5F5F5"
                  stroke="#F5F5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </RadixCheckbox.Indicator>
          </label>
        </div>
      </RadixCheckbox.Root>
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
