import FlashSaleHeader from "@/components/flash-sale/FlashSaleHeader";
import FlashSaleProducts from "@/components/flash-sale/FlashSaleProducts";


const FlashSale = async() => {
  const res = await fetch("https://luxe-line-server.vercel.app/api/v1/products",{
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()
  return (
    <>
      <FlashSaleHeader />
      <main>
        <FlashSaleProducts products={products} />
      </main>
    </>
  );
};

export default FlashSale;