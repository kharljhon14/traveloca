import Hero from './features/hero';
import Partners from './features/partners';
import MainLayout from './layouts/main-layout';

function App() {
  return (
    <MainLayout>
      <Hero />
      <Partners />
    </MainLayout>
  );
}

export default App;
