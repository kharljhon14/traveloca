export default function Hero() {
  return (
    <div
      className="h-[80vh] bg-cover bg-center rounded-xl p-8 relative"
      style={{ backgroundImage: 'url(./images/hero-bg.jpg)' }}
    >
      <div className="flex flex-col max-w-sm  h-full justify-center">
        <p className="uppercase text-lg">Elevate your travel journey</p>
        <h1 className="text-7xl font-semibold leading-snug">Experience The Magic Of Flight</h1>
      </div>

      {/* Plane Image */}
      <div className="absolute lg:right-[-15rem] md:right-[-35rem] bottom-0 top-0 hidden md:inline-block">
        <img
          className="w-full h-full"
          src="/images/plane.png"
        />
      </div>
    </div>
  );
}
