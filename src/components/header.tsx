"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const openLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    router.push(e.currentTarget.href);
  };

  return (
    <header className="flex items-center justify-between border-b border-border bg-foreground p-4 md:px-6">
      <div className="flex items-center gap-2">
        <Image width={40} height={40} src="/icons/RJ Logo Small.webp" alt="Logo" />
        <span className="hidden text-2xl font-bold md:inline-block">Rishabh Jain</span>
      </div>
      <nav className="hidden gap-6 md:flex">
        <Link onClick={openLink} href="#about" className="hover:text-gray-400">
          About
        </Link>
        <Link onClick={openLink} href="#portfolio" className="hover:text-gray-400">
          Portfolio
        </Link>
        <Link onClick={openLink} href="#contact" className="hover:text-gray-400">
          Contact
        </Link>
      </nav>
      {/* <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className="rounded-full border border-gray-600 bg-foreground py-2 pl-8 pr-4 focus:outline-none"
        />
        <SearchIcon className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div> */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="text-white md:hidden">
          <nav className="grid gap-4 p-4">
            <Link onClick={openLink} href="#about" className="hover:text-gray-400">
              About
            </Link>
            <Link onClick={openLink} href="#portfolio" className="hover:text-gray-400">
              Portfolio
            </Link>
            <Link onClick={openLink} href="#contact" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
