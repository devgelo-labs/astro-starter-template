# 🚀 Astro Starter Pro

**Astro Starter Pro** es una plantilla profesional y de código abierto para construir sitios web ultra rápidos utilizando **[Astro 5](https://astro.build/) + [Tailwind CSS 4](https://tailwindcss.com/)**. Diseñada con las mejores prácticas de la industria, SEO de clase mundial y una experiencia de desarrollo premium.

<br>

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5.0-orange?style=flat-square&logo=astro)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Maintainer](https://img.shields.io/badge/maintainer-angelop-purple?style=flat-square)](https://github.com/angelop47)

<br>

<details open>
<summary>Tabla de Contenidos</summary>

- [Demo](#demo)
- [Características](#características)
- [Inicio Rápido](#inicio-rápido)
- [Configuración](#configuración)
- [Comandos](#comandos)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

</details>

<br>

## Demo

📌 [https://astro-starter.devgelo.com/](https://astro-starter.devgelo.com/)

## Características

- ✅ **Dark & Light Mode**: Implementación limpia sin parpadeos (FOUC).
- ✅ **SEO Optimizado**: Meta tags automáticos, Open Graph, Twitter Cards y Sitemap nativo.
- ✅ **Performance Extremo**: Optimización automática de imágenes y pre-fetching de rutas.
- ✅ **Clean Architecture**: Código organizado y fácil de escalar.
- ✅ **Componentes Reutilizables**: Navbar, Footer y Layouts modernos con Tailwind v4.

<br>

## Inicio Rápido

Para comenzar con este proyecto localmente, clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/angelop47/astro-starter-template.git
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

| Comando             | Acción                                                  |
| :------------------ | :------------------------------------------------------ |
| `npm run dev`       | Inicia el servidor de desarrollo en `localhost:4321`.   |
| `npm run build`     | Genera el sitio estático en la carpeta `dist/`.         |
| `npm run preview`   | Previsualiza la build de producción localmente.         |
| `npm run lint`      | Ejecuta ESLint para asegurar la calidad del código.     |
| `npm run format`    | Formatea el código con Prettier.                        |
| `npm run typecheck` | Verifica los tipos de TypeScript.                       |

<br>

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas, sugerencias o encuentras algún error, no dudes en abrir un *issue* o crear un *pull request*.

1. Haz un Fork del proyecto.
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`).
3. Haz commit de tus cambios (`git commit -m 'feat: Add some AmazingFeature'`).
4. Haz Push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

<br>

## Licencia

Este proyecto está bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

---

Diseñado con ❤️ por [Angelo Pescetto](https://github.com/angelop47)
