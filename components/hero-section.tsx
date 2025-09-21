import { Button } from "@/components/ui/button"
import { Truck, Shield, Clock } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/professional-moving-truck-on-paris-street.jpg')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Votre déménagement, <span className="text-primary">simple et sécurisé</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            FDS Déménagements vous accompagne partout en Île-de-France avec efficacité et fiabilité.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                Demander un devis
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent">
                Nos services
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Équipe expérimentée</h3>
              <p className="text-muted-foreground">Des professionnels qualifiés pour tous vos déménagements</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Service sécurisé</h3>
              <p className="text-muted-foreground">Vos biens protégés avec notre matériel professionnel</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Intervention rapide</h3>
              <p className="text-muted-foreground">Devis gratuit et intervention dans les meilleurs délais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
