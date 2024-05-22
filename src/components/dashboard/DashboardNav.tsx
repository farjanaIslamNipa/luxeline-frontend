import Image from "next/image";
import assets from '@/assets/index'

const DashboardNav = () => {
  return (
    <div className="bg-gray-300 dark:bg-gray-800 py-3 flex items-center justify-end shadow-md px-10">
    <div className="flex items-center gap-3 ml-3">
      <p className='text-sm text-gray-600 dark:text-brand font-semibold'>farjana@gmail.com</p>
      <Image src={assets.dashboard.userImg} alt="" className='h-12 w-12 rounded-full' />
    </div>
  </div>
  );
};

export default DashboardNav;