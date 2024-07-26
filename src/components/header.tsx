import { MenuIcon, SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex items-center justify-between border-b border-border bg-foreground p-4 md:px-6">
      <div className="flex items-center gap-2">
        <Image width={40} height={40} src="/RJ Logo.webp" alt="Logo" />
        <span className="text-2xl font-bold">Rishabh Jain</span>
      </div>
      <nav className="hidden gap-6 md:flex">
        <a href="#about" className="hover:text-gray-400">
          About
        </a>
        <a href="#portfolio" className="hover:text-gray-400">
          Portfolio
        </a>
        <a href="#contact" className="hover:text-gray-400">
          Contact
        </a>
      </nav>
      {/* <div className="relative">
        <input
          type="search"
          placeholder="Search"
          className="rounded-full border border-gray-600 bg-foreground py-2 pl-8 pr-4 focus:outline-none"
        />
        <SearchIcon className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="text-white md:hidden">
          <nav className="grid gap-4 p-4">
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Portfolio
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};
