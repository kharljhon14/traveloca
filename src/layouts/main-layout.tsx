import { PropsWithChildren } from 'react';
import Header from '../features/common/header';
import Footer from '@/features/footer';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="m-8 space-y-16 max-w-[80vw] mx-auto">{children}</main>
      <Footer />
    </>
  );
}
