"use client"

import { Card } from '@repo/ui/card'
import { TextInput } from '@repo/ui/textinput';
import React, { useRef } from 'react'
import SendCard from '../../../../components/SendCard';

const page = () => {

  return (
        <div className='w-full'>
            <SendCard />
        </div>
  )
}

export default page