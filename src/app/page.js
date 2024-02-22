import Header from '@/components/Header';
import NavBar from '@/components/navbar';import FeaturedProducts from './featuredproducts';
import ShopByCategory from '@/components/shopbycategory';
import BestDeals from '@/components/BestDeals';
import Slider from '@/components/slider';
import Footer from '@/components/Footer';
import PetForAdoption from '@/components/petforadoption';

export default function Home() {
  return (
      <div className='bg-slate-200 w-full'>   
        <Header />
        <NavBar />
        <Slider />
        <FeaturedProducts />
        <ShopByCategory />
        <BestDeals />
        <PetForAdoption />
        <Footer />
      </div>
    
  );
}
