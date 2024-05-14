import { Menu, Transition } from "@headlessui/react"
import { List } from "@phosphor-icons/react"
import logo from "@/assets/logo.svg"

import { Fragment } from "react"
import Image from "next/image"

export default function NavbarDropdownMenu() {
  return (
    <div className="flex justify-start items-start">
      <Menu as="div" className="relative">
        {({ open }) => (
          <Fragment>
            <Menu.Button className="inline-flex justify-items-start rounded-md text-red-50">
              <List
                size={64}
                weight="thin"
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
                          href="#categorias"
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
                          Categorias
                        </a>
                      </div>
                    )}
                  </Menu.Item>

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
                          href="#apoio"
                          className={`
                            flex
                            items-center
                            px-4
                            py-2
                            text-sm
                            hover:text-lg
                          `}
                        >
                          Apoio
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
                          href="#regulamento"
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
                          Regulamento
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
                          href="#footer"
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
                          Contato
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

