import React from "react";
import FormRegistrationComp from "../components/FormRegistrationComp";
import signUpImg from "public/Images/sign_up_n6im.svg";
import Image from "next/image";
import MultiStepForm from "../components/StepForm";
const page = () => {
  return (
    <div className=" w-screen h-screen">
      <div className=" gap-x-16 flex flex-row-reverse h-full">
        <div className="flex flex-col justify-center gap-y-8 w-1/3  bg-[#d4d1ee] h-full rounded p-4">
          <h1 className="text-3xl text-[#2e2a3d] tracking-wider capitalize">
            <span>Welcome to IWINS</span> Registration portal
          </h1>
          <Image src={signUpImg} alt="signUp" />
        </div>
        <div className="w-1/2 mt-5">
          {/* <h1 className="text-center capitalize mb-5">Personal Information</h1> */}
          {/* <FormRegistrationComp /> */}
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default page;
