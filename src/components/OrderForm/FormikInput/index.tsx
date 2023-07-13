import Input from "@/components/ui/Input";
import { useField, FieldHookConfig } from "formik";

type FormikInputInterface = FieldHookConfig<any> & {
  label: string;
  id: string;
};

export default function FormikInput(props: FormikInputInterface) {
  const [field, meta, helpers] = useField(props);
  return (
    <div className="flex flex-col">
      <Input
        id={props.id}
        label={props.label}
        placeholder={props.placeholder}
        type={props.type}
        {...field}
        error={meta.error && meta.touched ? true : false}
      />
      {meta.error && meta.touched && (
        <div className="p-2 text-Rust">{meta.error}</div>
      )}
    </div>
  );
}
