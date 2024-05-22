import WinterSaleProducts from "@/components/winter-sale/WinterSaleProducts";

const WinterSale = async() => {
  const res = await fetch("https://luxe-line-server.vercel.app/api/v1/products",{
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()
  return (
    <div>
      <WinterSaleProducts products={products} />
    </div>
  );
};

export default WinterSale;