
export default function Agradecimentos() {
  return (
    <div className={`
        agradecimentos
        w-full
        flex-col
        items-center
        text-center
        p-4
        lg:p-8
        outline-none
        bg-zinc-900
        bg-opacity-60
        text-red-50
        font-pt-mono
      `} id="agradecimentos">
      <p className={`text-center text-5xl animate-skew-stop tracking-wider font-caveat`}>Agradecimentos</p>

      <p className={`text-center lg:pt-8 text-sm lg:text-xl tracking-widest py-2`}>
        Agradecimentos especiais a <span className="xl:text-xl font-bold">Jisk</span>, a <span className="xl:text-xl font-bold">Fábrica de Óculos</span> com sua marca <span className="xl:text-xl font-bold">Maldivas Eyewear</span>, a <span className="xl:text-xl font-bold">Irado Tattoo</span>.
      </p>

      <p className={`text-center text-sm lg:text-xl tracking-widest py-2`}>
        Aos apoiadores <span className="font-bold">LD Artes Gráficas</span>, a <span className="xl:text-xl font-bold">Inside Tendas de Sol</span>, a <span className="xl:text-xl font-bold">Xareu Acessórios</span>.
      </p>

      <p className={`text-center text-sm lg:text-xl tracking-widest py-2`}>
        Ao nosso amigo e um dos maiores incentivadores dos esportes <span className="font-bold">João Ivson</span>. a <span className="font-bold">Associação de Surf do Cabo de Santo Agostinho</span>, através do presidente Marcos Moraes.
      </p>

      <p className={`text-center text-sm lg:text-xl tracking-widest py-2`}>
        E uma menção especial ao Prefeito <span className="xl:text-xl font-bold">Keko do Armazém</span> pelo incentivo aos esportes, que vem fazendo com que os atletas de todas as modalidades do municipio se dediquem e saibam que o esporte <span className="xl:text-xl font-bold">Salva Vidas</span>.
      </p>

      <p className={`flex justify-center items-center text-center text-5xl xl:text-8xl tracking-widest lg:pt-4 font-allura animate-wiggle`}>
        Aloha!
      </p>
    </div>
  )
}