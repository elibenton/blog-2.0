const generateRss = (posts) => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Blog - Eli Benton Cohen</title>
      <link>https://emilioschepis.com/blog</link>
      <description>The most paranoid blog on the internet.</description>
      <language>en</language>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="https://emilioschepis.com/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`

const generateRssItem = (post) => `
  <item>
    <guid>https://elibenton.co/blog/${post.slug}</guid>
    <title>${post.title}</title>
    <link>https://elibenton.co/blog/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
  </item>
`

export { generateRss }
