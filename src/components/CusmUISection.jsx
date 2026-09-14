import { MapPin, Users, Sparkles } from "lucide-react";

export default function CusmUISection() {
  return (
    <section
      id="cusmui"
      className="relative overflow-hidden border-y border-[#D4A83A]/10 bg-[#0B0906] px-6 py-28 md:py-36"
    >

      <div className="absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#D4A83A]/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
            Punto de partida
          </p>

          <h2 className="mt-5 text-5xl font-bold md:text-7xl">
            CUSMUI
          </h2>

          <p className="mt-3 text-xl text-[#D8B75B]">
            Un encuentro con el territorio.
          </p>

          <p className="mt-7 text-lg leading-8 text-[#B4AD9F]">
            Nuestra experiencia comienza en el territorio del Cabildo
            Indígena Muisca de Suba, donde el visitante tiene la oportunidad
            de acercarse a la comunidad y conocer el contexto desde el cual
            nace esta experiencia.
          </p>

          <button className="mt-8 rounded-full border border-[#D4A83A]/40 px-7 py-3 text-sm font-semibold text-[#E2BE61] transition hover:bg-[#D4A83A]/10">
            Conocer Cusmui 
          </button>

        </div>

        <div className="grid gap-4">

          <div className="gold-border rounded-3xl bg-black/30 p-7">
            <MapPin className="text-[#D4A83A]" size={28} />

            <h3 className="mt-5 text-xl font-semibold">
              Territorio
            </h3>

            <p className="mt-3 leading-7 text-[#9F998D]">
              Un espacio para acercarnos al lugar desde donde comienza
              nuestra experiencia.
            </p>
          </div>

          <div className="gold-border rounded-3xl bg-black/30 p-7">
            <Users className="text-[#D4A83A]" size={28} />

            <h3 className="mt-5 text-xl font-semibold">
              Comunidad
            </h3>

            <p className="mt-3 leading-7 text-[#9F998D]">
              El conocimiento y la experiencia se construyen desde la
              comunidad.
            </p>
          </div>

          <div className="gold-border rounded-3xl bg-black/30 p-7">
            <Sparkles className="text-[#D4A83A]" size={28} />

            <h3 className="mt-5 text-xl font-semibold">
              Cielo
            </h3>

            <p className="mt-3 leading-7 text-[#9F998D]">
              Desde el territorio levantamos la mirada hacia el universo.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}