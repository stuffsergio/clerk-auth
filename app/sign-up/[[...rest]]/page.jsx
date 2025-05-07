"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignUp from "@clerk/elements/sign-up";

export default function SignUpPage() {
  return (
    <div className="flex justify-center max-w-[70dvw]">
      <SignUp.Root redirectUrl="/">
        <SignUp.Step name="start" className="flex flex-col gap-3 px-6 py-6">
          <h1 className="text-center text-2xl">Create an account</h1>

          <Clerk.Connection
            name="google"
            className="flex flex-row items-center justify-center gap-3 px-4 py-1 border rounded-full"
          >
            <img
              src="/icons/icon-google.svg"
              alt="icon google"
              className="w-5 h-5"
            />
            <span>Continuar con Google</span>
          </Clerk.Connection>

          <Clerk.Field name="username">
            <Clerk.Label className="mr-3">Username</Clerk.Label>
            <Clerk.Input
              autoComplete="off"
              autoCorrect="off"
              className="px-3 py-1 text-sm border rounded-full focus:outline-none"
            />
            <Clerk.FieldError />
          </Clerk.Field>

          <Clerk.Field name="emailAddress">
            <Clerk.Label className="mr-12">Email</Clerk.Label>
            <Clerk.Input
              autoComplete="off"
              autoCorrect="off"
              className="px-3 py-1 text-sm border rounded-full focus:outline-none"
            />
            <Clerk.FieldError />
          </Clerk.Field>

          <Clerk.Field name="password">
            <Clerk.Label className="mr-4">Password</Clerk.Label>
            <Clerk.Input
              autoComplete="off"
              autoCorrect="off"
              className="px-3 py-1 text-sm border rounded-full focus:outline-none"
            />
            <Clerk.FieldError />
          </Clerk.Field>

          <SignUp.Action
            submit
            className="px-3 py-1 text-white bg-black border rounded-full"
          >
            Sign up
          </SignUp.Action>
        </SignUp.Step>

        <SignUp.Step name="verifications">
          <SignUp.Strategy name="email_code">
            <h1>Check your email</h1>

            <Clerk.Field name="code">
              <Clerk.Label>Email Code</Clerk.Label>
              <Clerk.Input
                autoComplete="off"
                autoCorrect="off"
                className="px-3 py-1 text-sm border rounded-full focus:outline-none"
              />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action submit>Verify</SignUp.Action>
          </SignUp.Strategy>
        </SignUp.Step>
      </SignUp.Root>
    </div>
  );
}
