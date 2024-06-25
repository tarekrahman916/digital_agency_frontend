// @ts-nocheck
import NewServiceForm from "@/components/backend/NewServiceForm";
import { getData } from "@/lib/getData";

export default async function NewService() {
  let categoriesData;

  try {
    categoriesData = await getData("categories");
    console.log("Fetched categories data:", categoriesData);
  } catch (error) {
    console.error("Failed to fetch categories data:", error);
    return <div>Error loading categories. Please try again later.</div>;
  }

  if (!Array.isArray(categoriesData)) {
    console.error("Categories data is not an array:", categoriesData);
    return <div>Error loading categories. Please try again later.</div>;
  }

  const categories = categoriesData.map((category: { id; title }) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return <NewServiceForm categories={categories} />;
}
