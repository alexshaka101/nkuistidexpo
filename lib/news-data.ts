export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  image?: string;
  content: {
    type: 'heading' | 'paragraph' | 'list' | 'info-box';
    content: string | string[];
  }[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "探索設計的成長旅程：國立高雄科技大學工業設計系期末展「被設計的設計」1月9日盛大登場",
    date: "2025-12-16",
    summary: "2025期末設計展正式開幕，邀請您一同參與設計盛會...",
    image: "/news/news1.jpg",
    content: [
      {
        type: 'paragraph',
        content: '【高雄訊】 設計不僅是創造物件的過程，更是設計師自我形塑的旅程。國立高雄科技大學工業設計系將於 2026 年 1 月 9 日（五）至 1 月 11 日（日），舉辦名為「被設計的設計 | The Design of Being Designed」的期末成果展。本次展覽將帶領觀者走進學生的創作現場，看見從基礎感知到回應世界議題的設計蛻變。'
      },
      {
        type: 'heading',
        content: '「被設計的設計」：在設計中，我們也被重新設計'
      },
      {
        type: 'paragraph',
        content: '今年的展覽主題「被設計的設計（DESIGNED）」，試圖探討設計教育中雙向的影響力。當學生動手設計作品時，設計的思維與訓練過程也在潛移默化中「設計」了學生的視野與價值觀。策展團隊邀請大眾走進展場，不僅觀賞最終的產出，更要一起感受並思考這段設計的成長旅程。'
      },
      {
        type: 'heading',
        content: '三大展區呈現設計系學生的完整蛻變'
      },
      {
        type: 'paragraph',
        content: '展覽依據學生年級與學習階段，精心規劃為三大核心展區，完整呈現工業設計系的學習脈絡：'
      },
      {
        type: 'list',
        content: [
          '一年級｜基礎造型與感知訓練 — 展現設計最初的起點，學生透過對形態、材質與感官的基礎訓練，將抽象的感知轉化為具體的造型語言，呈現最純粹的設計原點。',
          '二年級｜造型與使用之間的探索 — 進階探討物件與人之間的關係。此階段作品聚焦於如何在美學造型與實際使用機能之間取得平衡，展現學生對產品語意與人因工程的初步探索。',
          '三年級｜以設計回應世界議題 — 展現設計師的社會責任。高年級學生將視角擴大至全球與社會層面，透過設計思維提出對環境、社會或文化議題的解決方案與反思。'
        ]
      },
      {
        type: 'heading',
        content: '展覽資訊與參觀詳情'
      },
      {
        type: 'paragraph',
        content: '本次展覽為免費入場，誠摯邀請設計愛好者、產業界人士及各界民眾蒞臨指導，一同見證新一代設計新銳的創意能量。'
      },
      {
        type: 'info-box',
        content: [
          '展覽名稱：被設計的設計 | The Design of Being Designed — 國立高雄科技大學工業設計系期末展',
          '展覽日期：2026 年 01 月 09 日（五）至 01 月 11 日（日）',
          '開放時間：週五、週六：11:00 — 17:00｜週日：11:00 — 14:00',
          '備註：各場館將於閉館前30分鐘停止入場',
          '展覽地點：國立高雄科技大學（詳細交通資訊請參閱活動官網）',
          '官方網站：https://nkuist-id-expo.netlify.app/',
          '社群追蹤：Instagram @nkustiiid'
        ]
      },
      {
        type: 'heading',
        content: '關於主辦單位'
      },
      {
        type: 'paragraph',
        content: '國立高雄科技大學工業設計系致力於培育具備創新思維與實作能力的設計人才，透過紮實的課程訓練與多元的實務專題，引導學生在設計領域中不斷突破與成長。'
      }
    ]
  }
];

export function getNewsById(id: string): NewsArticle | undefined {
  return newsArticles.find(article => article.id === id);
}

export function getAllNews(): NewsArticle[] {
  return newsArticles;
}

