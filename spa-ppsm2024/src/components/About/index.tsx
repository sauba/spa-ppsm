export default function About() {
  return (
    <div className={`
        about
        flex-col
        items-center
        text-center
        m-4
        lg:m-16
        p-4
        lg:p-8
        outline-none
        bg-amber-950
        bg-opacity-70
        text-white
        font-caveat
        rounded-3xl
      `} id="about">
      <p className={`text-center xl:text-6xl animate-skew-stop tracking-wider`}>O Que É ?</p>
      <p className={`text-center xl:text-5xl tracking-wider`}>
        O Círculo Lunar para Mulheres é um grupo terapêutico, exclusivo para MULHERES,
        onde nutrimos o nosso processo de autoconhecimento, através do Feminino e seguindo uma Jornada Lunar.
      </p>
    </div>
  )
}