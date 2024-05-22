type TPriceCheckboxProps = {
  price: string | null | undefined;
  handleFilterPrice: (value: string) => void;
  priceRange: string;
};

const PriceRangeCheckbox = ({
  price,
  handleFilterPrice,
  priceRange,
}: TPriceCheckboxProps) => {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        onClick={() => handleFilterPrice(priceRange)}
        className={`${
          price === priceRange ? "bg-brand" : "bg-white"
        } border border-gray-300 rounded-sm h-5 w-5 flex justify-center items-center `}
      >
        {price === priceRange ? (
          <div className="border h-2 w-2 bg-brandLighter"></div>
        ) : (
          ""
        )}
      </button>
      <p className="font-medium text-sm capitalize number-font">{priceRange}</p>
    </div>
  );
};

export default PriceRangeCheckbox;
