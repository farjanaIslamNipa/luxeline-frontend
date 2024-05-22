import FilteringSidebar from "@/components/products/FilteringSidebar";
import ProductCard from "@/components/cards/ProductCard";
import {TProduct} from "@/types";
import ProductsSection from "@/components/products/ProductsSection";
import AllProducts from "@/components/products/AllProducts";

const MensClothing = async({searchParams} : {searchParams: Record<string, unknown>}) => {
  const category = searchParams.category;

  let url;

  if(category){
    url = `https://luxe-line-server.vercel.app/api/v1/products?category=${category}`
  }else {
    url = 'https://luxe-line-server.vercel.app/api/v1/products'
  }

  const res = await fetch(url, {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()

  return (
    <div className="custom-container pt-5 pb-10">
      <AllProducts productData={products} />
    </div>
  );
};

export default MensClothing;