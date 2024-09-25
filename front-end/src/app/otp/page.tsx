"use client"
import React from 'react'
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"


const OTP = () => {
  return (
    <div className='flex flex-col items-center h-[600px] bg-slate-50 pt-24 gap-3'>
        <img src="/img/Logo/envelope.png" alt="" />
        <h2 className='font-semibold'>Баталгаажуулах</h2>
        <p className='text-xs font-semibold text-gray-700'>“mujo@nest.edu.mn” хаягт илгээсэн баталгаажуулах кодыг оруулна уу</p>
        <InputOTPPattern/>
        <p className='text-xs text-gray-500 mt-8'>Дахин илгээх (30)</p>
    </div>
  )
}



export function InputOTPPattern() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
      </InputOTPGroup>
    </InputOTP>
  )
}


export default OTP