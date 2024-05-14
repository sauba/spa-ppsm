import logo from "@/assets/logo.svg"
import Image from "next/image";
import NavbarDropdownMenu from "../NavbarDropdownMenu";

export default function Header() {
  return (
    <div className={`w-full flex justify-start items-center`}>
      <NavbarDropdownMenu />
    </div>
  )
}