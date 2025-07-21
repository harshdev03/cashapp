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
import { SelectBank } from "./SelectBank"
import {useState} from 'react'
import { createOnRampTransaction } from "@/lib/actions/createOnRampTransaction"

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];


export function AddMoneyCard() {
  const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [amount, setAmount] = useState(0)
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "")  
  
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
                onChange={(e)=> setAmount(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col gap-6">
            <div className="grid gap-2">
                <Label htmlFor="password">Bank</Label>

                <SelectBank onSelect={(value)=>{
                  setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || " ")
                  setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name || " ")
                }} options={SUPPORTED_BANKS.map(x =>({
                  key : x.name,
                  value: x.name
                }))}/>

              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2 ">
        <Button type="submit" className="w-full cursor-pointer" onClick={async()=>{
          await createOnRampTransaction(amount*100 , provider)
          window.location.href = redirectUrl || ""
        }}>
          Add Money
        </Button>
      </CardFooter>
    </Card>

  )
}
