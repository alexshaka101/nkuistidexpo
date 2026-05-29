import { Footer } from "@/components/footer"
import { getNewsById, getNewsIds } from "@/lib/news-data"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type PageProps = {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return getNewsIds().map((id) => ({ id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const article = getNewsById(id)

  if (!article) {
    return { title: "找不到消息 | 異構同形" }
  }

  return {
    title: `${article.title} | 異構同形`,
    description: article.summary,
  }
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { id } = await params
  const article = getNewsById(id)

  if (!article?.detail) {
    notFound()
  }

  const { detail } = article

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            返回最新消息
          </Link>
          <p className="text-sm text-muted-foreground mb-3">{article.date}</p>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug text-balance">
            {detail.headline}
          </h1>
        </div>
      </section>

      <article className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          {detail.posterImage && (
            <div className="relative w-full overflow-hidden rounded-lg border border-border bg-secondary">
              <Image
                src={detail.posterImage}
                alt={detail.headline}
                width={1241}
                height={1755}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            {detail.intro}
          </p>

          {detail.sections.map((section) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-xl font-bold">{section.heading}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-muted-foreground leading-relaxed text-pretty"
                >
                  {paragraph}
                </p>
              ))}

              {section.zones && (
                <ul className="space-y-4">
                  {section.zones.map((zone) => (
                    <li
                      key={zone.name}
                      className="border border-border rounded-lg p-5 bg-secondary/50"
                    >
                      <h3 className="font-semibold mb-1">{zone.name}</h3>
                      <p className="text-sm text-accent mb-2">{zone.subtitle}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {zone.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {section.infoItems && (
                <dl className="border border-border rounded-lg divide-y divide-border overflow-hidden">
                  {section.infoItems.map((item) => (
                    <div
                      key={item.label}
                      className="grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-4 px-5 py-4 bg-secondary/30"
                    >
                      <dt className="text-sm font-semibold shrink-0">{item.label}</dt>
                      <dd className="text-sm text-muted-foreground leading-relaxed">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </section>
          ))}

          {detail.closing && (
            <p className="text-base font-medium leading-relaxed text-pretty pt-2 border-t border-border">
              {detail.closing}
            </p>
          )}
        </div>
      </article>

      <Footer />
    </div>
  )
}
