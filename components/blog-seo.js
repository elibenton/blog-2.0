import { NextSeo, ArticleJsonLd } from 'next-seo'

const BlogSeo = ({ title, description, date, slug, image }) => {
  // const date = new Date(date).toISOString()
  // const featuredImage = {
  // 	url: `https://leerob.io${image}`,
  // 	alt: title
  // }

  return (
    <>
      <NextSeo
        title={`${title} – Eli B. Cohen`}
        description={description}
        canonical={slug}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: date
          },
          slug,
          title,
          description: description
          // images: [featuredImage]
        }}
      />
      <ArticleJsonLd
        authorName="Eli B. Cohen"
        dateModified={date}
        datePublished={date}
        description={description}
        // images={[featuredImage]}
        publisherLogo="/static/favicons/android-chrome-192x192.png"
        publisherName="Eli B. Cohen"
        title={title}
        url={slug}
      />
    </>
  )
}

export default BlogSeo
