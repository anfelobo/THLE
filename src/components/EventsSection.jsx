
const events = [
  {
    date: "18",
    month: "SEP",
    title: "Cuarto menguante",
    description: "Una excelente oportunidad para observar el cielo profundo.",
  },
  {
    date: "22",
    month: "SEP",
    title: "Noche de estrellas",
    description: "Observación guiada para toda la familia.",
  },
  {
    date: "29",
    month: "SEP",
    title: "Luna nueva",
    description: "El cielo oscuro revela sus objetos más débiles.",
  },
];

export default function EventsSection() {
  return (
    <section
      id="calendario"
      className="border-y border-white/10 bg-white/[0.02] px-6 py-24 md:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Mira hacia arriba
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-6xl">
              Próximos eventos
            </h2>
          </div>

          <button className="w-fit rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10">
            Ver calendario completo
          </button>

        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {events.map((event) => (
            <article
              key={event.title}
              className="group rounded-3xl border border-white/10 bg-[#080d20] p-7 transition hover:border-cyan-300/30"
            >

              <div className="flex items-start justify-between">

                <div>
                  <div className="text-5xl font-bold">
                    {event.date}
                  </div>

                  <div className="mt-1 text-sm font-semibold tracking-widest text-cyan-300">
                    {event.month}
                  </div>
                </div>

                <div className="text-4xl">
                  ✦
                </div>

              </div>

              <h3 className="mt-12 text-2xl font-semibold">
                {event.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {event.description}
              </p>

              <button className="mt-8 text-sm font-semibold text-cyan-300">
                Ver experiencia →
              </button>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}