import { MoveUpRight } from 'lucide-react';

export default function LearnMore() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 ">
      <div className="rounded-full overflow-hidden">
        <img
          className="w-36 h-36 rounded-full"
          src="/images/palawan-2.jpg"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 text-center">
        <h3 className="text-2xl lg:text-3xl font-semibold lg:max-w-sm">
          Explore The Skies With Confidence
        </h3>

        <button className="bg-blue-500 text-white w-24 h-24 rounded-full border flex items-center justify-center mx-auto">
          <MoveUpRight size={28} />
        </button>

        <p className="text-gray-500 text-sm lg:max-w-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, repellat?
        </p>
      </div>
      <div className="rounded-full overflow-hidden ">
        <img
          className="w-36 h-36 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuV7MrfDflAPh4gTgRasLs9biBC9j1o4Ab3Q&s"
        />
      </div>
    </div>
  );
}
