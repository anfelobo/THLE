import { Mountain, Leaf, Map } from "lucide-react";

export default function TerritorySection() {
  return (
    <section
      id="territorio"
      className="mx-auto max-w-7xl px-6 py-28 md:py-36"
    >

      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

        <div className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#D4A83A]/20 bg-[#0B0906]">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,58,0.15),transparent_45%)]" />

          <div className="absolute left-[25%] top-[25%] h-1 w-1 rounded-full bg-[#E0B95A]" />
          <div className="absolute left-[48%] top-[15%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[70%] top-[30%] h-1 w-1 rounded-full bg-[#E0B95A]" />
          <div className="absolute left-[35%] top-[55%] h-1 w-1 rounded-full bg-white" />
          <div className="absolute left-[80%] top-[65%] h-1 w-1 rounded-full bg-[#E0B95A]" />

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />

          <div className="absolute bottom-10 left-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4A83A]">
              Territorio
            </p>

            <p className="mt-2 text-2xl font-semibold">
              Suba · Bogotá
            </p>
          </div>

        </div>

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4A83A]">
            El lugar también cuenta una historia
          </p>

          <h2 className="mt-5 text-4xl font-bold md:text-6xl">
            El cielo sobre el territorio.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#AFA89A]">
            El territorio no es solamente el lugar donde ocurre la
            experiencia. Es parte fundamental de ella.
          </p>

          <p className="mt-5 leading-8 text-[#9B9589]">
            Aquí podemos contar la historia del territorio Muisca de Suba,
            siempre desde la voz y el conocimiento de la propia comunidad.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">

            <div>
              <Mountain className="text-[#D4A83A]" size={23} />
              <p className="mt-3 text-sm font-semibold">Cultura</p>
            </div>


            <div>
              <Mountain className="text-[#D4A83A]" size={23} />
              <p className="mt-3 text-sm font-semibold">Territorio</p>
            </div>

            <div>
              <Leaf className="text-[#D4A83A]" size={23} />
              <p className="mt-3 text-sm font-semibold">Naturaleza</p>
            </div>

            <div>
              <Map className="text-[#D4A83A]" size={23} />
              <p className="mt-3 text-sm font-semibold">Memoria</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}