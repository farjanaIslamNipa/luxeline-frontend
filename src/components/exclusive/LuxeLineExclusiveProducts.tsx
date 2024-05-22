'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import ProductCard from "../cards/ProductCard";


const LuxeLineExclusiveProducts = ({products} : {products: TProduct[]}) => {
  const [exclusiveProduct, setExclusiveProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterLuxeLineExclusive = products.filter(product => product.isExclusive === true)

  setExclusiveProduct(filterLuxeLineExclusive)
}, [products])

  return (
    <>
    {
      exclusiveProduct?.length! > 0 &&
      <div className="custom-container pt-10 pb-14 bg-brandLighter">
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
          {
            exclusiveProduct?.map((product: TProduct) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>
      }
    </>
  );
};

export default LuxeLineExclusiveProducts;