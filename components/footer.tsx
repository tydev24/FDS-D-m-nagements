import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">FDS Déménagements</h2>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              FDS Déménagements vous accompagne dans tous vos projets de déménagement en Île-de-France avec
              professionnalisme et efficacité.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+33 7 62 62 08 93</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>contact@fds-demenagements.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>19 Boulevard Malesherbes, 75008 Paris</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/qui-sommes-nous"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Qui sommes-nous
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Nos services
                </Link>
              </li>
              <li>
                <Link
                  href="/pourquoi-nous-choisir"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Pourquoi nous choisir
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos services</h3>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li>Déménagement particuliers</li>
              <li>Déménagement entreprises</li>
              <li>Transport et manutention</li>
              <li>Emballage professionnel</li>
              <li>Montage/démontage</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-secondary-foreground/60">
              <p>© 2025 FDS Déménagements - Tous droits réservés</p>
              <p className="mt-1">SARL - SIREN: 981 728 173 - SIRET: 981 728 173 00015 - TVA: FR12981728173</p>
              <p className="mt-1">Dirigeant: M'Hamed Mesli</p>
            </div>
            <div className="text-sm text-secondary-foreground/60">
              <Link href="/mentions-legales" className="hover:text-secondary-foreground transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
