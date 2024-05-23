
const ProductsSection = ({result} : {result:any}) => {
  return (
   <div>
    {
      result.length > 0 ?  <div className="grid grid-cols-3 gap-4">
      {result}
     </div>
     :
    <p className="text-red-700 font-medium text-3xl text-center pt-10">No item found !</p>
    }
   </div>
  );
};

export default ProductsSection;