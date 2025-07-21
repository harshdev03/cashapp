
import OnRampTxn from '@/components/OnRampTxn';
import { authOptions } from '@/lib/auth';
import { db } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import React from 'react';

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

const Transactions = async () => {
    const transactions = await getOnRampTransactions();
  return (
    <div className="w-full px-5 md:px-44 min-h-screen flex flex-col items-center justify-start py-10">
      <h1 className="mb-6 text-center text-4xl font-extrabold tracking-tight">
        Recent Transactions
      </h1>
      <div className="w-full max-w-lg">
        <OnRampTxn transactions={transactions} />
      </div>
    </div>
  );
};

export default Transactions;
