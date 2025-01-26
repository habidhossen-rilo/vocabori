import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-layout">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
