import { Check } from "@phosphor-icons/react";

export default function Categorias() {
  return (
    <div className={`
        w-full
        categorias
        m-2
        lg:m-4
        p-4
        lg:p-8
        flex-col
        items-center
        text-center
        outline-none
        bg-zinc-900
        bg-opacity-50
        text-white
        font-caveat
      `} id="categorias">

      <p className={`text-center xl:text-6xl animate-skew-stop tracking-wider`}>Categorias</p>

      <div className="grid grid-cols-3 pt-12">
        <span className="flex justify-center items-center xl:text-5xl">
          <Check size={32} weight="bold" color="green" />Master 35+</span>
        <span className="flex justify-center items-center xl:text-5xl">
          <Check size={32} weight="bold" color="green" />Grand Master 40+</span>
        <span className="flex justify-center items-center xl:text-5xl">
          <Check size={32} weight="bold" color="green" />Kahuna 45+</span>
      </div>

      <div className="grid grid-cols-2 py-8">
        <span className="flex justify-center items-center xl:text-5xl">
          <Check size={32} weight="bold" color="green" />Grand Kahuna 50+</span>
        <span className="flex justify-center items-center xl:text-5xl">
          <Check size={32} weight="bold" color="green" />Legends 55+</span>
      </div>

      <p className={`text-center xl:text-4xl tracking-wider lg:pt-12 font-bold`}>
        Vagas Limitadas: 16 vagas por categoria.
      </p>
    </div>
  )
}