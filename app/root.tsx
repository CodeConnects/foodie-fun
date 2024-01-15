import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// add main tailwind css file
import styles from "./tailwind.css";
import { HomeIcon, DiscoverIcon, RecipeBookIcon, SettingsIcon } from "./components/Icons";
import classNames from "classnames";

// meta description for all pages
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Foodie Fun" },
    { name: "description", content: "A collection of delicious recipes built using Remix.js" }
  ];
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="md:flex md:h-screen">
        <nav className="bg-primary text-white">
          <ul className="flex md:flex-col">
            <AppNavLink to="/"><HomeIcon /></AppNavLink>
            <AppNavLink to="discover"><DiscoverIcon /></AppNavLink>
            <AppNavLink to="app"><RecipeBookIcon /></AppNavLink>
            <AppNavLink to="settings"><SettingsIcon /></AppNavLink>
          </ul>
        </nav>
        <div className="p-4"><Outlet /></div>
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
      <NavLink to={to}>
        {({ isActive }) => (
          <div 
            className={classNames(
              "py-4 flex justify-center hover:bg-tertiary bg-opacity-30 hover:bg-opacity-60 transition-colors duration-200",
              { "bg-tertiary" : isActive}
            )}
          >{children}</div>
        )}
      </NavLink>
    </li>
  );
}