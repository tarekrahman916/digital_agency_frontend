/* eslint-disable react-hooks/rules-of-hooks */
// @ts-nocheck
"use client";
import SubmitButton from "@/components/ui/FormInputs/SubmitButton";
import TextInput from "@/components/ui/FormInputs/TextInput";
import TextareaInput from "@/components/ui/FormInputs/TextareaInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    console.log(data);

    const templatePatterns = {
      from_name: data.email,
      from_subject: data.subject,
      to_name: "Techneto It",
      message: data.message,
    };
    setLoading(true);
    emailjs
      .send(
        "service_uxwnifo",
        "template_2ehyvbk",
        templatePatterns,
        "In4vwXx4ASBD-DTkh"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message send successfully ");
          setLoading(false);
          reset();
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="flex flex-col lg:flex-row gap-3">
          <TextInput
            label="Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full mb-3"
          />
          <TextInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            type="email"
            className="w-full mb-5"
          />
        </div>
        <TextInput
          label="Subject"
          name="subject"
          register={register}
          errors={errors}
          type="text"
          className="w-full mb-3"
        />
        <TextareaInput
          label="Message"
          name="message"
          register={register}
          errors={errors}
        />
        <SubmitButton
          isLoading={loading}
          buttonTitle="Send Your Message"
          loadingButtonTitle="Message sending please wait..."
        />
      </form>
    </div>
  );
};

export default ContactForm;
