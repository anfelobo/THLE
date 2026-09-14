export default function CosmovisionSection() {
  return (
    <section
      id="cosmovision"
      className="bg-[#F4EBD8] px-6 py-28 text-[#17130C] md:py-36"
    >

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#8A641E]">
          Dos miradas · Un mismo cielo
        </p>

        <h2 className="mt-5 text-4xl font-bold md:text-6xl">
          El cielo también guarda memoria.
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#625A4D]">
          Esta experiencia busca propiciar un diálogo respetuoso entre los
          saberes de la comunidad y la astronomía contemporánea, reconociendo
          que existen distintas formas de acercarnos al cielo.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-[2rem] bg-[#17130C] p-8 text-left text-[#F4EBD8]">

            <span className="text-sm uppercase tracking-[0.25em] text-[#D4A83A]">
              Comunidad
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              Saberes y memoria
            </h3>

            <p className="mt-4 leading-7 text-[#BDB4A3]">
              Un espacio para conocer los conocimientos que la comunidad
              decida compartir sobre su territorio, su historia y su relación
              con el cielo.
            </p>

          </div>

          <div className="rounded-[2rem] border border-[#17130C]/10 bg-white/60 p-8 text-left">

            <span className="text-sm uppercase tracking-[0.25em] text-[#8A641E]">
              Astronomía
            </span>

            <h3 className="mt-5 text-3xl font-bold">
              Ciencia y observación
            </h3>

            <p className="mt-4 leading-7 text-[#625A4D]">
              Una aproximación al cielo mediante la astronomía, la
              observación y las herramientas que nos permiten comprender
              nuestro universo.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}