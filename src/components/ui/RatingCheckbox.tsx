type TRatingCheckBoxProps = {
  rating: number | null | undefined;
  handleFilterRating: (value: number) => void;
  ratingCount: number;
};

const RatingCheckbox = ({
  rating,
  handleFilterRating,
  ratingCount,
}: TRatingCheckBoxProps) => {
  return (
    <div className="mt-3 flex items-center gap-3">
      <button
        onClick={() => handleFilterRating(ratingCount)}
        className={`${
          rating === ratingCount ? "bg-brand" : "bg-white"
        } border border-gray-300 rounded-sm h-5 w-5 flex justify-center items-center `}
      >
        {rating === ratingCount ? (
          <div className="border h-2 w-2 bg-brandLighter"></div>
        ) : (
          ""
        )}
      </button>
      <p className="font-medium text-sm">
        <span className="number-font">{ratingCount}</span> Star
      </p>
    </div>
  );
};

export default RatingCheckbox;
