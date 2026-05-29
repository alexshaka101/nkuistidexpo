import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Target, Users, Lightbulb, BookOpen, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "展覽介紹 | 異構同形",
  description: "深入了解本次展覽的策展思維與核心概念",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative aspect-[9/16] md:aspect-video px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center bg-[url('/backgrounds/hero-bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance text-white" style={{ fontFamily: 'FangZhengYouTi, sans-serif' }}>《異構同形》</h1>
            <div className="space-y-6 text-lg text-neutral-300 leading-relaxed text-pretty">
              <p className="text-black">
                每一位設計師的起點，都是一顆粗糙但充滿可能性的「原石」
              </p>
              <p className="text-black">
                我們共享著相同的課程、相近的設計語彙與基礎邏輯，這便是「同形」；然而，透過對材料的感知、對結構的辯證、對造型的琢磨，我們在不斷的碰撞與重組中，生長出截然不同的作品樣態，這便是「異構」
              </p>
              <p className="text-black">
                我們將學習的過程具象化為「邊角」的增加。每一次技能的習得，都是在為人生這個多邊形刻劃新的支點
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-6 text-lg text-muted-foreground leading-relaxed text-pretty">
            <p>啟蒙｜三角形的「銳」 憑藉直覺與好奇，實現從無到有的單點突破</p>
            <p>構建｜四邊形的「穩」 導入材料與邏輯，為感性設計建立理性框架</p>
            <p>連結｜五邊形的「合」 整合需求與市場，讓設計從單純作品轉化為社會連結</p>
            <p>成就｜六邊形的「全」 達到六維平衡，淬煉出全方位專業的圓滿型態</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
