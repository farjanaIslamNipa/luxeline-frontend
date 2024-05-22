import LuxeLineExclusiveProducts from "@/components/exclusive/LuxeLineExclusiveProducts";

const LuxeLineExclusive = async() => {
  const res = await fetch("https://luxe-line-server.vercel.app/api/v1/products",{
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()

  return (
    <div>
    <LuxeLineExclusiveProducts products={products} />
  </div>
  );
};

export default LuxeLineExclusive;