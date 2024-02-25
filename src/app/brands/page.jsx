import Brands from "../../components/brands";
import Header from "../../components/Header";
import NavBar from "../../components/navbar";
import BrandSlider from "./brandslider";
import BrandsView from './BrandsView';
import Footer from "../../components/Footer";
export default function BrandsPage() {
  return (
    <div className="">
        <Header />
        <NavBar />
        <Brands title= "Brands"/>
        <BrandsView />
        <Footer />
    </div>
      
  )
}
