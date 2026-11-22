// Datos de la marca. Todo lo que está entre [corchetes] lo tienes que completar tú.
export const site = {
  brand: 'TailorAI',
  owner: 'José Luis Rodríguez',
  ownerShort: 'José',
  email: 'hola@tudominio.com',
  city: '[Ciudad]',
  country: 'Alemania',
  linkedin: 'https://www.linkedin.com/in/[tu-perfil]',
  github: 'https://github.com/josrod',
  // Enlace a tu calendario de reservas (Cal.com, Calendly, Google Calendar…).
  // Mientras esté vacío, los botones de reservar abren un correo.
  bookingUrl: 'https://calendly.com/jlrodriguezgonzalez',
  // Webhook (por ejemplo de n8n o Make) que recibe el correo de la guía gratuita.
  // Mientras esté vacío, el formulario de la guía no se muestra.
  guideWebhookUrl: '',
  yearsExperience: '[N]',
} as const;

export function bookingHref(subject: string): string {
  return site.bookingUrl || `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
