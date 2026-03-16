# Vincula.io — Landing Page

Landing page estática de [Vincula.io](https://vincula.io) construida con **Next.js 14** y exportada como sitio estático. Lista para deploy en **Cloudflare Pages**.

## Stack

- **Next.js 14** con `output: 'export'` (static export, requiere Node 20+)
- **TypeScript**
- **CSS puro** (sin frameworks externos)
- **Vanilla JS** para interacciones (pricing toggle, FAQ accordion, scroll reveal)
- **0 dependencias JS en runtime** — todo es HTML/CSS estático

---

## Desarrollo local

```bash
# 1. Instalar dependencias (Node 20+)
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:3000

# 3. Build de producción (genera /out)
npm run build
```

La carpeta `/out` contiene el sitio estático listo para subir.

---

## Deploy en Cloudflare Pages

### Opción A — Conectar repositorio GitHub (recomendado)

1. Subí el proyecto a un repositorio GitHub
2. Entrá a [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **"Create a project"** → **"Connect to Git"**
4. Seleccioná el repositorio `vincula-web`
5. Configurá el build:

| Campo | Valor |
|---|---|
| **Framework preset** | Next.js (Static HTML Export) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | `20` |

6. Click **"Save and Deploy"**

Cloudflare Pages ejecutará el build automáticamente en cada push a `main`.

### Opción B — Deploy directo con Wrangler CLI

```bash
# Instalar Wrangler
npm install -g wrangler

# Build
npm run build

# Deploy
wrangler pages deploy out --project-name=vincula-web
```

---

## Variables de entorno

Este proyecto no requiere variables de entorno — es 100% estático.

Si en el futuro agregás integraciones (analytics, formularios), creá un archivo `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Estructura de archivos

```
vincula-web/
├── app/
│   ├── layout.tsx          # HTML base, metadata, fuentes
│   ├── page.tsx            # Página principal (ensambla componentes)
│   └── globals.css         # Variables CSS, utilidades globales
├── components/
│   ├── ScrollReveal.tsx    # Intersection Observer para animaciones
│   ├── Navbar.tsx          # Navbar sticky con blur
│   ├── Hero.tsx            # Hero + dashboard mockup SVG
│   ├── Platforms.tsx       # Badges de plataformas compatibles
│   ├── Features.tsx        # 3 feature cards
│   ├── HowItWorks.tsx      # Steps + code snippet
│   ├── Pricing.tsx         # Toggle mensual/anual + 3 planes + addons
│   ├── Comparison.tsx      # Tabla comparativa
│   ├── FAQ.tsx             # Accordion animado
│   ├── CTAFinal.tsx        # CTA con gradiente + form email
│   └── Footer.tsx          # Footer completo
├── public/
│   ├── _headers            # Headers HTTP para Cloudflare
│   └── _redirects          # Redirects para Cloudflare Pages
├── next.config.js          # output: 'export', trailingSlash, imágenes unoptimized
├── tsconfig.json
└── package.json
```

---

## Dominio personalizado en Cloudflare Pages

1. En el dashboard de tu proyecto Pages → **"Custom domains"**
2. Agregá `vincula.io` y `www.vincula.io`
3. Cloudflare configura el SSL automáticamente

Para redirigir `www` → apex (o viceversa), usá una **Redirect Rule** en Cloudflare:
- En **Rules** → **Redirect Rules**
- Hostname: `www.vincula.io` → Redirigir a `https://vincula.io/{uri_path}` (301)

---

## Performance

- Cero JS en runtime para el contenido estático
- Inter desde Google Fonts con `display=swap`
- Imágenes SVG inline (sin requests adicionales)
- Cache-Control configurado en `_headers` para máxima performance en Cloudflare CDN
- Core Web Vitals optimizados: LCP < 2.5s, CLS = 0, FID mínimo

---

## Personalización

### Colores
Editá las variables CSS en `app/globals.css`:
```css
:root {
  --blue: #2563EB;      /* Color primario */
  --green: #10B981;     /* Color acento */
}
```

### Contenido
Cada sección es un componente independiente en `/components/`. Editá el texto directamente en cada archivo `.tsx`.

### Precios
Los precios están en `components/Pricing.tsx` en el array `plans`.

---

Hecho con ❤️ para el ecommerce latinoamericano · [vincula.io](https://vincula.io)
