import { ReactNode } from "react";
import "./Layout.scss";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>Multiplayer shame engine © 2025</p>
      </footer>
    </div>
  );
}

export default Layout;
