import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const Contacts = (props: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:fbrnngrh@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} - ${formData.email}`;
  }
 
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col 
    text-left md:flex-row max-w-full justify-evenly mx-auto 
    items-center z-0"
    >
      <div
        className="absolute top-24 uppercase
       tracking-[20px] text-gray-500 text-2xl "
      >
        Contact
      </div>

      <div className="flex flex-col space-y-5">
        <div className=" mt-16 space-y-5">
          <h4 className="xl:text-3xl lg:text-2xl sm:text-2xl md:text-2xl xs:text-xl  font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB01]/50 underline">
              Lets Talk.
            </span>
          </h4>

          <div className="sm:flex sm:space-x-3 xs:flex xs:space-x-3 xl:flex xl:flex-col xl:space-y-2 ">
            <div className="flex items-center space-x-2 justify-center ">
              <PhoneIcon className="text-[#F7AB01] h-7 w-7 xs:h-5 xs:w-5 animate-pulse" />
              <p className="text-sm">+6282253041630</p>
            </div>

            <div className="flex items-center space-x-2 justify-center ">
              <EnvelopeIcon className="text-[#F7AB01] h-7 w-7 xs:h-5 xs:w-5 animate-pulse" />
              <p className="text-sm">fbrnngrh@gmail.com</p>
            </div>

            <div className="flex items-center space-x-2 justify-center ">
              <MapPinIcon className="text-[#F7AB01] h-7 w-7 xs:h-5 xs:w-5 animate-pulse" />
              <p className="text-sm">70123 Deveoper lane </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input {...register('name')}  placeholder="Name" className="contactInput" type="text" />
              <input {...register('email')} placeholder="Email" className="contactInput" type="text" />
            </div>
            <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
            <textarea {...register('message')} placeholder="Message" className="contactInput" />
            <button
              type="submit"
              className=" bg-[#F7AB01] py-5 px-10 rounded-md text-black font-bold "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
