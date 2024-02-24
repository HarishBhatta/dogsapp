import Link from "next/link";
import Image from "next/image";
import { Sorry } from "@/components/full-hope-american-spaniel-puppy-cute-groomed-fluffy-doggy-pet-is-playing-isolated-gray-background-studio-photoshot-negative-space-insert-your-text-image.jpg";

export default function PetForAdoption(){
    return(
        <div className="">
            <h1 className="font-medium text-3xl ml-[40%]">Pet For Adoption</h1>
            <div className="text-xl font-medium mt-5 ml-[89%] text-blue"><Link href='/brands'>View All</Link></div>
            <div className="flex justify-center items-center mt-10">
                <Image
                src={Sorry}
                alt="Sorry no"
                width={150}
                height="auto"
                className=""
                />
            </div>
            <h1 className="ml-[40%] mt-5 text-slate-500 font-semibold text-2xl">Sorry No Data Found</h1>
        </div>
    );
}