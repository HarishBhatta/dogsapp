import next from "next";
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
            <div className="flex gap-10 flex-wrap">
                {products.map((product) =>
                    <div className="w-52 h-72 bg-white">
                        <Image
                            src={product.image}
                            alt="image"
                            height={180}
                            width={120}
                            className="image-contain"
                        />
                        <h2 key={product.id} className="truncate">{product.title}</h2>

                    </div>
                )}
            </div>

        </>
    );
}