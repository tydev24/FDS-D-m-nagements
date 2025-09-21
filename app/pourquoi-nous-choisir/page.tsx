import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Euro, Shield, Users, Award, Star, Phone, MapPin } from "lucide-react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function PourquoiNousChoisirPage() {
  const mainAdvantages = [
    {
      icon: CheckCircle,
      title: "Service fiable",
      description:
        "Une équipe expérimentée qui respecte ses engagements et garantit la qualité de chaque intervention.",
      details: [
        "Équipe formée et expérimentée",
        "Respect des délais convenus",
        "Suivi personnalisé de votre dossier",
        "Engagement qualité sur chaque prestation",
      ],
    },
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Devis détaillé sans surprise ni frais cachés, avec des tarifs compétitifs adaptés à votre budget.",
      details: [
        "Devis gratuit et détaillé",
        "Aucun frais caché",
        "Tarifs compétitifs",
        "Plusieurs formules disponibles",
      ],
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description:
        "Disponibilité et réactivité pour vos urgences, avec une planification flexible selon vos contraintes.",
      details: ["Disponibilité 7j/7", "Intervention d'urgence possible", "Planning flexible", "Réactivité garantie"],
    },
    {
      icon: Shield,
      title: "Assurance complète",
      description: "Vos biens protégés pendant tout le transport avec une couverture d'assurance adaptée.",
      details: [
        "Assurance tous risques",
        "Protection optimale des biens",
        "Matériel professionnel",
        "Garantie de sécurité",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Marie Dubois",
      location: "Paris 15ème",
      rating: 5,
      comment:
        "Excellent service ! L'équipe était ponctuelle, professionnelle et très soigneuse avec nos affaires. Je recommande vivement FDS Déménagements.",
    },
    {
      name: "Jean Martin",
      location: "Épinay-sur-Seine",
      rating: 5,
      comment:
        "Déménagement d'entreprise réalisé en weekend sans aucun problème. Très satisfait de la prestation et du respect des délais.",
    },
    {
      name: "Sophie Leroy",
      location: "Paris 8ème",
      rating: 5,
      comment:
        "Service impeccable du devis à la livraison. Prix très correct et équipe très sympathique. Merci pour ce déménagement sans stress !",
    },
  ]

  const stats = [
    { number: "100%", label: "Clients satisfaits", icon: Star },
    { number: "24h", label: "Délai de réponse", icon: Clock },
    { number: "0", label: "Frais cachés", icon: Euro },
    { number: "7j/7", label: "Disponibilité", icon: Phone },
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
              Un déménagement en toute confiance
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Notre expertise et notre organisation garantissent un service fiable, transparent et accessible. Découvrez
              pourquoi nos clients nous font confiance.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nos avantages</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous mettons à votre disposition des formules flexibles et des devis rapides pour répondre à vos attentes.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainAdvantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                      <advantage.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl text-foreground mb-3">{advantage.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{advantage.description}</p>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ce que disent nos clients</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">"{testimonial.comment}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Details */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi choisir FDS Déménagements ?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Équipe professionnelle</h3>
                    <p className="text-muted-foreground">
                      Notre équipe expérimentée est formée aux meilleures techniques de déménagement et utilise un
                      matériel professionnel de qualité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Connaissance locale</h3>
                    <p className="text-muted-foreground">
                      Basés à Paris, nous connaissons parfaitement l'Île-de-France et ses spécificités pour optimiser
                      vos déménagements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Engagement qualité</h3>
                    <p className="text-muted-foreground">
                      Nous nous engageons à fournir un service de qualité supérieure avec un suivi personnalisé de
                      chaque dossier.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] bg-[url('/professional-moving-team-with-boxes-and-truck.jpg')] bg-cover bg-center"></div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à déménager avec FDS ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous dès maintenant pour obtenir votre devis gratuit et personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/contact">Demander un devis</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="/contact">Nous contacter</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
