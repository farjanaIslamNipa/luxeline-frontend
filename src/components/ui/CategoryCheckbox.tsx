type TCategoryCheckboxProps = {
  category: string | null | undefined;
  handleFilterCategory: (value: string) => void;
  categoryValue: string;
};

const CategoryCheckbox = ({
  category,
  handleFilterCategory,
  categoryValue,
}: TCategoryCheckboxProps) => {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        onClick={() => handleFilterCategory(categoryValue)}
        className={`${
          category === categoryValue ? "bg-brand" : "bg-white"
        } border border-gray-300 rounded-sm h-5 w-5 flex justify-center items-center `}
      >
        {category === categoryValue ? (
          <div className="border h-2 w-2 bg-brandLighter"></div>
        ) : (
          ""
        )}
      </button>
      <p className="font-medium text-sm capitalize">{categoryValue ? categoryValue : 'All'}</p>
    </div>
  );
};

export default CategoryCheckbox;
