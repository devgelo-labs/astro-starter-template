import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://example.com",
    integrations: [sitemap()],
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "viewport",
    },
    build: {
        inlineStylesheets: "auto",
    },
});
