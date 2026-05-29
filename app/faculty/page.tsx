"use client"

import Image from "next/image"
import { BookOpen, Award, Building2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useState, useEffect, useRef } from "react"

const facultyData = {
  professors: [
    {
      id: 1,
      name: "葉恒志",
      nameEn: "Heng-Chi Yeh",
      position: "助理教授及專業技術人員",
      specialties: ["工業設計導論", "新產品企劃", "地方創生"],
      image: "/faculty-photos/Heng-Chih Yeh.jpg",
    },
    {
      id: 3,
      name: "張祥唐",
      nameEn: "Hsiang-Tang Chang",
      position: "副教授",
      specialties: ["永續設計", "專利迴避設計", "3D列印技術應用"],
      image: "/faculty-photos/Hsiang-Tang Chang.jpg",
    },
    {
      id: 4,
      name: "陳俊東",
      nameEn: "Chun-Tung Chen",
      position: "助理教授",
      specialties: ["傢俱設計", "表現技法", "數位造型設計"],
      image: "/faculty-photos/Chun-Tung Chen.jpg",
    },
    {
      id: 5,
      name: "陳俊智",
      nameEn: "Chun-Chih Chen",
      position: "教授",
      specialties: ["工業設計", "服務體驗設計", "工藝結合"],
      image: "/faculty-photos/Chun-Chih Chen.jpg",
    },
    {
      id: 7,
      name: "蔡宏政",
      nameEn: "Hung-Cheng Tsai",
      position: "教授兼創新工程設計中心主任",
      specialties: ["產品設計與開發", "人因設計", "感性工學"],
      image: "/faculty-photos/Hung-Cheng Tsai.jpg",
    },
    {
      id: 9,
      name: "林龍吟",
      nameEn: "Lung-Yin Lin",
      position: "副教授及專業技術人員及系主任",
      specialties: ["機構設計", "電腦輔助設計", "模型製作"],
      image: "/faculty-photos/Lung-Yin Lin.jpg",
    },
    {
      id: 10,
      name: "宋毅仁",
      nameEn: "I-Jen Sung",
      position: "副教授及專業技術人員",
      specialties: ["工業設計", "設計企劃", "輔具設計"],
      image: "/faculty-photos/I-Jen Sung.jpg",
    },
    {
      id: 11,
      name: "龔蒂菀",
      nameEn: "Ti-Wan Kung",
      position: "助理教授",
      specialties: ["整體視覺形象管理", "圖文影像廣告設計", "數位媒體整合應用"],
      image: "/faculty-photos/Ti-Wan Kung.jpg",
    },
  ],
  curatorialTeam: [
    {
      id: 101,
      name: "莊書婷",
      nameEn: "Shu-Ting Chuang",
      role: "總召",
    },
    {
      id: 102,
      name: "陳又煊",
      nameEn: "Yu-Hsuan Chen",
      role: "副召",
    },
    {
      id: 103,
      name: "饒旻君",
      nameEn: "Min-Chun Rao",
      role: "副召",
    },
    {
      id: 104,
      name: "葉天暘",
      nameEn: "Tien-Yang Yeh",
      role: "企劃",
    },
    {
      id: 105,
      name: "朱仕家",
      nameEn: "Shih-Chia Chu",
      role: "企劃",
    },
    {
      id: 106,
      name: "黃楷媞",
      nameEn: "Kai-Ti Huang",
      role: "視覺",
    },
    {
      id: 107,
      name: "張晉誠",
      nameEn: "Chin-Cheng Chang",
      role: "影視",
    },
    {
      id: 108,
      name: "邱凱鴻",
      nameEn: "Kai-Hung Chiu",
      role: "網站",
    },
    {
      id: 109,
      name: "徐慈迎",
      nameEn: "Tzu-Ying Hsu",
      role: "文書",
    },
    {
      id: 110,
      name: "蕭祐宏",
      nameEn: "Yu-Hung Hsiao",
      role: "場佈",
    },
    {
      id: 111,
      name: "林研艾",
      nameEn: "Yen-Ai Lin",
      role: "場佈",
    },
    {
      id: 112,
      name: "張雅雯",
      nameEn: "Ya-Wen Chang",
      role: "場佈",
    },
    {
      id: 113,
      name: "黃致軒",
      nameEn: "Chih-Hsuan Huang",
      role: "場佈",
    },
    {
      id: 114,
      name: "詹舒晴",
      nameEn: "Shu-Ching Chan",
      role: "場佈",
    },
    {
      id: 115,
      name: "張茗畯",
      nameEn: "Ming-Chun Chang",
      role: "場佈",
    },
    {
      id: 116,
      name: "周恩樂",
      nameEn: "En-Le Chou",
      role: "公關",
    },
    {
      id: 117,
      name: "黃懿翎",
      nameEn: "Yi-Ling Huang",
      role: "總務",
    },
    {
      id: 118,
      name: "曾星宇",
      nameEn: "Hsing-Yu Tseng",
      role: "機動",
    },
  ],
  partners: [
    {
      id: 201,
      name: "武六不能王早午餐",
      nameEn: "Double five Double six",
      type: "贊助單位",
      logo: "/team-photos/56.jpg",
      url: "https://www.facebook.com/double5566/?locale=zh_TW",
    },
  ],
}

