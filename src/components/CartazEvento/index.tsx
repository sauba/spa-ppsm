import Image from "next/image";
import cartazEvento from "../../../public/cartaz_borda.png";

export default function CartazEvento() {
  return (
    <div className={`
        cartazEvento
        flex
        justify-center
        items-center
      `} id="cartazEvento">
      <Image src={cartazEvento} width={428} height={428} alt="" className="pt-8" />
    </div>
  )
}