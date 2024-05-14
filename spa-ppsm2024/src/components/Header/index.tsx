import logo from "@/assets/logo.svg";
import Image from "next/image";
import NavbarDropdownMenu from "../NavbarDropdownMenu";

export default function Header() {
  return (
    <div className={`w-full flex justify-center items-center`}>
      <NavbarDropdownMenu />
      <Image src={logo} width={280} height={280} alt="" className={`mx-auto animate-pulse`} />
    </div>
  )
}