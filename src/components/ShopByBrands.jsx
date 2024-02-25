import BrandSlider from "../app/brands/brandslider";
import Link from "next/link";

export const ShopByBrands = () => {
  return (
    <div className="h-[450px]">
        <div className="flex items-center gap-96">
            <div className="place-self-end ml-[40%] font-poppins text-3xl font-medium">Shop By Brands</div>
            <div className="text-xl font-medium mt-5 text-blue"><Link href='/brands'>View All</Link></div>
        </div>
        <BrandSlider />
    </div>
  )
}
