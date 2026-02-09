import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const SITE = 'https://dineshladi.github.io/til-blog';

export const GET: APIRoute = async () => {
  const posts = await getCollection('til', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Dinesh Ladi TIL</title>
  <link href="${SITE}/"/>
  <updated>${new Date().toISOString()}</updated>
  <id>${SITE}/</id>
  <author>
    <name>Dinesh Ladi</name>
  </author>
  ${posts.slice(0, 20).map(post => `
  <entry>
    <title>${escapeXml(post.data.title)}</title>
    <link href="${SITE}/${post.slug}"/>
    <id>${SITE}/${post.slug}</id>
    <updated>${post.data.date.toISOString()}</updated>
    <summary>${escapeXml(post.body.slice(0, 200))}...</summary>
  </entry>
  `).join('')}
</feed>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/atom+xml',
    },
  });
};

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
