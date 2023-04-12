import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default About;
