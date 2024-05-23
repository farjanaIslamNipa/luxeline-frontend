import Input from "../ui/Input";

const FilterPrice = ({handleChange} : {handleChange: (e:any) => void}) => {
  return (
    <div>
    <p className="text-brand font-bold text-sm bg-brandLighter px-3 py-[6px] rounded-md">Category</p>

    <div className="space-y-2 mt-3">
      <div>
        <label className="sidebar-label-container text-sm">
          <input onChange={handleChange} type="radio" value="" name="category" className="absolute opacity-0 cursor-pointer" />
          <span className="checkmark text-sm"></span>All
        </label>
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="0-1000"
          title="0 - 1000"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="1000-2000"
          title="1000 - 2000"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="2000-3000"
          title="2000 - 3000"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="3000-4000"
          title="3000 - 4000"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="4000-5000"
          title="4000 - 5000"
          name="category"
        />
      </div>
    </div>
  </div>
  );
};

export default FilterPrice;