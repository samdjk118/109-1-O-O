# 109-1-O-O 系統分析與設計
# 專題名稱： 興興知我心－健康機器人
示意圖<br>
  <img src="/img/shingroom.png" width="50%" height="50%" />
## 組別 
 第五組:
  | 姓名 | 學號 | 職位 | 工作分配
  | --- | ---------- | -- | -------------|
  | 楊宗核 | C107118203  :chicken: | 組長 | 程式設計 |
  | 陳佳欣 | C107118230 :panda_face: | 組員 | 程式設計 |
  | 楊惠心 | C107118232 :ram: | 組員 | 程式設計 |
  | 林于庭 | C107118233 :fish: | 組員 | 程式設計 |
  | 許倍誠 | C107118249 :crocodile: | 組員 | 程式設計 |

## 內容:
  文字說明:
  使用者透過我們的長照機器人可以諮詢許多問題，像是回報今日血壓狀況系統將分析您的身體資訊並且回報狀況
  
  使用說明
  ```
  virtualenv venv
  source venv/bin/activate
  pip install -r ./requirements.txt
  python chatter_corpus.py
  ```
## 甘特圖
  <img src="/img/Gantt.png" />
  
## PERT/CPM圖
  <img src="/img/pert.png" />

## 功能性需求
  1. 系統能每天按時提醒使用者回報生命徵象（如體溫、脈搏、呼吸、血壓），判斷是否有異常。
  2. 提供交通接送服務的電話，協助失能者往返醫療院所就醫或復健。
  3. 可匯整使用者資料，幫助預測使用者身體狀況。

## 非功能需求
  1. 使用性：使用LINE，各用戶容易操作。
  2. 反應時間：使用者回應後，伺服器分析過後回應速度。
  3. 可靠性：高，經過反覆的訓練，才確認使用。

## 功能分解圖(functional decomposition diagram, FDD)
  <img src="/img/FDD.jpg" />

## 案例圖
  
## 使用案例說明
   | 使用案例名稱 | 需求調查 |
   | -- | ----------------- |
   | 行動者 | |
   | 說明 | |
   | 完成動作 | | 
   | 替代方法 | |
   | 先決條件 | |
   | 後置條件 | |
   | 假設 | |
