import FormikInput from "../FormikInput";

export default function BasicDetails() {
  return (
    <div className="mt-8 sm:mt-16">
      <h2 className="text-2xl font-semibold text-textPrimary">
        Enter your details
      </h2>
      <h3 className="mt-1 text-textSecondary">
        We'll be sending your tickets to the details below. Booking for a
        friend? Add their details.
      </h3>
      <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
        <FormikInput label="name" id="name" name="name" />
        <FormikInput
          label="Phone Number"
          id="phone number"
          name="phoneNumber"
        />
        <FormikInput label="Email" id="email" name="email" />
        <FormikInput
          label="Confirm Email"
          id="confirm email"
          name="confirmEmail"
        />
      </div>
    </div>
  );
}
