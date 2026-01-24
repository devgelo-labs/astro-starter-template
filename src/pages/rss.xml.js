import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "../config/site";

export async function GET(context) {
  const blog = await getCollection("blog");

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site,
    items: blog
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.id}/`,
        content: post.body, // Optional: include full content
        customData: post.data.author
          ? `<author>${post.data.author}</author>`
          : undefined,
      })),
    customData: `<language>${siteConfig.locale}</language>`,
  });
}
