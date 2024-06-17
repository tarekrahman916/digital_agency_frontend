"use client";
import FormHeader from "@/components/backend/FormHeader";
import ArrayItemsInput from "@/components/ui/FormInputs/ArrayItemsInput";
import ImageInput from "@/components/ui/FormInputs/ImageInput";
import SelectInput from "@/components/ui/FormInputs/SelectInput";
import SubmitButton from "@/components/ui/FormInputs/SubmitButton";
import TextInput from "@/components/ui/FormInputs/TextInput";
import TextareaInput from "@/components/ui/FormInputs/TextareaInput";
import ToggleInput from "@/components/ui/FormInputs/ToggleInput";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/utils/apiRequest";
import { Button, Upload } from "antd";
import { CloudUpload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewService() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [features, setFeatures] = useState([]);
  const [technology, setTechnology] = useState([]);

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
    router.push("/dashboard/projects");
  }
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];
  async function onSubmit(data: any) {
    /**
    title
    slug
    category
    codeLink
    liveLink
    features
    imageUrl
    isActive
     */
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.image = imageUrl;
    data.features = features;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/projects",
      data,
      "Project",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title="New Project" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Project Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="category"
            register={register}
            options={categories}
            className="w-full"
          />
          <TextInput
            label="Project Live Link"
            name="liveLink"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Project Code Link"
            name="codeLink"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ImageInput
            label="Project Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="projectImageUploader"
          />
          <ArrayItemsInput
            items={features}
            setItems={setFeatures}
            itemTitle="Project Features"
          />
          <ArrayItemsInput
            items={technology}
            setItems={setTechnology}
            itemTitle="Project Technology"
          />
          <ToggleInput
            label="Project Status"
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
