import Image from "next/image";
import assets from '../../assets/index'
import Link from "next/link";
import {TProduct} from "@/types";

const TrendingProductCard = ({product} : {product: TProduct}) => {

  return (
    <Link href={`/mens-clothing/${product._id}`} className="flash-sale-card flex flex-col justify-between relative">
      <div className="w-full relative h-[280px] bg-brandLighter">
        <Image src={product.images[0]} fill alt="Trending now" className="mx-auto object-cover" />
      </div>
      <button className="absolute top-2 right-2">
        <Image src={assets.icons.wishlistBlack} alt="Wishlist" className="h-7 w-7" />
      </button>
      <p className="font-semibold mt-4 mb-1 text-brand leading-4 px-2 py-4">{product.title}</p>
    </Link>
  );
};

export default TrendingProductCard;