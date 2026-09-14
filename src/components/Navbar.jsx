import { Menu, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-5 py-4">
        <nav className="glass-dark flex items-center justify-between rounded-full px-5 py-3">

          <a
            href="#inicio"
            className="flex items-center gap-3"
          >
            <Star
              size={23}
              className="fill-[#D4A83A] text-[#D4A83A]"
            />

            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide">
                TURISMO HACIA
              </div>

              <div className="text-sm font-bold tracking-wide text-[#D4A83A]">
                LAS ESTRELLAS
              </div>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#D8D1C1] md:flex">

            <a
              href="#experiencia"
              className="transition hover:text-[#D4A83A]"
            >
              Experiencia
            </a>

            <a
              href="#cusmui"
              className="transition hover:text-[#D4A83A]"
            >
              Comunidad Muysca
            </a>

            <a
              href="#territorio"
              className="transition hover:text-[#D4A83A]"
            >
              Territorio
            </a>

            <a
              href="#cosmovision"
              className="transition hover:text-[#D4A83A]"
            >
              Cosmovisión
            </a>

            <a
              href="#astronomia"
              className="transition hover:text-[#D4A83A]"
            >
              Astronomía
            </a>

          </div>

          <button className="hidden rounded-full bg-[#D4A83A] px-5 py-2.5 text-sm font-semibold text-[#080706] transition hover:scale-105 hover:bg-[#E4BD5C] md:block">
            Vivir la experiencia
          </button>

          <button className="text-[#D4A83A] md:hidden">
            <Menu size={25} />
          </button>

        </nav>
      </div>
    </header>
  );
}