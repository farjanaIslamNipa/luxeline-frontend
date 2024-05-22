'use client'
import Link from "next/link";
import FlashSaleCard from "../cards/FlashSaleCard";
import {TProduct} from "@/types";
import {useEffect, useState} from "react";

const FlashSale = ({products} : {products: TProduct[]}) => {
const [flashSaleProduct, setFlashSaleProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterFlashSaleProducts = products.filter(product => product.isFlashSale === true)

  setFlashSaleProduct(filterFlashSaleProducts)
}, [products])

  return (
    <>
    {
      flashSaleProduct?.length! > 0 &&
      <div className="custom-container mt-10 md:mt-14 ">
        <div className="flex justify-between items-end">
          <h4 className="section-title">Flash Sale</h4>
          <Link href="/flash-sale" className="bg-brand text-brandLighter px-4 py-2 rounded-full text-sm hover:opacity-85">View All</Link>
        </div>
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
          {
            flashSaleProduct?.slice(0, 8).map((product: TProduct) => <FlashSaleCard key={product._id} product={product} />)
          }
        </div>
      </div>
      }
    </>

  );
};

export default FlashSale;