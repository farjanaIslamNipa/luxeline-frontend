import TrendingProducts from "@/components/trending/TrendingProducts";

const TrendingNow = async() => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()
  return (
    <div>
      <TrendingProducts products={products} />
    </div>
  );
};

export default TrendingNow;