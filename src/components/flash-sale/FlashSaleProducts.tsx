'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import FlashSaleCard from "../cards/FlashSaleCard";


const FlashSaleProducts = ({products} : {products: TProduct[]}) => {
  const [flashSaleProduct, setFlashSaleProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterFlashSaleProducts = products.filter(product => product.isFlashSale === true)

  setFlashSaleProduct(filterFlashSaleProducts)
}, [products])

  return (
    <>
    {
      flashSaleProduct?.length! > 0 &&
      <div className="custom-container pt-10 pb-14 bg-brandLighter">
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
          {
            flashSaleProduct?.map((product: TProduct) => <FlashSaleCard key={product._id} product={product} />)
          }
        </div>
      </div>
      }
    </>
  );
};

export default FlashSaleProducts;