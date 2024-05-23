'use client'
import {TProduct} from "@/types";
import {ChangeEvent, useState} from "react";
import ProductCard from "../cards/ProductCard";
import FilteringSidebar from "./FilteringSidebar";
import ProductsSection from "./ProductsSection";


const AllProducts = ({productData} : {productData: TProduct[]}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleChange = (event : ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = (products: TProduct[], selectedValue : any) => {
    let filteredItems = products;
   
    if(selectedValue){
      const [minPrice, maxPrice] = selectedValue.split('-').map(Number);
      
      filteredItems = filteredItems.filter(({category, currentPrice, rating}) => 
      category === selectedValue || 
      (currentPrice >= Number(minPrice) && currentPrice <= Number(maxPrice)) ||
      rating === Number(selectedValue)
      )
    }

    return filteredItems.map((product) => <ProductCard key={product._id} product={product} />)
  }

  const result = filteredProducts(productData, selectedCategory)

  console.log(result, 'result')

  return (
    <div className="flex">
      <div className="bg-gray-100 min-w-[300px] p-5">
        <FilteringSidebar handleChange={handleChange} />
      </div>
      <div className="p-4 flex-1 bg-gray-100">
        <ProductsSection result={result} />
      </div>
    </div>
  );
};

export default AllProducts;