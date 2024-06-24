export const getAllServices = async () => {
  const res = await fetch(
    " https://digital-agency-frontend-91mfnybkp-tarekrahman916s-projects.vercel.app/api/v1/services",
    {
      cache: "no-cache",
    }
  );
  return res.json();
};
