import Booking from './features/booking';
import Destinations from './features/destinations';
import Hero from './features/hero';
import Partners from './features/partners';
import Promotion from './features/promotion';
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
      <Destinations />
      <Booking />
      <Promotion />
    </MainLayout>
  );
}

export default App;
