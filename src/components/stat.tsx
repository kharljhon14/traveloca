import { PropsWithChildren } from 'react';

export default function Stat({ children }: PropsWithChildren) {
  return (
    <div className=" p-5 w-72 lg:w-80 h-72 lg:h-80 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
      {children}
    </div>
  );
}
