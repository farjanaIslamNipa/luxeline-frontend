
import {cn} from "@/lib/utils";
import Image from "next/image";
import assets from '@/assets/index'
import useCategoryNavigation from "@/hooks/useCategoryNavigation";
import Link from "next/link";


type TNavbarProps = {
  expand: boolean,
  toggleMenu: () => void;
}

const CategoryNavbar = ({expand, toggleMenu} : TNavbarProps) => {
  const {goToCategory} = useCategoryNavigation()
  
  
  return (
    <div className={cn("w-0 md:w-auto small-device-collapse-nav bg-opacity-50 md:bg-opacity-100 bg-brandLight text-brandLighter text-xs", { "w-full": expand })}>
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2 pt-6 md:pt-0 w-[70%] md:w-full h-screen md:h-auto  bg-brandLight pl-6">
          {expand && (
            <div className="absolute right-6 top-5 block md:hidden">
              <button
                onClick={toggleMenu}
                className="bg-brandLighter transition-all duration-150 hover:bg-opacity-100 rounded py-1"
              >
                <Image src={assets.icons.closeIcon} alt="Close Menu" className="h-4" />
              </button>
            </div>
          )}
          <div className="pb-6 block md:hidden">
            <Image src={assets.global.logo} alt="Logo" className="h-9 w-auto" />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-3 lg:gap-6 h-10">
            <Link href='/mens-clothing' className="nav-item">All</Link>
            <button onClick={() => goToCategory('shirts')} className="nav-item">Shirts</button>
            <button onClick={() => goToCategory('pants')} className="nav-item">Pants</button>
            <button onClick={() => goToCategory('t-shirts')} className="nav-item">T-Shirts</button>
            <button onClick={() => goToCategory('hoodies')} className="nav-item">Hoodies</button>
            <button onClick={() => goToCategory('shorts')} className="nav-item">Shorts</button>
            <button onClick={() => goToCategory('polos')} className="nav-item">Polos</button>
            <button onClick={() => goToCategory('jackets')} className="nav-item">Jackets</button>
            <button onClick={() => goToCategory('sweatshirts')} className="nav-item">Sweatshirts</button>
            <button onClick={() => goToCategory('jeans')} className="nav-item">Jeans</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;