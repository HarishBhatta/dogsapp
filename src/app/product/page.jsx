import Head from "next/head";
import Brands from "../../components/brands";
import PetProducts from "./productdisplay";

export const metadata = {
    title: 'Products',
    description: 'Buy products online '
  };
  
export default async function Products() {
    return (
        <>
            <Head>
                <title>
                    Products
                </title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Brands title="Products" />
            <div>
                <h1 className="text-3xl font-bold mb-4 ml-10">Pet Products</h1>
                <PetProducts />
            </div>
        </>

    );
}