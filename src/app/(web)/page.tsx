import FlashSale from "@/components/home/FlashSale";
import HeroSection from "@/components/home/HeroSection";
import TopCategories from "@/components/home/TopCategories";
import TrendingNow from "@/components/home/TrendingNow";


export default async function Home() {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()

  return (
   <>
    <header>
      <HeroSection />
    </header>
    <main>
      <FlashSale products={products} />
      <TopCategories />
      <TrendingNow products={products} />
    </main>
   </>
  );
}
