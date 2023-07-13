import * as RadioGroup from "@radix-ui/react-radio-group";
import Link from "next/link";
import Button from "../../ui/Button";
import FormikInput from "../FormikInput";
import { Field } from "formik";
import FormikCheckbox from "../FormikCheckBox";

export default function PaymentMethods() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-semibold text-textPrimary">
        Select your mode of payment
      </h2>
      <h3 className="mt-1 text-textSecondary">
        Payments with Tickete are secure and encrypted.
      </h3>
      <div className="mt-8 divide-y divide-border">
        <RadioGroup.Root defaultValue="Credit Card">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V9.08437V17.9906C1.5 18.3884 1.65804 18.77 1.93934 19.0513C2.22064 19.3326 2.60218 19.4906 3 19.4906H21C21.3978 19.4906 21.7794 19.3326 22.0607 19.0513C22.342 18.77 22.5 18.3884 22.5 17.9906V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM12.75 16.5H11.25C11.0511 16.5 10.8603 16.421 10.7197 16.2803C10.579 16.1397 10.5 15.9489 10.5 15.75C10.5 15.5511 10.579 15.3603 10.7197 15.2197C10.8603 15.079 11.0511 15 11.25 15H12.75C12.9489 15 13.1397 15.079 13.2803 15.2197C13.421 15.3603 13.5 15.5511 13.5 15.75C13.5 15.9489 13.421 16.1397 13.2803 16.2803C13.1397 16.421 12.9489 16.5 12.75 16.5ZM18.75 16.5H15.75C15.5511 16.5 15.3603 16.421 15.2197 16.2803C15.079 16.1397 15 15.9489 15 15.75C15 15.5511 15.079 15.3603 15.2197 15.2197C15.3603 15.079 15.5511 15 15.75 15H18.75C18.9489 15 19.1397 15.079 19.2803 15.2197C19.421 15.3603 19.5 15.5511 19.5 15.75C19.5 15.9489 19.421 16.1397 19.2803 16.2803C19.1397 16.421 18.9489 16.5 18.75 16.5ZM3 8.33437V6H21V8.33437H3Z"
                  fill="#474747"
                />
              </svg>
              <label htmlFor="Option 1">Credit & debit card</label>
            </div>
            <RadioGroup.Item
              id="paymentMethod"
              value="Credit Card"
              className="group"
              asChild
            >
              <div>
                <Field
                  type="radio"
                  id="Option 1"
                  name="paymentMethod"
                  value="Credit Card"
                  hidden
                />
                <label
                  htmlFor="Option 1"
                  className="flex items-center justify-center w-6 h-6 border-[2.5px] border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="w-6 h-6 flex-shrink-0 group-data-[state=unchecked]:hidden"
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
                </label>
              </div>
            </RadioGroup.Item>
          </div>
          <div className="grid grid-cols-1 gap-6 py-6 sm:grid-cols-2">
            <FormikInput
              label="Name on Card"
              id="name on card"
              name="nameOnCard"
            />
            <FormikInput
              label="Card Number"
              id="card number"
              name="cardNumber"
            />
            <FormikInput
              label="Card Expiry"
              id="card expiry"
              name="cardExpiry"
            />
            <FormikInput
              label="CVV/CVC"
              id="cvv/cvc"
              name="cardCVV"
              type="password"
            />
          </div>
          <div className="flex items-center justify-between py-6 border-y-border border-y">
            <div className="flex items-center justify-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className="w-6 h-6"
                viewBox="0 0 35 24"
                fill="none"
              >
                <rect
                  y="6.10352e-05"
                  width="35"
                  height="24"
                  rx="4"
                  fill="#FEB4C7"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.42416 15.3797H4V9.00006H5.42416V15.3797ZM8.97973 9.00006H7.58645C7.58645 10.1741 7.06142 11.2516 6.14601 11.9566L5.59402 12.3816L7.73282 15.3799H9.49132L7.52334 12.621C8.4562 11.666 8.97973 10.3812 8.97973 9.00006ZM11.2513 15.3779H9.90633V9.00128H11.2513V15.3779ZM15.3148 10.9669V11.2491C14.9519 10.9946 14.5139 10.845 14.0415 10.845C12.7911 10.845 11.7775 11.8871 11.7775 13.1725C11.7775 14.458 12.7911 15.5 14.0415 15.5C14.5139 15.5 14.9519 15.3505 15.3148 15.096V15.3779H16.5995V10.9669H15.3148ZM15.3109 13.1727C15.3109 13.7995 14.7898 14.3076 14.1469 14.3076C13.5041 14.3076 12.9829 13.7995 12.9829 13.1727C12.9829 12.5459 13.5041 12.0379 14.1469 12.0379C14.7898 12.0379 15.3109 12.5459 15.3109 13.1727ZM28.8671 11.2491V10.9669H30.1517V15.3779H28.8671V15.096C28.5042 15.3505 28.0662 15.5 27.5937 15.5C26.3433 15.5 25.3297 14.458 25.3297 13.1725C25.3297 11.8871 26.3433 10.845 27.5937 10.845C28.0662 10.845 28.5042 10.9946 28.8671 11.2491ZM27.6991 14.3076C28.342 14.3076 28.8631 13.7995 28.8631 13.1727C28.8631 12.5459 28.342 12.0379 27.6991 12.0379C27.0563 12.0379 26.5352 12.5459 26.5352 13.1727C26.5352 13.7995 27.0563 14.3076 27.6991 14.3076ZM23.047 10.8484C22.5338 10.8484 22.0482 11.0122 21.7235 11.4641V10.9673H20.4445V15.378H21.7392V13.06C21.7392 12.3893 22.1768 12.0608 22.7035 12.0608C23.2681 12.0608 23.5927 12.4075 23.5927 13.0509V15.378H24.8757V12.573C24.8757 11.5465 24.0819 10.8484 23.047 10.8484ZM18.5866 10.9669V11.5414C18.8442 11.1968 19.324 10.9672 19.8456 10.9672V12.2507L19.8411 12.2506L19.8385 12.2504L19.8304 12.2502C19.3221 12.2502 18.5896 12.6236 18.5896 13.3184V15.3779H17.2714V10.9669H18.5866ZM30.7092 14.6421C30.7092 14.1843 31.0701 13.8133 31.5153 13.8133C31.9605 13.8133 32.3214 14.1843 32.3214 14.6421C32.3214 15.0997 31.9605 15.4708 31.5153 15.4708C31.0701 15.4708 30.7092 15.0997 30.7092 14.6421Z"
                  fill="#17120F"
                />
              </svg>
              <span>Klarna</span>
            </div>
            <RadioGroup.Item
              value="Klarna"
              id="paymentMethod"
              className="group"
              asChild
            >
              <div>
                <Field
                  type="radio"
                  id="option 2"
                  value="klarna"
                  name="paymentMethod"
                  hidden
                />
                <label
                  htmlFor="option 2"
                  className="flex items-center justify-center w-6 h-6 border-[2.5px] border-black rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    className="w-6 h-6 flex-shrink-0 group-data-[state=unchecked]:hidden"
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
                </label>
              </div>
            </RadioGroup.Item>
          </div>
        </RadioGroup.Root>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-textPrimary">Total Price</h2>
        <span className="text-xs underline text-textSecondary decoration-textSecondary underline-offset-1">
          You will pay in currency
        </span>
        <div className="mt-10">
          <FormikCheckbox
            id="emailSuggestions"
            label="Receive travel tips, suggestions and offers in <city> by email"
            bgColor="bg-gray-100"
            name="emailSuggestions"
          />
        </div>
        <div className="mt-5 text-textSecondary">
          <h3 className="text-xs">
            With payment, you agree to the general{" "}
            <Link href="#" className="text-Blue">
              terms and conditions of Tickete
            </Link>{" "}
            & the{" "}
            <Link href="#" className="text-Blue">
              activity provider.
            </Link>
          </h3>
          <div className="mt-3">
            <Button
              btnType="primary"
              label="Confirm and Pay"
              type="submit"
              iconSVG={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="w-5 h-5"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.25 3.625H3.75C3.41848 3.625 3.10054 3.7567 2.86612 3.99112C2.6317 4.22554 2.5 4.54348 2.5 4.875V9.46094C2.5 16.4453 8.42188 18.7656 9.60938 19.1562C9.8631 19.2397 10.1369 19.2397 10.3906 19.1562C11.5781 18.7656 17.5 16.4453 17.5 9.46094V4.875C17.5 4.54348 17.3683 4.22554 17.1339 3.99112C16.8995 3.7567 16.5815 3.625 16.25 3.625ZM10 17.9688C9.00781 17.6406 4.35156 15.8125 3.80469 10.5H10V4.875H16.25V9.46094C16.2519 9.80806 16.2336 10.155 16.1953 10.5H10V17.9688Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
