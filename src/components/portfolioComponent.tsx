import { Button } from "@/components/ui/button";
import Image from "next/image";

export function PortfolioComponent() {
  return (
    <section id="portfolio" className="backdrop-blur-sm">
      <h2 className="mb-4 text-3xl font-bold">Portfolio</h2>
      <div className="grid grid-cols-3 gap-8">
        {[
          "/placeholder.svg",
          "/placeholder.svg",
          "/placeholder.svg",
          "/placeholder.svg",
          "/placeholder.svg",
          "/placeholder.svg",
        ].map((src, index) => (
          <div key={index} className="relative">
            <Image
              width={300}
              height={200}
              src="/placeholder.svg"
              alt={`Portfolio ${index + 1}`}
              className="h-full w-full rounded-md object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h3 className="text-lg font-bold">Project Title</h3>
              <p className="text-sm">Short description of the project.</p>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-4">View More</Button>
    </section>
  );
}

export default PortfolioComponent;
