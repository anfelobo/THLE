```jsx
import { Instagram, ArrowUpRight } from "lucide-react";

const SocialSection = () => {
  return (
    <section
      id="redes"
      className="relative overflow-hidden border-t border-[#D4A83A]/10 bg-[#050505] px-6 py-28 md:py-36"
    >
      {/* Brillo sutil */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4A83A]/5 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
          Síguenos
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-6xl">
          El viaje también continúa en las redes.
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#AFA89A]">
          Descubre fotografías, actividades, encuentros y momentos que
          compartimos desde el territorio hacia las estrellas.
        </p>

        <div className="mx-auto mt-12 max-w-md">

          <a
            href="https://www.instagram.com/turismohacialasestrellas/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-3xl border border-[#D4A83A]/20 bg-[#0D0B08] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#D4A83A]/50 hover:bg-[#120F0A]"
          >

            <div className="flex items-center gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4A83A]/10">
                <Instagram
                  size={28}
                  className="text-[#D4A83A]"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#777267]">
                  Instagram
                </p>

                <p className="mt-1 text-lg font-semibold">
                  @turismohacialasestrellas
                </p>
              </div>

            </div>

            <ArrowUpRight
              size={22}
              className="text-[#D4A83A] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />

          </a>

        </div>

      </div>

    </section>
  );
};

export default SocialSection;
```
