import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Providers from "@/lib/Providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Providers>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        {/* <ScrollTop /> */}
      </Providers>
    </>
  );
};

export default RootLayout;
