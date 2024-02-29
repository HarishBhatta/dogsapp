import Head from "next/head";
import Brands from "../../components/brands";
import BrandsView from './BrandsView';
export const metadata = {
  title: 'Brands Page',
  desription: 'Brands page of Dogsapp'
}

export default async function BrandsPage() {
  return (
      <>
          <Brands title= "Brands"/>
          <BrandsView />
      </>      
  )
}
