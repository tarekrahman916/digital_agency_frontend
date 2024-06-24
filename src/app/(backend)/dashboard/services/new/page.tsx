// @ts-nocheck
import NewServiceForm from "@/components/backend/NewServiceForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewService() {
  // const categoriesData = await getData("categories");

  // const categories = categoriesData.map((category: { id; title }) => {
  //   return {
  //     id: category.id,
  //     title: category.title,
  //   };
  // });

  return (
    <div>
      <h1>Service</h1>
      {/* <NewServiceForm categories={categories} /> */}
    </div>
  );
}
