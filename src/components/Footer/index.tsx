import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import sauba from "../../../public/sauba.png";

export default function Footer() {
  return (
    <div
      className={`
        w-full
        flex-col
        xl:flex
        justify-center
        items-center
        bg-transparent
        text-center
        bg-zinc-900
        bg-opacity-60
        text-red-50
      `}
      id="footer"
    >
      <div className={`flex-col justify-center items-center`}>
        <a href="https://wa.me/5581985259168" referrerPolicy="no-referrer" target="_blank" className={`px-4 py-2 mx-auto flex justify-center items-center gap-3 rounded-3xl font-caveat`}>
          <WhatsappLogo size={48} weight="thin" color={`lime`} className={`hover:cursor-pointer`} />
          <p className={`text-center text-2xl lg:text-5xl`}>Informações</p>
        </a>
        <p className={`text-center text-2xl lg:text-5xl font-caveat`}>Acompanhe as novidades no nosso instagram</p>
        <a href="https://www.instagram.com/parafajsp/" referrerPolicy="no-referrer" target="_blank">
          <InstagramLogo size={68} weight="thin" color="red" className={`hover:cursor-pointer animate-wiggle mx-auto py-2`} />
        </a>
      </div>

      <div className={`w-full bg-zinc-950 flex justify-center items-center`}>
        <Image src={sauba} width={64} height={64} alt="" className="animate-pulse" />
        <p className="text-sm lg:text-lg animate-pulse">Desenvolvido por Thiago José de Queiroz.</p>

        <div className={`flex justify-center items-center overflow-hidden`}>
          <a href="https://wa.me/5581999895856" referrerPolicy="no-referrer" target="_blank" className={`px-4 py-2 mx-auto flex justify-center items-center gap-3 rounded-3xl font-caveat`}>
            <WhatsappLogo size={24} weight="thin" color={`lime`} className={`hover:cursor-pointer`} />
          </a>
          <a href="https://www.instagram.com/thiagosauba" referrerPolicy="no-referrer" target="_blank">
            <InstagramLogo size={24} weight="thin" color="red" className={`hover:cursor-pointer animate-wiggle mx-auto py-2`} />
          </a>
          <a href="https://github.com/sauba" referrerPolicy="no-referrer" target="_blank">
            <GithubLogo size={24} weight="thin" color="white" className={`hover:cursor-pointer animate-wiggle mx-auto py-2`} />
          </a>
          <a href="https://www.linkedin.com/in/thiago-queiroz-dev/" referrerPolicy="no-referrer" target="_blank">
            <LinkedinLogo size={24} weight="thin" color="blue" className={`hover:cursor-pointer animate-wiggle mx-auto py-2`} />
          </a>
        </div>
      </div>
    </div>
  )
}