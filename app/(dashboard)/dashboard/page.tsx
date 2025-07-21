

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HammerIcon } from "lucide-react"
const Dashboard = ()=> {
  return (
<div className="flex justify-center max-w-md">
<Alert className="h-30 font-semibold w-100">
  <HammerIcon className="h-2 w-5"/>
  <AlertTitle>
   Work in Progress</AlertTitle>
  <AlertDescription className="text-[15px]">
    The Dashboard is under development and will be available soon. <br />
    You can use all other services over here.!
  </AlertDescription>
</Alert>
</div>   
  )
}

export default Dashboard