"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="flex items-center justify-center p-8">
        <SignUp.Root redirectUrl="/">
          <SignUp.Step
            name="start"
            className="relative w-fit min-h-[60vh] min-w-[3dvw] md:min-w-[25dvw] flex flex-col gap-2 px-8 py-6 border rounded-3xl border-[#360000]"
          >
            <h1 className="w-fit m-auto px-5 py-2 text-white bg-black text-xl font-bold rounded-xl">
              Crea tu cuenta
            </h1>
            <p className="text-xs text-black/90">
              Sin pagos. Puedes cancelar cuando desees.
            </p>
            <div className="flex flex-row-reverse justify-center gap-4">
              <Clerk.Connection
                name="google"
                className="w-fit flex items-center justify-center px-3 py-1.5 gap-1.5 rounded-xl border border-[#360000] bg-transparent hover:bg-gray-500/15 transform transition-all duration-200"
              >
                <img
                  src="/icons/icon-google.svg"
                  alt="Google Icon"
                  className="w-5 h-5"
                />
                <span className="text-sm">Google</span>
              </Clerk.Connection>
              <Clerk.Connection
                name="github"
                className="w-fit flex items-center justify-center px-3 py-1.5 gap-1.5 rounded-xl border border-[#360000] bg-transparent hover:bg-gray-500/15 transform transition-all duration-200"
              >
                <img
                  src="/icons/icon-github.svg"
                  alt="GitHub Icon"
                  className="w-5 h-5"
                />
                <span className="text-sm">GitHub</span>
              </Clerk.Connection>
            </div>

            <Clerk.Field name="username">
              <Clerk.Label className="mr-3">Username</Clerk.Label>
              <Clerk.Input
                autoComplete="off"
                autoCorrect="off"
                className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
              />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="emailAddress">
              <Clerk.Label className="mr-12">Email</Clerk.Label>
              <Clerk.Input
                autoComplete="off"
                autoCorrect="off"
                className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
              />
              <Clerk.FieldError />
            </Clerk.Field>

            <Clerk.Field name="password">
              <Clerk.Label className="mr-4">Password</Clerk.Label>
              <Clerk.Input
                autoComplete="off"
                autoCorrect="off"
                className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
              />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action
              className="w-fit m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
              submit
            >
              Registrarme
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step
            className="relative w-fit min-h-[30vh] min-w-[3dvw] md:min-w-[25dvw] flex flex-col justify-center items-center md:gap-5 gap-4 px-8 py-6 border rounded-3xl border-[#360000]"
            name="verifications"
          >
            <SignUp.Strategy name="email_code">
              <div className="flex flex-col justify-center items-center md:gap-1 gap-0.5">
                <h1 className="text-lg">Revisa tu correo</h1>
                <p className="text-xs text-black/90">Puede estar en spam</p>
              </div>

              <Clerk.Field className="flex flex-row items-center" name="code">
                <Clerk.Label className="p-2 text-md font-bold">
                  Email Code
                </Clerk.Label>
                <Clerk.Input
                  autoComplete="off"
                  autoCorrect="off"
                  className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignUp.Action
                className="w-fit m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
                submit
              >
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </SignUp.Root>
      </section>
      <section className="hidden md:block">
        <img
          src="/final_(thisStuffIsCrazy)habítulo.jpg"
          alt="edificio arquitectura"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
}
