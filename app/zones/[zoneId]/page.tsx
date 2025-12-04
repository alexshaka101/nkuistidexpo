import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const zoneContent = {
  "design-thinking": {
    title: "設計思維展區",
    subtitle: "Design Thinking Zone",
    description: "探索設計方法論、創意思考與問題解決的核心概念",
    sections: [
      {
        title: "什麼是設計思維？",
        content:
          "設計思維是一種以人為本的創新方法論，強調同理心、實驗精神與迭代改進。透過觀察、定義、發想、原型製作與測試五個階段，設計思維幫助我們面對複雜的挑戰，找到創新的解決方案。",
      },
      {
        title: "設計思維的核心價值",
        content:
          "設計思維不僅是一套方法，更是一種思維模式。它鼓勵我們跳脫既有框架，從使用者的角度思考問題，並透過快速原型與測試來驗證想法。這種迭代式的創新過程，讓我們能夠在失敗中學習，在實驗中成長。",
      },
      {
        title: "如何應用設計思維",
        content:
          "設計思維可以應用在各種領域，從產品設計到服務創新，從商業策略到社會創新。關鍵在於保持開放的心態，願意傾聽使用者的聲音，並且不斷嘗試與改進。",
      },
    ],
  },
  "student-works": {
    title: "學生作品展區",
    subtitle: "Student Works Zone",
    description: "展示優秀學生作品與創作歷程紀錄",
    sections: [
      {
        title: "精選作品集",
        content:
          "本展區精選了學生在不同課程與專題中的優秀作品。從視覺設計到互動體驗，從品牌識別到服務設計，每一件作品都展現了學生的創意思維與執行能力。",
      },
      {
        title: "創作歷程",
        content:
          "除了最終成品，我們也記錄了學生的創作歷程。從初期的概念發想、使用者研究、原型製作到最終的設計方案，完整呈現設計思考的軌跡。",
      },
      {
        title: "學習成長",
        content:
          "每一件作品背後都是一段學習與成長的故事。透過這些作品，我們可以看到學生如何將理論知識轉化為實踐能力，如何在挑戰中突破自我。",
      },
    ],
  },
  "learning-journey": {
    title: "學習脈絡展區",
    subtitle: "Learning Journey Zone",
    description: "系統性呈現設計教育的課程架構與學習歷程",
    sections: [
      {
        title: "課程架構",
        content:
          "設計教育是一個系統性的學習過程。從基礎的設計原理到進階的專題實作，課程設計強調理論與實踐的結合，培養學生的設計思維與執行能力。",
      },
      {
        title: "能力培養",
        content:
          "透過不同階段的課程，學生逐步建立視覺素養、使用者研究、原型製作、專案管理等核心能力。每一個階段都有明確的學習目標與評量標準。",
      },
      {
        title: "跨域整合",
        content:
          "現代設計強調跨領域的整合能力。課程中融入了科技、商業、社會等多元視角，培養學生成為具有全局觀的設計思考者。",
      },
    ],
  },
  "curatorial-concept": {
    title: "策展理念展區",
    subtitle: "Curatorial Concept Zone",
    description: "深入了解本次展覽的策展思維與核心概念",
    sections: [
      {
        title: "「被設計的設計」",
        content:
          "展覽標題「被設計的設計」反映了設計教育的本質：設計不僅是創造的過程，也是被塑造的結果。透過系統性的課程設計、教學方法與學習環境，學生的設計能力是「被設計」出來的。",
      },
      {
        title: "策展目標",
        content:
          "本次展覽希望建立線上展覽入口，提供策展理念與作品內容，呈現學生作品與學習歷程，透過互動提升參與度，同時建立學院品牌形象。",
      },
      {
        title: "價值主張",
        content:
          "我們致力於打造知識導向的展覽網站，提供極簡、專業、友好的觀展體驗，建立可回訪的教育知識庫，使用跨族群皆能理解的設計語言。",
      },
    ],
  },
  interaction: {
    title: "互動體驗區",
    subtitle: "Interaction Zone",
    description: "參與討論、留言、投票與分享",
    sections: [
      {
        title: "歡迎參與互動",
        content:
          "這不只是一個展覽，更是一個交流平台。我們邀請您留下想法、參與投票、分享心得，與其他觀眾一起建立設計社群的對話。",
      },
      {
        title: "留言與討論",
        content:
          "在每個展區和作品頁面，您都可以留言分享您的想法與觀點。讓我們一起討論設計的價值與意義，碰撞出更多創意火花。",
      },
      {
        title: "投票與分享",
        content: "喜歡某個作品嗎？給它一個讚吧！覺得內容有價值？分享給更多朋友！透過您的參與，讓更多人看見設計的力量。",
      },
    ],
  },
  achievements: {
    title: "成果展示區",
    subtitle: "Achievements Zone",
    description: "展示學院品牌形象、獲獎紀錄與合作成果",
    sections: [
      {
        title: "學院品牌",
        content:
          "作為台灣重要的設計教育機構，我們致力於培養具有國際視野與在地關懷的設計人才。透過嚴謹的課程設計與豐富的實務經驗，學生在這裡找到自己的設計之路。",
      },
      {
        title: "獲獎紀錄",
        content:
          "學生作品在各大設計競賽中屢獲佳績，包括紅點設計獎、iF設計獎、金點設計獎等國內外獎項。這些榮譽不僅是對學生努力的肯定，更展現了我們的教學成果。",
      },
      {
        title: "產學合作",
        content:
          "我們與多家企業與品牌建立長期合作關係，為學生提供實習機會與專案經驗。透過產學合作，學生能夠將理論知識應用在真實場域，為未來的職涯做好準備。",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(zoneContent).map((zoneId) => ({
    zoneId,
  }))
}

export function generateMetadata({ params }: { params: { zoneId: string } }) {
  const zone = zoneContent[params.zoneId as keyof typeof zoneContent]
  if (!zone) return {}

  return {
    title: `${zone.title} | 被設計的設計`,
    description: zone.description,
  }
}

export default function ZoneDetailPage({ params }: { params: { zoneId: string } }) {
  const zone = zoneContent[params.zoneId as keyof typeof zoneContent]

  if (!zone) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Breadcrumb */}
        <section className="px-4 sm:px-6 lg:px-8 mb-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" size="sm">
              <Link href="/zones">
                <ArrowLeft className="mr-2 h-4 w-4" />
                返回展區導覽
              </Link>
            </Button>
          </div>
        </section>

        {/* Zone Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">{zone.title}</h1>
            <p className="text-lg text-muted-foreground">{zone.subtitle}</p>
            <p className="text-base text-muted-foreground leading-relaxed">{zone.description}</p>
          </div>
        </section>

        {/* Zone Content */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {zone.sections.map((section, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-8 space-y-4">
                  <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Related Works CTA */}
        <section className="px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-secondary border-0">
              <CardContent className="p-8 text-center space-y-4">
                <h2 className="text-2xl font-bold">探索相關作品</h2>
                <p className="text-muted-foreground">瀏覽與本展區相關的學生作品與專案</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/works">
                    前往作品索引
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
