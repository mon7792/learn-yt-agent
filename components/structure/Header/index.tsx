"use client";

import Link from "next/link";
import Image from "next/image";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* left section */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="logo"
                width={32}
                height={32}
                className="dark:invert"
              />
              <h1 className="text-2xl font-bold">Learn YT</h1>
            </Link>
          </div>

          {/* right section */}
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/manage-plan">
                <Button>Manage Plan</Button>
              </Link>

              <div className="">
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button variant="outline">Sign Up</Button>
              </SignUpButton>
              <SignInButton mode="modal">
                <Button>Login</Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
