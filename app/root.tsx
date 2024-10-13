import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  MetaFunction,

} from "@remix-run/react";
import "./tailwind.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// export const meta: MetaFunction = () => {
//   return {
//     title: "Your Site Title",
//     description: "A brief description of your site.",
//     'og:title': "Your Site Title",
//     'og:description': "A brief description of your site.",
//     'og:image': "https://yourdomain.com/path-to-image.jpg",
//     'og:url': "https://yourdomain.com",
//     'twitter:card': "summary_large_image",
//     'twitter:title': "Your Site Title",
//     'twitter:description': "A brief description of your site.",
//     'twitter:image': "https://yourdomain.com/path-to-image.jpg"
//   };
// };


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
