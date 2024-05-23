import Input from "../ui/Input";

const FilterCategory = ({handleChange} : {handleChange: (e:any) => void}) => {
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
          value="t-shirts"
          title="T-shirts"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="shirts"
          title="Shirts"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="pants"
          title="Pants"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="hoodies"
          title="Hoodies"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="shorts"
          title="Shorts"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="polos"
          title="Polos"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="jeans"
          title="Jeans"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="sweatshirts"
          title="Sweatshirts"
          name="category"
        />
      </div>
      <div>
        <Input
          handleChange={handleChange}
          value="jackets"
          title="Jackets"
          name="category"
        />
      </div>
    </div>
  </div>
  );
};

export default FilterCategory;