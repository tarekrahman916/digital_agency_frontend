import PageHeader from "@/components/backend/PageHeader";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHeader
        heading="Projects"
        linkTitle="Add Project"
        href="/dashboard/projects/new"
      />
    </div>
  );
}
