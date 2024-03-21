import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/Navbar";
import { Props } from "@/utils/types";

export default function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <div className="w-full">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
