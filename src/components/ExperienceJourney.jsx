const steps = [
  {
    number: "01",
    title: "Encuentro",
    text: "Llegamos al territorio y comenzamos nuestro encuentro con la comunidad.",
  },
  {
    number: "02",
    title: "Territorio",
    text: "Conocemos el lugar y su relación con quienes lo habitan.",
  },
  {
    number: "03",
    title: "Memoria",
    text: "Escuchamos historias, conocimientos y saberes compartidos por la comunidad.",
  },
  {
    number: "04",
    title: "Cielo",
    text: "Levantamos la mirada y descubrimos nuestra relación con el firmamento.",
  },
  {
    number: "05",
    title: "Observación",
    text: "Exploramos el universo mediante la observación astronómica.",
  },
  {
    number: "06",
    title: "Experiencia",
    text: "Terminamos la jornada compartiendo lo aprendido y vivido.",
  },
];

export default function ExperienceJourney() {
  return (
    <section
      id="experiencia"
      className="mx-auto max-w-7xl px-6 py-28 md:py-36"
    >

      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
          Una experiencia diferente
        </p>

        <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
          Un viaje que comienza en el territorio.
        </h2>

        <p className="mt-7 text-lg leading-8 text-[#AFA89A]">
          Turismo hacia las Estrellas propone un encuentro entre territorio,
          comunidad, memoria, conocimiento y cielo.
        </p>

      </div>

      <div className="mt-20 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">

        {steps.map((step) => (
          <article
            key={step.number}
            className="relative border-l border-[#D4A83A]/30 pl-6"
          >

            <span className="text-sm font-bold tracking-[0.25em] text-[#D4A83A]">
              {step.number}
            </span>

            <h3 className="mt-3 text-2xl font-semibold">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-[#9F998D]">
              {step.text}
            </p>

          </article>
        ))}

      </div>

    </section>
  );
}