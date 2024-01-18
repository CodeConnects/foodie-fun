import { NavLink, Outlet, useLoaderData } from "@remix-run/react";
import { LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return json({ message: "_________________" });
}

export default function Settings() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Settings</h1>
      <p>{data.message}</p>

      <nav className="page-nav my-5">
        <NavLink
          className="bg-secondary text-yellow-950 hover:bg-primary hover:text-yellow-200 p-2"
          to="app"
        >App</NavLink>

        <NavLink 
          className="bg-secondary text-yellow-950 hover:bg-primary hover:text-yellow-200 p-2 m-2"
          to="profile"
        >Profile</NavLink>
      </nav>

      <Outlet />

    </div>
  );
}