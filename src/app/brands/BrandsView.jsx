import brandsArray from "../../../public/brandsarray";
import Image from "next/image";
const BrandsView = () => {
  return (

    <div className="flex gap-5 px-10 mt-10 flex-wrap">
        {brandsArray.map((brand)=>(
            <div className="bg-white w-56 h-56">
                <Image
                src={brand.image}
                alt="brands image"
                width={180}
                height="auto"
                className="mx-5"
                />
                <h1 className="text-xl font-medium uppercase text-center">{brand.brand}</h1>
            </div>
        ))}
    </div>

    )
}

export default BrandsView;