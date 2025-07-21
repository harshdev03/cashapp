"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@/lib/prisma";


export async function createOnRampTransaction(amount : number , provider : string){
    const session =  await getServerSession(authOptions);
    const token = Math.random().toString();
    const userId = session?.user?.id;

        if(!userId){
            return {
                msg : "User not locked in"
            }
        }

       await db.onRampTransaction.create({
            data:{
                userId : Number(userId),
                amount : Number(amount),
                status : "Processing",
                startTime : new Date(),
                provider,
                token : token

            }
        })

        return {
            msg : "On ramp transaction added "
        }
}