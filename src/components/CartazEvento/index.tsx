import Image from "next/image";
import cartazEvento from "../../../public/cartaz_borda.png"

export default function CartazEvento() {
  return (
    <div className={`
        cartazEvento
        flex
        justify-center
        items-center
      `} id="cartazEvento">
        <Image src={cartazEvento} width={480} height={480} alt="" className="py-4" />
    </div>
  )
}