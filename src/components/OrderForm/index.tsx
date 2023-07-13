import AdditionalDetails from "./AdditionalDetails";
import BasicDetails from "./BasicDetails";
import PaymentMethods from "./PaymentMethods";

export default function OrderForm() {
  return (
    <div className="container flex-grow">
      <h1 className="hidden text-5xl sm:block text-textPrimary">
        Confirm and pay
      </h1>
      <BasicDetails />
      <AdditionalDetails />
      <PaymentMethods />
    </div>
  );
}
