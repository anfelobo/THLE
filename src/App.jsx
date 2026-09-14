import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceJourney from "./components/ExperienceJourney";
import CusmUISection from "./components/CusmUISection";
import TerritorySection from "./components/TerritorySection";
import CosmovisionSection from "./components/CosmovisionSection";
import AstronomySection from "./components/AstronomySection";
import CalendarSection from "./components/CalendarSection";
import Footer from "./components/Footer";
import StarField from "./components/StarField";

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F0E6]">
       <StarField count={90} />
      <Navbar />

      <main>
        <Hero />

        <ExperienceJourney />

        <CusmUISection />

        <TerritorySection />

        <CosmovisionSection />

        <AstronomySection />

        <CalendarSection />

        <section className="relative overflow-hidden px-6 py-32 text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#120e06] to-[#050505]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
              Turismo hacia las Estrellas
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              El cielo siempre estuvo allí.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#CFC7B5]">
              A veces solo necesitamos volver a mirar.
            </p>

            <button className="mt-10 rounded-full bg-[#D4A83A] px-8 py-4 font-semibold text-[#080706] transition hover:scale-105 hover:bg-[#E4BD5C]">
              Conoce la experiencia
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;