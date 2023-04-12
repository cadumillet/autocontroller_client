import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { SobrePage } from "@/views/sobre";
import { NextPage } from "next";

const Sobre: NextPage = () => {
  return (
    <>
      <Header />
      <SobrePage />
      <Footer />
    </>
  );
};

export default Sobre;
