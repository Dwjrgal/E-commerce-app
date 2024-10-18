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
import Loader from "@/app/loader/page";
import { apiUrl } from "@/lib/util";
import Image from "next/image";

const Email = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [countDown, setCountDown] = useState(30);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    console.log("emailll", email);
    try {
      setIsLoading(true);
      const res = await axios.post(`${apiUrl}/auth/forget-password`, {
        email,
      });
      if (res.status === 200) {
        setStep(step + 1);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
  };
  const handleChange = (e: string) => {
    if (e.length === 4) {
      handleConfirmOtp(e);
    }
  };
  const handleConfirmOtp = async (value: string) => {
    if (value.length === 4) {
      // router.push("/newpass");
      try {
        setIsLoading(true);
        const res = await axios.post(`${apiUrl}/auth/verify-otp`, {
          email,
          value,
        });
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
          setIsLoading(false);
        }
      } catch (error) {
        console.log("otp error", error);
        toast.error("OTP error");
        setIsLoading(false);
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

  if (isLoading) return <Loader />;
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
              onClick={handleSendOtp}
            >
              Илгээх
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
          <Image src="/img/Logo/envelope.png" alt="" />
          <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
          <p className="mt-2 mb-6 text-text-primary">
            {`“${email}” хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <InputOTP maxLength={4} onChange={handleChange}>
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
