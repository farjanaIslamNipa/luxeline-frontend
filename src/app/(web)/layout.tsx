import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import {ReactNode, Suspense} from "react";
import Loading from "../loading";


const layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading/>}>
      {children}
  </Suspense>

      <Footer />
    </>
  );
};

export default layout;