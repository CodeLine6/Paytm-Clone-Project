"use server"

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export const createOnRampTransaction = async (amount:number,provider:string) => {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const token = Math.random().toString()
    if(!userId){
        return {
            message: "You are not logged in"
        }
    }
    await prisma.onRampTransaction.create({
        data: {
            startTime: new Date(),
            status: "Processing",
            amount,
            provider,
            userId : Number(userId),
            token
        }
    })

    return {

    }

}