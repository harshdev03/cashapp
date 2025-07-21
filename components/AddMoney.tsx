import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SelectBank } from "./SelectBank"

export function AddMoneyCard() {
  return (
    <Card className="max-w-sm w-full ">
      <CardHeader>
        <CardTitle>Add Money</CardTitle>
        <CardDescription>
          Add money to your wallet
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Amount</Label>
              <Input
                id="amoun"
                type="amount"
                placeholder="ex: $2000"
                required
                />
            </div>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="password">Bank</Label>
                <SelectBank/>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Button type="submit" className="w-full cursor-pointer">
          Add Money
        </Button>
      </CardFooter>
    </Card>

  )
}
