import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="">
      <div className="py-6 px-12 flex justify-between items-center">
        <div>
          <h1 className="font-semibold text-xl">
            <a href="">Traveloca</a>
          </h1>
        </div>
        <nav className="hidden lg:inline-block">
          <ul className="flex items-center gap-x-8">
            <li>
              <a
                href=""
                className="uppercase"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="uppercase"
              >
                Tour
              </a>
            </li>
            <li>
              <a
                href=" "
                className="uppercase"
              >
                Package
              </a>
            </li>
            <li>
              <a
                href=""
                className="uppercase"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:inline-block">
          <Button>Book Now</Button>
        </div>

        <button
          className="inline-block lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={26} />
        </button>
      </div>

      <div
        className={`w-full ${
          open ? 'h-60 border-b shadow-sm' : 'h-0'
        } overflow-hidden duration-300 transition-height static lg:hidden`}
      >
        <nav className="mt-4">
          <ul className="flex flex-col items-center gap-y-4">
            <li>
              <a
                href=""
                className="uppercase"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                className="uppercase"
              >
                Tour
              </a>
            </li>
            <li>
              <a
                href=" "
                className="uppercase"
              >
                Package
              </a>
            </li>
            <li>
              <a
                href=""
                className="uppercase"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-center mt-4 px-4">
          <Button className="w-full">Book Now</Button>
        </div>
      </div>
    </header>
  );
}
