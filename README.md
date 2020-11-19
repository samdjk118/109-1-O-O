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
  使用者透過我們的健康機器人可以諮詢許多問題，像是回報今日血壓狀況系統將分析您的身體資訊並且回報狀況
  
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
  1. 在聊天機器人裡，系統能人性化地回覆，並解決使用者的問題。
  2. 可匯整使用者資料，幫助預測使用者身體狀況。
  3. 聊天機器人提供簡易好操作的介面，讓使用者能快速上手或找到所要資訊。
  4. 提供數據平台並將數據視覺化，讓院方能進一步分析及使用。
  
## 非功能需求
  1. 使用性：使用LINE，各用戶容易操作。
  2. 反應時間：使用者回應後，伺服器分析過後回應速度。
  3. 可靠性：高，經過反覆的訓練，才確認使用。
  
## 需求分析
  1. 系統能每天按時提醒使用者回報生命徵象（如體溫、脈搏、呼吸、血壓），判斷是否有異常。
  2. 系統提供交通接送服務的電話，協助失能者能往返醫療院所就醫或復健。
  3. 系統能提供居家照護指導及諮詢。
  4. 聊天機器人能透過使用者所回覆內容進行分析，並給出最適當的回覆。
  5. 機器人能夠將使用者所點擊的選項或是輸入的內容進行蒐集並儲存到數據平台。

## 功能分解圖(functional decomposition diagram, FDD)
  <img src="/img/FDD.jpg" />

## 案例圖
  <img src="/img/user.jpg" />

## 使用案例說明
   | 使用案例名稱 | 服務選擇 |
   | -- | ----------------- |
   | 行動者 | 使用者 |
   | 說明 | 使用者經由輸入所需要的服務並使用服務 | 
   | 完成動作 | 1.輸入所需要的服務2.系統回傳相關資訊 |
   | 替代方法 | 1.輸入已顯示的服務2.系統回傳相關資訊 |
   | 先決條件 | 使用者輸入正確的服務 |
   | 後置條件 | 所輸入的資訊有應對到服務項目 |
   | 假設 | 無 |

   | 使用案例名稱 | 監控使用者生命徵象 |
   | -- | ----------------- |
   | 行動者 | 院方 |
   | 說明 | 追蹤患者出院後續身體狀況 | 
   | 完成動作 | 1.請求患者提供資訊2.確認患者所提供之資訊 |
   | 替代方法 | 無 |
   | 先決條件 | 患者輸入所需資訊 |
   | 後置條件 | 依據患者所提供資訊進行分析提供後續服務 |
   | 假設 | 無 |
   
   | 使用案例名稱 | 蒐集回饋數據 |
   | -- | ----------------- |
   | 行動者 | 開發者 |
   | 說明 | 蒐集與使用者對話紀錄用以後續分析資訊 | 
   | 完成動作 | 1.蒐集與使用者之對話2.將對話資料匯入資料庫中 |
   | 替代方法 | 無 |
   | 先決條件 | 與使用者進行對話 |
   | 後置條件 | 根據所蒐集之資料進行分析預測工作 |
   | 假設 | 無 |

## 系統環境圖 (DFD)
 <img src="/img/DFD.png"  width="80%" height="80%"/>
 

## DFD圖 0
 <img src="/img/DFD_0.jpg"  width="80%" height="80%"/>
 
 ## 循序圖 1
 <img src="/img/循序圖1.jpeg"  width="70%" height="70%"/>
  
  ## 活動圖 1
 <img src="/img/活動圖1.jpeg"  width="70%" height="70%"/>
 
  ## 循序圖 2
 <img src="/img/循序圖2.jpeg"  width="70%" height="70%"/>
 
   ## 活動圖 2
 <img src="/img/活動圖2.jpeg"  width="70%" height="70%"/>
 
  ## 循序圖 3
 <img src="/img/循序圖3.jpeg"  width="70%" height="70%"/>
 
  ## 活動圖 3
 <img src="/img/活動圖3.jpeg"  width="70%" height="70%"/>
 
