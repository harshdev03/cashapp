import { db } from '@/lib/prisma';
import { authOptions } from '@/lib/auth';
import { AddMoneyCard } from '@/components/AddMoney'
import { Balance } from '@/components/Balance'
import OnRampTxn from '@/components/OnRampTxn'
import { getServerSession } from 'next-auth';
import React from 'react'



async function getBalance() {
    const session = await getServerSession(authOptions);
    const balance = await db.balance.findUnique({
        where: {
            userId: Number(session?.user?.id)
        }
    });
     console.log("BALANCE:", balance);
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await db.onRampTransaction.findMany({
        where: {
            userId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}




const Transfer = async () => {
     const balance = await getBalance();
    const transactions = await getOnRampTransactions();

  return (
    <div className='flex flex-col px-10 md:px-44  items-center p-2'>
  
    <h1 className="scroll-m-20 mb-3 text-center text-4xl font-extrabold tracking-tight text-balance">
        Transfer
    </h1>
      <blockquote className=" mb-6 border-l-2 pl-6 italic">
      &quot; Transfer your &quot; money,&quot;via your bank so you can make
    &apos;payment and also see your balance &quot;
    </blockquote>
      
      <div className='grid mt-8 grid-cols-1 gap-8 md:grid-cols-2 w-full max-w-4xl'>
        <div>
          <AddMoneyCard/>
        </div>
        <div className='mb-10'>
          <Balance amount={balance.amount} locked={balance.locked}  />
          <div className='pt-4'>
            <OnRampTxn transactions={transactions}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transfer