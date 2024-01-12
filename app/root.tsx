import { cssBundleHref } from "@remix-run/css-bundle";
import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Link } from "react-router-dom";

// add main tailwind css file
import styles from "./tailwind.css";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// meta description for all pages
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Foodie Fun" },
    { name: "description", content: "A collection of delicious recipes built using Remix.js" }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>

        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <Link to="/" className="flex items-center flex-shrink-0 text-white mr-6">Foodie Fun</Link>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 0h20v20H0z" fill="none"/>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link to="discover" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Discover</Link>
              <Link to="app" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">App</Link>
              <Link to="settings" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Settings</Link>
            </div>
          </div>
        </nav>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
