import ParticleBackground from "@/components/particleBackground";
import { Portfolio } from "@/components/portfolio";
import { portfolioMetaData } from "@/config";
import { Metadata } from "next";

export const metadata: Metadata = portfolioMetaData;

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Portfolio />
    </>
  );
}
