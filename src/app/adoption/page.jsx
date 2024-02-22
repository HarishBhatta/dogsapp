import Footer from "@/components/Footer/footer";
import Header from "@/components/Header";
import Brands from "@/components/brands";
import NavBar from "@/components/navbar";

export default function AdoptionPage(){
    const value = "Adoption";
    return(
        <div className="">
            <Header />
            <NavBar />
            <Brands />
            <Footer />
        </div>
    );
}