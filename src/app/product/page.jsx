import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Brands from "@/components/brands";
import NavBar from "@/components/navbar";
import PetProducts, { petProducts } from "./productdisplay";


export default function Products(){
    return(
        <>
            <Header />
            <NavBar />
            <Brands title="Products" />
            <div>
                <h1 className="text-3xl font-bold mb-4 ml-10">Pet Products</h1>
                <PetProducts products={petProducts} />
            </div>
            <Footer />
        </>
        
    );
}