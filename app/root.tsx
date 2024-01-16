import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
  useResolvedPath,
} from "@remix-run/react";

// add main tailwind css file
import styles from "./tailwind.css";

// add icons
import { HomeIcon, DiscoverIcon, RecipeBookIcon, SettingsIcon } from "./components/Icons";

// add classnames module
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
            <AppNavLink to="apiFetcher">api fetcher</AppNavLink>
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
  children: React.ReactNode;
  to: string;
}

function AppNavLink({ children, to }: AppNavLinkProps) {
  const realPath = useResolvedPath(to);
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading" && navigation.location.pathname === realPath.pathname;

  return (
    <li className="w-16">
      <NavLink to={to}>
        {({ isActive }) => (
          <div 
            className={classNames(
              "py-4 flex justify-center bg-opacity-50 hover:bg-secondary hover:bg-opacity-80 transition-colors duration-200",
              isActive ? "bg-secondary" : "",
              isLoading ? "animate-spin" : ""
            )}
          >{children}</div>
        )}
      </NavLink>
    </li>
  );
}