import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Image from "next/image";
import construcao from "../../public/construcao.svg";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center bg-fundo-site bg-cover ${inter.className}`}
    >
      <Header />
      <h1 className={`sm:text-4xl lg:text-8xl font-caveat text-red-600`}>Pedra Preta Surf Master 2024</h1>
      <Image src={construcao} width={256} height={256} alt="" className={`animate-pulse lg:pt-8`} />
      <Footer />
    </main>
  );
}
