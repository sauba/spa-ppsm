import logo from "@/assets/logo.svg"
import Image from "next/image";
import NavbarDropdownMenu from "../NavbarDropdownMenu";

export default function Header() {
  return (
    <div className={`w-full fixed top-0 right-0 left-0 flex justify-start items-center tracking-widest border-none outline-none`}>
      <NavbarDropdownMenu />
    </div>
  )
}