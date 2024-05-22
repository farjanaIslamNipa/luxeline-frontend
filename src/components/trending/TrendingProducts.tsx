'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import TrendingProductCard from "../cards/TrendingProductCard";


const TrendingProducts = ({products} : {products: TProduct[]}) => {
  const [trendingProduct, setTrendingProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterTrendingProducts = products.filter(product => product.isTrending === true)

  setTrendingProduct(filterTrendingProducts)
}, [products])

  return (
    <>
    {
      trendingProduct?.length! > 0 &&
      <div className="custom-container pt-10 pb-14 bg-brandLighter">
        <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
          {
            trendingProduct?.map((product: TProduct) => <TrendingProductCard key={product._id} product={product} />)
          }
        </div>
      </div>
      }
    </>
  );
};

export default TrendingProducts;