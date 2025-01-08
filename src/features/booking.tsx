import { Button } from '@/components/ui/button';
import { ChevronRight, MapPinCheck, Ticket, Wallet } from 'lucide-react';

export default function Booking() {
  return (
    <div>
      <div className="text-center mb-12">
        <h3 className="text-2xl font-semibold mb-4 lg:text-4xl">
          Journey To The Skies Made Simple!
        </h3>
        <p className="text-sm text-gray-500 lg:text-base lg:max-w-md mx-auto">
          Travelling Is A Wonderful Way To Explore New Places, Learn About Diffirent Cultures, And
          Gain Unique Experience
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:justify-center lg:gap-0 lg:items-end">
        <div className="bg-gray-100 p-6 rounded-xl lg:w-96 h-48 flex flex-col justify-between text-blue-500">
          <div className="bg-white p-2 rounded-full flex items-center justify-center w-fit">
            <MapPinCheck />
          </div>
          <h5 className="text-black font-semibold text-lg">Find Your Destination</h5>
        </div>

        <div className="relative bg-blue-400 p-6 lg:w-96  overflow-hidden rounded-xl flex flex-col justify-between h-96 text-white">
          <div className="absolute -top-10 -right-10 rounded-full overflow-hidden ">
            <img
              className="w-48 h-48"
              src="/images/palawan-2.jpg"
            />
          </div>
          <div className="bg-white p-2 rounded-full flex items-center justify-center w-fit text-blue-500">
            <Ticket />
          </div>
          <div className="flex flex-col gap-y-8 items-start">
            <h5 className=" font-semibold text-xl">Book A Ticket</h5>
            <p>
              Traveling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
              And Gain Unique Experiences
            </p>
            <Button
              variant="link"
              className="capitalize text-white"
            >
              Learn More
              <ChevronRight />
            </Button>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl lg:w-96 h-48 flex flex-col justify-between text-blue-500">
          <div className="bg-white p-2 rounded-full flex items-center justify-center w-fit">
            <Wallet />
          </div>
          <h5 className="text-black font-semibold text-lg">Pay & Start Your Journey</h5>
        </div>
      </div>
    </div>
  );
}
