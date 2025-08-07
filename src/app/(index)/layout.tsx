
import Footer from "@/components/index/footer";
import Navbar from "@/components/index/navbar";
import React from "react";

type Props =  {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                { children }
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;