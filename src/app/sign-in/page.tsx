import React from "react";
import { redirect } from "next/navigation";
import SignInForm from "../../components/signin/SignIn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const Signin = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  return (
    <section className="bg-black opacity-80 h-[100vh] py-20 lg:py-[120px]">
      <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap ">
          <div className="w-full px-4 ">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 px-10 text-center sm:px-12 md:px-[60px] bg-gradient-to-r to-black  from-white border">
              <div className="mb-10 text-center md:mb-16">
                <h1 className="text-5xl font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-black opacity-90">
                    Scrum Board
                  </span>
                </h1>
              </div>
              <p className="mb-6 text-base text-black font-semibold">
                Connect With
              </p>
              <SignInForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
