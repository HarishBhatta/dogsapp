import FeaturedProducts from './featuredproducts';
import ShopByCategory from '../components/shopbycategory';
import BestDeals from '../components/BestDeals';
import Slider from '../components/slider';
import PetForAdoption from '../components/petforadoption';
import { ShopByBrands } from '../components/ShopByBrands';
import SearchProvider from '../context/SearchContext';

export default function Home() {
  return (
      <div className='bg-slate-200 w-full'>   
        <Slider />
        <FeaturedProducts />
        <ShopByCategory />
        <ShopByBrands />
        <BestDeals />
        <PetForAdoption />
      </div>      
  );
}
