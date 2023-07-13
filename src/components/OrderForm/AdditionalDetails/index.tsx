import FormikInput from "../FormikInput";
import FormikSelect from "../FormikSelect";

const options = ["Option 1", "Option 2", "Option 3"];

export default function AdditionalDetails() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-textPrimary">
        Additional Information
      </h2>
      <h3 className="mt-1 text-textSecondary">
        We need a few more details to complete your reservation.
      </h3>
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
        <FormikInput
          label="Custom Input"
          id="custom input"
          name="customInput"
        />
        <FormikSelect options={options} name="dropdown" />
      </div>
    </div>
  );
}
