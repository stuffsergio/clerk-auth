"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <section className="flex items-center justify-center p-8">
        <SignIn.Root>
          <div className="">
            <SignIn.Step
              className="relative w-fit min-h-[60vh] min-w-[3dvw] md:min-w-[25dvw] flex flex-col gap-2 px-8 py-6 border rounded-3xl border-[#360000]"
              name="start"
            >
              <h1
                id="ntp"
                className="w-fit m-auto px-5 py-2 text-white bg-black text-xl font-bold rounded-xl"
              >
                NewTimeless
              </h1>
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
              <div className="flex items-center gap-4">
                <div className="flex-grow border-t border-[#360000]"></div>
                <span className="text-[#360000] text-sm">or</span>
                <div className="flex-grow border-t border-[#360000]"></div>
              </div>

              <Clerk.Field
                className="flex flex-row items-center"
                name="identifier"
              >
                <Clerk.Label className="p-2 text-md font-bold">
                  Email
                </Clerk.Label>
                <Clerk.Input
                  autoComplete="off"
                  autoCorrect="off"
                  className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                />

                <Clerk.FieldError>
                  {({ message }) => {
                    let customMessage;

                    if (message?.includes("Identifier is invalid.")) {
                      customMessage = "Introduzca un email válido";
                    } else if (
                      message?.includes(
                        "You have to use email address or username."
                      )
                    ) {
                      customMessage = "Introduzca su email";
                    } else if (
                      message?.includes("Couldn't find your account.")
                    ) {
                      customMessage = "No existe este correo electrónico";
                    }

                    if (!customMessage) return null;

                    return (
                      <div className="relative ml-2 w-fit text-red-600 group">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 flex-shrink-0 cursor-pointer"
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
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-red-100 px-2 py-1 text-xs text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                          {customMessage}
                        </span>
                      </div>
                    );
                  }}
                </Clerk.FieldError>
              </Clerk.Field>

              <SignIn.Action
                className="w-fit m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
                submit
              >
                Continue
              </SignIn.Action>
            </SignIn.Step>

            <SignIn.Step
              name="verifications"
              className="relative w-fit min-h-[60vh] min-w-[25dvw] flex flex-col gap-2 px-8 py-6 border rounded-3xl border-[#360000]"
            >
              <SignIn.Strategy name="password">
                <h1
                  id="ntp"
                  className="w-fit m-auto px-5 py-2 text-white bg-black text-xl font-bold rounded-xl"
                >
                  NewTimeless
                </h1>
                <h1 className="w-fit m-auto px-2 py-2">
                  Ingresa tu contraseña
                </h1>

                <Clerk.Field
                  className="flex flex-row items-center"
                  name="password"
                >
                  <Clerk.Label className="p-2 text-md font-bold">
                    Contraseña
                  </Clerk.Label>
                  <Clerk.Input
                    autoComplete="off"
                    autoCorrect="off"
                    className="px-2 py-1 text-sm rounded-lg border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                  />
                  <Clerk.FieldError>
                    {({ message }) => {
                      let customMessage;

                      if (
                        message?.includes(
                          "Password is incorrect. Try again, or use another method."
                        )
                      ) {
                        customMessage = "Contraseña incorrecta";
                      } else if (message?.includes("Enter password.")) {
                        customMessage = "Introduzca su contraseña";
                      } else if (message.lenght() == 0) {
                        customMessage = "Introduzca su contraseña";
                      }

                      return (
                        <div className="relative ml-2 w-fit text-red-600 group">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 flex-shrink-0 cursor-pointer"
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
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-red-100 px-2 py-1 text-xs text-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                            {customMessage}
                          </span>
                        </div>
                      );
                    }}
                  </Clerk.FieldError>
                </Clerk.Field>

                <SignIn.Action
                  className="w-fit m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
                  submit
                >
                  Continue
                </SignIn.Action>
                <SignIn.Action navigate="forgot-password">
                  <p className="text-right text-xs text-black w-fit rounded-full px-2 py-0.5 hover:text-red-950 hover:border hover:border-[#c90c1f] hover:bg-[#ff9ca6]">
                    Reemplazar contraseña
                  </p>
                </SignIn.Action>
              </SignIn.Strategy>

              <SignIn.Strategy name="reset_password_email_code">
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

            <SignIn.Step name="forgot-password">
              <h1>Forgot your password?</h1>

              <SignIn.SupportedStrategy name="reset_password_email_code">
                Reset password
              </SignIn.SupportedStrategy>

              <SignIn.Action navigate="previous">Go back</SignIn.Action>
            </SignIn.Step>

            <SignIn.Step name="reset-password">
              <h1>Reset your password</h1>

              <Clerk.Field name="password">
                <Clerk.Label>New password</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <Clerk.Field name="confirmPassword">
                <Clerk.Label>Confirm password</Clerk.Label>
                <Clerk.Input />
                <Clerk.FieldError />
              </Clerk.Field>

              <SignIn.Action submit>Reset password</SignIn.Action>
            </SignIn.Step>
          </div>
        </SignIn.Root>
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
