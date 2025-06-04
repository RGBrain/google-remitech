import SectionOne from "../../components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSix from "@/components/SectionSix";
import SectionSeven from "@/components/SectionSeven";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeTextWrapper from "@/components/FadeTextWrapper";

export default function Home() {
  return (
    <>
      <Header />
      {/* MOVE HEADER (and FOOTER) OUT OF LAYOUT AND INTO HERE, JUST SO THAT IT ALSO FADES INTO THE VIEW ON INITIAL PAGE LOAD */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <Footer />
    </>
  );
}
