import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { PROFILE } from "@/config";
import { Metadata } from "next";
import Link from "next/link";
import About from "./about";
import Footer from "./footer";
import GetInTouch from "./getInTouch";
import { Header } from "./header";
import PortfolioSection from "./PortfolioSection";
import Skills from "./skills";
import Testimonials from "./Testimonials";
import Timeline from "./timeline";

export function Portfolio() {
  return (
    <div id="portfolio-container" className="flex flex-col px-4 text-white">
      <div className="dark-bg" />
      <Header />
      <section className="relative flex min-h-screen select-none flex-col items-center justify-center text-center">
        <div className="absolute inset-0 z-[-1]">
          <div className="h-full w-full" />
        </div>
        <Avatar className="mb-4 h-40 w-40 animate-hovering">
          <AvatarImage src={PROFILE.avatar} alt={PROFILE.name} />
          <AvatarFallback>{PROFILE.name}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">
          I{"'"}m <span className="text-yellow-400">{PROFILE.name}</span>
        </h1>
        <p className="text-lg">{PROFILE.title}</p>
        <Button className="mt-4">Contact Me</Button>
        <div className="mt-4 flex select-auto gap-4">
          <LinkedinIcon className="h-6 w-6 text-gray-400 hover:text-white" />
          <TwitterIcon className="h-6 w-6 text-gray-400 hover:text-white" />
        </div>
      </section>
      <About />
      <main className="flex flex-col">
        <Skills />
        <PortfolioSection />
        <Timeline />
        <Testimonials />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
}

function LinkedinIcon(props: any) {
  return (
    <Link href="https://www.linkedin.com/in/jrishabh55/">
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
    <Link href="https://twitter.com/jrishabh55">
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
