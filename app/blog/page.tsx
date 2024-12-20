import Link from 'next/link';
import { getBlog } from '../api/getBlog';
import Dock from '../components/ui/dock'
import { urlFor } from '../lib/sanityclient';
import { ArticleModel } from '../model/ArticleModel';

export default async function BlogPage() {

  const blogs = await getBlog();

  console.log(blogs)


  return (
    <section className="mx-auto rounded-xl  md:max-w-7xl px-3 lg:px-8 bg-second_color_light dark:bg-second_color_dark pt-2 md:mt-6 pb-1">
    <h1 className="lineHeader text-center text-[1.95rem] font-bold md:mb-4">
      <span className="bg-accent-color-gradient text-white px-4 py-1 uppercase">
        Mine blogs
      </span>
    </h1>

    <div className="mx-auto py-4 grid gap-4">
      {blogs.map((post: ArticleModel, index: number) => {
        // Bestem om det er den første artikel i en sektion
        const isMainArticle = index % 4 === 0;
        return (
          <>
            <article
              key={post._id}
              className={` grid gap-4 md:gap-8 mb-10 border-b-slate-100 dark:border-b-slate-600 border-b-[1px] pb-2 ${
                isMainArticle ? "grid-cols-[auto]" : "grid-cols-[auto_auto]"
              }`}
            >
              <figure
                className={`relative ${
                  isMainArticle ? "max-w-none" : "max-w-[100px] md:max-w-none"
                }`}
              >
                <Link
                  aria-label="Læs mere om artiklen"
                  href={`/blog/artikel/${post.articleSlug
                  }`}
                >
                  <img
                    width={400}
                    height={400}
                    src={urlFor(post.image)
                      .format("webp")
                      .width(400)
                      .height(400)
                      .fit("fill")
                      .quality(85)
                      .url()}
                    alt={post.title}
                    loading="lazy"
                    className={`block rounded-2xl inset-0 bg-gray-300 ${
                      isMainArticle
                        ? "max-h-64 w-[30em]"
                        : "max-h-44 w-32 lg:w-64"
                    } object-cover`}
                  />
                </Link>
              </figure>
              <div>
                {/* <aside className="flex flex-col md:flex-row items-start md:items-center gap-y-2 md:gap-y-0 gap-x-4 text-xs">
                  <time
                    dateTime={post.publishedAt}
                    className="text-gray-500 hidden md:inline-block"
                  >
                    {timeSinceText({ date: post.publishedAt })}
                  </time>
                  <Link
                    href={`/kategori/${post.categorySlug}`}
                    className="w-fit rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category}
                  </Link>
                </aside> */}
                <header
                  className={`group max-w-xl ${
                    isMainArticle ? "h-[12em]" : "h-[7em] lg:h-[12em]"
                  } overflow-clip`}
                >
                  <h1
                    className={`mt-2 ${
                      isMainArticle
                        ? "text-lg md:text-2xl"
                        : "text-md md:text-md"
                    } font-bold leading-6 dark:group-hover:text-gray-300 group-hover:text-gray-600`}
                  >
                    <Link
                      href={`/blog/artikel/${post.articleSlug}`}
                    >
                      <span className="" />
                      {post.title}
                    </Link>
                  </h1>
                  <h2
                    className={`mt-2 ${
                      isMainArticle
                        ? "text-sm md:text-md"
                        : "text-xs md:text-sm"
                    } leading-6 text-text_second_color_dark dark:text-text_second_color_light`}
                  >
                    {post.teaser}
                  </h2>
                </header>
              </div>
            </article>
          </>
        );
      })}
    </div>
    <Dock/>
  </section>
  )
}


