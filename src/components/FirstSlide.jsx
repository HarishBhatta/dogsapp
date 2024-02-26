import Image from "next/image";
import Button from "./button";
import firstimage from "../../public/firstimage.png";
import Pawprint from '../../public/Pawprint.svg';
const FirstSlide = () => {
  return (
    <div className="bg-neutral-300 h-[576px] w-full flex gap-20">
        <div className="ml-24 pt-24 w-[40%]">
            <h2 className='font-semibold text-xl text-blue'>Happy Buying</h2>
            <h1 className='font-bold text-6xl pl-2 mt-5'>Pet Foods and Accessories</h1>
            <p className='font-mediun text-3xl pl-2 my-10'>Get all your pet needs at one place</p>
            <div className="pl-2"><Button button = "Shop Now" /> </div>
            {/* <div className=""><p className="">Shop Now</p></div> */}
            
        </div>
        <div className="bg-grey-200 mt-40">
            <Image
             src={firstimage}
             alt='dog image'
             height={350}
             width={350}
             />
        </div>
    </div>
  )
}

export default FirstSlide;