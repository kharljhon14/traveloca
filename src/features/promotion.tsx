import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export default function Promotion() {
  return (
    <div className="lg:flex items-stretch justify-center lg:gap-x-6">
      <div className="mb-3 lg:flex flex-col lg:mb-0 lg:gap-y-4">
        <div className="lg:w-72 rounded-2xl mb-4 lg:mb-0 overflow-hidden">
          <img src="/images/beach.jpg" />
        </div>

        <div className="flex items-center justify-center gap-x-3 py-6 px-4 rounded-xl bg-gray-100">
          <p className="uppercase text-blue-500 text-3xl font-semibold">20% Off</p>
          <p className="text-gray-500 text-sm">
            Til 28 Febuary, <span className="block">2025</span>{' '}
          </p>
        </div>
      </div>

      <div className="lg:flex flex-col justify-between">
        <div className="mb-4 lg:my-auto">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <p className="uppercase font-semibold w-full lg:w-auto text-3xl lg:text-6xl">Unleash</p>
            <p className="text-xs w-full lg:w-auto lg:max-w-md lg:text-base">
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
              And Gain Unique
            </p>
          </div>
          <div className="my-3">
            <p className="uppercase font-semibold w-full text-3xl lg:text-6xl">Wanderlust With</p>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <p className="text-xs w-full lg:w-auto lg:max-w-md lg:text-base">
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
            </p>
            <p className="uppercase font-semibold w-full lg:w-auto text-3xl lg:text-6xl">
              Skywings
            </p>
          </div>
        </div>

        <div>
          <Button
            size="lg"
            variant="ghost"
            className="flex items-center gap-2 p-11 rounded-xl  bg-cover bg-center w-full justify-center font-semibold text-xl"
            style={{ backgroundImage: 'url(./images/hero-bg.jpg)' }}
          >
            Book A Flight Now <MoveRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
