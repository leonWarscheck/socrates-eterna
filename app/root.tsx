import "./tailwind.css";

import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import Footer from "~/components/footer";
import Header from "~/components/header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className=" snap-y snap-mandatory scroll-smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="overscroll-none bg-purple-1000 text-purple-100 font-socrates">
        <div className="flex min-h-dvh flex-col selection:bg-purple-700">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

function ErrorPage({
  title,
  message,
  subMessage,
}: {
  title: string;
  message: string;
  subMessage?: string;
}) {
  return (
    <main className="flex min-h-[calc(100dvh-7rem)] grow flex-col bg-gradient-to-b from-purple-1000 to-purple-900">
      <div className="my-auto flex flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 font-socrates text-4xl font-bold">{title}</h2>

        <p className="mb-2 font-socrates text-xl">{message}</p>

        {subMessage && <p className="mb-8 text-xl">{subMessage}</p>}

        <Link
          to="/"
          className="mt-2 animate-border-pulse rounded-lg border-2 bg-transparent px-4 py-2"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <ErrorPage
          title="404 - Page Not Found"
          message="Oops! The page you're looking for doesn't exist."
        />
      );
    }

    return (
      <ErrorPage
        title="Oops! An Error Occurred"
        message={`Status: ${error.status}`}
        subMessage={error.statusText}
      />
    );
  }

  return (
    <ErrorPage
      title="500 - Unexpected Error"
      message="An unknown error has occurred. Please try again later."
    />
  );
}
