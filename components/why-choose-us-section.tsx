import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Euro, Shield } from "lucide-react"

export function WhyChooseUsSection() {
  const advantages = [
    {
      icon: CheckCircle,
      title: "Service fiable",
      description: "Une équipe expérimentée qui respecte ses engagements",
    },
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Devis détaillé sans surprise ni frais cachés",
    },
    {
      icon: Clock,
      title: "Intervention rapide",
      description: "Disponibilité et réactivité pour vos urgences",
    },
    {
      icon: Shield,
      title: "Assurance complète",
      description: "Vos biens protégés pendant tout le transport",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Un déménagement en toute confiance
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Notre expertise et notre organisation garantissent un service fiable, transparent et accessible. Nous
            mettons à votre disposition des formules flexibles et des devis rapides pour répondre à vos attentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
