import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center rounded-xl p-8 relative"
      style={{ backgroundImage: 'url(./images/hero-bg.jpg)' }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-white/90 z-0 rounded-xl" />

      {/* Content Section */}
      <div className="flex flex-col max-w-md h-full justify-center relative z-10">
        <p className="uppercase text-lg tracking-widest text-blue-600">
          Elevate your travel journey
        </p>
        <h1 className="text-7xl font-semibold leading-tight">
          Experience The <span className="text-blue-600">Magic</span> Of Flight!
        </h1>
        <div className="mt-6">
          <Button
            size="lg"
            className="rounded-full"
          >
            Book A Trip Now
          </Button>
        </div>
      </div>

      {/* Plane Image */}
      <div className="absolute inset-0 flex justify-end items-center">
        <img
          className="h-full object-contain pointer-events-none"
          src="/images/plane.png"
          alt="Airplane"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white opacity-80 z-0" />

      {/* Know More */}
      <div className="absolute bg-white rounded-3xl bottom-0 right-0 m-4 p-4">
        <div className="text-xs">
          <p className="font-semibold">Awesome Places</p>
          <p>Discover The World One Adventure At A Time!</p>
        </div>
        <div className="mt-4">
          <Button size="sm">
            Know More <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
