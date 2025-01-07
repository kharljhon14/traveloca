import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  CarouselItem
} from '@/components/ui/carousel';
import { MapPin, Star } from 'lucide-react';

export default function Destinations() {
  return (
    <div className="">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Popular Destination</h3>
        <p className="text-gray-500 text-sm">Unleash Your Wanderlust With SkyWings</p>
      </div>
      <div className=" mx-10">
        <Carousel
          opts={{
            align: 'center'
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-96 sm:basis-48">
              <Card>
                <CardHeader>
                  <figure className="rounded-xl overflow-hidden mb-4">
                    <img src="/images/palawan.webp" />
                  </figure>
                  <CardTitle>Forest Wild Life</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-1">
                        <MapPin size={14} />
                        <span>Philippines</span>
                      </div>
                      <div className="chip px-3">
                        <Star size={12} />
                        <span>4.7</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-96 sm:basis-48">
              <Card>
                <CardHeader>
                  <figure className="rounded-xl overflow-hidden mb-4">
                    <img src="/images/palawan.webp" />
                  </figure>
                  <CardTitle>Forest Wild Life</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-1">
                        <MapPin size={14} />
                        <span>Philippines</span>
                      </div>
                      <div className="chip px-3">
                        <Star size={12} />
                        <span>4.7</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-96 sm:basis-48">
              <Card>
                <CardHeader>
                  <figure className="rounded-xl overflow-hidden mb-4">
                    <img src="/images/palawan.webp" />
                  </figure>
                  <CardTitle>Forest Wild Life</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-1">
                        <MapPin size={14} />
                        <span>Philippines</span>
                      </div>
                      <div className="chip px-3">
                        <Star size={12} />
                        <span>4.7</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-96 sm:basis-48">
              <Card>
                <CardHeader>
                  <figure className="rounded-xl overflow-hidden mb-4">
                    <img src="/images/palawan.webp" />
                  </figure>
                  <CardTitle>Forest Wild Life</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-1">
                        <MapPin size={14} />
                        <span>Philippines</span>
                      </div>
                      <div className="chip px-3">
                        <Star size={12} />
                        <span>4.7</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-96 sm:basis-48">
              <Card>
                <CardHeader>
                  <figure className="rounded-xl overflow-hidden mb-4">
                    <img src="/images/palawan.webp" />
                  </figure>
                  <CardTitle>Forest Wild Life</CardTitle>
                  <CardDescription>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-x-1">
                        <MapPin size={14} />
                        <span>Philippines</span>
                      </div>
                      <div className="chip px-3">
                        <Star size={12} />
                        <span>4.7</span>
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
