"use client";
import FormHeader from "@/components/backend/FormHeader";
import ArrayItemsInput from "@/components/ui/FormInputs/ArrayItemsInput";
import ImageInput from "@/components/ui/FormInputs/ImageInput";
import SubmitButton from "@/components/ui/FormInputs/SubmitButton";
import TextInput from "@/components/ui/FormInputs/TextInput";
import TextareaInput from "@/components/ui/FormInputs/TextareaInput";
import ToggleInput from "@/components/ui/FormInputs/ToggleInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/utils/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewService() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/services");
  }

  async function onSubmit(data: any) {
    /**
      title
     slug
     shortDescription
     description
     features
     image
     isActive
     */
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.features = features;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/services",
      data,
      "Service",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title="New Service" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Service Title"
            name="title"
            register={register}
            errors={errors}
            // className="w-full"
          />

          <TextareaInput
            label="Service Short Description"
            name="shortDescription"
            register={register}
            errors={errors}
          />

          <ImageInput
            label="Service Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="serviceImageUploader"
          />
          <ArrayItemsInput
            items={features}
            setItems={setFeatures}
            itemTitle="Service Features"
          />

          <TextareaInput
            label="Service Description"
            name="description"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ToggleInput
            label="Service Status"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating Training please wait..."
        />
      </form>
    </div>
  );
}
