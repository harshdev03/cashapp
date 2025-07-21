"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const OnRampTxn = ({
  transactions = [],
}: {
  transactions?: {
    time: Date;
    amount: number;
    status: string;
    provider: string;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card>
        <CardHeader>No Recent Transactions</CardHeader>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your recent transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72 w-full rounded-md border">
          <div className="p-4">
            {transactions.map((txn, index) => (
              <React.Fragment key={index}>
                <div className="text-sm">
                  <div className="font-medium">{txn.provider}</div>
                  <div className="text-xs text-muted-foreground">
                    {txn.amount} INR · {txn.status} ·{" "}
                    {new Date(txn.time).toLocaleString()}
                  </div>
                </div>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default OnRampTxn;
