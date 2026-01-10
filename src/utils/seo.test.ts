import { describe, it, expect } from "vitest";

describe("SEO configuration", () => {
    it("should have a valid URL", async () => {
        const { siteConfig } = await import("../config/site");
        expect(siteConfig.url).toContain("https://");
    });

    it("should have a defined locale", async () => {
        const { siteConfig } = await import("../config/site");
        expect(siteConfig.locale).toBeDefined();
    });
});
