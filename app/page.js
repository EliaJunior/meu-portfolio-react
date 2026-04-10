import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
      </main>
      <Footer />
    </>
  );
}
