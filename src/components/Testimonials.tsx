import { type Testimonial, TESTIMONIALS } from "@/config";
import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Testimonial: FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <article className="flex flex-col items-center gap-4 rounded-lg border border-gray-800 p-4 backdrop-blur-2xl">
    <Avatar className="h-36 w-36">
      <AvatarImage src={testimonial.avatar} loading="lazy" />
      <AvatarFallback>{testimonial.name}</AvatarFallback>
    </Avatar>
    <div className="flex flex-grow flex-col gap-2 text-center">
      <p className="mb-2 w-full flex-grow text-sm text-gray-400 md:text-left md:text-center">{testimonial.content}</p>
      <p className="font-medium">{testimonial.name}</p>
      <p className="text-gray-400">{testimonial.title}</p>
    </div>
  </article>
);

const Testimonials = () => (
  <section className="md:p-8">
    <h2 className="mb-4 text-3xl font-bold">Testimonial</h2>
    <main className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {TESTIMONIALS.map((testimonial, index) => (
        <Testimonial testimonial={testimonial} key={index} />
      ))}
    </main>
  </section>
);

export default Testimonials;
