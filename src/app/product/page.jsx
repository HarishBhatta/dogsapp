import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Brands from "@/components/brands";
import NavBar from "@/components/navbar";

export default function Products(){
    return(
        <>
            <Header />
            <NavBar />
            <Brands />
            <div className="">Products</div>
            <Footer />
        </>
        
    );
}