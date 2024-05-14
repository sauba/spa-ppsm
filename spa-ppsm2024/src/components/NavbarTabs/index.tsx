import { Tab } from '@headlessui/react'
import { Check } from '@phosphor-icons/react'
import { Fragment } from 'react'

export default function NavbarTabs() {
  return (
    <div className={`w-full flex-col justify-start items-center text-zinc-900 bg-transparent outline-none border-none pt-4`}>
      <Tab.Group vertical>
        <Tab.List className={`flex justify-center items-center text-2xl gap-6 font-caveat`}>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected ? 'animate-wiggle text-amber-950 text-4xl xl:text-8xl outline-none border-none' : 'text-white xl:text-5xl'
                }
              >
                O que é ?
              </button>
            )}
          </Tab>

          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected ? 'animate-wiggle text-amber-950 text-4xl xl:text-8xl outline-none border-none' : 'text-white xl:text-5xl'
                }
              >
                Como Acontece ?
              </button>
            )}
          </Tab>

        </Tab.List>

        <Tab.Panels className={`w-full font-caveat`}>
          <Tab.Panel className={`text-white font-caveat outline-none`}>
            <p className={`text-center m-4 lg:m-32 p-4 lg:p-32 text-2xl lg:text-4xl`}>
              O Círculo Lunar para Mulheres é um grupo terapêutico, exclusivo para MULHERES,
              onde nutrimos o nosso processo de autoconhecimento, através do Feminino e seguindo uma Jornada Lunar.
            </p>
          </Tab.Panel>
          <Tab.Panel className={`flex-col items-center text-center m-4 lg:m-16 p-4 lg:p-8 outline-none bg-amber-950 bg-opacity-70 text-white font-reenie-beanie rounded-3xl`}>
            <p className={`text-center mb-4 text-2xl lg:text-4xl`}>
              Contamos com um formato acessível, pra você acompanhar no seu ritmo e ter apoio e inspirações na jornada.
            </p>

            <p className={`text-center mb-4 text-2xl lg:text-4xl`}>
              São 6 Módulos, cada um com duração de 2 meses, incluindo:
            </p>
            <div className={`flex-col justify-center items-center`}>
              <p className={`text-center flex justify-center items-center pb-1 text-2xl lg:text-4xl`}>
                <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
                Acesso as aulas do módulo gravadas.
              </p>
              <p className={`text-center flex justify-center items-center py-1 text-2xl lg:text-4xl`}>
                <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
                Meditações diferentes, a cada fase da Lua.
              </p>
              <p className={`text-center flex justify-center items-center py-1 text-2xl lg:text-4xl`}>
                <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
                Rituais com instruções para manifestar durante todo o mês lunar.
              </p>
              <p className={`text-center flex justify-center items-center py-1 text-2xl lg:text-4xl`}>
                <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
                Tiragem de Tarot na energia do grupo e das fases da Lua, a cada lunação.
              </p>
              <p className={`text-center flex justify-center items-center py-1 text-2xl lg:text-4xl`}>
                <Check size={32} color='green' weight='bold' className={`animate-wiggle`} />
                Um Encontro por módulo, online, com datas predefinidas, aos sábados, das 9h às 12h.
              </p>
              <p className={`text-center flex justify-center items-center pt-2 text-2xl lg:text-4xl`}>
                E você ainda participa de uma Comunidade Exclusiva, recheada de trocas e dicas,
                além de configurar uma rede apoio massa, cheia de energia feminina.
              </p>
            </div>

          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}