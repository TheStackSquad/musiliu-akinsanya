//src.app/news/page.js
import HeroArticle from "@/components/news/heroArticle";
import NewsCard from "@/components/news/newsCard";
import { newsData } from "@/data/newsData";

export default function NewsPage() {
  const [hero, ...rest] = newsData;

  return (
    <main className="min-h-screen px-4 md:px-8 py-6 md:py-12 bg-light dark:bg-dark text-gray-900 dark:text-gray-100">
          <h1 className="text-3xl md:text-4xl font-display font-bold
      mt-9 mb-8 text-center md:text-left lg:mt-12">
        News & Updates
      </h1>

      {/* Hero Article */}
      <HeroArticle article={hero} />

      {/* Grid of other articles */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((item) => (
          <NewsCard key={item.id} article={item} />
        ))}
      </div>
    </main>
  );
}
