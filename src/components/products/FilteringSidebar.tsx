'use client'
import useCategoryNavigation from "@/hooks/useCategoryNavigation";
import {Checkbox} from "../ui/checkbox";
import {useRouter} from "next/navigation";

const FilteringSidebar = () => {
  const {goToCategory} = useCategoryNavigation()

  const router = useRouter();

  const filterRating = (rating: number) => {
    router.push(`/mens-clothing?rating=${rating}`);
  };
  return (
    <div className="space-y-5">
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Price Range <span className="text-sm">(BDT)</span></p>
        <div className="space-y-3">
          <div className="mt-3 flex items-center gap-3">
          <button onClick={() => goToCategory('shirts')} className="h-4 w-4 border rounded-md"></button>
            <p className="number-font">500 - 1000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">1001 - 2000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">2001 - 3000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">500 - 1000</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="number-font">500 - 1000</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Category</p>
        <div className="space-y-3">
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Shirts</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Pants</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Shirts</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm">Hoodies</p>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg">
        <p className="text-lg font-semibold">Rating</p>
        <div className="space-y-3">
          <div className="mt-3 flex items-center gap-3">
          <button onClick={() => filterRating(5)} className="h-4 w-4 border rounded-md"></button>
            <p className="font-medium text-sm"><span className="number-font">5</span> Star</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm"><span className="number-font">4</span> Star</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm"><span className="number-font">3</span> Star</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm"><span className="number-font">2</span> Star</p>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Checkbox />
            <p className="font-medium text-sm"><span className="number-font">1</span> Star</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteringSidebar;