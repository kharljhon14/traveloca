import { Button } from '@/components/ui/button';
import { Facebook, Instagram, Twitter, Linkedin, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-8">
      <div className="flex justify-evenly flex-col lg:flex-row">
        <div className="flex flex-col justify-center items-center text-center lg:text-left lg:justify-start lg:items-start  gap-4 mb-8">
          <a
            className="font-semibold text-lg"
            href=""
          >
            Traveloca
          </a>
          <p className="text-xs text-gray-500 mx-10 lg:mx-0 lg:max-w-60">
            Discover the world one adventure at a time Life is short, book the trip
          </p>
          <div className="flex gap-2">
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
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 mb-8">
          <div className="flex flex-col gap-4 lg:mx-auto">
            <p className="font-semibold">Company</p>
            <nav className="">
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Tour Guide</a>
                </li>
                <li>
                  <a href="">Packages</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 lg:mx-auto">
            <p className="font-semibold">Resources</p>
            <nav>
              <ul className="text-sm flex flex-col gap-2 ">
                <li>
                  <a href="">Free eBooks</a>
                </li>
                <li>
                  <a href="">Development Tutorial</a>
                </li>
                <li>
                  <a href="">How to - Blog</a>
                </li>
                <li>
                  <a href="">Youtube Playlist</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4 lg:mx-auto">
            <p className="font-semibold">Extra links</p>
            <nav>
              <ul className="text-sm flex flex-col gap-2">
                <li>
                  <a href="">Customer Support</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="text-xs gap-2 pt-6 border-t flex items-center justify-center text-gray-500">
        <Copyright size={14} />
        <p>2025 Traveloca All Right Reserved</p>
      </div>
    </footer>
  );
}
