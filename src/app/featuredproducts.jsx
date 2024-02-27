import Image from "next/image";
import Link from "next/link";
import dogimage from "../../public/dogimage.png";
import dogicon from '../../public/dogicon.png';
import Card from "../components/card";
import { categoryProducts } from "../../public/categoryproducts";
export default function FeaturedProducts() {
    return (
        <div className="">
            <div className="flex items-center gap-96">
                <div className="place-self-end ml-[40%] font-poppins text-3xl font-medium">Featured Products</div>
                <div className="text-xl font-medium mt-5 text-blue"><Link href='/Featured'>View All</Link></div>
            </div>
            <Card />
            <div className="flex gap-6 p-8 mt-10 mb-5">
                <div className="bg-red-300 h-[290px] w-[740px] flex rounded-lg">
                    <div className="">
                        <p className="text-4xl font-extrabold ml-5 mt-[40%]">Pets adoption <br/> made easy</p>
                        <p className="text-teal-600 text-2xl font-normal ml-5 underline"><Link href='/adoption'>Adopt Now</Link></p>
                    </div>
                    <Image
                    src={dogimage}
                    alt="dog image"
                    height="auto"
                    width="auto"
                    />
                </div>
                <div className="bg-amber-300 h-[290px] w-[740px] flex rounded-lg">
                    <p className="text-3xl font-extrabold ml-5 mt-[20%] text-white">Keep Your Paws Off</p>
                    <Image
                    src={dogicon}
                    alt="dog image"
                    height={300}
                    width={300}
                    />
                </div>
            </div>
            
        </div>
    );
}