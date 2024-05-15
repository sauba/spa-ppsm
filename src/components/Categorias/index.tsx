import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

export default function Categorias() {
  return (
    <div className={`
        w-full
        categorias
        p-4
        lg:p-8
        flex-col
        items-center
        text-center
        outline-none
        bg-zinc-900
        bg-opacity-60
        text-white
        font-caveat
      `} id="categorias">

      <p className={`text-center text-5xl animate-skew-stop tracking-wider`}>Categorias</p>

      <div className="grid grid-cols-3 pt-12">
        <span className="flex justify-center items-center text-2xl xl:text-5xl">
          <CheckCircle size={16} weight="bold" color="lime" />Master 35+</span>
        <span className="flex justify-end items-center text-2xl xl:text-5xl">
          <CheckCircle size={16} weight="bold" color="lime" />Grand Master 40+</span>
        <span className="flex justify-center items-center text-2xl xl:text-5xl">
          <CheckCircle size={16} weight="bold" color="lime" />Kahuna 45+</span>
      </div>

      <div className="grid grid-cols-2 py-8">
        <span className="flex justify-center items-center text-2xl xl:text-5xl">
          <CheckCircle size={16} weight="bold" color="lime" />Grand Kahuna 50+</span>
        <span className="flex justify-center items-center text-2xl xl:text-5xl">
          <CheckCircle size={16} weight="bold" color="lime" />Legends 55+</span>
      </div>

      <p className={`text-center xl:text-4xl tracking-wider font-bold`}>
        Vagas Limitadas: 16 vagas por categoria.
      </p>
    </div>
  )
}