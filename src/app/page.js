import FeaturedProducts from './featuredproducts';
import ShopByCategory from '../components/shopbycategory';
import BestDeals from '../components/BestDeals';
import Slider from '../components/slider';
import PetForAdoption from '../components/petforadoption';
import { ShopByBrands } from '../components/ShopByBrands';
import Head from 'next/head';

export const metadata = {
  title: 'Dogs App',
  description: 'Popular Pet website in Nepal'
};

export default async function Home() {
  return (
      <div className='bg-slate-200 w-full'> 
        <Head>
          <title>Dogsapp</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>  
        <Slider />
        <FeaturedProducts />
        <ShopByCategory />
        <ShopByBrands />
        <BestDeals />
        <PetForAdoption />
      </div>      
  );
}
