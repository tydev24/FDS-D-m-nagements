import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Package, Truck, Shield, Clock, Users, CheckCircle } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Home,
      title: "Déménagement particuliers",
      description: "Transport sécurisé de vos meubles et effets personnels, avec un service adapté à chaque budget.",
      features: [
        "Emballage professionnel de vos biens",
        "Transport sécurisé avec matériel adapté",
        "Montage et démontage de mobilier",
        "Protection des sols et murs",
        "Devis gratuit et personnalisé",
      ],
      image: "/family-moving-boxes.jpg",
    },
    {
      icon: Building,
      title: "Déménagement entreprises",
      description: "Accompagnement des professionnels pour un transfert de bureaux sans interruption d'activité.",
      features: [
        "Planning personnalisé selon vos contraintes",
        "Intervention en soirée et weekend",
        "Transport sécurisé du matériel informatique",
        "Remontage rapide pour reprendre l'activité",
        "Équipe spécialisée en déménagement professionnel",
      ],
      image: "/office-moving-business.jpg",
    },
    {
      icon: Package,
      title: "Transport et manutention",
      description: "Prise en charge d'objets volumineux ou fragiles avec un matériel de levage adapté.",
      features: [
        "Transport d'objets lourds et volumineux",
        "Matériel de levage professionnel",
        "Protection renforcée pour objets fragiles",
        "Équipe spécialisée en manutention",
        "Assurance tous risques incluse",
      ],
      image: "/professional-movers-team.jpg",
    },
  ]

  const additionalServices = [
    {
      icon: Shield,
      title: "Emballage professionnel",
      description: "Protection optimale de vos biens avec du matériel de qualité",
    },
    {
      icon: Truck,
      title: "Location de véhicule",
      description: "Mise à disposition de camions avec ou sans chauffeur",
    },
    {
      icon: Users,
      title: "Main d'œuvre",
      description: "Équipe de déménageurs expérimentés à votre service",
    },
    {
      icon: Clock,
      title: "Intervention d'urgence",
      description: "Service rapide pour vos déménagements urgents",
    },
  ]

  return (
    <main className="min-h-screen">
      <ScrollToTop />
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/about-us-background.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nos prestations</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Nous vous proposons des solutions de déménagement complètes et adaptées à vos contraintes, que vous soyez
              particulier ou professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <a href="/contact">Demander un devis</a>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      ></div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Services complémentaires</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des services additionnels pour répondre à tous vos besoins spécifiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Notre processus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple et efficace pour votre tranquillité d'esprit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Demande de devis", description: "Contactez-nous pour une estimation gratuite" },
              { step: "2", title: "Visite technique", description: "Évaluation précise de vos besoins sur place" },
              { step: "3", title: "Planification", description: "Organisation détaillée de votre déménagement" },
              { step: "4", title: "Réalisation", description: "Exécution professionnelle de votre déménagement" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Faites confiance à FDS Déménagements</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Pour un accompagnement sur-mesure et un service professionnel adapté à vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/contact">Contactez-nous</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="/contact">Demander un devis</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
