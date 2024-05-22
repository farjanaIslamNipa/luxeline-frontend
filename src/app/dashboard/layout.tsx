import DashboardNav from "@/components/dashboard/DashboardNav";
import Sidebar from "@/components/dashboard/Sidebar";
import {ReactNode} from "react";


const layout = ({children} : {children: ReactNode}) => {
  return (
    <div className="grid grid-cols-12">
    <div className="col-span-2 sm:col-span-3 lg:col-span-2">
      <Sidebar />
    </div>
    <div className="col-span-10 sm:col-span-9 lg:col-span-10">
      <DashboardNav />
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
        {children}
      </div>
    </div>
  </div>
  );
};

export default layout;