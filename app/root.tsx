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
import { HomeIcon, DiscoverIcon, RecipeBookIcon, SettingsIcon } from "./components/Icons";
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
        <nav className="bg-secondary text-white">
          <ul className="flex flex-col">
            <AppNavLink to="/"><HomeIcon /></AppNavLink>
            <AppNavLink to="discover"><DiscoverIcon /></AppNavLink>
            <AppNavLink to="app"><RecipeBookIcon /></AppNavLink>
            <AppNavLink to="settings"><SettingsIcon /></AppNavLink>
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

type AppNavLinkProps = {
  to: string;
  children: React.ReactNode;
}

function AppNavLink({ to, children }: AppNavLinkProps) {
  return (
    <li className="w-16">
      <Link to={to}><div className="py-4 flex justify-center hover:bg-quaternary">{children}</div></Link>
    </li>
  );
}