/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import Link from "next/link";
import assets from '@/assets/index'
import {HoverCard, HoverCardContent, HoverCardTrigger} from "../../ui/hover-card";
import CategoryNavbar from "./CategoryNavbar";
import {useEffect, useRef, useState} from "react";

const Navbar = () => {
  const [expand, setExpand] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const toggleMenu = () => {
    setExpand(!expand)
  }

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const height = navRef.current.clientHeight;
      setNavHeight(height)
    }
  }, []);

  return (
    <div style={{marginBottom: navHeight}}>
      <div ref={navRef} className="fixed top-0 w-full z-50 mb-28">
        <div className="bg-brand">
          <div className="custom-container text-brandLighter">
            <nav className="flex justify-between items-center h-[65px]">
                <div className="flex items-center h-full">
                  <button onClick={() => setExpand(!expand)} className="block md:hidden mr-2">
                    <Image src={assets.icons.hamburgerIcon} alt="Hamburger Menu" className="h-4 w-auto" />
                  </button>
                  <Link href="/" className="pr-3 h-full flex items-center">
                    <Image src={assets.global.logo} alt="Logo" className="h-[26px] xs:h-7 sm:h-8 lg:h-10 w-auto" />
                  </Link>
                  <div className="hidden xs:flex text-xs md:text-base px-2 sm:px-4 bg-brandLight h-full  items-center">
                    MEN's Wear
                  </div>
                </div>
                <div>
                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                  <div className="relative">
                    <input type="search" className="border border-brandLight rounded-full min-w-[400px] py-1 px-5 bg-brandLight placeholder:text-sm focus:right-0 focus:outline-0 hidden lg:block" placeholder="Search item by category" />
                    <button className="absolute right-1 top-[1px] hidden lg:block">
                      <Image src={assets.icons.searchIcon} alt="Search" className="h-8 w-auto" />
                    </button>
                    <button className="bg-brandLight rounded-full block lg:hidden p-[2px]">
                      <Image src={assets.icons.searchIcon} alt="Search" className="h-6 xs:h-7 sm:h-8 w-auto" />
                    </button>
                  </div>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.accountIcon} alt="My Account" className="h-[26px] sm:h-[29px] w-auto mt-1 cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="">My Account</p>
                      <p className="">My Order</p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.wishlistIcon} alt="Wishlist" className="h-[26px] sm:h-[30px] w-auto mt-1 cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="text-center">No wishlist added !!</p>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard>
                    <HoverCardTrigger>
                      <Image src={assets.icons.cartIcon} alt="Cart" className="h-[20px] sm:h-[23px] w-auto cursor-pointer" />
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <p className="text-center">Your cart is empty !!</p>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                </div>
              </nav>
          </div>
        </div>
        <CategoryNavbar expand={expand} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default Navbar;