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
        <>
            <Head>
                <title>Shop</title>
                <meta name="description" content="This is the shop page of the Dogs app" />
            </Head>
                <div className="w-64 h-72">
                    <Image
                        src={product.image}
                        alt="image"
                        width={170}
                        height={200}
                    />
                </div>
        </>
    )
}