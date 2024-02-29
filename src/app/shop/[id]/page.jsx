import Head from "next/head";
import Image from "next/image";

async function getData(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json()
    return data;
}
export default async function ShopProduct({ params }) {
    const id = params.id;
    const product = await getData(params.id);
    return (
        <div className="bg-teal-50">
            <Head>
                <title>Shop</title>
                <meta name="description" content="This is the shop page of the Dogs app" />
            </Head>
            <div className="flex pt-16 px-[10%] gap-48">
                <div className="w-[500px] h-[500px]">
                    <Image
                        src={product.image}
                        alt="image"
                        width={500}
                        height={500}
                        quality={100}
                    />
                </div>
                <div className= "pl-10 mt-20 flex flex-col gap-2">
                    <h2 className="truncate font-semibold text-xl text-slate-500">{product.title}</h2>
                    <h2 className="font-medium text-lg text-slate-600 uppercase">{product.category}</h2>
                    <h2 className="font-medium text-xl text-blue"><h1 className="font-semibold text-xl text-slate-600">Price: <br /></h1>Rs {product.price}</h2>
                    <p className="font-medium text-lg text-slate-600"><h1 className="text-xl font-semibold text-slate-600">Description: <br /></h1>{product.description}</p>
                </div>

            </div>
        </div>
    )
}