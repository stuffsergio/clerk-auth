IMPORTANTE

- .env.local NO se sube a producción (NO deploy)
  --> las Variables de Entorno se establecen antes del deploy en Vercel
- hay rutas protegidas, cómo /sign-in y /sign-up
- 'custom credentials' son credenciales dentro de: Clerk Dashboard -> Configure -> SSO connections -> ⚙
- en /sign-in/[...rest]/page.jsx:
  --> el inicio de sesión con Google no usa 'custom credentials'
  --> el inicio de sesión con GitHub sí usa 'custom credentials'
  --> Dentro de GitHub -> Account -> Settings -> Developer Settings -> OAuth Apps -> 'clerk-auth-prueba'
- IMP: dentro de las 'custom credentials', hay que poner:
  --> 'client ID' y 'client secret': se encuentra dentro del OAuth Apps -> 'clerk-auth-prueba'
  --> Se pide dentro de 'clerk-auth-app' una Authorization callback URL -> se encuentra en las 'custom credentials' de Clerk
- AYUDA: Lo relacionado con el inicio de sesión de este proyecto se encuentra en chatgpt y claude de la cuenta de google NewTimelessProject

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
