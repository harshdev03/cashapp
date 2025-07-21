"use client"
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
import { p2pTransfer } from "@/lib/actions/p2pTransaction"
import { useRouter } from "next/navigation"
import {useState} from 'react'


export function P2pCard() {
  const [phoneno, setPhoneNo] = useState("")
  const router = useRouter()
  const [amount, setAmount] = useState(0)

  const handleTransfer = async () => {
    try {
      await p2pTransfer(phoneno, Number(amount * 100))
      router.push("/transfer") 
    } catch (err) {
      console.error("Transfer failed:", err)
    }
  }


  return (
    <Card className="max-w-md w-full ">
      <CardHeader>
        <CardTitle>Send Money</CardTitle>
        <CardDescription>
          Send money just using phone no
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Phone No</Label>
              <Input
                id="phone"
                type="phone"
                placeholder="ex: +9132344554"
                required
                onChange={(e)=> setPhoneNo(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="password">Amount</Label>
                 <Input
                id="amount"
                type="amount"
                placeholder="ex: $2000"
                required
                onChange={(e)=> setAmount(Number(e.target.value))}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Button type="submit" className="w-full cursor-pointer" onClick={handleTransfer}>
          Send Money
        </Button>
      </CardFooter>
    </Card>

  )
}
