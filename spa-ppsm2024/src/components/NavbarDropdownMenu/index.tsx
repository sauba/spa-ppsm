import { Menu, Transition } from "@headlessui/react"
import { List } from "@phosphor-icons/react"
import { Fragment } from "react"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-red-50">
              <List
                size={64}
                weight="fill"
                color="white"
                className={`py-4`}
              />
            </Menu.Button>

            {/* Menu Items */}
            <Transition
              show={open}
              enter="transform transition duration-100 ease-in"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transform transition duration-75 ease-out"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-left absolute left-0 w-72 rounded-md bg-transparent">
                <div className="flex-col justify-start items-start">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          justify-center
                          items-center
                          my-2                             
                          ${active
                            ? "bg-amber-950 text-red-50 text-2xl font-bold"
                            : "bg-amber-950 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#about"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          O que é ?
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <div
                        className={`
                          flex
                          my-2
                          justify-evenly
                          items-center                
                          ${active
                            ? "bg-amber-950 text-red-50 text-2xl font-bold"
                            : "bg-amber-950 text-red-50 font-bold"
                          }
                        `}
                      >
                        <a
                          href="#como-acontece"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            gap-3
                            hover:text-lg
                          `}
                        >
                          Como Acontece ?
                        </a>
                      </div>
                    )}
                  </Menu.Item>

                </div>
              </Menu.Items>
            </Transition>
          </Fragment>
        )}
      </Menu>
    </div>
  )
}

{
  /* Menu Item Desabilitado */
}
{
  /* <Menu.Item disabled>
      {({ active, disabled }) => (
        <div className="flex justify-evenly items-center">
          <HandsClapping
            size={32}
            className={`${
              disabled
                ? "text-gray-200"
                : active
                ? "bg-amber-950 text-red-50 font-bold"
                : "text-gray-300"
            }`}
          />
          <a
            href="#"
            className={`flex items-center px-4 py-2 text-sm ${
              disabled
                ? "text-zinc-300"
                : active
                ? "bg-amber-950 text-red-50 text-white"
                : "text-gray-700"
            }`}
          >
            Abordagem
          </a>
        </div>
      )}
  </Menu.Item> */
}
