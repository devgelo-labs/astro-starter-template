# 🚀 Astro Starter Pro

Una plantilla de Astro optimizada para **SEO**, **Performance** y **Experiencia de Desarrollo**.

## 🛠️ Cómo usar esta plantilla

### 1. Configuración del Sitio

Toda la información global del sitio se gestiona en `src/config/site.ts`. Actualiza este archivo con tus datos:

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Tu Nombre de Sitio",
  description: "Tu descripción para SEO",
  url: "https://tudominio.com",
  locale: "es_UY",
  author: "Tu Nombre",
  twitter: "@tu_usuario",
  ogImage: "/og-image.jpg", // Imagen por defecto para redes sociales
};
```

### 2. Estructura de Páginas

Para crear una nueva página, simplemente crea un archivo `.astro` en `src/pages/`. Usa el `BaseLayout` para mantener la consistencia y el SEO:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Título de la Página" description="Descripción opcional">
    <main>
        <h1>Mi nueva página</h1>
    </main>
</BaseLayout>
```

### 3. SEO Avanzado

El componente `Seo.astro` se encarga de generar automáticamente:

- Meta tags de título y descripción.
- Open Graph (para Facebook/WhatsApp).
- Twitter Cards.
- URLs canónicas.
- Robots meta tags y sitemap.

## 🧞 Comandos

| Comando             | Acción                                                  |
| :------------------ | :------------------------------------------------------ |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321`.   |
| `npm run build`     | Genera el sitio estático en la carpeta `dist/`.         |
| `npm run preview`   | Previsualiza la build de producción localmente.         |
| `npm run check`     | Ejecuta comprobaciones de Astro y accesibilidad.        |
| `npm run typecheck` | Verifica los tipos de TypeScript sin emitir archivos.   |
| `npm run test`      | Ejecuta la suite de tests con Vitest.                   |
| `npm run format`    | Formatea el código usando Prettier.                     |
| `npm run lint`      | Busca errores de estilo y mejores prácticas con ESLint. |

## 📈 Optimizaciones Incluidas

- **Prefetching**: Las páginas se cargan automáticamente al entrar en el viewport para una navegación instantánea.
- **Sitemap**: Generación automática de `sitemap-index.xml`.
- **Robots.txt**: Configurado para una indexación óptima.
- **Image Optimization**: Uso de `astro:assets` para servir imágenes en formatos modernos.

---

Creado con ❤️ para desarrolladores que buscan rapidez y calidad.
