import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import AreasAtuacao from "@/components/AreasAtuacao";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AreasAtuacao />
        <Sobre />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
