import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Clock, Shield, CheckCircle } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function QuiSommesNousPage() {
  const values = [
    {
      icon: Users,
      title: "Équipe expérimentée",
      description: "Des professionnels qualifiés avec plusieurs années d'expérience dans le déménagement",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Un service de confiance qui respecte ses engagements et protège vos biens",
    },
    {
      icon: Clock,
      title: "Ponctualité",
      description: "Respect des horaires convenus et intervention dans les délais promis",
    },
    {
      icon: CheckCircle,
      title: "Satisfaction client",
      description: "Votre satisfaction est notre priorité absolue dans chaque intervention",
    },
  ]

  const stats = [
    { number: "2023", label: "Année de création" },
    { number: "100%", label: "Clients satisfaits" },
    { number: "IDF", label: "Zone d'intervention" },
    { number: "7j/7", label: "Disponibilité" },
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Une équipe à votre service
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Découvrez FDS Déménagements, votre partenaire de confiance pour tous vos projets de déménagement en
              Île-de-France.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Notre histoire</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Basée à Paris, et intervenant principalement en Île-de-France et sur Épinay-sur-Seine, FDS Déménagements
                accompagne particuliers et professionnels dans leurs projets de déménagement depuis sa création en
                décembre 2023.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Notre mission : vous garantir une prestation rapide, soignée et adaptée à vos besoins. Avec une équipe
                expérimentée, nous plaçons la satisfaction client au cœur de chaque intervention.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Dirigée par M'Hamed Mesli, notre SARL s'engage à fournir un service professionnel et personnalisé pour
                chaque déménagement, qu'il s'agisse de particuliers ou d'entreprises.
              </p>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-[url('/professional-moving-team-with-boxes-and-truck.jpg')] bg-cover bg-center"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nos valeurs</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Informations légales</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <strong>Nom commercial :</strong> FDS Déménagements
                  </div>
                  <div>
                    <strong>Forme juridique :</strong> SARL
                  </div>
                  <div>
                    <strong>SIREN :</strong> 981 728 173
                  </div>
                  <div>
                    <strong>SIRET siège :</strong> 981 728 173 00015
                  </div>
                  <div>
                    <strong>TVA :</strong> FR12981728173
                  </div>
                  <div>
                    <strong>Dirigeant :</strong> M'Hamed Mesli
                  </div>
                  <div>
                    <strong>Date de création :</strong> 06/12/2023
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Zone d'intervention</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Siège social</h4>
                      <p className="text-muted-foreground">19 Boulevard Malesherbes, 75008 Paris</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Zones d'intervention</h4>
                      <p className="text-muted-foreground">
                        Île-de-France et Épinay-sur-Seine principalement. Nous étudions toute demande dans un rayon
                        élargi.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
