const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const https = require('https');

const BASE_URL = 'https://id.nkust.edu.tw/index.php';

// 創建一個忽略 SSL 驗證的 axios 實例（僅用於開發）
const httpsAgent = new https.Agent({  
  rejectUnauthorized: false
});

async function testFetch() {
  try {
    console.log('正在獲取網頁...');
    const response = await axios.get(BASE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      httpsAgent: httpsAgent,
      timeout: 15000
    });
    
    console.log('✓ 成功獲取網頁');
    console.log(`狀態碼: ${response.status}`);
    console.log(`內容長度: ${response.data.length} 字元\n`);
    
    // 儲存 HTML 以供檢查
    fs.writeFileSync('scripts/page.html', response.data);
    console.log('✓ 網頁已儲存至 scripts/page.html\n');
    
    // 解析並顯示圖片
    const $ = cheerio.load(response.data);
    console.log('找到的圖片：\n');
    
    $('img').each((i, elem) => {
      const src = $(elem).attr('src');
      const alt = $(elem).attr('alt') || '';
      const title = $(elem).attr('title') || '';
      
      if (i < 20) {  // 只顯示前 20 張
        console.log(`${i + 1}. src: ${src}`);
        if (alt) console.log(`   alt: ${alt}`);
        if (title) console.log(`   title: ${title}`);
        console.log('');
      }
    });
    
    console.log(`\n總共找到 ${$('img').length} 張圖片`);
    
  } catch (error) {
    console.log(`✗ 錯誤: ${error.message}`);
  }
}

testFetch();

