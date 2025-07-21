import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function Balance({amount , locked}:{
    amount: number,
    locked: number
}) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Balance</CardTitle>
        <CardDescription>
          Here is your current balance
        </CardDescription>
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-6">
             <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Unlocked Balance</Label>
              </div>
                {amount/100} INR
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Total Locked Balance</Label>
              </div>
                    {locked / 100} INR
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Total Balance</Label>
              </div>
                    {(locked+amount)/100}   INR
            </div>
          </div>
      </CardContent>

    </Card>
  )
}
