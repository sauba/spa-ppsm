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
      <h1 className={`sm:text-2xl lg:text-4xl font-caveat text-red-600`}>Pedra Preta Surf Master 2024</h1>
      <Image src={construcao} width={128} height={128} alt="" className={`animate-pulse`} />
      <Footer />
    </main>
  );
}
