import Image from "next/image";
import { petProducts } from "../../../components/products";
import Header from "../../../components/Header";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/Footer"
export default function ProductDetails({params}) {
  const id = params.id;
  const product = petProducts.find((item) => item.id === parseInt(id));
  return (
    <div>
      <Header />
      <NavBar />
      <div className="flex pt-16 bg-teal-50 pb-16">
      <div className="w-[25%] ml-[15%] h-80 relative">
      <Image
      src={product.image}
      alt="image"
      fill={true}
      />
      </div>
      
      <div className="w-1/2  pl-16 tracking-widest">
        <h1 className="text-3xl font-bold ">{product.name}</h1>
        <h2 className="text-xl font-semibold">({product.category})</h2>
        <p className="text-xl font-semibold text-slate-700 line-through mt-3">{product.oldprice}</p>
        <p className="text-xl font-semibold text-blue">{product.price}</p>
        <h1 className="text-2xl font-bold mt-3 text-blue">Description</h1>
        <p className="text-justify font-medium text-slate-700 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nostrum dolores error fugit libero eaque, aspernatur quae. Vitae, temporibus, culpa aut corporis odio, quibusdam possimus pariatur nostrum tempore adipisci eaque?</p>
      </div>
    </div>
    <Footer />
    </div>
    
    
  )
}
