import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Target, Users, Lightbulb, BookOpen, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "展覽介紹 | 被設計的設計",
  description: "深入了解本次展覽的策展思維與核心概念",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="relative aspect-[9/16] md:aspect-video px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center justify-center">
        {/* Background Videos with Responsive Design */}
        <div className="absolute inset-0 -z-20">
          {/* Mobile Background Video */}
          <video 
            className="absolute inset-0 w-full h-full object-cover md:hidden"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/backgrounds/page_background_mobile.mp4" type="video/mp4" />
          </video>
          {/* Desktop Background Video */}
          <video 
            className="absolute inset-0 w-full h-full object-cover hidden md:block"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/backgrounds/page_background_desktop.mp4" type="video/mp4" />
          </video>
          {/* White Overlay */}
          <div className="absolute inset-0 bg-white/3" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold text-balance text-white" style={{ fontFamily: 'FangZhengYouTi, sans-serif' }}>《被設計的設計》</h1>
            <div className="space-y-6 text-lg text-white leading-relaxed text-pretty">
              <p>
                從初階的造型訓練、材料操作，到進階的使用者研究與產品開發，學生在被精心「設計」的訓練中不斷地學習，在工業設計的世界裡找出設計的樣貌。
              </p>
              <p>以「學習的過程」為展覽主軸，試圖將工業設計教育的脈絡與成果具體呈現。</p>
              <p>邀請您走進展場，一起感受並思考設計的成長旅程。</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
      </main>

      <Footer />
    </div>
  )
}
