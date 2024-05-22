import Image from "next/image";
import Link from "next/link";
import assets from '@/assets/index'

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-800 sticky top-0 left-0 overflow-y-auto">
      <nav className="flex flex-col pt-5 px-4 gap-y-4 text-gray-100 truncate">
        <Link href="/" className="mb-10 mx-auto">
          <Image src={assets.global.logo} alt="logo" className="h-16" />
        </Link>
        <Link href="/dashboard">
          <div className="flex items-end gap-2 p-1">
            <Image
              src={assets.dashboard.recentEvent}
              alt="All Products"
              className="h-8 sm:h-6 w-8 sm:w-6"
            />
            <p className="dashboard-nav-item">
              All Products
            </p>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;