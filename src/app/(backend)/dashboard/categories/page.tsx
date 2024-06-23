import PageHeader from "@/components/backend/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
    </div>
  );
}
