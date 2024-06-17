import PageHeader from "@/components/backend/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Services"
        linkTitle="Add Service"
        href="/dashboard/services/new"
      />
    </div>
  );
}
