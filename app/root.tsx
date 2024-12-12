import {
  isRouteErrorResponse,
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from '@remix-run/react';
import "./tailwind.css";
import Header from "~/components/header";
import Footer from "~/components/footer";



export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="scroll-pt -24 snap-y snap-mandatory scroll-smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-yellow- overscroll-none fontlight socrates bg-purple-1000 text-purple-100">
        <div className="min-h-dvh flex flex-col selection:bg-purple-700">
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
    <main className=" min-h- flex flex-col grow min-h-[calc(100dvh-7rem)] bg-gradient-to-b from-purple-1000 to-purple-900">
      <div className="flex my-auto flex-col items-center justify-center px-4 text-center ">
        <h2 className="mb-4 text-4xl font-bold font-socrates ">{title}</h2>

        <p className="mb-2 text-xl font-socrates">{message}</p>

        {subMessage && (
          <p className="mb-8 text-xl ">{subMessage}</p>
        )}

        <Link
          to="/"
          className="bg-transparent py-2 px-4 rounded-lg animate-border-pulse mt-2 border-2 "
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