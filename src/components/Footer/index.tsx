import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

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
          <WhatsappLogo size={68} weight="thin" color={`green`} className={`hover:cursor-pointer`} />
          <p className={`text-center text-xl`}>Informações</p>
        </a>
        <p className={`text-center text-xl lg:text-2xl font-caveat`}>Acompanhe as novidades no nosso instagram</p>
        <a href="https://www.instagram.com/parafajsp/" referrerPolicy="no-referrer" target="_blank">
          <InstagramLogo size={68} weight="thin" color="red" className={`hover:cursor-pointer animate-wiggle mx-auto py-2`} />
        </a>
      </div>
    </div>
  )
}