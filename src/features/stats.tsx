import Stat from '@/components/stat';

export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 lg:gap-32 lg:flex-row">
      <Stat>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-8xl text-blue-500 font-semibold">10+</p>
          <p className="text-2xl">Years Experience</p>
        </div>
      </Stat>
      <Stat>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-8xl text-blue-500 font-semibold">12K</p>
          <p className="text-2xl">Happy Clients</p>
        </div>
      </Stat>
      <Stat>
        <div className="flex flex-col gap-2 items-center justify-center">
          <p className="text-8xl text-blue-500 font-semibold">4.8</p>
          <p className="text-2xl">Overall Rating</p>
        </div>
      </Stat>
    </div>
  );
}
