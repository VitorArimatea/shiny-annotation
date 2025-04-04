"use client";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex justify-between items-center p-4">
      {user && (
        <h1 className="text-2xl">
          Olá {` `}
          {user?.firstName}
        </h1>
      )}

      {/*Breadcrumbs*/}

      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
          <UserButton />
      </SignedIn>
    </header>
  );
}
export default Header;
