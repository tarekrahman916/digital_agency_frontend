export const getSingleService = async (id: any) => {
  const res = await fetch(
    ` https://digital-agency-frontend-91mfnybkp-tarekrahman916s-projects.vercel.app/api/v1/services/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};
