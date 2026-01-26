import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useActionData,
  useRouteError,
} from 'react-router';
import { Analytics } from "@vercel/analytics/remix"

import type { Route } from './+types/root';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { ModalProvider } from './context/modalContext';
import { useModal } from './hooks/useModal';

import * as Components from '~/components'
import { motion } from 'framer-motion'
import './app.css';



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ModalProvider>
          <InnerLayout>{children}</InnerLayout>
        </ModalProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function InnerLayout({ children }: { children: React.ReactNode }) {
  const { modal, closeModal } = useModal();

  return (
    <>
      <Navbar />
      {/* Page content */}
      {children}
      {/* Global Modals */}
      <Components.ContactModal
        open={modal === 'contact'}
        onClose={closeModal}

      />
      {/* Vercel Analytics */}
      <Analytics />
      <Footer />
    </>
  );
}

export default function App() {
  return <Outlet />;
}

export const links: Route.LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];


export function ErrorBoundary() {
  const error = useRouteError();

  let title: string = "Unexpected Error";
  let message: string = "Something went wrong. Please try again later.";

  if (isRouteErrorResponse(error)) {
    title = error.status.toString();
    message = error.statusText || message;
  }

  return (
    <div className="min-h-screen w-full bg-[#0B0B0D] text-white flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg text-center space-y-6"
      >
        {/* ⚠ icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl"
          style={{ color: "var(--secondary)" }}
        >
          ⚠️
        </motion.div>

        <h1 className="text-4xl font-semibold tracking-tight">
          {title}
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed">
          {message}
        </p>

        {/* Extra error debug output */}
        {error && !isRouteErrorResponse(error) && (
          <pre className="text-sm text-gray-500 bg-white/5 p-3 rounded-lg overflow-auto">
            {String(error)}
          </pre>
        )}

        <div className="pt-2">
          <Link
            to="/"
            className="inline-block bg-white text-black font-medium px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

