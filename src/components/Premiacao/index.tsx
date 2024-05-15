export default function Premiacao() {
  return (
    <div className={`
        inscricoes
        w-full
        flex-col
        items-center
        text-center
        p-2
        lg:p-4
        outline-none
        bg-zinc-900
        bg-opacity-60
        text-white
        font-pt-mono
      `} id="inscricoes">
      <p className={`text-center text-5xl animate-skew-stop tracking-wider font-caveat py-8`}>Inscrições</p>
      <p className={`text-center xl:text-xl tracking-wider py-8`}>VALOR DA INSCRIÇÃO: <span className={`xl:text-4xl`}>R$70,00</span></p>
      <p className={`text-center xl:text-2xl tracking-wider pt-8`}>
        Inicio no sábado 13 de julho as 10:00hs na Praia de Xareu - Pico Pedra Preta.
      </p>
      <p className="text-center xl:text-2xl tracking-wider lg:pb-12">
        Cabo de Sto Agostinho - Pernambuco
      </p>
      <div className="w-full grid grid-cols-2 justify-center items-center">
        <div className="lg:w-12/12">
          <span className="lg:text-3xl">Premiação Por Categoria:</span>
        </div>
        <div className="lg:w-11/12 flex flex-col">
          <span className="text-xl lg:text-2xl lg:py-2">1º Lugar: Troféu, Bloco e Tatuagem no valor de R$500,00.</span>
          <span className="text-xl lg:text-2xl lg:py-2">2º Lugar: Medalha e Kits.</span>
          <span className="text-xl lg:text-2xl lg:py-2">3º Lugar: Medalha e Kits.</span>
          <span className="text-xl lg:text-2xl lg:py-2">4º Lugar: Medalha e Kits.</span>
        </div>
      </div>
    </div>
  )
}