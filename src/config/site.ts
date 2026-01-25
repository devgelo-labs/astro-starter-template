import ogImage from "../assets/og-image.png";

export const siteConfig = {
  name: "Astro Starter Pro",
  description: "Starter template optimizado para SEO y performance",
  url: "https://astrostarterpro.com",
  lang: "en",
  locale: "en_US",
  author: "Devgelo",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
    discord: "https://discord.com",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
