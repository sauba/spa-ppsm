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
      <p className={`text-center text-sm xl:text-xl tracking-wider py-2`}>VALOR DA INSCRIÇÃO: <span className={`xl:text-4xl`}>R$70,00</span></p>
      <p className={`text-center text-sm xl:text-xl tracking-wider pt-4`}>
        Inicio no sábado 13 de julho as 10:00hs na Praia de Xareu - Pico Pedra Preta.
      </p>
      <p className="text-center text-sm xl:text-xl tracking-wider lg:pb-12">
        Cabo de Sto Agostinho - Pernambuco.
      </p>
      <div className="w-full grid grid-cols-2 justify-center items-center pt-8">
        <div className="lg:w-12/12">
          <span className="lg:text-2xl">Premiação Por Categoria:</span>
        </div>
        <div className="lg:w-11/12 flex flex-col">
          <span className="text-sm lg:text-2xl py-1 lg:py-2">1º Lugar: Troféu, Bloco e Tatuagem no valor de R$500,00.</span>
          <span className="text-sm lg:text-2xl py-1 lg:py-2">2º Lugar: Medalha e Kits.</span>
          <span className="text-sm lg:text-2xl py-1 lg:py-2">3º Lugar: Medalha e Kits.</span>
          <span className="text-sm lg:text-2xl py-1 lg:py-2">4º Lugar: Medalha e Kits.</span>
        </div>
      </div>
    </div>
  )
}