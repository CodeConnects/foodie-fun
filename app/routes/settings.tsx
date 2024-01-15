import { Link, Outlet } from "@remix-run/react";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>

      <nav className="my-5">
        <Link className="bg-secondary hover:bg-primary p-2" to="app">App</Link>
        <Link className="bg-secondary hover:bg-primary p-2 m-2" to="profile">Profile</Link>
      </nav>

      <Outlet />

    </div>
  );
}