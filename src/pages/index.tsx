import Agradecimentos from "@/components/Agradecimentos";
import CartazEvento from "@/components/CartazEvento";
import Categorias from "@/components/Categorias";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Regulamento from "@/components/Regulamento";
import { Inter } from "next/font/google";
import Image from "next/image";
import construcao from "../../public/construcao.svg";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-fundo-site bg-fixed bg-no-repeat`}
    >
      <Header />
      <CartazEvento />
      <Agradecimentos />
      <Categorias />
      <Image src={construcao} width={256} height={256} alt="" className={`animate-pulse lg:py-8`} />
      <Regulamento />
      <Footer />
    </main>
  );
}
