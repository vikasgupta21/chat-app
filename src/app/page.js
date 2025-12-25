import { Button } from "@/components/ui/button";
import { currentUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

export default async function  Home() {
  const user = await currentUser();
  return (
    <div className ="h-svh flex  flex-col gap-2 items-center justify-center flex-"> 
      <div className=" flex flex-row items-center justify-center gap-2.5 h-">


        <UserButton  user={user}/>
          
      </div>    
    </div>
  );
}
