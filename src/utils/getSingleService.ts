export const getSingleService = async (id: any) => {
  const res = await fetch(`http://localhost:5000/api/v1/services/${id}`, {
    cache: "no-store",
  });
  return res.json();
};
