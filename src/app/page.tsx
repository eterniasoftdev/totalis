import Appointment from "@/app/_components/Appointment/Page";
import Hero from "@/app/_components/Hero/Hero";
import Hero2 from "@/app/_components/Hero2/page";
import Stories from "@/app/_components/Stories/page";
// import Image from "next/image";
import Solutions from "./_components/Solutions/Page";
import ContactUs from "./_components/ContactUs/Page";
import Applications from "./_components/Applications/Page";
import Projects from "./projects/page";
import About from "./_components/About/page";
// import StickyNav from "./_components/StickyEnquiry/Page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden ">
      <Hero />
      {/* <Stories /> */}

      <Applications />
      {/* <Solutions /> */}
      <div className="w-screen h-78 flex my-8">
        <img
          src="/img/Totalis_Web_Banner.jpg"
          alt=""
          className="w-full object-cover"
        />
      </div>
      <Projects />
      <div className="hidden lg:block">
        <Hero2 url={"/img/Totalis_Leaflet_product.jpg"} />
      </div>
      <About />
      <Appointment />
      {/* <ContactUs /> */}
    </main>
  );
}
