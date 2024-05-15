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
      <p className={`text-center xl:text-5xl animate-skew-stop tracking-wider font-caveat`}>Agradecimentos</p>
      <p className={`text-center lg:pt-8 lg:text-xl tracking-widest leading-loose py-1`}>
        Agradecimentos especiais a <span className="xl:text-2xl font-bold">Jisk</span>, através de seu representante aqui em Pernambuco Rógerio, a <span className="xl:text-2xl font-bold">Fábrica de Óculos</span> da marca <span className="xl:text-2xl font-bold">Maldivas Eyewear</span>, dos meus amigos irmãos Lisandro e Elisio, a <span className="xl:text-2xl font-bold">Irado Tattoo</span> do meu parceiro Everton.
      </p>

      <p className={`text-center lg:text-xl tracking-widest leading-loose py-1`}>
        Aos apoiadores <span className="font-bold">LD Artes Gráficas</span> do longboarder Zé Luis, as barracas mais alucinantes de praia da <span className="xl:text-2xl font-bold">Inside Tendas de Sol</span> do nosso amigo Kal, a loja mais surf do litoral cabense <span className="xl:text-2xl font-bold">Xareu Acessórios</span> do nosso surfista local Rafael e do nosso <span className="font-bold">Fotógrafo Oficial Marcos Paulo da MP Vídeos e Photos</span>.
      </p>

      <p className={`text-center lg:text-xl tracking-widest leading-loose py-1`}>
        Ao nosso querido amigo e um dos maiores incentivadores dos esportes <span className="font-bold">João Ivson</span>. a <span className="font-bold">Associação de Surf do Cabo de Santo Agostinho</span>, através do presidente Marcos Moraes.
      </p>

      <p className={`text-center lg:text-xl tracking-widest leading-loose py-1`}>
        E uma menção especial ao nosso Prefeito <span className="xl:text-2xl font-bold">Keko do Armazém</span> pelo incentivo aos esportes, que vem fazendo com que os atletas de todas as modalidades do municipio se dediquem e saibam que o esporte <span className="xl:text-2xl font-bold">Salva Vidas</span>.
      </p>

      <p className={`text-center xl:text-8xl tracking-widest leading-loose lg:pt-4 font-allura  animate-wiggle`}>
        Aloha!
      </p>
    </div>
  )
}