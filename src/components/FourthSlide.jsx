import Image from "next/image";
import Button from "./button";
import fourthimage from "../../public/fourthimage.png"
const FourthSlide = () => {
  return (
    <div className="bg-neutral-300 h-[576px] w-full flex gap-20">
        <div className="ml-24 pt-24 w-[40%]">
            <h2 className='font-semibold text-xl text-blue'>Health is wealth</h2>
            <h1 className='font-bold text-6xl pl-2 mt-5'>Keep Your Pet Healthy</h1>
            <p className='font-mediun text-3xl pl-2 my-10'>Vaccinate your pet regularly and keep them healthy</p>
            <div className="pl-2"><Button /></div>
            
        </div>
        <div className="bg-grey-200 mt-40">
            <Image
             src={fourthimage}
             alt='dog image'
             height={350}
             width={350}
             />
        </div>
    </div>
  )
}

export default FourthSlide;