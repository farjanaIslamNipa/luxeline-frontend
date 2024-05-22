"use client"
import Link from "next/link";
import {TProduct} from "@/types";
import TrendingProductCard from "../cards/TrendingProductCard";
import {useEffect, useState} from "react";

const TrendingNow = ({products} : {products: TProduct[]}) => {
const [trendingProduct, setTrendingProduct] = useState<TProduct[] | null>()


useEffect(() => {
  const filterTrendingProducts = products.filter(product => product.isTrending === true)

  setTrendingProduct(filterTrendingProducts)
}, [products])

  return (
    <div className="custom-container mt-10 md:mt-14 mb-14">
      <div className="flex justify-between items-end">
        <h4 className="section-title">Trending Now</h4>
        <Link href="/trending-now" className="bg-brand text-brandLighter px-4 py-2 rounded-full text-sm">View All</Link>
      </div>
      <div className="mt-5 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3">
        {
          trendingProduct?.slice(0, 8).map((product: TProduct) => <TrendingProductCard key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default TrendingNow;