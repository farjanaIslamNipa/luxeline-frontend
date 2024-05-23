import Input from "../ui/Input";

const FilterRating = ({handleChange} : {handleChange: (e:any) => void}) => {
  return (
    <div>
      <p className="text-brand font-bold text-sm bg-brandLighter px-3 py-[6px] rounded-md">Rating</p>

      <div className="space-y-2 mt-3">
        <div>
          <label className="sidebar-label-container text-sm">
            <input onChange={handleChange} type="radio" value="" name="rating" className="absolute opacity-0 cursor-pointer" />
            <span className="checkmark text-sm"></span>All
          </label>
        </div>
        <div>
          <Input
            handleChange={handleChange}
            value={5}
            title="5"
            name="rating"
          />
        </div>
        <div>
          <Input
            handleChange={handleChange}
            value={4}
            title="4"
            name="rating"
          />
        </div>
        <div>
          <Input
            handleChange={handleChange}
            value={3}
            title="3"
            name="rating"
          />
        </div>
        <div>
          <Input
            handleChange={handleChange}
            value={2}
            title="2"
            name="rating"
          />
        </div>
        <div>
          <Input
            handleChange={handleChange}
            value={1}
            title="1"
            name="rating"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterRating;