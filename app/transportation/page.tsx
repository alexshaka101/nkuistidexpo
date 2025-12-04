import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Bus, Train, Car, Clock, Info } from "lucide-react"

export default function TransportationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20">
        {/* Header */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-balance">交通資訊</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              前往展覽的交通方式與周邊資訊
            </p>
          </div>
        </section>

        {/* Exhibition Location */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <Card className="border-border">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold">展覽地點</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-semibold mb-2">台塑王氏昆仲公園塑膠產業館一樓</p>
                    <p className="text-muted-foreground">高雄市前鎮區中山三路39號</p>
                  </div>
                  <div className="aspect-video w-full bg-secondary rounded-lg overflow-hidden">
                    <img src="/taipei-map-location.jpg" alt="展覽地點地圖" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Transportation Methods */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">如何前往</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* MRT */}
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Train className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">捷運</h3>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>搭乘高雄捷運紅線至 R7 獅甲站</p>
                    <p>由1號出口 出站，沿中山三路往南步行約 4 分鐘即可抵達</p>
                  </div>
                </CardContent>
              </Card>

              {/* Bus */}
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Bus className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">公車</h3>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>可搭乘以下路線至「光華路口(中山三路)站」</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-secondary rounded text-foreground">12</span>
                      <span className="px-2 py-1 bg-secondary rounded text-foreground">25</span>
                      <span className="px-2 py-1 bg-secondary rounded text-foreground">69
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Car */}
              <Card className="border-border">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">開車</h3>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>國道1號（中山高南下）下金福路匝道出口，往中安路方向行駛，約10-15分鐘即可抵達</p>
                    <p className="font-medium text-foreground mt-4">停車資訊</p>
                    <p>園區周邊正勤路設有路邊停車格</p>
                    <p>正勤中華公有停車場</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Opening Hours */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-accent" />
                    <h2 className="text-2xl font-bold">展覽時間</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold mb-2">週五</p>
                      <p className="text-muted-foreground">11:00 - 17:00</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">週六、週日</p>
                      <p className="text-muted-foreground">11:00 - 14:00</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">開幕時間：2025/1/9 (五) 11:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <Info className="h-6 w-6 text-accent" />
                    <h2 className="text-2xl font-bold">參觀須知</h2>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>展覽免費參觀，無需預約</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>請保持安靜，尊重其他參觀者</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>展場內禁止飲食</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>歡迎拍照</span>
                    </li>
                  </ul>
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
