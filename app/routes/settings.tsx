import { Link } from "remix";

export default function Settings() {
  return (
    <div>
      <h1>Settings</h1>

      <nav>
        <Link to="app">App</Link>
        <Link to="profile">Profile</Link>
      </nav>

    </div>
  );
}