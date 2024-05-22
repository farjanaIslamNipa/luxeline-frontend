import {TProduct} from "@/types";
import Image from "next/image";
import Link from "next/link";


const ProductCard = ({product} : {product: TProduct}) => {
  return (
    <Link href={`/mens-clothing/${product._id}`} className="flash-sale-card flex flex-col justify-between relative">
      <div className="w-full relative h-[300px] bg-brandLighter">
        <Image src={product.images[0]} fill alt="Flash Sale" className="mx-auto object-cover" />
      </div>
      <div className="px-2 pb-5">
        <p className="font-semibold mt-4 mb-1 text-brand leading-5">{product.title}</p>
        <p className="font-bold text-base text-brand">
          Price:&nbsp;
          <span className="number-font">{product?.currentPrice}</span>
          <span className="text-sm">&nbsp;BDT</span>
          <span className="ml-3 font-medium line-through text-gray-500 number-font text-sm">2990 BDT</span>
          </p>
          <p className="font-medium mb-1 text-brand text-sm">Rating: <span className="number-font font-semibold">{product.rating}</span></p>
      </div>
    </Link>
  );
};

export default ProductCard;