import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-background px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Project Dashboard</h1>
        <nav className="flex items-center gap-4">
          <Link to={"/"}>
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Dashboard
            </a>
          </Link>
          <Link to={"/chat"}>
            <a className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Chat
            </a>
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Team
          </a>
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Settings
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
