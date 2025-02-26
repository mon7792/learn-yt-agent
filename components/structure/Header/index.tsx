"use client";

import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

// import { ThemeModeSwitcher } from "@/components/structure/Theme/theme-mode-switcher";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { CustomSignInDialog } from "@/components/auth/sign-in";

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* left section */}
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-4">
              <Logo />
              <h1 className="text-2xl font-bold subhead dark:text-white">You Seek</h1>
            </Link>
          </div>

          {/* right section */}
          <div className="flex items-center gap-4">
            {/* <ThemeModeSwitcher /> */}
            <SignedIn>
              <Link href="/manage-plan">
                <Button>Manage Plan</Button>
              </Link>
              <div>
                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <CustomSignInDialog />
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
