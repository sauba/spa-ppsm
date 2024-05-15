import Agradecimentos from "@/components/Agradecimentos";
import CartazEvento from "@/components/CartazEvento";
import Categorias from "@/components/Categorias";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Premiacao from "@/components/Premiacao";
import Regulamento from "@/components/Regulamento";
import { Inter } from "next/font/google";
import Image from "next/image";
import construcao from "../../public/construcao.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-fundo-site bg-cover bg-center`}
    >
      <Header />
      <Image src={construcao} width={256} height={256} alt="" className={`animate-pulse lg:py-8`} priority />
      <CartazEvento />
      <Premiacao />
      <Categorias />
      <Regulamento />
      <Agradecimentos />
      <Footer />
    </main>
  );
}
