import TrendingProductCard from "@/components/cards/TrendingProductCard";
import {TProduct} from "@/types";


const ProductPage = async({searchParams} : {searchParams: Record<string, unknown>}) => {
  const category = searchParams.category;
  const res = await fetch(`http://localhost:5000/api/v1/products?category=${category}`, {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()

  return (
    <div>
      {
        products.length > 0 ?
        <div className="grid grid-cols-3 gap-4">
          {
            products.map((product : TProduct) => <TrendingProductCard product={product} key={product._id} />)
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

export default ProductPage;