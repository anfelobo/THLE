import {
  Telescope,
  Moon,
  Stars,
  Camera,
} from "lucide-react";

const items = [
  {
    icon: Telescope,
    title: "Telescopios",
    text: "Observación de objetos del cielo nocturno.",
  },
  {
    icon: Moon,
    title: "Luna",
    text: "Nuestro vecino celeste más cercano.",
  },
  {
    icon: Stars,
    title: "Cielo profundo",
    text: "Cúmulos, nebulosas y galaxias.",
  },
  {
    icon: Camera,
    title: "Astrofotografía",
    text: "Capturar la experiencia para conservarla.",
  },
];

export default function AstronomySection() {
  return (
    <section
      id="astronomia"
      className="mx-auto max-w-7xl px-6 py-28 md:py-36"
    >

      <div className="max-w-3xl">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
          Miramos hacia arriba
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-6xl">
          Y entonces aparecen las estrellas.
        </h2>

        <p className="mt-7 text-lg leading-8 text-[#AFA89A]">
          Después de conocer el territorio y acercarnos a la experiencia,
          levantamos la mirada para descubrir el universo.
        </p>

      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="gold-border rounded-3xl bg-[#0A0907] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#100D08]"
            >

              <Icon
                size={30}
                className="text-[#D4A83A]"
              />

              <h3 className="mt-8 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-[#8F897D]">
                {item.text}
              </p>

            </article>
          );
        })}

      </div>

    </section>
  );
}