export default function FacultyPage() {
  // ==================== 彩蛋功能 ====================
  
  // 張祥唐彩蛋 - 點擊 20 次顯示糖果 🍬
  const [changClickCount, setChangClickCount] = useState(0)
  const [showChangEmoji, setShowChangEmoji] = useState(false)
  const changTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const changResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleChangClick = () => {
    if (changResetTimeoutRef.current) clearTimeout(changResetTimeoutRef.current)
    const newCount = changClickCount + 1
    setChangClickCount(newCount)
    if (newCount >= 20) {
      setShowChangEmoji(true)
      setChangClickCount(0)
      if (changTimeoutRef.current) clearTimeout(changTimeoutRef.current)
      changTimeoutRef.current = setTimeout(() => setShowChangEmoji(false), 3000)
    } else {
      changResetTimeoutRef.current = setTimeout(() => setChangClickCount(0), 2000)
    }
  }

  // 蔡宏政彩蛋 - 點擊 10 次顯示「不要氣餒」+ 水餃 🥟
  const [tsaiClickCount, setTsaiClickCount] = useState(0)
  const [showTsaiEmoji, setShowTsaiEmoji] = useState(false)
  const tsaiTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const tsaiResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleTsaiClick = () => {
    if (tsaiResetTimeoutRef.current) clearTimeout(tsaiResetTimeoutRef.current)
    const newCount = tsaiClickCount + 1
    setTsaiClickCount(newCount)
    if (newCount >= 10) {
      setShowTsaiEmoji(true)
      setTsaiClickCount(0)
      if (tsaiTimeoutRef.current) clearTimeout(tsaiTimeoutRef.current)
      tsaiTimeoutRef.current = setTimeout(() => setShowTsaiEmoji(false), 3000)
    } else {
      tsaiResetTimeoutRef.current = setTimeout(() => setTsaiClickCount(0), 2000)
    }
  }

  // 龔蒂菀彩蛋 - 點擊 10 次顯示「YES!!」🎉
  const [kungClickCount, setKungClickCount] = useState(0)
  const [showKungYes, setShowKungYes] = useState(false)
  const kungTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const kungResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleKungClick = () => {
    if (kungResetTimeoutRef.current) clearTimeout(kungResetTimeoutRef.current)
    const newCount = kungClickCount + 1
    setKungClickCount(newCount)
    if (newCount >= 10) {
      setShowKungYes(true)
      setKungClickCount(0)
      if (kungTimeoutRef.current) clearTimeout(kungTimeoutRef.current)
      kungTimeoutRef.current = setTimeout(() => setShowKungYes(false), 3000)
    } else {
      kungResetTimeoutRef.current = setTimeout(() => setKungClickCount(0), 2000)
    }
  }

  // 陳俊東彩蛋 - 點擊 10 次顯示「R」
  const [chenClickCount, setChenClickCount] = useState(0)
  const [showChenR, setShowChenR] = useState(false)
  const chenTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const chenResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleChenClick = () => {
    if (chenResetTimeoutRef.current) clearTimeout(chenResetTimeoutRef.current)
    const newCount = chenClickCount + 1
    setChenClickCount(newCount)
    if (newCount >= 10) {
      setShowChenR(true)
      setChenClickCount(0)
      if (chenTimeoutRef.current) clearTimeout(chenTimeoutRef.current)
      chenTimeoutRef.current = setTimeout(() => setShowChenR(false), 3000)
    } else {
      chenResetTimeoutRef.current = setTimeout(() => setChenClickCount(0), 2000)
    }
  }

  // 葉恒志彩蛋 - 點擊 10 次顯示「💤」
  const [yehClickCount, setYehClickCount] = useState(0)
  const [showYehZzz, setShowYehZzz] = useState(false)
  const yehTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const yehResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleYehClick = () => {
    if (yehResetTimeoutRef.current) clearTimeout(yehResetTimeoutRef.current)
    const newCount = yehClickCount + 1
    setYehClickCount(newCount)
    if (newCount >= 10) {
      setShowYehZzz(true)
      setYehClickCount(0)
      if (yehTimeoutRef.current) clearTimeout(yehTimeoutRef.current)
      yehTimeoutRef.current = setTimeout(() => setShowYehZzz(false), 3000)
    } else {
      yehResetTimeoutRef.current = setTimeout(() => setYehClickCount(0), 2000)
    }
  }

  // 宋毅仁彩蛋 - 點擊 10 次顯示「不要為難自己」
  const [sungClickCount, setSungClickCount] = useState(0)
  const [showSungText, setShowSungText] = useState(false)
  const sungTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const sungResetTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleSungClick = () => {
    if (sungResetTimeoutRef.current) clearTimeout(sungResetTimeoutRef.current)
    const newCount = sungClickCount + 1
    setSungClickCount(newCount)
    if (newCount >= 10) {
      setShowSungText(true)
      setSungClickCount(0)
      if (sungTimeoutRef.current) clearTimeout(sungTimeoutRef.current)
      sungTimeoutRef.current = setTimeout(() => setShowSungText(false), 3000)
    } else {
      sungResetTimeoutRef.current = setTimeout(() => setSungClickCount(0), 2000)
    }
  }

  // 清理彩蛋計時器
  useEffect(() => {
    return () => {
      if (changTimeoutRef.current) clearTimeout(changTimeoutRef.current)
      if (changResetTimeoutRef.current) clearTimeout(changResetTimeoutRef.current)
      if (tsaiTimeoutRef.current) clearTimeout(tsaiTimeoutRef.current)
      if (tsaiResetTimeoutRef.current) clearTimeout(tsaiResetTimeoutRef.current)
      if (kungTimeoutRef.current) clearTimeout(kungTimeoutRef.current)
      if (kungResetTimeoutRef.current) clearTimeout(kungResetTimeoutRef.current)
      if (chenTimeoutRef.current) clearTimeout(chenTimeoutRef.current)
      if (chenResetTimeoutRef.current) clearTimeout(chenResetTimeoutRef.current)
      if (yehTimeoutRef.current) clearTimeout(yehTimeoutRef.current)
      if (yehResetTimeoutRef.current) clearTimeout(yehResetTimeoutRef.current)
      if (sungTimeoutRef.current) clearTimeout(sungTimeoutRef.current)
      if (sungResetTimeoutRef.current) clearTimeout(sungResetTimeoutRef.current)
    }
  }, [])
  
  // ==================== 彩蛋功能結束 ====================

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* ==================== 彩蛋彈出效果 ==================== */}
      
      {/* 張祥唐彩蛋 - 糖果 🍬 */}
      {showChangEmoji && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-emoji-bounce">
            <span className="text-[200px] md:text-[300px] drop-shadow-2xl select-none">🍬</span>
          </div>
        </div>
      )}

      {/* 蔡宏政彩蛋 - 不要氣餒 + 水餃 🥟 */}
      {showTsaiEmoji && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center pointer-events-none">
          <div className="animate-emoji-bounce text-center">
            <p className="text-4xl md:text-6xl font-bold text-foreground mb-4 drop-shadow-lg bg-background/80 px-8 py-4 rounded-2xl">
              不要氣餒
            </p>
            <span className="text-[150px] md:text-[250px] drop-shadow-2xl select-none">🥟</span>
          </div>
        </div>
      )}

      {/* 龔蒂菀彩蛋 - YES!! 🎉 */}
      {showKungYes && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-emoji-bounce text-center">
            <p className="text-[100px] md:text-[180px] font-black text-yellow-400 drop-shadow-[0_0_30px_rgba(250,204,21,0.8)] select-none animate-pulse"
               style={{
                 textShadow: '0 0 20px #fbbf24, 0 0 40px #fbbf24, 0 0 60px #f59e0b, 0 0 80px #f59e0b',
                 WebkitTextStroke: '3px #000000'
               }}>
              YES!!
            </p>
          </div>
        </div>
      )}

      {/* 陳俊東彩蛋 - R */}
      {showChenR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-emoji-bounce text-center">
            <p className="text-[200px] md:text-[350px] font-black text-accent select-none"
               style={{
                 textShadow: '0 0 10px rgba(74, 74, 74, 0.5), 0 0 20px rgba(74, 74, 74, 0.3)'
               }}>
              R
            </p>
          </div>
        </div>
      )}

      {/* 宋毅仁彩蛋 - 不要為難自己 */}
      {showSungText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="animate-emoji-bounce text-center">
            <p className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg bg-background/80 px-8 py-4 rounded-2xl">
              不要為難自己
            </p>
          </div>
        </div>
      )}
      
      {/* ==================== 彩蛋彈出效果結束 ==================== */}
      
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
                <div 
                  className={`aspect-square relative mb-4 rounded-lg overflow-hidden bg-secondary ${
                    professor.name === "張祥唐" || professor.name === "蔡宏政" || professor.name === "龔蒂菀" || professor.name === "陳俊東" || professor.name === "葉恒志" || professor.name === "宋毅仁" ? "select-none" : ""
                  }`}
                  onClick={
                    professor.name === "張祥唐" 
                      ? handleChangClick 
                      : professor.name === "蔡宏政" 
                        ? handleTsaiClick 
                        : professor.name === "龔蒂菀"
                          ? handleKungClick
                          : professor.name === "陳俊東"
                            ? handleChenClick
                            : professor.name === "葉恒志"
                              ? handleYehClick
                              : professor.name === "宋毅仁"
                                ? handleSungClick
                                : undefined
                  }
                >
                  <Image
                    src={professor.image || "/placeholder.svg"}
                    alt={professor.name}
                    fill
                    className="object-cover"
                  />
                  {/* 葉恒志彩蛋 - 💤 在頭上 */}
                  {professor.name === "葉恒志" && showYehZzz && (
                    <div className="absolute -top-2 right-0 z-10 pointer-events-none animate-emoji-bounce">
                      <span className="text-[60px] md:text-[80px] drop-shadow-lg select-none">💤</span>
                    </div>
                  )}
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
            {facultyData.partners.map((partner) => {
              const card = (
                <Card className="p-6 hover:shadow-lg transition-shadow h-full">
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
                  </div>
                </Card>
              )

              if (partner.url) {
                return (
                  <a
                    key={partner.id}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {card}
                  </a>
                )
              }

              return <div key={partner.id}>{card}</div>
            })}
          </div>
        </section>
      </div>
    </main>

    <Footer />
    </div>
  )
}
