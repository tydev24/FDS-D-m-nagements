import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: 'contact@fds-demenagements.com',
      subject: 'Nouvelle demande de devis FDS Déménagements',
      html: `
        <h1>Nouvelle demande de devis</h1>
        <p><b>Nom:</b> ${formData.nom}</p>
        <p><b>Prénom:</b> ${formData.prenom}</p>
        <p><b>Téléphone:</b> ${formData.telephone}</p>
        <p><b>Email:</b> ${formData.email}</p>
        <p><b>Type de service:</b> ${formData.typeService}</p>
        <p><b>Date prévisionnelle:</b> ${formData.datePrevisionnelle}</p>
        <p><b>Adresse de départ:</b> ${formData.adresseDepart}</p>
        <p><b>Adresse d'arrivée:</b> ${formData.adresseArrivee}</p>
        <p><b>Message:</b> ${formData.message}</p>
      `,
    });

    if (error) {
      console.error('Error sending email with Resend:', error);
      return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('Error processing email request:', error);
    return NextResponse.json({ message: 'Error processing email request' }, { status: 500 });
  }
}
