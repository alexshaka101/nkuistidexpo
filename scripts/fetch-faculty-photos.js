const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// 從 faculty/page.tsx 中的教師名單
const facultyNames = [
  { id: 1, name: "葉恒志", nameEn: "Heng-Chi Yeh" },
  { id: 3, name: "張祥唐", nameEn: "Hsiang-Tang Chang" },
  { id: 4, name: "陳俊東", nameEn: "Chun-Tung Chen" },
  { id: 5, name: "陳俊智", nameEn: "Chun-Chih Chen" },
  { id: 7, name: "蔡宏政", nameEn: "Hung-Cheng Tsai" },
  { id: 9, name: "林龍吟", nameEn: "Lung-Yin Lin" },
  { id: 10, name: "宋毅仁", nameEn: "I-Jen Sung" },
  { id: 11, name: "龔蒂菀", nameEn: "Ti-Wan Kung" },
];

const BASE_URL = 'https://id.nkust.edu.tw/index.php';

// 確保目錄存在
const photosDir = path.join(__dirname, '../public/faculty-photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir, { recursive: true });
}

// 獲取網頁內容
async function fetchPage() {
  try {
    console.log('正在獲取網頁內容...');
    const response = await axios.get(BASE_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 10000
    });
    console.log('✓ 成功獲取網頁\n');
    return response.data;
  } catch (error) {
    console.log(`✗ 獲取網頁失敗: ${error.message}`);
    return null;
  }
}

// 解析教師照片
function parseFacultyPhotos(html) {
  const $ = cheerio.load(html);
  const facultyPhotos = {};
  
  // 查找所有圖片
  $('img').each((i, elem) => {
    const src = $(elem).attr('src');
    const alt = $(elem).attr('alt') || '';
    const title = $(elem).attr('title') || '';
    
    // 檢查是否匹配任何教師名字
    for (const faculty of facultyNames) {
      if (alt.includes(faculty.name) || title.includes(faculty.name) || src.includes(faculty.name)) {
        const fullUrl = src.startsWith('http') ? src : new URL(src, BASE_URL).href;
        facultyPhotos[faculty.name] = {
          url: fullUrl,
          faculty: faculty
        };
        console.log(`找到: ${faculty.name} - ${src}`);
      }
    }
  });
  
  return facultyPhotos;
}

// 下載圖片
async function downloadImage(url, filepath) {
  try {
    const response = await axios({
      method: 'GET',
      url: url,
      responseType: 'stream',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': BASE_URL
      },
      timeout: 10000
    });
    
    const writer = fs.createWriteStream(filepath);
    response.data.pipe(writer);
    
    return new Promise((resolve, reject) => {
      writer.on('finish', () => {
        console.log(`  ✓ 成功下載: ${path.basename(filepath)}`);
        resolve(true);
      });
      writer.on('error', (err) => {
        console.log(`  ✗ 下載失敗: ${err.message}`);
        resolve(false);
      });
    });
  } catch (error) {
    console.log(`  ✗ 下載失敗: ${error.message}`);
    return false;
  }
}

// 主函數
async function main() {
  console.log('='.repeat(60));
  console.log('高科大工業設計系教師照片下載工具');
  console.log('='.repeat(60) + '\n');
  console.log(`照片將儲存至: ${photosDir}\n`);
  
  // 獲取網頁
  const html = await fetchPage();
  if (!html) {
    console.log('\n無法繼續，請檢查網路連線');
    return;
  }
  
  // 解析照片
  console.log('正在解析教師照片...\n');
  const facultyPhotos = parseFacultyPhotos(html);
  
  if (Object.keys(facultyPhotos).length === 0) {
    console.log('⚠ 未能自動找到教師照片');
    console.log('\n請手動完成以下步驟：');
    console.log('1. 訪問 https://id.nkust.edu.tw/index.php#area3');
    console.log('2. 找到每位教師的照片');
    console.log('3. 右鍵點擊照片 > 另存圖片');
    console.log(`4. 將照片儲存至: ${photosDir}`);
    console.log('5. 檔案命名格式: [id]-[姓名].jpg');
    console.log('\n例如: 1-葉恒志.jpg, 3-張祥唐.jpg\n');
    
    console.log('教師名單：');
    for (const faculty of facultyNames) {
      console.log(`  ${faculty.id}: ${faculty.name} (${faculty.nameEn})`);
    }
    return;
  }
  
  // 下載照片
  console.log(`\n找到 ${Object.keys(facultyPhotos).length} 張照片，開始下載...\n`);
  let successCount = 0;
  
  for (const [name, info] of Object.entries(facultyPhotos)) {
    const faculty = info.faculty;
    const filename = `${faculty.id}-${faculty.name}.jpg`;
    const filepath = path.join(photosDir, filename);
    
    // 跳過已存在的檔案
    if (fs.existsSync(filepath)) {
      console.log(`跳過 ${name}（已存在）`);
      successCount++;
      continue;
    }
    
    console.log(`下載: ${name}`);
    if (await downloadImage(info.url, filepath)) {
      successCount++;
    }
    
    // 避免請求過快
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`完成！成功 ${successCount}/${Object.keys(facultyPhotos).length} 張照片`);
  console.log('='.repeat(60));
}

// 執行
main().catch(console.error);

