const events = [
  {
    date: "18",
    month: "SEP",
    title: "Noche de observación",
    text: "Una noche para encontrarnos bajo el cielo.",
  },
  {
    date: "22",
    month: "SEP",
    title: "Cielo profundo",
    text: "Una oportunidad para explorar objetos más débiles.",
  },
  {
    date: "29",
    month: "SEP",
    title: "Luna nueva",
    text: "La oscuridad permite descubrir más estrellas.",
  },
];

export default function CalendarSection() {
  return (
    <section
      id="calendario"
      className="border-y border-[#D4A83A]/10 bg-[#090806] px-6 py-28 md:py-36"
    >

      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
          Próximamente
        </p>

        <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <h2 className="text-4xl font-bold md:text-6xl">
            El cielo tiene su propio calendario.
          </h2>

          <button className="w-fit rounded-full border border-[#D4A83A]/30 px-6 py-3 text-sm font-semibold text-[#D4A83A] hover:bg-[#D4A83A]/10">
            Ver calendario
          </button>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">

          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-3xl border border-white/10 bg-[#0D0B08] p-7"
            >

              <div className="flex items-start justify-between">

                <div>
                  <div className="text-5xl font-bold">
                    {event.date}
                  </div>

                  <div className="mt-1 text-sm font-semibold tracking-[0.3em] text-[#D4A83A]">
                    {event.month}
                  </div>
                </div>

                <span className="text-3xl text-[#D4A83A]">
                  ✦
                </span>

              </div>

              <h3 className="mt-12 text-2xl font-semibold">
                {event.title}
              </h3>

              <p className="mt-3 leading-7 text-[#918B80]">
                {event.text}
              </p>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}