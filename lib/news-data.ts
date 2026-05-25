export type NewsArticle = {
  id: string
  date: string
  title: string
  summary: string
}

const newsArticles: NewsArticle[] = [
  {
    id: "1",
    date: "2026-12-05",
    title: "2026期末設計展正式開幕，邀請您一同參與設計盛會",
    summary:
      "國立高雄科技大學工業設計系期末展即將登場，匯聚各年級學習成果，歡迎各界蒞臨參觀交流。",
  },
  {
    id: "2",
    date: "2026-11-28",
    title: "展場導覽時間表公布，專業導覽帶你深入了解作品",
    summary:
      "展覽期間提供多場導覽服務，由師生與工作團隊帶領觀眾認識作品背後的設計脈絡與思考。",
  },
  {
    id: "3",
    date: "2026-11-20",
    title: "學生設計作品入選獲獎！恭喜優秀設計獲得肯定",
    summary:
      "多組學生作品於校內外競賽獲得佳績，展現工設系學子紮實的專業能力與創新精神。",
  },
  {
    id: "4",
    date: "2026-11-15",
    title: "互動體驗區全新升級，更多參與式設計活動等你來",
    summary:
      "展場增設互動體驗區，讓觀眾透過實際操作與體驗，更貼近設計作品的用途與情境。",
  },
  {
    id: "5",
    date: "2026-11-10",
    title: "設計工作坊報名開始，與業界設計師面對面交流",
    summary:
      "展覽期間舉辦設計工作坊，邀請業界設計師分享實務經驗，名額有限，歡迎踴躍報名。",
  },
]

export function getAllNews(): NewsArticle[] {
  return [...newsArticles]
}

export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}
