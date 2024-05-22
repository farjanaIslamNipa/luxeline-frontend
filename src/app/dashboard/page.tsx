import {TProduct} from "@/types";
import Image from "next/image";


const Dashboard = async() => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: {
      revalidate: 30
    }
  })
  const { data:products }= await res.json()
  return (
    <div className="px-4 sm:px-10 pb-14 pt-5">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl text-gray-700 dark:text-gray-400">Product List</h5>
      </div>

      <div className="mt-8 overflow-auto">
        <table className="min-w-[1000px] lg:min-w-full text-sm">
          <thead className="border-b font-medium">
            <tr>
              <th scope="col" className="px-4 py-4 w-[3%] text-start">
                #
              </th>
              <th scope="col" className="px-4 py-4 w-[15%] text-start">
                Image
              </th>
              <th scope="col" className="px-4 py-4 w-[30%] text-start">
                Title
              </th>
              <th scope="col" className="px-4 py-4 w-[22%] text-start">
                Category
              </th>
              <th scope="col" className="px-4 py-4 w-[10%] text-end">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products?.map((product: TProduct, index: number) => (
                <tr className="border-b" key={product._id}>
                  <td className="px-6 py-4 font-semibold text-base">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="h-14 w-14 rounded-lg">
                      <Image src={product.images[0]} alt="Product Image" height={200} width={200} className="object-cover" />
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium text-base">
                    {product?.title}
                  </td>
                  <td className="px-4 py-4 text-base text-brand font-semibold">
                    {product?.category}
                  </td>
                  <td className="px-4 py-4 font-medium text-base text-right">
                    {product?.currentPrice}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Dashboard;