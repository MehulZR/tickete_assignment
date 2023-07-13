"use client";
import { Form, Formik, useFormik } from "formik";
import { object, string, boolean, number, InferType, array } from "yup";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OrderForm from "@/components/OrderForm";
import TicketPanel from "@/components/TicketPanel";

export default function Home() {
  const initialValues = {
    name: "",
    email: "",
    confirmEmail: "",
    phoneNumber: "",
    customInput: "",
    dropdown: "Option 1",
    nameOnCard: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    emailSuggestions: true,
    paymentMethod: "Credit Card",
  };

  const validationSchema = object({
    name: string().min(3).required(),
    email: string().email().required(),
    confirmEmail: string().email().required(),
    phoneNumber: string().required(),
    confirmInput: string(),
    dropdown: string(),
    nameOnCard: string().required(),
    cardNumber: string().required(),
    cardExpiry: string().required(),
    cardCVV: string().required(),
    emailSuggestions: boolean(),
    paymentMethod: string().required(),
  });

  return (
    <div>
      <Navbar />
      <Formik
        initialValues={initialValues}
        onSubmit={(val) => console.log(val)}
        validationSchema={validationSchema}
      >
        <Form className="container flex flex-col-reverse sm:flex-row justify-between px-6 pt-[50px] sm:pt-[100px] gap-6">
          <OrderForm />
          <div className=" bg-gray-300 w-full h-[1px]  sm:h-auto sm:w-[1px]"></div>
          <TicketPanel />
        </Form>
      </Formik>
      <div className="container px-6 my-6">
        <div className="h-[1px] bg-gray-300"></div>
      </div>
      <FAQ />
      <div className="container px-6 my-6">
        <div className="h-[1px] bg-gray-300"></div>
      </div>
      <Features />
      <Footer />
    </div>
  );
}
