import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { HammerIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center w-full px-10 md:px-8">
      <Alert className="w-full max-w-md bg-muted p-4 rounded-xl shadow-lg">
        <HammerIcon className="size-5 mt-1 text-primary" />
        <div>
          <AlertTitle className="text-lg font-semibold">
            Work in Progress
          </AlertTitle>
          <AlertDescription className="text-[15px] mt-1 leading-relaxed">
            The Dashboard is under development and will be available soon. <br />
            You can use all other services over here.!
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};

export default Dashboard;
