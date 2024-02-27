import Head from "next/head";
import Brands from "../../components/brands";
import PetProducts from "./productdisplay";


export default function Products() {
    return (
        <>
            <Head>
                <title>
                    pet dogs petproducts nepal 
                </title>
                <meta 
                    name="description"
                    content="All the pet and dog products that you will need at one particular place"
                />
            </Head>
            <Brands title="Products" />
            <div>
                <h1 className="text-3xl font-bold mb-4 ml-10">Pet Products</h1>
                <PetProducts />
            </div>
        </>

    );
}