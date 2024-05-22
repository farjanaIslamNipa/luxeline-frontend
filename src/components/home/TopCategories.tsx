'use client'
import Image from "next/image";
import assets from '../../assets/index'
import useCategoryNavigation from "@/hooks/useCategoryNavigation";

const TopCategories = () => {
  const {goToCategory} = useCategoryNavigation()
  

  return (
    <div className="custom-container mt-10 md:mt-14 lg:mt-20">
      <h4 className="text-brand font-bold text-center text-2xl md:text-3xl lg:text-4xl">Top Categories</h4>
      <div className="">
        <div className="mt-5 md:mt-8 lg:mt-10 grid grid-cols-12 gap-2 md:gap-3 lg:gap-6">
          <div className="col-span-6 md:col-span-3">
            <div onClick={() => goToCategory('daily-essentials')} className="h-full category-card">
              <Image src={assets.home.weekendHeroes} alt="" className="w-full h-full object-cover category-img" />
              <div className="category-card-hover-content">
                <p className="text-brandLighter text-2xl font-medium">Daily Essentials</p>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="space-y-2 md:space-y-3 lg:space-y-6 h-full">
              <div onClick={() => goToCategory('shirts')} className="category-card">
                <Image src={assets.home.shirt} alt="" className="w-full h-auto category-img" />
                <div className="category-card-hover-content">
                  <p className="text-brandLighter text-2xl font-medium">Shirts</p>
                </div>
              </div>
              <div onClick={() => goToCategory('shorts')} className="category-card">
                <Image src={assets.home.shorts} alt="" className="w-full h-auto category-img" />
                <div className="category-card-hover-content">
                  <p className="text-brandLighter text-2xl font-medium">Shorts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="space-y-2 md:space-y-3 lg:space-y-6 h-full">
              <div onClick={() => goToCategory('jeans')} className="category-card">
                <Image src={assets.home.jeans} alt="" className="w-full h-auto category-img" />
                <div className="category-card-hover-content">
                  <p className="text-brandLighter text-2xl font-medium">Jeans</p>
                </div>
              </div>
              <div onClick={() => goToCategory('hoodies')} className="category-card">
                <Image src={assets.home.hoodies} alt="" className="w-full h-auto category-img" />
                <div className="category-card-hover-content">
                  <p className="text-brandLighter text-2xl font-medium">Hoodies</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div onClick={() => goToCategory('polos')} className="h-full category-card">
              <Image src={assets.home.poloTShirt} alt="" className="w-full h-full object-cover category-img" />
              <div className="category-card-hover-content">
                <p className="text-brandLighter text-2xl font-medium">Polos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;