import { Footer } from "@/components/footer"
import { getNewsById, getAllNews } from "@/lib/news-data"
import Link from "next/link"
import { ArrowLeft, Calendar, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export async function generateStaticParams() {
  const articles = getAllNews()
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const article = getNewsById(id)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/news" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            返回新聞列表
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>{article.date}</time>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {article.image && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {article.content.map((block, index) => {
              switch (block.type) {
                case 'heading':
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-12 mb-6 first:mt-0">
                      {block.content as string}
                    </h2>
                  )
                case 'paragraph':
                  return (
                    <p key={index} className="text-base leading-relaxed mb-6 text-foreground/90">
                      {block.content as string}
                    </p>
                  )
                case 'list':
                  return (
                    <ul key={index} className="space-y-4 mb-8 list-none pl-0">
                      {(block.content as string[]).map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-3 text-base leading-relaxed">
                          <span className="text-accent flex-shrink-0 mt-1">•</span>
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                case 'info-box':
                  return (
                    <div key={index} className="bg-accent/5 border border-accent/20 rounded-lg p-6 my-8">
                      <div className="space-y-3">
                        {(block.content as string[]).map((info, infoIndex) => (
                          <p key={infoIndex} className="text-sm leading-relaxed m-0">
                            {info}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Link href="/news">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  返回新聞列表
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

