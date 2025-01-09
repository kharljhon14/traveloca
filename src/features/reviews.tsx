import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="rounded-lg overflow-hidden">
      <h3 className="font-semibold text-2xl text-center lg:text-4xl mb-16">
        Loved By Over Thousand Travelers
      </h3>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center lg:items-end">
        <div className="bg-gray-100 lg:w-72 rounded-lg p-1 h-fit">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex gap-2 text-red-500 mb-4">
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
            </div>
            <p className="text-sm text-gray-500">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi quod nemo
              voluptate quasi tempora quo, illo autem voluptatum quam rerum, dignissimos fugit,
              nobis similique voluptatibus enim iusto qui illum."
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <Avatar>
              <AvatarImage
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p>Kharl Enriquez</p>
              <p className="text-sm text-gray-500">Developer</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-500 lg:w-72 rounded-lg p-1">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex gap-2 text-red-500 mb-4">
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
            </div>
            <p className="text-sm text-gray-500">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi quod nemo
              voluptate quasi tempora quo, illo autem voluptatum quam rerum, dignissimos fugit,
              nobis similique voluptatibus enim iusto qui illum. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Fugiat excepturi quod nemo voluptate quasi tempora quo,
              illo autem voluptatum quam rerum, dignissimos fugit, nobis similique voluptatibus enim
              iusto qui illum."
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <Avatar>
              <AvatarImage
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="text-white">
              <p>Kharl Enriquez</p>
              <p className="text-sm">Developer</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 lg:w-72 rounded-lg p-1 h-fit">
          <div className="bg-white p-6 rounded-lg">
            <div className="flex gap-2 text-red-500 mb-4">
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
              <Heart size={12} />
            </div>
            <p className="text-sm text-gray-500">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat excepturi quod nemo
              voluptate quasi tempora quo, illo autem voluptatum quam rerum, dignissimos fugit,
              nobis similique voluptatibus enim iusto qui illum. ate quasi tempora quo, illo autem
              voluptatum quam rerum, dignissimos fugit, nobis similique voluptatibus enim iusto qui
              illum. Lorem, ipsum dolor."
            </p>
          </div>

          <div className="flex gap-4 p-4">
            <Avatar>
              <AvatarImage
                src="https://pics.craiyon.com/2023-11-26/oMNPpACzTtO5OVERUZwh3Q.webp"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div>
              <p>Kharl Enriquez</p>
              <p className="text-sm text-gray-500">Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
