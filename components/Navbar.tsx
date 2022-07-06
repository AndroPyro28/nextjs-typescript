import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import React from "react";

interface SessionInterface{
  expires?: string,
  user: {
    email?: string
    image?: string 
    name?: string 
  }
}

type NavbarProps = {
  status?: string,
  session?: SessionInterface
}

function Navbar({status, session}: NavbarProps ): JSX.Element {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${status === 'loading' ? 'loading' : 'loaded'}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>

        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>

        {status === "unauthenticated" && (
          <li>
            <Link href="/api/auth/signin">
              <a
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In with github
              </a>
            </Link>
          </li>
        )}

        {status === "authenticated" && (
          <li>
            <Link href="/api/auth/signout">
              <a
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                {session?.user?.name}: Sign Out
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
