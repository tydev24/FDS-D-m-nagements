import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Package } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Déménagement particuliers",
      description: "Transport sécurisé de vos meubles et effets personnels, avec un service adapté à chaque budget.",
      features: ["Emballage professionnel", "Transport sécurisé", "Montage/démontage"],
    },
    {
      icon: Building,
      title: "Déménagement entreprises",
      description: "Accompagnement des professionnels pour un transfert de bureaux sans interruption d'activité.",
      features: ["Planning personnalisé", "Intervention weekend", "Matériel informatique"],
    },
    {
      icon: Package,
      title: "Transport et manutention",
      description: "Prise en charge d'objets volumineux ou fragiles avec un matériel de levage adapté.",
      features: ["Objets lourds", "Matériel de levage", "Protection renforcée"],
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Nos prestations</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous vous proposons des solutions de déménagement complètes et adaptées à vos contraintes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-balance">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Faites confiance à FDS Déménagements pour un accompagnement sur-mesure.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Contactez-nous
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
