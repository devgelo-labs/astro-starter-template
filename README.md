# 🚀 Astro Starter Pro

**Astro Starter Pro** es una plantilla profesional y de código abierto para construir sitios web ultra rápidos utilizando **[Astro 5](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/)**. Diseñada con las mejores prácticas de la industria, SEO de clase mundial y una experiencia de desarrollo premium.

<br>

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square&logo=astro)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Maintainer](https://img.shields.io/badge/maintainer-devgelo-purple?style=flat-square)](https://github.com/devgelo-labs)

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [Demo](#demo)
- [Características](#características)
- [Inicio Rápido](#inicio-rápido)
- [Configuración](#configuración)
- [Comandos](#comandos)
- [Licencia](#licencia)

</details>

<br>

## Demo

📌 [https://astro-starter.devgelo.com/](https://astro-starter.devgelo.com/)

## Características

- ✅ **Dark & Light Mode**: Implementación limpia.
- ✅ **SEO Optimizado**: Meta tags automáticos, Structured Data (JSON-LD), RSS Feed, Open Graph, Twitter Cards y Sitemap nativo.
- ✅ **Clean Architecture**: Código organizado y fácil de escalar.
- ✅ **Componentes Reutilizables**: Navbar, Footer y Layouts modernos con Tailwind v4.

<img alt="PageSpeed Insights Score 100/100" src="https://github.com/user-attachments/assets/541d4bfc-bcb9-4287-bd91-08564108d706" />
<br>

## Inicio Rápido

Para comenzar con este proyecto localmente, clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/devgelo-labs/astro-starter-template.git
cd astro-starter-template
npm install
npm run dev
```

<br>

## Configuración

Toda la información global del sitio se gestiona en `src/config/site.ts`. Actualiza este archivo con tus datos:

```typescript
// src/config/site.ts
export const siteConfig = {
  name: "Astro Starter Pro",
  description: "Tu descripción para SEO",
  url: "https://devgelo.com",
  author: "Angelo Pescetto",
  // ...
};
```

<br>

## Comandos

| Comando             | Acción                                                |
| :------------------ | :---------------------------------------------------- |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321`. |
| `npm run build`     | Genera el sitio estático en la carpeta `dist/`.       |
| `npm run preview`   | Previsualiza la build de producción localmente.       |
| `npm run lint`      | Ejecuta ESLint para asegurar la calidad del código.   |
| `npm run format`    | Formatea el código con Prettier.                      |
| `npm run typecheck` | Verifica los tipos de TypeScript.                     |

<br>

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

Diseñado por [Devgelo Labs](https://github.com/devgelo-labs)
