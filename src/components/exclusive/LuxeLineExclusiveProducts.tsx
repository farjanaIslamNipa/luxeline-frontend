'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import ProductCard from "../cards/ProductCard";
import exclusive from '../../assets/general/exclusive.jpg'
import Image from "next/image";


const LuxeLineExclusiveProducts = ({products} : {products: TProduct[]}) => {
  const [exclusiveProduct, setExclusiveProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterLuxeLineExclusive = products.filter(product => product.isExclusive === true)

  setExclusiveProduct(filterLuxeLineExclusive)
}, [products])

  return (
    <>
    <div className="custom-container pt-5 pb-14 ">
      <div className="relative bg-black">
        <Image src={exclusive} alt='LuxeLine Exclusive' className="w-full opacity-55" />
        <h1 className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-semibold text-3xl md:text-6xl text-brandLighter">LuxeLine Exclusive</h1>
      </div>
      {
        exclusiveProduct?.length! > 0 &&
        <div>
          <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
            {
              exclusiveProduct?.map((product: TProduct) => <ProductCard key={product._id} product={product} />)
            }
          </div>
        </div>
        }
    </div>
    </>
  );
};

export default LuxeLineExclusiveProducts;