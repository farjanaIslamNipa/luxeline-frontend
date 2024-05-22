export type TProduct = {
  _id: string;
  title: string;
  category: string;
  images: string[];
  oldPrice: number;
  currentPrice: number;
  description: string;
  isFlashSale: boolean;
  isTrending: boolean;
  isExclusive?: boolean;
  isWinterSale?: boolean;
  rating: number;
  isDeleted: boolean;
}