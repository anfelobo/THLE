export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534791547706-1c1b1b5c5b55?auto=format&fit=crop&w=2200&q=90')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >

      <div className="hero-overlay absolute inset-0" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[15%] top-[25%] h-1 w-1 rounded-full bg-[#E8C96A]" />
        <div className="absolute left-[40%] top-[18%] h-1 w-1 rounded-full bg-white" />
        <div className="absolute left-[68%] top-[30%] h-1 w-1 rounded-full bg-[#E8C96A]" />
        <div className="absolute left-[82%] top-[15%] h-1 w-1 rounded-full bg-white" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-40">

        <div className="max-w-4xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.4em] text-[#E0B95A]">
            Cultura · Territorio · Memoria · Cielo
          </p>

          <h1 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            Del territorio
            <br />
            <span className="gold-text">
              a las estrellas.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#E6E0D5] md:text-xl">
            Una experiencia de turismo astronómico que comienza en el
            territorio Muisca de Suba y nos invita a descubrir el cielo
            desde una mirada de comunidad, memoria y conocimiento.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button className="rounded-full bg-[#D4A83A] px-8 py-4 font-semibold text-[#080706] transition hover:scale-105 hover:bg-[#E4BD5C]">
              Conocer la experiencia
            </button>

            <button className="rounded-full border border-[#D4A83A]/40 bg-black/30 px-8 py-4 font-semibold text-[#F5F0E6] backdrop-blur-sm transition hover:bg-[#D4A83A]/10">
              Conoce el cabildo
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}