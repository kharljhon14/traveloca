import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center border rounded-full p-2 gap-x-4">
      <p className="text-gray-400 font-semibold">Follow</p>
      <Button
        className="rounded-full"
        size="icon"
        variant="outline"
      >
        <Facebook />
      </Button>
      <Button
        className="rounded-full"
        size="icon"
        variant="outline"
      >
        <Instagram />
      </Button>
      <Button
        className="rounded-full"
        size="icon"
        variant="outline"
      >
        <Twitter />
      </Button>
      <Button
        className="rounded-full"
        size="icon"
        variant="outline"
      >
        <Linkedin />
      </Button>
    </div>
  );
}
