import Footer from "@/components/footer/footer";

const AuthLayout = ({
    children
}: { 
    children: React.ReactNode;
}) => {
    return ( 
        <div className="flex min-h-screen flex-col overflow-clip">
            <div className="flex-1 h-full w-full">
                { children }
            </div>
        </div>
     );
}
 
export default AuthLayout;