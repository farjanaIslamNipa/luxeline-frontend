import FlashSale from "@/components/home/FlashSale";
import HeroSection from "@/components/home/HeroSection";
import TopCategories from "@/components/home/TopCategories";
import TrendingNow from "@/components/home/TrendingNow";


export default async function Home() {
  const res = await fetch("https://luxe-line-server.vercel.app/api/v1/products",{
    next: {
      revalidate: 30
    }
  })
  const rawText = await res.text();

  const { data: products } = JSON.parse(rawText);

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
