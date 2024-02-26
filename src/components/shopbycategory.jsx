import Link from "next/link";
import Image from "next/image";
import { categoryProducts } from "../../public/categoryproducts";

export default function ShopByCategory() {
    return  (
        <div className="">
                <div className="flex items-center gap-96">
                    <div className=" ml-[40%] font-poppins text-3xl font-medium">Shop by Category</div>
                    <div className="text-xl font-medium mt-5 text-blue"><Link href='/brands'>View All</Link></div>
                </div>
            <div className="flex flex-wrap gap-16 px-10 my-10">
                {categoryProducts.map((product)=>(
                <div key={product.id} className="w-[126px] h-[160px] bg-white group hover:cursor-pointer">
                    <div className="flex items-center justify-center h-[65%]">
                    <Image
                        src={product.image}
                        alt="image"
                        fill= {false}
                        // width={50}
                        // height="auto"
                    />
                    </div>
                    
                    <div className="text-center mt-2">{product.title}</div>
                </div>
                ))}
            </div>
        </div>
    );
}