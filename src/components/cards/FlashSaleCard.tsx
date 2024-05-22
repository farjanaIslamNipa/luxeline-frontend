import Image from "next/image";
import Link from "next/link";
import {TProduct} from "@/types";

const FlashSaleCard = ({product} : {product: TProduct}) => {

  return (
    <Link href={`/mens-clothing/${product._id}`} className="flash-sale-card flex flex-col justify-between relative">
      <div className="w-full relative h-[380px] bg-brandLighter">
        <Image src={product.images[0]} fill alt="Flash Sale" className="mx-auto object-cover" />
      </div>
      <div className="absolute top-8 left-0 bg-brandLight text-white px-2 text-sm py-[2px]">
        Sale - 20%
      </div>
      <div className="px-2">
        <p className="font-semibold mt-4 mb-1 text-brand leading-4">{product.title}</p>
        <p className="font-bold text-base text-brand">
          Price:&nbsp;
          <span className="number-font">{product?.currentPrice}</span>
          <span className="text-sm">&nbsp;BDT</span>
          <span className="ml-3 font-medium line-through text-gray-500 number-font text-sm">2990 BDT</span>
          </p>
      </div>
      <Link href="/view" className="text-center border border-gray-400 mt-4 text-sm font-semibold py-1">Quick View</Link>
    </Link>
  );
};

export default FlashSaleCard;