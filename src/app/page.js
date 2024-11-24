import HomeMenu from "../components/HomeMenu";
// import Hero from "@/components/layout/Hero";
// import SectionHeaders from "@/components/layout/SectionHeaders";
import Hero from "../components/layout/Hero";
import Link from "next/link";
import SectionHeaders from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeaders SubHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 max-w-md mx-auto mt-4">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste
            quos suscipit tempora? Aperiam esse fugiat inventore laboriosam
            officiis quam rem!
          </p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            minima odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste
            quos suscipit tempora? Aperiam esse fugiat inventore laboriosam
            officiis quam rem!
          </p>
        </div>
      </section>
      <section className="text-center">
        <SectionHeaders
          SubHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <Link
            className="text-4xl underline text-gray-500"
            href={"tel:+998909398601"}
          >
            +998 (90) 939 86 01
          </Link>
        </div>
      </section>

      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
