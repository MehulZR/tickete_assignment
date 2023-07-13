import { Field } from "formik";

interface formikSelectInterface {
  name: string;
  options: string[];
}

export default function FormikSelect({ name, options }: formikSelectInterface) {
  return (
    <Field
      as="select"
      name={name}
      className="p-4 bg-white border-2 rounded border-border"
    >
      {options.map((option, i) => {
        return (
          <option key={i} value={option}>
            {option}
          </option>
        );
      })}
    </Field>
  );
}
