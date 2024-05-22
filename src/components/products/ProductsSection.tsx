'use client'
import {TProduct} from "@/types";
import ProductCard from "../cards/ProductCard";
import {useEffect, useState} from "react";


const ProductsSection = ({productData} : {productData: TProduct[]}) => {
  const [products, setProducts] = useState<TProduct[] | null>()
  const [filterPrice, setFilterPrice] = useState<String | null>()
  const [filterCategory, setFilterCategory] = useState<String | null>()
  const [filterRating, setFilterRating] = useState<Number | null>()

  useEffect(() => {
    setProducts(productData)
    if(filterRating){
      const filteredRatingProducts = productData.filter(product => product.rating === filterRating)
      setProducts(filteredRatingProducts)
    }
  }, [productData, filterRating])

  return (
    <div>
      {
        productData.length > 0 ?
        <div className="grid grid-cols-3 gap-4">
          {
            productData.map((product : TProduct) => <ProductCard product={product} key={product._id} />)
          }
        </div>
        :
        <div className="h-[40vh] flex justify-center items-center">
          <p className="text-center py-5 font-bold text-3xl text-red-700">No item found !</p>
        </div>
      }
    </div>
  );
};

export default ProductsSection;