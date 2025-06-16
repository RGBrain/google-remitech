import SectionOne from "../../components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";

export default function Home() {
  return (
    <>
      <ClientOnlyWrapper>
        <Header />
      </ClientOnlyWrapper>
      {/* MOVE HEADER (and FOOTER) OUT OF LAYOUT AND INTO HERE SO THAT IT ALSO FADES INTO THE VIEW ON INITIAL PAGE LOAD */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </>
  );
}
