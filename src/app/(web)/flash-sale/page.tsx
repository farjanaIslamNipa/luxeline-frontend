import FlashSaleHeader from "@/components/flash-sale/FlashSaleHeader";
import FlashSaleProducts from "@/components/flash-sale/FlashSaleProducts";


const FlashSale = async() => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
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