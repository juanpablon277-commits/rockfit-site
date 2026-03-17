import { Instagram, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-2xl font-bold uppercase tracking-wider text-primary">
              Rock Fit
            </span>
            <p className="mt-3 text-sm text-muted-foreground">
              Força, disciplina e evolucao todos os dias.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Menu
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#planos"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#horarios"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Horarios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Contato
            </h4>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                (94) 98416-1277
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Rua das Andorinhas, 8 - Goianesia, PA
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Redes Sociais
            </h4>
            <div className="mt-3">
              <a
                href="https://instagram.com/rockfit_gopa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                @rockfit_gopa
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {"2026 Rock Fit Academia. Todos os direitos reservados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
