"use client"

import { Card } from '@repo/ui/card'
import { Center } from '@repo/ui/center';
import { TextInput } from '@repo/ui/textinput';
import React, { useRef } from 'react'
import { p2pTransfer } from '../app/lib/actions/p2ptransfer';

const SendCard = () => {

    const amount = useRef(0);
    const mobileNumber = useRef("");  

  return (
    //Add Form having 2 fields using tailwind css - mobile number and amount
    
        <div className='h-[80vh]'>
            <Center>
            <Card title="P2P Transfer">
                <div className='min-w-72 pt-2' >
                        <TextInput label={"Mobile Number"} placeholder={"Mobile Number"} onChange={(e) => mobileNumber.current = e} />
                        <TextInput label={"Amount"} placeholder={"Amount"} onChange={(e) => amount.current = Number(e)} />
                        <button
                            type="submit"
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                            onClick={async () => {
                                await p2pTransfer(mobileNumber.current, amount.current * 100);
                            }}
                        >
                            Submit
                        </button>
                </div>
            </Card>
            </Center>
        </div>
        
  )
}

export default SendCard