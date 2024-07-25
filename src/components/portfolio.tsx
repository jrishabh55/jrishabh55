import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "./header";
import Timeline from "./timeline";
import Footer from "./footer";
import GetInTouch from "./getInTouch";
import Testimonials from "./Testimonials";
import About from "./about";
import PortfolioComponent from "./portfolioComponent";
import Skills from "./skills";
import Link from "next/link";
import { Metadata } from "next";
import { PROFILE } from "@/config";

export const metadata: Metadata = {
  title: "Rishabh Jain | Software Engineer",
  description: "...",
};

export function Portfolio() {
  return (
    <div id="portfolio-container" className="flex flex-col px-4 text-white">
      <div className="dark-bg" />
      <Header />
      <section className="relative flex min-h-screen select-none flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-[-1]">
          <div className="h-full w-full" />
        </div>
        <Avatar className="animate-hovering mb-4 h-40 w-40">
          <AvatarImage src={PROFILE.avatar} />
          <AvatarFallback>{PROFILE.name}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">
          I{"'"}m <span className="text-yellow-400">Rishabh Jain</span>
        </h1>
        <p className="text-lg">Sr Developer & Principal Consultant</p>
        <Button className="mt-4">Contact Me</Button>
        <div className="mt-4 flex select-auto gap-4">
          <TwitterIcon className="h-6 w-6 text-gray-400 hover:text-white" />
          <FacebookIcon className="h-6 w-6 text-gray-400 hover:text-white" />
          <LinkedinIcon className="h-6 w-6 text-gray-400 hover:text-white" />
          <InstagramIcon className="h-6 w-6 text-gray-400 hover:text-white" />
        </div>
      </section>
      <About />
      <main className="flex flex-col">
        <Skills />
        <PortfolioComponent />
        <Timeline />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

function FacebookIcon(props: any) {
  return (
    <Link href="#">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </Link>
  );
}

function InstagramIcon(props: any) {
  return (
    <Link href="#">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    </Link>
  );
}

function LinkedinIcon(props: any) {
  return (
    <Link href="#">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </Link>
  );
}

function TwitterIcon(props: any) {
  return (
    <Link href="#">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    </Link>
  );
}
