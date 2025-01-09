import { Separator } from '@/components/ui/separator';

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:mx-56">
      <div className="flex-1">
        <div className="bg-gray-100 rounded-2xl p-4 w-fit">
          <p className="uppercase text-sm">About Us</p>
        </div>
      </div>

      <div className="flex-1">
        <div>
          <p className="font-semibold">
            Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures, And
            Gain Unique Experiences. Travelling Is A Wonderful Way To Explore New Places, Learn
            About Different.
          </p>
          <Separator className="bg-blue-500 my-6" />

          <div className="flex flex-col gap-4 text-gray-500 text-xs lg:flex-row lg:h-16">
            <Separator
              className="hidden lg:block"
              orientation="vertical"
            />
            <p>
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
              And Gain Unique Experiences. Travelling Is A Wonderful Way To Explore New Places,
              Learn About Different.
            </p>
            <Separator
              className="hidden lg:block"
              orientation="vertical"
            />

            <Separator className="lg:hidden bg-blue-500" />

            <p>
              Travelling Is A Wonderful Way To Explore New Places, Learn About Different Cultures,
              And Gain Unique Experiences. Travelling Is A Wonderful Way To Explore New Places,
              Learn About Different.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
