import Link from "next/link";
export default function BestDeals(){
    return(
        <div className="">
            <h1 className="font-medium text-3xl ml-[40%]">Best Deals</h1>
            <div className="text-xl font-medium mt-5 ml-[89%] text-blue"><Link href='/bestdeals'>View All</Link></div>
        </div>
    );
}