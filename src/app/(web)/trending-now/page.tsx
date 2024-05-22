import TrendingProducts from "@/components/trending/TrendingProducts";

const TrendingNow = async() => {
  const res = await fetch("https://luxe-line-server.vercel.app/api/v1/products",{
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