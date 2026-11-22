# TailorAI — web de marca personal

Web de José: software con IA hecho a medida para pequeñas empresas.
Sitio estático con [Astro](https://astro.build), en español (`/`) e inglés (`/en/`).

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # comprueba tipos y genera dist/
npm run preview   # sirve dist/ en local
```

## Qué completar antes de publicar

Todo lo que aparece entre `[corchetes]` en la web es un dato pendiente.

| Dónde | Qué |
| --- | --- |
| `src/config.ts` | Correo, ciudad, LinkedIn, años de experiencia y webhook de la guía |
| `src/data/projects.ts` | Una cifra o cita real de resultado (`result`) por proyecto destacado; describir VitalPath y 5Bots y quitar `draft: true` |
| `public/shots/` | Capturas reales de cada app (`image: '/shots/atelier.webp'`). Sin captura se muestra una portada generada |
| `src/pages/impressum.astro`, `privacidad.astro`, `en/privacy.astro` | Dirección, teléfono, USt-ID. El hosting (Netlify) y Calendly ya están nombrados en privacidad. Revisar con un generador o asesor |
| `.env` / `astro.config.mjs` | `SITE_URL` con el dominio definitivo; actualizar también `public/robots.txt` |

## Cómo está organizado

```
src/
  config.ts            datos de la marca y enlaces
  data/projects.ts     los proyectos (fuente única para home, ficha y /proyectos)
  i18n/ui.ts           todos los textos en ES y EN
  components/
    Hero.astro         titular + "ficha de medidas" interactiva
    Sections.astro     resto de secciones de la home, en orden
    ProjectCover.astro captura real o portada generada
    GuideForm.astro    formulario de la guía (envía JSON a un webhook)
    pages/             plantillas compartidas por ES y EN
  pages/               rutas: /, /en/, /proyectos/, /en/projects/, legales, 404
  styles/global.css    paleta, tipografía y botones
```

- **Proyectos**: `featured: true` los muestra en la home; los que tienen `measures` aparecen en la ficha del hero; `finance: true` añade el aviso de "no es asesoramiento financiero"; `draft: true` los oculta.
- **Reservas**: mientras `bookingUrl` esté vacío, los botones abren un correo. Pega ahí tu enlace de Cal.com o Calendly.
- **Guía gratuita**: la sección solo aparece si `guideWebhookUrl` tiene valor. El formulario envía `{ email, lang, source }` por POST; un flujo de n8n o Make puede guardar el contacto y mandar el PDF.

## Sistema visual

| Token | Valor | Uso |
| --- | --- | --- |
| `--pano` | #18233A | Fondos oscuros y texto principal |
| `--lino` | #F2F3EF | Fondo general |
| `--papel` | #FBFBF8 | Fichas y secciones alternas |
| `--tiza` | #E8C547 | Único acento |
| Display | Bricolage Grotesque | Titulares |
| Texto | Hanken Grotesk | Cuerpo |

Las fuentes se sirven desde el propio dominio (sin Google Fonts), sin cookies ni analítica.

## Despliegue

Es un sitio 100 % estático: `npm run build` y publicar `dist/` en Netlify, Vercel, Cloudflare Pages o cualquier hosting.
En Netlify/Vercel: comando `npm run build`, carpeta `dist`, variable `SITE_URL`.
