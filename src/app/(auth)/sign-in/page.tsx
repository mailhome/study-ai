import SignInView from "@/components/auth/sign-in-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SignInPage =  async () => {
      const session = await auth.api.getSession({
        headers: await headers(),
      })
    
      if (!!session) {
        redirect("/sign-in")
      } 

    return ( 
        <SignInView />
     );
}
 
export default SignInPage;