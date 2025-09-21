import { Card, CardContent } from "@/components/ui/card"
import { Users, MapPin, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Une équipe à votre service
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Basée à Paris, et intervenant principalement en Île-de-France et sur Épinay-sur-Seine, FDS Déménagements
              accompagne particuliers et professionnels dans leurs projets de déménagement.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Notre mission : vous garantir une prestation rapide, soignée et adaptée à vos besoins. Avec une équipe
              expérimentée, nous plaçons la satisfaction client au cœur de chaque intervention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Équipe qualifiée</h4>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Île-de-France</h4>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Service premium</h4>
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
  )
}
