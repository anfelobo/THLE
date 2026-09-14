import {
  Leaf,
  Globe2,
  Users,
  MoonStar,
} from "lucide-react";

const principles = [
  {
    icon: MoonStar,
    title: "Protegemos la noche",
    text: "Promovemos el cuidado del cielo nocturno y la reducción de la contaminación lumínica.",
  },
  {
    icon: Leaf,
    title: "Respetamos la naturaleza",
    text: "El cielo forma parte de ecosistemas que también debemos proteger.",
  },
  {
    icon: Users,
    title: "Apoyamos comunidades",
    text: "Trabajamos para que el astroturismo genere valor en los territorios.",
  },
  {
    icon: Globe2,
    title: "Compartimos ciencia",
    text: "Convertimos cada experiencia en una oportunidad para aprender.",
  },
];

export default function ResponsibleSection() {
  return (
    <section
      id="nosotros"
      className="mx-auto max-w-7xl px-6 py-24 md:py-32"
    >

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Nuestra filosofía
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            El cielo también es parte del territorio.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Creemos en un astroturismo que conecta astronomía, naturaleza,
            educación y comunidades locales.
          </p>

          <p className="mt-5 leading-8 text-slate-400">
            Porque proteger la oscuridad de la noche significa también
            proteger una parte fundamental de nuestro patrimonio natural.
          </p>

        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >

                <Icon className="text-cyan-300" size={28} />

                <h3 className="mt-6 font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.text}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}