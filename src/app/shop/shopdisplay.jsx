import next from "next";
import Link from 'next/link'
import Image from "next/image";
async function getData() {
    const res = await fetch('https://fakestoreapi.com/products',{
        next:{
            revalidate: 300
        }})
    return res.json();
    
}
export default async function ShopDisplay() {
    const products = await getData();
    console.log(products)
    return (
        <>
            <div className="flex gap-10 flex-wrap mx-[5%] mt-10">
                {products.map((product) =>
                    <div className="w-52 h-[280px] bg-white rounded-lg mb-0">
                        <Link href={`/shop/${product.id}`}>
                            <div className="h-[75%] w-full mb-3 overflow-hidden flex justify-center items-center">
                            <Image
                            src={product.image}
                            alt="image"
                            height={160}
                            width= {110}
                            objectFit= "contain"
                            quality={100}
                            fill= {false}	
                            className=""
                        />
                            </div>
                        <div className="bg-green-100 border-t-slate-600 border-t-2">
                        <h2 key={product.id} className="truncate text-center text-lg text-slate-400">{product.title}</h2>
                        <p key={product.id} className="text-center text-lg font-medium text-blue">Rs {product.price}</p>
                        </div>
                        </Link>
                        

                        
                    </div>
                )}
            </div>

        </>
    );
}