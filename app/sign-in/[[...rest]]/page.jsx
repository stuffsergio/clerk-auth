"use client";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { useState } from "react";

export default function SignInPage() {
  const [isOpenAlert, setIsOpenAlert] = useState(false);

  return (
    <div className="pt-[25dvh]">
      <SignIn.Root>
        <SignIn.Step
          className="relative w-fit max-h-[50vh] ml-[18dvw] flex flex-col gap-2 px-8 py-6 border rounded-md"
          name="start"
        >
          <h1 className="w-fit m-auto px-2 py-2">
            Inicia sesión en New Timeless
          </h1>
          <div className="flex flex-row-reverse justify-center gap-4">
            <Clerk.Connection
              name="google"
              className="w-fit flex items-center justify-center px-2 py-1 gap-1.5 rounded-full border border-[#360000] bg-transparent hover:bg-gray-500/15 transform transition-all duration-200"
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
              className="w-fit flex items-center justify-center px-2 py-1 gap-1.5 rounded-full border border-[#360000] bg-transparent hover:bg-gray-500/15 transform transition-all duration-200"
            >
              <img
                src="/icons/github-mark.svg"
                alt="GitHub Icon"
                className="w-5 h-5"
              />
              <span className="text-sm">GitHub</span>
            </Clerk.Connection>
          </div>

          <Clerk.Field
            className="flex flex-row items-center group"
            name="identifier"
          >
            <Clerk.Label className="p-2 text-md font-bold">Email</Clerk.Label>
            <Clerk.Input
              autoComplete="off"
              autoCorrect="off"
              className="px-2 py-1 text-sm rounded-lg border border-sky-500 focus:outline-none group-hover:bg-sky-500/10 transform transition-all duration-300"
            />
            <Clerk.FieldError>
              {({ message }) => {
                let customMessage;

                if (message?.includes("Identifier is invalid.")) {
                  customMessage = "Introduzca un email válido";
                } else if (
                  message?.includes("You have to use email address.")
                ) {
                  customMessage = "Introduzca su email";
                }

                return (
                  <div className="relative group/error ml-2 w-fit text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01M12 5a7 7 0 100 14 7 7 0 000-14z"
                      />
                    </svg>
                    {/* Tooltip oculto por defecto, visible en hover */}
                    <span
                      id="mensajeAdvert"
                      className="absolute z-10 bottom-full mb-1 left-1/2 -translate-x-1/2 w-max max-w-xs border border-white bg-white/20 backdrop-blur-lg text-black text-xs rounded px-2 py-1 opacity-0 group-hover/error:opacity-100 transition-opacity duration-200 pointer-events-none"
                    >
                      {customMessage}
                    </span>
                  </div>
                );
              }}
            </Clerk.FieldError>
          </Clerk.Field>

          <SignIn.Action
            className="w-fit m-auto text-sm text-white font-bold border rounded-xl px-3 py-1.5 bg-black hover:bg-black/90 hover:scale-103 transform transition-all duration-200"
            submit
          >
            Continue
          </SignIn.Action>
        </SignIn.Step>

        <SignIn.Step name="verifications">
          <SignIn.Strategy name="email_code">
            <h1>Check your email</h1>
            <p>
              We sent a code to <SignIn.SafeIdentifier />.
            </p>

            <Clerk.Field name="code">
              <Clerk.Label>Email code</Clerk.Label>
              <Clerk.Input />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignIn.Action submit>Continue</SignIn.Action>
          </SignIn.Strategy>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
}
