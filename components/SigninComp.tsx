"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const SigninComp = () => {
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      redirect: false,
      phone, 
      password
    })

    if (res?.ok) {
      router.push("/dashboard")
    } else {
      console.error(res?.error || "Login failed")
    }
  }

  return (
    <div className="h-screen flex justify-center w-full items-center">
      <div className="flex justify-center max-w-lg w-full px-4 sm:px-6 items-center ">
      <Card className="max-w-xs w-full">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your Phone No and password below to login to your account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="ex:- 752545472"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="ex:- WhoTheHell"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex-col pt-4 cursor-pointer gap-2">
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </CardFooter>
        </form>
      </Card>
      </div>
    </div>
  )
}

export default SigninComp
