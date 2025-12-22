import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className ="h-svh flex  flex-col gap-2 items-center justify-center flex-"> 
      <div className=" flex flex-row items-center justify-center gap-2.5 h-">
          <Button variant="outline">Button</Button>
          <Button variant="outline" size="icon" aria-label="Submit">
          <ArrowUpIcon />
         </Button>
      </div> 

      <Button> HELOO</Button>
    </div>
  );
}
