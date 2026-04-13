# Plan de mejoras — williamgdev portfolio

> Ultima sesion: 2026-03-20
> Estado: En progreso

---

## Completado

- [x] **Pagina de proyectos** (`app/projects/page.tsx`) — Reescrita con descripciones reales:
  - Meta Invoice Automation (n8n + IA + Google Drive)
  - Production Operations Dashboard (Power BI + SQL + ETL + VBA, empresa de impresion en Colombia)
  - Loan Projections Calculator (con link a loanprojections.com)
  - Badges de stack tecnologico, highlights por proyecto, dark mode real

---

## Pendiente

### 1. Limpiar deuda tecnica (Critico)
- [ ] Commitear cambios actuales: `app/contact/page.tsx` modificado y archivos borrados del `n8n-proxy/`
- [ ] Eliminar `app/api/contact/route.ts` — el sitio es estatico (`output: 'export'`), esta ruta nunca corre en produccion
- [ ] Mover la URL del proxy a variable de entorno:
  - En `contact/page.tsx` cambiar `fetch('https://n8n-proxy-nine.vercel.app/api/contact', ...)`
  - por `fetch(process.env.NEXT_PUBLIC_CONTACT_ENDPOINT!, ...)`
  - Agregar `NEXT_PUBLIC_CONTACT_ENDPOINT=https://n8n-proxy-nine.vercel.app/api/contact` a `.env.local`
- [ ] Decidir que hacer con `promotional_email.html` y `promotional_email_es.html` — agregar al `.gitignore` o commitear

### 2. About page (`app/about/page.tsx`) — Media prioridad
- [ ] Reescribir con experiencia real (actualmente es texto generico)
  - Mencionar: 10+ anos en operaciones, logistica, control de costos
  - Stack real: n8n, Power BI, SQL, VBA, Excel, JavaScript, Next.js
  - Proyectos destacados: empresa de impresion en Colombia, agencias Meta, loanprojections.com
  - Agregar foto profesional si esta disponible
  - Agregar links a LinkedIn / GitHub si aplica

### 3. Home page (`app/page.tsx`) — Media prioridad
- [ ] Las cards de servicios son genericas, mejorar descripciones con casos concretos:
  - "Automation & Workflows" → mencionar casos reales como el de facturas Meta
  - "Data Analytics & Dashboards" → mencionar Power BI con ETL multi-fuente
- [ ] Hay una imagen comentada (`/assets/workflow_image.png`) — si existe el asset, descomentar y mostrar el workflow de n8n
- [ ] Las cards de servicios en Home tambien tienen dark mode roto (bg-white fijo)

### 4. SEO y metadata — Media prioridad
- [ ] Agregar en `app/layout.tsx`:
  ```ts
  export const metadata = {
    title: 'William G — Automation & Data Intelligence',
    description: 'I help businesses automate workflows and gain insights with n8n, Power BI, and custom solutions.',
    openGraph: {
      title: 'William G — Automation & Data Intelligence',
      description: '...',
      url: 'https://williamgdev.com', // confirmar dominio real
    }
  }
  ```

### 5. Formulario de contacto (`app/contact/page.tsx`) — Menor prioridad
- [ ] Agregar validacion del lado del cliente antes del fetch:
  - Email valido (regex basico)
  - Campos requeridos no vacios
  - Longitud minima del mensaje

### 6. Favicon — Menor prioridad
- [ ] Reemplazar favicon default de Next.js por uno personalizado con la marca "willIAm G dev"

---

## Notas del proyecto

- El sitio esta configurado como **static export** (`next.config.ts` → `output: 'export'`)
- El formulario de contacto llama a un proxy externo en Vercel (`n8n-proxy-nine.vercel.app`) que reenvía a n8n
- La carpeta `n8n-proxy/` fue eliminada del repo (el proxy vive en su propio deploy de Vercel)
- Stack del sitio: Next.js 16, React 19, TypeScript, Tailwind CSS, Shadcn/ui, Framer Motion
