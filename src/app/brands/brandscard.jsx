import Image from "next/image";
import Palmeiras from "@/app/brands/palmeiras.svg"
const BrandsCard = () => {
  return (
    <div>
        <div className="h-[224px] w-[200px] bg-white ml-10 mt-5">
          <div className="pt-[20%] pl-[20%]">
           <Image 
            src={Palmeiras}
            alt="Palmeiras icon"
            
            />    
          </div>
          <h1 className="font-medium text-xl pl-[20%] mt-5">Palmeiras</h1>
        </div>
    </div>
  )
}

export default BrandsCard;