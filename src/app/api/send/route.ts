import { Resend } from 'resend';
import { NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
  throw new Error('La clé API Resend est manquante');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { from, name, subject, message } = await request.json();

    if (!from || !name || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'JACK Industries <onboarding@resend.dev>',
      to: 'evelinbrid@gmail.com',
      replyTo: from,
      subject: `[Contact JACK] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Nouveau message de contact</h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #f97316;">Nom :</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #f97316;">Email :</strong> ${from}</p>
            <p style="margin: 10px 0;"><strong style="color: #f97316;">Sujet :</strong> ${subject}</p>
            <p style="margin: 10px 0;"><strong style="color: #f97316;">Message :</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; text-align: center; margin-top: 20px;">
            Ce message a été envoyé depuis le formulaire de contact de JACK Industries
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      message: 'Email envoyé avec succès'
    });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de l\'email' },
      { status: 500 }
    );
  }
} 