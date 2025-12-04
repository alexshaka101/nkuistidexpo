import type { Metadata } from "next"
import Image from "next/image"
import { BookOpen, Award, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "展覽團隊 - 被設計的設計",
}

const facultyData = {
  professors: [
    {
      id: 1,
      name: "葉恒志",
      nameEn: "Heng-Chi Yeh",
      position: "助理教授及專業技術人員",
      specialties: ["工業設計導論", "新產品企劃", "地方創生"],
      image: "/placeholder.svg",
    },
    {
      id: 3,
      name: "張祥唐",
      nameEn: "Hsiang-Tang Chang",
      position: "副教授",
      specialties: ["永續設計", "專利迴避設計", "3D列印技術應用"],
      image: "/placeholder.svg",
    },
    {
      id: 4,
      name: "陳俊東",
      nameEn: "Chun-Tung Chen",
      position: "助理教授",
      specialties: ["傢俱設計", "表現技法", "數位造型設計"],
      image: "/placeholder.svg",
    },
    {
      id: 5,
      name: "陳俊智",
      nameEn: "Chun-Chih Chen",
      position: "教授",
      specialties: ["工業設計", "服務體驗設計", "工藝結合"],
      image: "/placeholder.svg",
    },
    {
      id: 7,
      name: "蔡宏政",
      nameEn: "Hung-Cheng Tsai",
      position: "教授兼創新工程設計中心主任",
      specialties: ["產品設計與開發", "人因設計", "感性工學"],
      image: "/placeholder.svg",
    },
    {
      id: 9,
      name: "林龍吟",
      nameEn: "Lung-Yin Lin",
      position: "副教授及專業技術人員及系主任",
      specialties: ["機構設計", "電腦輔助設計", "模型製作"],
      image: "/placeholder.svg",
    },
    {
      id: 10,
      name: "宋毅仁",
      nameEn: "I-Jen Sung",
      position: "副教授及專業技術人員",
      specialties: ["工業設計", "設計企劃", "輔具設計"],
      image: "/placeholder.svg",
    },
    {
      id: 11,
      name: "龔蒂菀",
      nameEn: "Ti-Wan Kung",
      position: "助理教授",
      specialties: ["整體視覺形象管理", "圖文影像廣告設計", "數位媒體整合應用"],
      image: "/placeholder.svg",
    },
  ],
  curatorialTeam: [
    {
      id: 101,
      name: "莊棋棻",
      nameEn: "Chuang Chi-Fen",
      role: "總召",
      image: "/placeholder.svg",
    },
    {
      id: 102,
      name: "洪一芳",
      nameEn: "Hung Yi-Fang",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 103,
      name: "陳愷倫",
      nameEn: "Chen Kai-Lun",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 104,
      name: "王于禎",
      nameEn: "Wang Yu-Chen",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 105,
      name: "黃宣語",
      nameEn: "Huang Hsuan-Yu",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 106,
      name: "周恩樂",
      nameEn: "Chou En-Le",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 107,
      name: "徐慈迎",
      nameEn: "Hsu Tzu-Ying",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 108,
      name: "廖若妤",
      nameEn: "Liao Jo-Yu",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 109,
      name: "董盈均",
      nameEn: "Tung Ying-Chun",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 110,
      name: "沈敏榕",
      nameEn: "Shen Min-Jung",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 111,
      name: "汪郁琳",
      nameEn: "Wang Yu-Lin",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 112,
      name: "蔡蓉偵",
      nameEn: "Tsai Jung-Chen",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 113,
      name: "邱恩葶",
      nameEn: "Chiu En-Ting",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 114,
      name: "張晉誠",
      nameEn: "Chang Chin-Cheng",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 115,
      name: "吳勃頤",
      nameEn: "Wu Po-Yi",
      role: "策展人",
      image: "/placeholder.svg",
    },
    {
      id: 116,
      name: "邱凱鴻",
      nameEn: "Chiu Kai-Hung",
      role: "策展人",
      image: "/placeholder.svg",
    },
  ],
  partners: [
    {
      id: 201,
      name: "合作單位名稱一",
      nameEn: "Partner Organization 1",
      type: "主要合作單位",
      description: "合作單位簡介與合作內容說明",
      logo: "/placeholder.svg",
    },
    {
      id: 202,
      name: "合作單位名稱二",
      nameEn: "Partner Organization 2",
      type: "協辦單位",
      description: "合作單位簡介與合作內容說明",
      logo: "/placeholder.svg",
    },
    {
      id: 203,
      name: "合作單位名稱三",
      nameEn: "Partner Organization 3",
      type: "贊助單位",
      description: "合作單位簡介與合作內容說明",
      logo: "/placeholder.svg",
    },
  ],
}

export default function FacultyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">師資陣容</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            由學術界教授、產業界導師與策展專家組成的專業團隊
            <br />
            引領學生探索設計的多元可能性，培育新世代設計人才
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Academic Faculty */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">策展老師</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.professors.map((professor) => (
              <Card key={professor.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={professor.image || "/placeholder.svg"}
                    alt={professor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{professor.name}</h3>
                    <p className="text-sm text-muted-foreground">{professor.nameEn}</p>
                  </div>
                  <p className="text-sm font-medium text-accent">{professor.position}</p>

                  <Separator />

                  <div>
                    <p className="text-xs font-semibold text-foreground mb-2">專長領域</p>
                    <div className="flex flex-wrap gap-2">
                      {professor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Curatorial Team */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">策展團隊</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.curatorialTeam.map((curator) => (
              <Card key={curator.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-square relative mb-4 rounded-lg overflow-hidden bg-secondary">
                  <Image
                    src={curator.image || "/placeholder.svg"}
                    alt={curator.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{curator.name}</h3>
                    <p className="text-sm text-muted-foreground">{curator.nameEn}</p>
                  </div>
                  <p className="text-sm font-medium text-accent">{curator.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Building2 className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold text-foreground">合作單位</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyData.partners.map((partner) => (
              <Card key={partner.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="aspect-video relative mb-4 rounded-lg overflow-hidden bg-secondary/50 flex items-center justify-center">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={200}
                    height={100}
                    className="object-contain p-4"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{partner.name}</h3>
                    <p className="text-sm text-muted-foreground">{partner.nameEn}</p>
                  </div>
                  <p className="text-sm font-medium text-accent">{partner.type}</p>

                  <Separator />

                  <div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>

    <Footer />
    </div>
  )
}
