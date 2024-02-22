import Link from "next/link";
export default function ShopByCategory() {
    return  (
        <div className="">
            <div className="mb-96">
                <div className="flex items-center gap-96">
                    <div className=" ml-[40%] font-poppins text-3xl font-medium">Shop by Category</div>
                    <div className="text-xl font-medium mt-5 text-blue"><Link href='/brands'>View All</Link></div>
                </div>
            </div>
        </div>
    );
}