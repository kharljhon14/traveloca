import { PropsWithChildren } from 'react';
import Header from '../features/common/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="p-8">{children}</main>
    </>
  );
}
