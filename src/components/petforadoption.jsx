import Link from "next/link";
export default function PetForAdoption(){
    return(
        <div className="">
            <h1 className="font-medium text-3xl ml-[40%]">Pet For Adoption</h1>
            <div className="text-xl font-medium mt-5 ml-[89%] text-blue"><Link href='/brands'>View All</Link></div>
        </div>
    );
}