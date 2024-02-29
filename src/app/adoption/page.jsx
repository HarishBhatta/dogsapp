import Brands from "../../components/brands";
import Image from "next/image";
import Sorry from '../../../public/avatar.png';

export const metadata = {
    title: 'Adoption',
    description: 'Dog adoption service'
}

export default async function AdoptionPage(){
    return(
        <div className="">
            <Brands title= "Adoption" />
            <div className="flex justify-center items-center mt-10">
                <Image
                src={Sorry}
                alt="Sorry"
                width={150}
                height={150}
                />
            </div>
            <h1 className="ml-[42%] mt-5 text-slate-500 font-semibold text-2xl">Sorry No Data Found</h1>
        </div>
    );
}