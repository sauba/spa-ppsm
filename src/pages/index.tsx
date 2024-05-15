import Agradecimentos from "@/components/Agradecimentos";
import CartazEvento from "@/components/CartazEvento";
import Categorias from "@/components/Categorias";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Premiacao from "@/components/Premiacao";
import Regulamento from "@/components/Regulamento";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-fundo-site bg-cover bg-center`}
    >
      <Header />
      <CartazEvento />
      <Premiacao />
      <Categorias />
      <Regulamento />
      <Agradecimentos />
      <Footer />
    </main>
  );
}
