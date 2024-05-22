import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import {ReactNode} from "react";


const layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
       {children}
      <Footer />
    </>
  );
};

export default layout;