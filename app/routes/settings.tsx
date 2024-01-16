import { NavLink, Outlet } from "@remix-run/react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>

      <nav className="page-nav my-5">
        <NavLink
          to="app"
          className="bg-secondary text-yellow-950 hover:bg-primary hover:text-yellow-200 p-2" 
        >App</NavLink>

        <NavLink 
          to="profile"
          className="bg-secondary text-yellow-950 hover:bg-primary hover:text-yellow-200 p-2 m-2" 
        >Profile</NavLink>
      </nav>

      <Outlet />

    </div>
  );
}