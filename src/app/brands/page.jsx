import Brands from "@/components/brands";
import Header from "../../components/Header";
import NavBar from "../../components/navbar";
import BrandsCard from "./brandscard";
import BrandSlider from "./brandslider";
import Footer from "@/components/Footer";
export default function BrandsPage() {
  return (
    <div className="">
        <Header />
        <NavBar />
        <Brands />
        <BrandSlider />
        <Footer />
    </div>
      
  )
}
