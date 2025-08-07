"use client"

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HomeView() {
  const { data: session } = authClient.useSession();
  const router = useRouter();


  if (!session) {
    return (
      <Loader2 />
    )
  }
  return (
    <div className="flex flex-col p-4 gap-y4">
      <p>Logged in as {session?.user.name}</p>
      <Button 
      className=""
      onClick={() => authClient.signOut({
        fetchOptions: {
            onSuccess: () => router.push("/sign-in")
        }
      })}>
        Sign out
      </Button>
    </div>
  );
}
