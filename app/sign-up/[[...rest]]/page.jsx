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
            className="relative w-fit min-h-[60vh] min-w-[3dvw] md:min-w-[25dvw] flex flex-col gap-6 px-8 py-10 border rounded-3xl border-[#360000]"
          >
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="w-fit m-auto mb-2 px-5 py-2 text-white bg-black text-xl font-bold rounded-xl">
                Crea tu cuenta
              </h1>
              <p className="text-xs text-black/90">
                Sin pagos. Puedes cancelar cuando desees.
              </p>
            </div>
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

            <div className="flex flex-col md:gap-3 sm:gap-2 gap-2 justify-center items-center">
              <Clerk.Field
                className="flex flex-row items-center"
                name="username"
              >
                <Clerk.Label className="mr-3">Username</Clerk.Label>
                <Clerk.Input
                  autoComplete="off"
                  autoCorrect="off"
                  className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                />
                <Clerk.FieldError>
                  {({ message }) => {
                    let customMessage;

                    if (
                      message?.includes(
                        "Username can only contain letters, numbers and '_' or '-'."
                      )
                    ) {
                      customMessage =
                        "Username solo admite letras, números y '_' o '-'.";
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
                </Clerk.FieldError>{" "}
              </Clerk.Field>

              <Clerk.Field
                className="flex flex-row items-center"
                name="emailAddress"
              >
                <Clerk.Label className="mr-12">Email</Clerk.Label>
                <Clerk.Input
                  autoComplete="off"
                  autoCorrect="off"
                  className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                />
                <Clerk.FieldError>
                  {({ message }) => {
                    let customMessage;

                    if (
                      message?.includes(
                        "That email address is taken. Please try another."
                      )
                    ) {
                      customMessage = "Este email ya existe.";
                    } else if (message?.includes("Enter email address.")) {
                      customMessage = "Introduzca su email.";
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

              <Clerk.Field
                className="flex flex-row items-center"
                name="password"
              >
                <Clerk.Label className="mr-4">Password</Clerk.Label>
                <Clerk.Input
                  autoComplete="off"
                  autoCorrect="off"
                  className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
                />
                <Clerk.FieldError>
                  {({ message }) => {
                    let customMessage;

                    if (
                      message?.includes(
                        "Passwords must be 8 characters or more."
                      )
                    ) {
                      customMessage = "Debe contener 8 caracteres o más.";
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
            </div>

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
                <div className="relative flex flex-row gap-1 items-center justify-center text-red-600">
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
                  <p className="text-xs text-red-600">Puede estar en spam</p>
                </div>
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
                    } else if (message.length() == 0) {
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

              <SignUp.Action
                className="w-fit m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
                submit
              >
                Verify
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>

          <SignUp.Step
            name="continue"
            className="flex flex-col justify-center items-center md:gap-1 gap-0.5"
          >
            <Clerk.Field
              name="username"
              className="flex flex-col justify-center items-center"
            >
              <Clerk.Label className="p-2 text-md font-bold">
                Elige un nombre de usuario
              </Clerk.Label>
              <Clerk.Input
                autoComplete="off"
                autoCorrect="off"
                className="px-2 py-1 text-sm rounded-xl border border-sky-500 focus:outline-none hover:bg-sky-500/10 transition-all duration-300"
              />
              <Clerk.FieldError />
            </Clerk.Field>

            <SignUp.Action
              className="w-fit my-5 m-auto text-sm text-lime-950 bg-lime-300/50 border rounded-xl border-lime-700 font-bold  px-3 py-1.5  hover:scale-103 transform transition-all duration-200"
              submit
            >
              Continuar
            </SignUp.Action>
          </SignUp.Step>
        </SignUp.Root>
      </section>
      <section className="hidden md:block">
        <img
          src="/images/habitaculo.webp"
          alt="edificio arquitectura"
          className="w-full h-full object-cover"
        />
      </section>
    </div>
  );
}
