"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, Calculator } from "lucide-react"
import { useState } from "react"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    typeService: "",
    datePrevisionnelle: "",
    adresseDepart: "",
    adresseArrivee: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Votre demande de devis a été envoyée avec succès !');
        setFormData({
          nom: '',
          prenom: '',
          telephone: '',
          email: '',
          typeService: '',
          datePrevisionnelle: '',
          adresseDepart: '',
          adresseArrivee: '',
          message: '',
        }); // Clear form on success
      } else {
        alert('Erreur lors de l\'envoi de votre demande. Veuillez réessayer.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Une erreur inattendue est survenue. Veuillez réessayer plus tard.');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 7 62 62 08 93",
      description: "Disponible 7j/7 pour vos urgences",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@fds-demenagements.com",
      description: "Réponse sous 24h garantie",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "19 Boulevard Malesherbes\n75008 Paris",
      description: "Siège social et bureau",
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Dim: 7h-20h",
      description: "Service client disponible",
    },
  ]

  const faqItems = [
    {
      question: "Combien coûte un déménagement ?",
      answer:
        "Le prix dépend de plusieurs facteurs : volume, distance, services additionnels. Nous proposons un devis gratuit personnalisé.",
    },
    {
      question: "Dans quels délais pouvez-vous intervenir ?",
      answer:
        "Nous pouvons généralement intervenir sous 48h pour les urgences, et nous adaptons à vos contraintes de planning.",
    },
    {
      question: "Êtes-vous assurés ?",
      answer:
        "Oui, nous disposons d'une assurance complète qui couvre vos biens pendant tout le transport et la manutention.",
    },
    {
      question: "Intervenez-vous le weekend ?",
      answer: "Oui, nous sommes disponibles 7j/7 y compris les weekends et jours fériés selon vos besoins.",
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Obtenez un devis gratuit
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Besoin d'un déménagement rapide et professionnel ? Contactez notre équipe dès maintenant pour obtenir
              votre devis personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="h-6 w-6 text-primary" />
                    <span>Demande de devis détaillé</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Info */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Informations personnelles</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input id="nom" name="nom" value={formData.nom} onChange={handleChange} required />
                        </div>
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input id="prenom" name="prenom" value={formData.prenom} onChange={handleChange} required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="telephone">Téléphone *</Label>
                          <Input
                            id="telephone"
                            name="telephone"
                            type="tel"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-4">Détails du service</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="typeService">Type de service *</Label>
                          <Select onValueChange={(value) => handleSelectChange("typeService", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="particulier">Déménagement particulier</SelectItem>
                              <SelectItem value="entreprise">Déménagement entreprise</SelectItem>
                              <SelectItem value="transport">Transport et manutention</SelectItem>
                              <SelectItem value="autre">Autre service</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="datePrevisionnelle">Date prévisionnelle</Label>
                          <Input
                            id="datePrevisionnelle"
                            name="datePrevisionnelle"
                            type="date"
                            value={formData.datePrevisionnelle}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        <div>
                          <Label htmlFor="adresseDepart">Adresse de départ</Label>
                          <Input
                            id="adresseDepart"
                            name="adresseDepart"
                            value={formData.adresseDepart}
                            onChange={handleChange}
                            placeholder="Ville, code postal"
                          />
                        </div>
                        <div>
                          <Label htmlFor="adresseArrivee">Adresse d'arrivée</Label>
                          <Input
                            id="adresseArrivee"
                            name="adresseArrivee"
                            value={formData.adresseArrivee}
                            onChange={handleChange}
                            placeholder="Ville, code postal"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Détails de votre projet</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet : volume approximatif, étage, ascenseur, objets fragiles, services additionnels souhaités..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                      Envoyer ma demande de devis
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Champs obligatoires - Réponse sous 24h garantie
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1 whitespace-pre-line">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-90" />
                  <h3 className="font-semibold text-lg mb-2">Besoin d'une réponse immédiate ?</h3>
                  <p className="mb-4 opacity-90">Appelez-nous directement pour un conseil personnalisé</p>
                  <Button variant="secondary" className="w-full" asChild>
                    <a href="tel:+33762620893">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions fréquentes</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Retrouvez les réponses aux questions les plus courantes sur nos services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Vous ne trouvez pas la réponse à votre question ?</p>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              
            >
              <a href="/contact#contact-form">Contactez-nous</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
