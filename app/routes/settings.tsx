import { NavLink, Outlet } from "@remix-run/react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>

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