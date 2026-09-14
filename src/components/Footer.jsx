export default function Footer() {
  return (
    <footer className="border-t border-[#D4A83A]/10 px-6 py-14">

      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-center md:justify-between">

        <div>

          <div className="font-bold tracking-wide">
            TURISMO HACIA{" "}
            <span className="text-[#D4A83A]">
              LAS ESTRELLAS
            </span>
          </div>

          <p className="mt-2 text-sm text-[#777267]">
            Territorio · Memoria · Cielo
          </p>

        </div>

        <div className="flex flex-wrap gap-6 text-sm text-[#8F897D]">

          <a href="#experiencia" className="hover:text-[#D4A83A]">
            Experiencia
          </a>

          <a href="#cUsmui" className="hover:text-[#D4A83A]">
            CUSMUI
          </a>

          <a href="#territorio" className="hover:text-[#D4A83A]">
            Territorio
          </a>

          <a href="#cosmovision" className="hover:text-[#D4A83A]">
            Cosmovisión
          </a>

          <a href="#astronomia" className="hover:text-[#D4A83A]">
            Astronomía
          </a>

        </div>

        <div className="text-sm text-[#625E56]">
          © 2026 Turismo hacia las Estrellas
        </div>

      </div>

    </footer>
  );
}