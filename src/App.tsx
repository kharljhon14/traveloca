import Hero from './features/hero';
import Partners from './features/partners';
import SocialLinks from './features/social-links';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <MainLayout>
      <Hero />
      <div className="flex flex-col lg:flex-row justify-evenly gap-y-8">
        <SocialLinks />
        <Partners />
      </div>
    </MainLayout>
  );
}

export default App;
