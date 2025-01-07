import { PropsWithChildren } from 'react';
import Header from '../features/common/header';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="m-8 space-y-12">{children}</main>
    </>
  );
}
