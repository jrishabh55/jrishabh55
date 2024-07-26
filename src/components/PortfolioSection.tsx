"use client";
import { Button } from "@/components/ui/button";
import { Portfolio, PORTFOLIO } from "@/config";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";

const PortfolioItem: FC<{ portfolio: Portfolio }> = ({ portfolio }) => {
  const handleOpen: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (portfolio.link) {
      window.open(portfolio.link, "_blank");
    }
  };
  return (
    <div
      className={`flex flex-col ${!!portfolio.link ? "pointer" : ""} items-center gap-y-10 rounded-lg border border-slate-500/50 pb-4 pt-10 sm:border-0`}
      role="button"
      onClick={handleOpen}
    >
      <Image
        width={300}
        height={150}
        src={portfolio.image}
        alt={`Portfolio Image for ${portfolio.title}`}
        className="my-auto w-52 rounded-md object-contain md:w-40"
      />
      <div className="mt-auto flex max-w-full flex-col gap-y-4 justify-self-end p-4 text-gray-200 backdrop-blur-xl">
        <h3 className="text-lg font-bold">{portfolio.title}</h3>
        <p
          className="text-sm text-gray-400 md:line-clamp-3"
          title={portfolio.shortDescription ?? portfolio.description}
        >
          {portfolio.shortDescription ?? portfolio.description}
        </p>
      </div>
    </div>
  );
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="flex flex-col">
      <h2 className="mb-4 text-3xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {PORTFOLIO.map((portfolio) => (
          <PortfolioItem key={portfolio.title} portfolio={portfolio} />
        ))}
      </div>
      <Button className="mt-4 place-self-end">View More</Button>
    </section>
  );
}

export default PortfolioSection;
