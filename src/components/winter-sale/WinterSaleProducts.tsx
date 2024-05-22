'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import ProductCard from "../cards/ProductCard";


const WinterSaleProducts = ({products} : {products: TProduct[]}) => {
  const [winterSaleProduct, setWinterSaleProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterWinterSaleProducts = products.filter(product => product.isWinterSale === true)

  setWinterSaleProduct(filterWinterSaleProducts)
}, [products])

  return (
    <>
    {
      winterSaleProduct?.length! > 0 ?
      <div className="custom-container pt-10 pb-14 bg-brandLighter">
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
          {
            winterSaleProduct?.map((product: TProduct) => <ProductCard key={product._id} product={product} />)
          }
        </div>
      </div>
      :
      <p className="py-5 text-center">No item found</p>
      }
    </>
  );
};

export default WinterSaleProducts;