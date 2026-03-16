import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  name,
  email,
  subject,
  message,
}: SendEmailParams) {
  const { error } = await resend.emails.send({
    // TODO: Replace with verified domain sender when custom domain is configured
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: process.env.CONTACT_EMAIL || "safdarayub@gmail.com",
    replyTo: email,
    subject: `[Portfolio] ${subject}: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
  });

  if (error) {
    throw new Error(error.message);
  }
}
