import FilterCategory from "./FilterCategory";
import FilterPrice from "./FilterPrice";
import FilterRating from "./FilterRating";

const FilteringSidebar = ({handleChange} : {handleChange: (e : any) => void}) => {

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-sm">
        <FilterCategory handleChange={handleChange} />
        </div>
      <div className="bg-white p-4 rounded-lg">
        <FilterRating handleChange={handleChange} />
      </div>
      <div className="bg-white p-4 rounded-lg">
        <FilterPrice handleChange={handleChange} />
      </div>
    </div>
  );
};

export default FilteringSidebar;