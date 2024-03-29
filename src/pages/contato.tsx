import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import { ContatoPage } from "@/views/contato";
import { NextPage } from "next";

const Contato: NextPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <ContatoPage />
      <Footer />
    </div>
  );
};

export default Contato;
