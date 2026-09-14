import {
  Telescope,
  Moon,
  Camera,
  Sparkles,
  Sun,
  Compass,
} from "lucide-react";

const experiences = [
  {
    icon: Sparkles,
    title: "Vía Láctea",
    text: "Descubre nuestra galaxia bajo cielos realmente oscuros.",
  },
  {
    icon: Telescope,
    title: "Telescopios",
    text: "Observa planetas, cúmulos, nebulosas y galaxias.",
  },
  {
    icon: Camera,
    title: "Astrofotografía",
    text: "Aprende a capturar el cielo nocturno.",
  },
  {
    icon: Moon,
    title: "Luna y planetas",
    text: "Explora nuestros vecinos del Sistema Solar.",
  },
  {
    icon: Sun,
    title: "Observación solar",
    text: "Descubre nuestra estrella de forma segura.",
  },
  {
    icon: Compass,
    title: "Cielo nocturno",
    text: "Aprende a orientarte entre las constelaciones.",
  },
];

export default function SkySection() {
  return (
    <section
      id="experiencias"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >

      <div className="max-w-2xl">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Empieza aquí
        </p>

        <h2 className="mt-4 text-4xl font-bold md:text-6xl">
          ¿Qué quieres descubrir?
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          No necesitas ser astrónomo. Nosotros ponemos el conocimiento,
          los telescopios y la experiencia. Tú solo tienes que mirar hacia
          arriba.
        </p>

      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {experiences.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
            >

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {item.text}
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-cyan-300">
                Descubrir →
              </span>

            </article>
          );
        })}

      </div>
    </section>
  );
}
