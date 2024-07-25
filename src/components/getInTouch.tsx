import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const GetInTouch = () => (
  <section id="contact">
    <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <MailIcon className="h-6 w-6 text-gray-400" />
          <a href="mailto:hello@rishabhjain.dev" className="text-gray-400 hover:text-white">
            hello@rishabhjain.dev
          </a>
        </div>
        <div className="flex items-center gap-4">
          <PhoneIcon className="h-6 w-6 text-gray-400" />
          <a href="tel:917009600910" className="text-gray-400 hover:text-white">
            +91-7009600910
          </a>
        </div>
        <div className="flex items-center gap-4">
          <MapPinIcon className="h-6 w-6 text-gray-400" />
          <p className="text-gray-400">Mohali, India</p>
        </div>
      </div>
      <div>
        <form className="space-y-4">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" className="min-h-[120px]" />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  </section>
);

export default GetInTouch;
