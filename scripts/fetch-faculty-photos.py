#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
從高科大工業設計系網站獲取教師照片
"""

import requests
from bs4 import BeautifulSoup
import os
import json
from urllib.parse import urljoin
import time

# 從 faculty/page.tsx 中的教師名單
FACULTY_NAMES = [
    {"id": 1, "name": "葉恒志", "nameEn": "Heng-Chi Yeh"},
    {"id": 3, "name": "張祥唐", "nameEn": "Hsiang-Tang Chang"},
    {"id": 4, "name": "陳俊東", "nameEn": "Chun-Tung Chen"},
    {"id": 5, "name": "陳俊智", "nameEn": "Chun-Chih Chen"},
    {"id": 7, "name": "蔡宏政", "nameEn": "Hung-Cheng Tsai"},
    {"id": 9, "name": "林龍吟", "nameEn": "Lung-Yin Lin"},
    {"id": 10, "name": "宋毅仁", "nameEn": "I-Jen Sung"},
    {"id": 11, "name": "龔蒂菀", "nameEn": "Ti-Wan Kung"},
]

BASE_URL = "https://id.nkust.edu.tw/index.php"
PHOTOS_DIR = os.path.join(os.path.dirname(__file__), "../public/faculty-photos")

def create_photos_directory():
    """創建照片目錄"""
    os.makedirs(PHOTOS_DIR, exist_ok=True)
    print(f"照片將儲存至: {PHOTOS_DIR}\n")

def fetch_page():
    """獲取網頁內容"""
    try:
        print("正在獲取網頁內容...")
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        response = requests.get(BASE_URL, headers=headers, timeout=10)
        response.raise_for_status()
        print("✓ 成功獲取網頁\n")
        return response.text
    except Exception as e:
        print(f"✗ 獲取網頁失敗: {e}")
        return None

def parse_faculty_photos(html_content):
    """解析網頁中的教師照片"""
    soup = BeautifulSoup(html_content, 'html.parser')
    faculty_photos = {}
    
    # 嘗試不同的選擇器來找到教師照片
    # 這裡需要根據實際網頁結構調整
    
    # 方法1: 查找所有圖片
    for img in soup.find_all('img'):
        alt_text = img.get('alt', '')
        src = img.get('src', '')
        
        # 檢查是否匹配任何教師名字
        for faculty in FACULTY_NAMES:
            if faculty['name'] in alt_text or faculty['name'] in src:
                faculty_photos[faculty['name']] = {
                    'url': urljoin(BASE_URL, src),
                    'faculty': faculty
                }
                print(f"找到: {faculty['name']} - {src}")
    
    return faculty_photos

def download_photo(url, filename):
    """下載照片"""
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
            'Referer': BASE_URL
        }
        response = requests.get(url, headers=headers, timeout=10, stream=True)
        response.raise_for_status()
        
        filepath = os.path.join(PHOTOS_DIR, filename)
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"  ✓ 成功下載: {filename}")
        return True
    except Exception as e:
        print(f"  ✗ 下載失敗: {e}")
        return False

def main():
    print("=" * 60)
    print("高科大工業設計系教師照片下載工具")
    print("=" * 60 + "\n")
    
    create_photos_directory()
    
    # 獲取網頁
    html_content = fetch_page()
    if not html_content:
        print("\n無法繼續，請檢查網路連線")
        return
    
    # 解析照片
    print("正在解析教師照片...\n")
    faculty_photos = parse_faculty_photos(html_content)
    
    if not faculty_photos:
        print("⚠ 未能自動找到教師照片")
        print("\n請手動完成以下步驟：")
        print("1. 訪問 https://id.nkust.edu.tw/index.php#area3")
        print("2. 找到每位教師的照片")
        print("3. 右鍵點擊照片 > 另存圖片")
        print(f"4. 將照片儲存至: {PHOTOS_DIR}")
        print("5. 檔案命名格式: [id]-[姓名].jpg")
        print("\n例如: 1-葉恒志.jpg, 3-張祥唐.jpg\n")
        
        # 輸出教師名單供參考
        print("教師名單：")
        for faculty in FACULTY_NAMES:
            print(f"  {faculty['id']}: {faculty['name']} ({faculty['nameEn']})")
        return
    
    # 下載照片
    print(f"\n找到 {len(faculty_photos)} 張照片，開始下載...\n")
    success_count = 0
    
    for name, info in faculty_photos.items():
        faculty = info['faculty']
        filename = f"{faculty['id']}-{faculty['name']}.jpg"
        print(f"下載: {name}")
        
        if download_photo(info['url'], filename):
            success_count += 1
        
        time.sleep(0.5)  # 避免請求過快
    
    print("\n" + "=" * 60)
    print(f"完成！成功下載 {success_count}/{len(faculty_photos)} 張照片")
    print("=" * 60)

if __name__ == "__main__":
    main()

