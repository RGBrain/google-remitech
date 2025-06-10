import SectionOne from "../../components/SectionOne";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import SectionFive from "@/components/SectionFive";
import SectionSeven from "@/components/SectionSeven";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeTextWrapper from "@/components/FadeTextWrapper";
import ClientOnlyWrapper from "@/components/ClientOnlyWrapper";
import SectionForthcomingEvents from "@/components/SectionFour";

export default function Home() {
  return (
    <>
      <ClientOnlyWrapper>
        <Header />
      </ClientOnlyWrapper>
      {/* MOVE HEADER (and FOOTER) OUT OF LAYOUT AND INTO HERE, JUST SO THAT IT ALSO FADES INTO THE VIEW ON INITIAL PAGE LOAD */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      {/* <Footer /> */}
    </>
  );
}
