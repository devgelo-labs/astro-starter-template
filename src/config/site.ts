import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Astro Starter Pro",
  description: "Starter template optimizado para SEO y performance",
  url: "https://astro-starter.devgelo.com",
  locale: "es_UY",
  author: "Devgelo",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/angelop47/astro-starter-template",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Inicio", href: "/" },
    { text: "Nosotros", href: "/about" },
    { text: "Servicios", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contacto", href: "/contact" },
  ],
};
