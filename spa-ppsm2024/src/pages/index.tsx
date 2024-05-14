import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Image from "next/image";
import construcao from "../../public/construcao.svg";
import Header from "@/components/Header";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      <h1 className={`text-6xl font-caveat text-red-500`}>Pedra Preta Surf Master 2024</h1>
      <Image src={construcao} width={300} height={300} alt="" className={`animate-pulse`} />
      <Footer />
    </main>
  );
}
