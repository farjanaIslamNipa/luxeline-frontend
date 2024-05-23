'use client'
import {TProduct} from "@/types";
import {useEffect, useState} from "react";
import TrendingProductCard from "../cards/TrendingProductCard";
import Image from "next/image";
import trending from '../../assets/general/trending.jpg'


const TrendingProducts = ({products} : {products: TProduct[]}) => {
  const [trendingProduct, setTrendingProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterTrendingProducts = products.filter(product => product.isTrending === true)

  setTrendingProduct(filterTrendingProducts)
}, [products])

  return (
    <>
    <div className="custom-container pt-5 pb-14">
    <div className="relative bg-black">
        <Image src={trending} alt='LuxeLine Trending' className="w-full opacity-50" />
        <h1 className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-semibold text-3xl md:text-6xl text-brandLighter">Trending Now</h1>
      </div>
      {
        trendingProduct?.length! > 0 &&
        <div>
          <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-6">
            {
              trendingProduct?.map((product: TProduct) => <TrendingProductCard key={product._id} product={product} />)
            }
          </div>
        </div>
        }
    </div>
    </>
  );
};

export default TrendingProducts;