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
      <body className="flex h-screen">
        <nav className="bg-primary text-white">
          <ul className="flex flex-col">
            <li><Link to="/">Foodie Fun</Link></li>
            <li><Link to="discover">Discover</Link></li>
            <li><Link to="app">App</Link></li>
            <li><Link to="settings">Settings</Link></li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
