import { Footer } from "@/components/footer"
import { getAllNews } from "@/lib/news-data"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NewsPage() {
  const newsArticles = getAllNews()

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            返回首頁
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News</h1>
          <p className="text-lg text-muted-foreground">最新消息</p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/news/${article.id}`}
              className="block group"
            >
              <article className="border border-border rounded-lg p-6 hover:border-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-secondary to-muted rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent/40">
                      {article.id.padStart(2, '0')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <time className="text-xs text-muted-foreground">
                      {article.date}
                    </time>
                    <h2 className="text-xl font-bold mt-1 mb-2 group-hover:text-accent transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {article.summary}
                    </p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

