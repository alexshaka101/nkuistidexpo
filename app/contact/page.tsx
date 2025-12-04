import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, MapPin, Globe } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-6xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">聯繫我們</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              有任何問題或建議嗎？歡迎與我們聯繫
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-6">
                <Card className="border-border">
                  <CardContent className="p-6 space-y-6">
                    <h2 className="text-xl font-semibold">聯絡資訊</h2>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Instagram className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">社群帳號</p>
                          <a
                            href="https://www.instagram.com/nkustiiid/"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            nkustiiid
                          </a>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">地址</p>
                          <p className="text-sm text-muted-foreground">
                            國立高雄科技大學 第一校區
                            <br />
                            財務金融學院 B106
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="h-10 w-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Globe className="h-5 w-5 text-accent" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">網站</p>
                          <a
                            href="https://nkuist-id-expo.vercel.app/"
                            className="text-sm text-muted-foreground hover:text-accent transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            nkuist-id-expo.vercel.app
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold">開放時間</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">週五</span>
                        <span className="font-medium">01:00 - 17:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">週六、週日</span>
                        <span className="font-medium">9:00 - 14:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
