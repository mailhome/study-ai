import SignUpView from "@/components/auth/sign-up-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";


const SignUpPage = async () => {
    const session = await auth.api.getSession({
            headers: await headers(),
          })
        
          if (!!session) {
            redirect("/sign-in")
          } 
    return ( 
        <SignUpView />
     );
}
 
export default SignUpPage;