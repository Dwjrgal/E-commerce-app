"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { json } from "stream/consumers";

const Email = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);

  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log("emailll", email);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { email }
      );
      if (res.status === 200) {
        setStep(step + 1);
      }
    } catch (error) {
      console.log("error", error);
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      router.push("/newpass");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
        }
      } catch (error) {
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };

  const handleResendOtp = () => {
    setCountDown(30);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  return (
    <div className="flex flex-col gap-3 items-center h-[800px] pt-40 bg-slate-100">
      {step === 1 && (
        <>
          <h2 className="font-bold text-lg mb-4">Нууц үг сэргээх</h2>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              className="w-72 h-8 border rounded-full pl-2 text-xs"
              placeholder="Имэйл хаяг оруулах"
              onChange={handleEmail}
            />
            <button
              className="w-72 h-8 border bg-blue-600 rounded-full text-white"
              onChange={handleSendOtp}
            >
              Илгээх
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
          <img src="/img/Logo/envelope.png" alt="" />
          <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
          <p className="mt-2 mb-6 text-text-primary">
            {`“${email}” хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <InputOTP
              maxLength={4}
              value={otpValue}
              onChange={handleConfirmOtp}
            >
              <InputOTPGroup className="bg-white">
                <InputOTPSlot className="w-14 h-14" index={0} />
                <InputOTPSlot className="w-14 h-14" index={1} />
                <InputOTPSlot className="w-14 h-14" index={2} />
                <InputOTPSlot className="w-14 h-14" index={3} />
              </InputOTPGroup>
            </InputOTP>
            <Button
              className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
              onClick={handleResendOtp}
              variant="link"
            >
              Дахин илгээх ({countDown})
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;
