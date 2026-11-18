---
name: 鍋序網站
description: 民雄・中正大學旁個人小火鍋「鍋序」——門口價目牌式的新粗野主義紙感網站
colors:
  primary: "#8e2428"
  primary-deep: "#622027"
  ink: "#382620"
  cream: "#faf6ec"
  paper: "#fffdf7"
  sand: "#f5e8d1"
  highlight: "#fdf3d8"
  mustard: "#f4cb5a"
  line: "#d9c9b4"
  open-green: "#3f7f52"
  board: "#fff8e8"
  contact: "#f0dfc6"
  dash: "#9a8a74"
  note: "#6b5346"
  on-red: "#fff7e7"
  brown-deep: "#5c1d23"
  dot-idle: "#6b5346"
  arc: "#eed2b0"
typography:
  display:
    fontFamily: "'Noto Sans TC', sans-serif"
    fontSize: "clamp(32px, 4.8vw, 56px)"
    fontWeight: 900
    lineHeight: 1.22
    letterSpacing: "-1.5px"
  headline:
    fontFamily: "'Noto Sans TC', sans-serif"
    fontSize: "clamp(30px, 3.6vw, 48px)"
    fontWeight: 900
    lineHeight: 1.35
    letterSpacing: "-1.3px"
  title:
    fontFamily: "'Noto Sans TC', sans-serif"
    fontSize: "24px"
    fontWeight: 900
    lineHeight: 1.4
  body:
    fontFamily: "'Noto Sans TC', sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "'Noto Sans TC', sans-serif"
    fontSize: "13px"
    fontWeight: 900
    lineHeight: 1.4
    letterSpacing: "2px"
rounded:
  sm: "4px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "32px"
  xl: "44px"
  section: "102px"        # .section（@680px 收 section-mobile）
  section-mobile: "70px"  # .section @680px
  pad-page-head: "54px 0 46px"  # .page-head（@680px: 40px 0 34px）
  pad-menu-page: "72px 0 64px"  # .menu-page（菜單內頁主軸；@680px 見 pad-sides）
  pad-sides: "44px 0 40px"      # .menu-page @680px
  pad-contact: "80px 0"         # .contact
  pad-band: "92px 0"            # .menu-section（紅底精選帶；@680px: 70px 0）
  # gap-layout：三處 grid 版面統一 90px（2026-11-13 code 已收斂；@920px 全收 40px、.about-layout 80px、@680px .contact-layout 30px）
  gap-layout: "90px"            # .menu-layout／.about-layout／.contact-layout
  gap-pot-grid: "22px"          # .pot-grid（@920px 12px／@680px 20px；.pot-cards 同 22px）
  gap-hours: "44px"             # .hours-wrap（@920px 28px；.guide-lead 同 44px）
  gap-hero-links: "25px"        # .hero-links（首屏按鈕列）
  scroll-padding-page: "calc(var(--header-h) + 14px)"  # html（scroll-padding-top）；section[id]／main[id]／#pot-nav 的 scroll-margin-top 已歸零，避免雙重偏移
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-red}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "15px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-red}"
    rounded: "{rounded.sm}"
    padding: "15px 23px"
    transform: "translate(-2px, -2px)" # 懸停／焦點浮起
    boxShadow: "4px 4px 0 {colors.ink}"
    # active：transform 改為 translate(2px, 2px)、box-shadow 縮至 2px 2px 0 {colors.ink}
  button-outline:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.body}"
    padding: "15px 23px"
  button-header-cta:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    fontSize: "14px"
    letterSpacing: "normal"
    fontWeight: 900
    rounded: "{rounded.sm}"
    padding: "12px 19px"
  card-pot:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "24px 23px 30px"
  badge-menu:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.primary-deep}"
    fontSize: "14px"
    letterSpacing: "0.5px"
    fontWeight: 900
    padding: "3px 10px"
  status-open-now:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    fontSize: "13px"
    fontWeight: 900
    padding: "5px 12px"
---

# Design System: 鍋序網站

## Overview

**Creative North Star: "門口價目牌"**

本站像一面掛在店門口的價目牌：奶油紙底、粗黑描邊、深紅標題、芥末黃貼紙，30 秒內回答「貴不貴、停哪、什麼時候開」。語氣誠實直白，不編品牌故事、不寫招牌／評分，只呈現已確認的事實——170 元起、多數 190、週六唯一中午時段。密度偏舒適，桌面以寬敞留白撐起層次，手機收斂為單欄掃讀。

設計哲學是新粗野主義的「粗實可按」：不用漸層、不用模糊柔光，表情只靠字重（900）、2px 描邊、硬陰影與微傾斜（約 -7° 至 9°）完成。吉祥物、手寫字條與紙邊照片卡是唯一的手感裝飾，且只出現在 hero 與介紹區。

**Key Characteristics:**
- 奶油紙底＋墨棕粗邊＋鍋湯深紅，誠實、好讀、不花俏
- 硬陰影 2/4/6px 為唯一深度語言，無模糊陰影
- Noto Sans TC 400/700/900 單一字體，900 承擔標題與價格
- 微傾斜徽章／字條作人工貼紙感，但不犧牲可讀性

## Colors

鍋湯深紅是唯一的行動色，奶油與紙白承擔底面，芥末黃只給需要被注意的價格與素食標籤。

### Primary
- **鍋湯深紅** (#8e2428): 主按鈕底色、標籤字、連結下劃線、頁首色帶與跑馬燈底色——全站行動與強調只用這一紅。
- **燉煮深紅** (#622027): 大標題與 Logo 字色、深色狀態底，比主紅更暗，用於需要穩定、不刺眼的文字重量。

### Secondary
- **芥末黃** (#f4cb5a): 菜單分類徽章與素食提示底色。只用在價格帶或需要快速掃到的分類，不作大面積底色。

### Tertiary
- **開鍋綠** (#3f7f52): 僅作營業中狀態圓點，不進其他元件，避免第二口音色。

### Neutral
- **奶油底** (#faf6ec): 全站頁面底色。
- **紙白** (#fffdf7): 卡片、表格、頁首底色，與奶油底靠 2px 墨棕邊分明。
- **沙米** (#f5e8d1): 首屏與表頭的淺米色面，暖但不搶主紅。
- **亮黃紙** (#fdf3d8): 今日／週六與價目列懸停的極淺黃，提示「今天／週六」而不另造色。
- **墨棕描邊** (#382620): 2px 粗邊、陰影色與內文字色，承擔結構。
- **舊紙線** (#d9c9b4): 低強度分隔線（表格列間等）。

### 區塊面與低強度色
- **看板紙** (#fff8e8): 『門口價目牌』看板（menu-board）的底色。
- **聯絡米** (#f0dfc6): 找我們／聯絡區塊的整段底面。
- **虛線灰棕** (#9a8a74): 表格列間等 1px 虛線（#c3b09a（--dash-soft，已於 2026-11-13 停用））。
- **腳註棕** (#6b5346): 腳註、待補 chip 與小型附註文字，比墨棕輕一階，不用其他灰。
- **反紅奶白** (#fff7e7): 鍋湯深紅／燉煮深紅底上的文字與內縮焦點框顏色。
- **深紅陰影** (#5c1d23): 看板 6px 硬陰影的實色（僅看板使用，等於比 --ink 更暖的一級偏移）。

### Named Rules
**The One Voice Rule.** 紅只說一件事：可點、重要、或現在。不要再引入第二口音色去稀釋它。
IG 與 LINE 官方 QR 圖按鈕（assets/ig-qr.png、assets/line-qr.png，用戶提供之官方素材；scdn.line-apps.com 已退役）為唯二外部品牌素材例外，不入 :root；2026-11-13 用戶裁決＋改版，見 PRODUCT.md §7。

### YAML ↔ :root 命名對照

YAML（本檔 `colors:`）與 styles.css `:root` 的對應；值一一全等，僅名稱不同。`--dash-soft` 已於 2026-11-13 停用，不列。

| YAML | :root |
|---|---|
| primary | --red |
| primary-deep | --deep |
| ink | --ink |
| cream | --cream |
| paper | --paper |
| sand | --sand |
| highlight | --highlight |
| mustard | --yellow |
| line | --line |
| open-green | --green |
| board | --board |
| contact | --contact |
| dash | --dash |
| note | --note |
| on-red | --on-red |
| brown-deep | --brown-deep |
| dot-idle | --dot-idle |
| arc | --arc |

## Typography

**Display Font:** Noto Sans TC (with sans-serif fallback)
**Body Font:** Noto Sans TC (with sans-serif fallback)

**Character:** 單一字體靠重量說話。900 是招牌字體，400 只作內文，700 作次標籤。價格用 tabular-nums 對齊，讓價目掃讀像數字一樣整齊。

### Hierarchy
- **Display** (900, clamp(32px, 4.8vw, 56px), 1.22, -1.5px): 首屏大標題，含地名關鍵字，不為大字犧牲 SEO。
- **Headline** (900, clamp(30px, 3.6vw, 48px), 1.35, -1.3px): 區塊標題與內頁 h1 副級。
- **Title** (900, 24px, 1.4): 卡片標題如鍋物名稱。
- **Body** (400, 16px, 1.9–2.0): 16px（內文唯一正文級；17px 僅 hero p），行高偏鬆，適合手機長時間閱讀。
- **Label** (900, 13px, 1.4, 2px): 小標籤如「今日菜單」「推薦」。

### 例外（登記，2026-11-13）

- **Label-sm**（menu-badge--sm，11px/900）：小於 label 下限 13px 的刻意小寫徽章，僅用於菜單徽章。
- **Price 主視覺**（td.price，23px/900、tabular-nums）：菜單價格唯一特例。
- **Board-title 收尾字**（`b` 24px／`span` 20px，900）：『門口價目牌』看板裝飾級，不入 display 階；`span` 為芥末黃底（--yellow）深紅字（--deep）價位帶（2026-11-15）。

### Named Rules
**The Weight-Only Rule.** 不引入第二字體；層次只靠 400/700/900 與大小、行高、字距區分。

## Layout

容器寬 `min(1140px, calc(100% - 44px))` 居中。桌面多為雙欄（首屏 1fr/1.06fr（2026-11-18 照片卡）、菜單 1fr/.86fr、關於 .8fr/1.1fr）與三欄鍋物格（repeat(3,1fr)，gap 22px）。區塊上下留白大（.section 102px，手機收為 70px），區塊標題以 2px 墨棕底線＋右側說明文字作分隔。斷點 1100px 先收窄頁首導覽間距（26px→18px），920px 收為單欄，680px 再壓字級與間距；頁首高度桌機 94px，920px 以下 `min-height` 94px，680px 以下 75px（logo 只留圖示、CTA 隱藏，見 Navigation）。錨點捲動留白只靠 `html` 的 `scroll-padding-top: calc(var(--header-h) + 14px)`（`section[id]`／`main[id]`／`#pot-nav` 的 `scroll-margin-top` 已歸零，避免雙重偏移），`--header-h` 94px、680px 以下 75px，避免 sticky header 遮住標題。觸控目標最小 44px，價目與營業時間在關 JS 時仍完整可讀。

## Elevation & Depth

深度只來自硬陰影，沒有模糊、沒有漸層。陰影三級：徽章 2px、按鈕懸停／分類捷徑 4px、大面板（訪問卡・地圖・看板）6px；靜態卡片無陰影，皆為不透明色塊偏移。按壓時元件向陰影方向平移（translate(2px,2px)），陰影縮至 2px，像紙板被壓下。靜態主按鈕不帶陰影，懸停／焦點才浮起。

### Shadow Vocabulary
- **徽章 2px** (`box-shadow: 2px 2px 0 var(--ink)`): 菜單徽章、開鍋狀態徽章。
- **元件 4px** (`box-shadow: 4px 4px 0 var(--ink)`): 按鈕懸停、分類捷徑。
- **面板 6px** (`box-shadow: 6px 6px 0 var(--ink)`): 地圖、訪問大卡、價目牌看板。
- **頁首現行頁** (`box-shadow: inset 0 -2px 0 var(--red)`): 頁首導覽 aria-current 現行頁下劃線。

### 吉祥物輪廓陰影例外（2026-11-08 登記）
首頁 Hero 大吉祥物是全站唯一使用 `filter: drop-shadow` 的元素（2026-11-18 起首頁 hero 已改為照片卡、無使用者，規則本身保留待未來獨立呈現），為 Hard-Shadow Rule 的明文例外：吉祥物是透明底 PNG，`drop-shadow` 能讓陰影貼著鍋體輪廓走；若改用 `box-shadow` 實色硬陰影會框出方形色塊、印在透明圖下變成「第二個鍋」，破壞原始視覺。規格：
- **吉祥物基準（已退役 2026-11-13）**: 舊 `.mascot` 基礎規則（12px 20px／11%／-5°）已由 V3（10px 12px／14%／-4°）覆寫並清除；此處僅存歷史登記。
- **吉祥物 V3** (`filter: drop-shadow(10px 12px 0 …)`，取樣 `--deep` 14%：`color-mix(in srgb, var(--deep) 14%, transparent)`): V3 覆寫後生效值（配 `rotate(-4deg)`、`width:min(430px,89%)`）。首頁 hero 自 2026-11-18 起不再使用此寬度與陰影。

規則：blur 恆為 0（仍是實色偏移，不是柔光模糊），但顏色必須用 `--deep` 的低透明取樣（`color-mix`，不新增色簿 hex）；吉祥物保持微傾 `-4°`。其餘元件仍一律遵守 Hard-Shadow Rule。

**2026-11-18 起首頁 hero 已無 `drop-shadow` 使用者**（大吉祥物由 `.hero-photo` 照片卡取代，卡上的吉祥物貼紙走 `box-shadow`）；本規格保留給未來吉祥物獨立呈現（如 `.about-image`／`.guide-lead` 若改為透明底大圖）時沿用。

### Named Rules
**The Hard-Shadow Rule.** 陰影只用實色偏移，不用 blur；需要深度就加一級偏移，不要加柔光。

## Shapes

小圓角（4px）為主，圓形只給狀態圓點。邊框一律 2px 實線墨棕（看板 3px），表格內分隔用 1px 虛線。少量元件微傾斜（-7° 至 9°）營造貼紙感，但文字本身不傾斜，傾的是容器。首屏自 2026-11-18 改為紙邊照片卡，原「吉祥物後有機形狀弧（52%/48% 橢圓、`.hero-arc`）」已隨大吉祥物退役；整體不用幾何裝飾。

## Components

元件觸感統一為「粗實可按」：粗邊、硬陰影、按下去會凹陷。圓角只有 3／4／6px 三級，以 4px 為主；8px 以上只出現在 `.map-studio` 位置圖例外區（8／10／18px），不得外流。

### Buttons
- **Shape:** 小圓角 (4px)，2px 描邊
- **Primary:** 鍋湯深紅底＋反紅奶白字（var(--on-red)），padding 15px 23px，字重 900；懸停／焦點浮起 4px 硬陰影並位移 -2px，按壓回落 2px
- **404 例外：** 404／錯誤頁唯一紅主按鈕指向 `index.html`（錯誤頁最普適的恢復路徑）；其餘頁紅主按鈕一律指向向前動作。
- **Hover / Focus:** 輕微位移＋硬陰影；焦點外框 3px，紅底上改用奶油色內縮框確保可見
- **Secondary / Ghost:** 描邊按鈕用 currentColor 描邊，深紅底區用米色描邊；頁首 CTA 為白底紅字描邊版

### Chips
- **Style:** 紙白或芥末黃底，2px 墨棕邊，字重 900
- **State:** 菜單徽章微傾 -1°；開鍋狀態圓點綠（營業中）／紅（未營業），營業中帶脈動環（reduced-motion 下關閉）

### Cards / Containers
- **Corner Style:** 小圓角 (4px) 為主；狀態點為正圓
- **Background:** 紙白 (#fffdf7) 卡片，沙米 (#f5e8d1) 或鍋湯深紅作區塊底
- **Shadow Strategy:** 見 Elevation & Depth 三級硬陰影
- **Border:** 2px 墨棕實線；看板 3px 實線＋雙線標題分隔
- **Internal Padding:** 24px 左右，卡片內文 24px 23px 30px

### 營業狀態徽章（.open-now--head）（2026-11-13 登記）

首頁 hero 與內頁頁首的唯一動態營業狀態來源（首頁以 .open-now--hero 置於 hero 按鈕列下方，內頁留在頁首）；script.js 以 Asia/Taipei 每 60 秒判斷並寫入（文字不變就不覆寫，避免 aria-live 打斷讀屏）。

- **佈局**: inline-flex、gap 7px、margin 0；paper 底＋2px 墨棕框＋2px 硬陰影（`2px 2px 0 var(--ink)`）；font-size 13px、字重 900、line-height 1.4；padding 5px 12px；`font-variant-numeric: tabular-nums`；`white-space: normal`；`min-height: 44px`（觸控目標下限，2026-11-15 補，取代原本 28px 實高的例外）。
- **圓點** `.dot`: 8px、正圓；營業中 var(--green)（帶脈動環，reduced-motion 下關閉）、未營業 var(--red)、閒置 var(--dot-idle)。
- **≤920px**: 內頁徽章併入頁首第一行（order 2、padding 5px 10px）；首頁徽章改置 hero，同樣轉短句；`.open-now-text` 退為 sr-only 全句，`::after` 改顯示 `data-mobile` 短字（開鍋中・21:30／N 分後開鍋／今天 17:00／明天 17:00／週六 11:00）；JS 關閉時 `data-mobile` 缺席，以 CSS2.1 相容雙宣告 fallback 為「營業時間」（2026-11-13：預設 `.open-now--head::after{content:"營業時間"}`、`.open-now--head[data-mobile]::after{content:attr(data-mobile)}`；雙參數 `attr(name,fallback)` 為 CSS Values Level 4 語法，Firefox 會整行丟棄）。
- **`aria-live="polite"`**: 掛在徽章本體；script.js 只在文字實際改變時寫入。
- **靜態 fallback**: JS 關閉時桌機讀到 HTML 靜態句「平日晚間 17:00–21:30，週六 11:00–21:30」。

### 實拍照片元件（2026-11-12 登記）

**照片帶 4px 陰影的鍋物卡本體不加陰影**（`.pot-card`）——照片自帶深度，再疊會過重；訪問卡／地圖／看板等無照片者用 6px。

- **首頁三卡** `.pot-picture--photo`：照片取代湯色展示面（退役 Soup 三色）；img 撐滿卡片寬、aspect-ratio 1440/1053、object-fit cover；價格以 `.circle-label` chip 標示於右上（紙白底、2px 墨棕邊、7° 微傾、字重 900）。
- **鍋物卡照片** `.pot-photo`（pot.html）：2px 墨棕邊＋4px 硬陰影（var(--ink)）、aspect-ratio 1440/1053、object-fit cover；內文排列不受影響。
- **首屏 hero 吉祥物**（2026-11-14，**2026-11-18 退役**）：`<picture>` 先給 `assets/mascot-hero.webp`（377×391、約 18KB）＋PNG fallback `assets/mascot-hero.png`；`.hero-right picture{display:contents}` 讓 `<img>` 仍是 `.hero-right` 的 flex item，原 `.mascot` 寬度、rotate(-4deg)、drop-shadow 不變；`fetchpriority="high"` 保留在 img（首屏不 lazy）。**2026-11-18 起首頁 hero 不再使用大吉祥物與 `.hero-right`／`.hero-arc`**：改由照片卡 `.hero-photo` 領銜（見下節），吉祥物只在卡右下角以 78px 小貼紙出現（紙白底＋2px 框＋2px 硬陰影、`−6°`，非 `drop-shadow`）。
- **吉祥物對外圖**（2026-11-14）：`index.html` `.about-image`（377×391）與 `guide.html` `.guide-lead`（188×195）同一張改用 `mascot-transparent.png`＋`mascot-transparent.webp`（377×391，webp 21,416B／png 131,872B），皆為 `<picture>`＋WebP `<source>`、PNG 作 `<img src>` fallback；`.about-image picture,.guide-lead picture{display:contents}` 沿用 hero 的做法，讓 `<img>` 繼續當版面盒，尺寸與間距不變。
- **照片 fallback 的 `srcset`**（2026-11-14）：`index.html`／`pot.html`／`menu.html` 每張照片的 `<img>` 除 `src` 外再帶 `-800.jpg 800w`＋`-400.jpg 400w`，`<source>` 仍先給 WebP（首頁 hero 卡照片除外：單一 JPEG、無 `<source>`、無 `srcset`，見下節）。注意 `<img>` 未帶 `sizes`，`w` 描述子按預設 `sizes="100vw"` 換算，手機 DPR≥2 仍會選 800w，400w 主要只在 DPR 1 生效。
- **文字卡 `.pot-photo--text`（pot.html）**（2026-11-14）：5 張無照片鍋物用 `--board` 底＋2px 墨棕邊＋4px 硬陰影，內縮 10px `--dash` 虛線框；中央單字 monogram 48–56px／900／`--deep`，整塊 `aria-hidden`，名稱由 `<h3>` 提供。足印同 `.pot-photo`（aspect-ratio 1440/1053、14px 下距），13 張有照片的卡不受影響。
- **超值海鮮拼盤格** `.platter-grid`／`.platter-item`（menu.html）：桌機 4 欄 → 920px 以下 2 欄；格項紙白底、2px 邊＋2px 硬陰影、內距 8px；figcaption 14px，`<b>` 為深紅 var(--deep) 字重 900。
- **內文 inline 連結**（`.ink-link`）：鍋湯深紅字＋900 字重，紅色 `text-decoration` 下劃線（thickness 2px、offset 6px）貼著字形畫；跨行時 `box-decoration-break:clone` 讓每行片段各自完整呈現 3px 水平內距與下劃線（內距對稱抵消 margin，不影響字位）；行內連結屬 WCAG 2.5.8 inline 例外，不強求 44px 觸控目標（2026-11-13 移除 padding-block:14px——hover 底色曾遮蓋上下行）。**無 hover 底色**（2026-11-13，附註性質；亮黃紙底 hover 僅保留給 `a.board-row`、`.menu-shortcut a`、`.faq-item summary` 等區塊連結）；下劃線＋紅字為連結訊號，鍵盤由全域 `a:focus-visible` 3px 紅框負責。電話在首頁資訊卡為純文字，不做 tel: 連結（2026-11-12）。

#### 首頁 hero 照片卡 `.hero-photo`（2026-11-18 登記）

首頁 hero 右欄自 2026-11-18 起由「大吉祥物」改為**紙邊照片卡**，是實拍照片元件在首屏的延伸，不是新元件家族。

- **外殼**：`<figure class="hero-photo">`，紙白襯邊 `padding:10px 10px 0`、`3px` 墨棕框、`6px 6px 0 var(--brown-deep)` 硬陰影、`rotate(1deg)`；`width:100%`、`max-width:620px`、`justify-self:end`（桌機靠右）。傾斜在容器上，文字與 figcaption 不傾斜。
- **照片**：單一 `assets/og-image.jpg`（67,944B、1200×630 實拍生鮮食材配置），直接 `<img>`，**不另給 WebP**——og-image.webp 重壓後 87,646B 反而比原 JPEG 大，對 LCP 是退步，HTML 沒有 `<source>`；`fetchpriority="high"`、`decoding="async"`、**不 lazy**（首屏）；`img` 為 `width:100%;height:auto;display:block`，滿版貼齊紙邊。
- **左上價標 `.hero-photo__price`**：`--yellow` 底＋`--deep` 字、`2px` 墨棕框＋`2px 2px 0 var(--ink)` 硬陰影、`−6°`、`tabular-nums`、15px／900、`white-space:nowrap`；內容「170 元起・多數 190」。**hero 唯一價格來源**（`hero-facts` 已於 2026-11-18 改為無價格的單條紙白事實帶，見下節）。
- **右下吉祥物貼紙 `.hero-photo__mascot`**：`mascot-hero-148.png`（`74w`／`148w` srcset、`sizes="78px"`）顯示 78px；紙白底＋`2px` 墨棕框＋`2px 2px 0 var(--ink)` 硬陰影、圓角 4px、`−6°`；`alt=""`（裝飾）、`loading="lazy"`。
- **圖說**：`<figcaption>` 在照片下方襯邊內，13px／`--note`／1.7 行高，文案「照片為入鍋前的生鮮食材配置。」（照 `PRODUCT.md` 文案紅線：不得寫成成品湯照）。
- **桌機版面**：`.hero` 維持沙米底並加 `2px` 墨棕下框（與下方區塊切開）；`.hero-content` 改 `grid-template-columns:1fr 1.06fr`、`gap:52px`（文字 1／照片 1.06）。
- **≤920px**：`.hero-content` 收單欄，`.hero-photo` 以 `order:-1` 排在文字之前、`justify-self:stretch`、取消傾斜（`transform:none`）。
- **≤680px**：照片左右出血滿版（`margin:0 -22px`、`width:calc(100% + 44px)`，不用 `100vw`，避免捲軸寬差造成水平捲動）；拆掉紙邊與外框陰影，只留上下 `2px` 墨棕框；價標改釘在照片內側（`top:12px`／`left:14px`、14px 字）；吉祥物貼紙縮為 60px。
- **不加 `drop-shadow`**：照片與貼紙一律用 `box-shadow` 實色偏移，hero 自 2026-11-18 起已無 `filter: drop-shadow`。

#### hero 事實帶 `.hero-facts`（2026-11-18 登記）

首頁 hero 左欄自 2026-11-18 起，把三個 `<li>`（素食三款／不用訂位／店旁公共停車場，步行約 1 分鐘）從**三個獨立 chip** 收斂成**單條紙白事實帶**——HTML 結構不動（`<ul class="hero-facts">` ＋ 三個 `<li>`、順序不變），改的是 CSS 呈現。

- **單條紙白盒子**：整列以 `--paper` 紙白底＋2px 墨棕框＋`2px 2px 0 var(--ink)` 硬陰影作為單一外殼；三項不再各自帶底色、框與陰影。
- **虛線分隔**：項與項之間以 1px `--dash` 虛線分隔（`--dash` 僅作虛線分隔，不得當文字色）；外殼承擔結構、虛線承擔項界，不再有個別的盒子輪廓。
- **第 3 項（停車，最長的一項）≤680px 整列**：`nth-child(3)` 在 `≤680px` 改佔滿整列顯示，分隔由左側虛線改為上邊 1px dashed `--dash`——避免三項在窄寬下擠成三行或讓停車資訊斷行。
- **無框 chip 的調整**：`<li>` 移除原獨立 chip 樣式（各自紙白底＋2px 框＋2px 硬陰影、4px 圓角、`gap:9px`，`≤680px` 原 `gap:6px`），改為無框的純文字項（字重 900、15px、line-height 1.5；第 3 項 ≤680px 為 14px）；事實帶是資訊列，不是徽章群——不傾斜、不加芥末黃底。
- **無價格**：全三項皆非價格項；hero 唯一價格仍是照片卡左上 `.hero-photo__price`（「170 元起・多數 190」），事實帶不得再加價格。
- **間距（2026-11-18 收緊）**：h1 → 段落 22px → **12px**；段落 → 事實帶 **28px**（`.hero-facts` 上距，原 22px）；事實帶 → CTA **28px**（`.hero-links` 上距，原 26px）；CTA → 開鍋晶片 **14px**（`.open-now--hero` 上距，原 22px）。事實帶與按鈕列、晶片之間的垂直節奏以此為準。
- **JS**：事實帶為靜態資訊列，無 JS 行為；關 JS 時三項事實仍完整可讀。

### 位置示意圖元件 `.map-studio`（2026-11-14 登記，設計稿移植）

`visit.html` 的地圖區塊整包移植自設計稿 `鍋序位置地圖-html/Main.dc.html`。**這是本站第二個明文視覺例外**（第一個是吉祥物的 `drop-shadow`）：使用者裁定保留設計稿的木框、黃銅排字牌、銅釘、漸層與點陣字，因為那個區塊的設定是「掛在網頁上的一塊實體招牌」，不是頁面內容的一部分。

- **例外邊界**：木框的顏色**只在 `:root` 的 `--map-*` 群組裡**（26 個 token，含 `--map-canvas`、`--map-wood`、`--map-brass`、`--map-sign`、`--map-pin` 等）。`--map-*` 出了 `.map-studio` 就不得使用；本站的 `--red` 仍是唯一行動色，木框的黃銅與路牌藍不參與任何 UI 狀態。漸層同理：只出現在 `.map-frame`、`.map-plaque`、`.gx-glow`、`.map-address` 與 `.map-studio` 的點紋底。
- **沒有搬進來的東西**：React runtime（`vendor/react*.js` 142KB＋`support.js` 46KB）只為了渲染一個靜態版面，一行都不進 repo；`<x-dc>`、`<helmet>`、`text/x-dc` 區塊也一併拆掉。
- **版面**：不用 `transform:scale`、不用 JS，靠百分比 `padding`（`62/50/76` 相對 1100 寬）＋ `cqw` 等比縮放。`.map-studio` 與 `.map-window` 各自是 `container-type:inline-size`，所以外框與圖上的 overlay 可以分別以各自的寬度換算字級。這是全站唯一的 container query。
- **字型**：`DotGothic16` 自架 subset（`assets/fonts/dotgothic16-subset.woff2`，只用得到的約 45 字），`font-family:'DotGothic16','Noto Sans TC',sans-serif`。**DotGothic16 只有 400 一個字重**，所以 `.map-studio *{font-weight:400}` 是必要的——否則繼承到 900 會觸發合成粗體，把像素邊緣糊掉。繁體專用字（鄉／縣／號／圖／際／實／義）若不在字型裡，會逐字落回 Noto Sans TC，這是可接受的混字而不是壞字。
- **圖**：`map-guoxu.png`／`map-guoxu.webp`（20,890／7,948B），`<picture>` 先給 WebP。原生設計稿只有 480×256，資產是 2× NEAREST 倍增值，顯示寬度約 1:1，`image-rendering:pixelated` 在 ≤680px 關閉（那裡是縮圖，像素內插會鋸齒）。
- **方位**：中正大學在畫面左下方。設計稿原本只有**指北針**是錯的（`rotate(-63.4 37 37)` 指左上），改為 `rotate(-116.6 37 37)`；「往國立中正大學」那支箭頭的 SVG 本身是朝左繪製，`rotate:-26.6deg` 正好使它指向左下，**沿用設計稿原值不動**。
- **動態**：`gx-bob`／`gx-ring`／`gx-ring2`／`gx-glow`／`gx-shadow` 全部由 `infinite` 改為 **3 次**（最長 7.2 秒），避免 WCAG 2.2.2 的「超過 5 秒的並行動畫需提供暫停機制」。`prefers-reduced-motion` 下全關。
- **≤680px**：路牌、指北針、停車 chip、地址牌、示意圖角標全部隱藏，字級改用固定 px 下限；停車資訊已寫進 `.map-sub`，收掉 chip 不掉資訊。1100px 的構圖在 320px 本來就不可能等比可讀（13px 標籤會縮成 3px），所以低於斷點是換一套簡化版，不是縮小版。

### Inputs / Fields
本站無表單輸入；僅有連結與按鈕。焦點一律 3px 外框，紅底區塊用奶油色內縮框。

### Navigation
頁首 min-height 64px（內容多時可長）紙白底＋2px 墨棕底邊；logo 吉祥物 40px、店名 19px；導覽主軸 14px/900、次要 13px/400，懸停變鍋湯深紅，現行頁以紅色底線標記。首頁開鍋晶片置於 hero（.open-now--hero），內頁留在頁首。手機版 44px 漢堡選單展開為整列，桌面版常駐。≤680px 頁首收為 64px 單行：logo 只留吉祥物圖示 36px（文字隱藏）、頁首「導航」CTA 隱藏（404 保留「回首頁」），狀態晶片保留完整短字。

### 社群 QR 按鈕（.ig-qr／.line-qr）（2026-11-14 登記）
2026-11-14 用戶裁決：**QR 維持現狀**——不加可見文字標籤、不改手機文字按鈕；`visit.html` 資訊卡與 footer 兩組 QR 都保留（footer IG 80px／LINE 72px，visit 144px／136px）。

### Tables
價目與營業時間皆為 2px 墨棕邊表格，表頭沙米底，列間 1px 虛線；今日／週六用亮黃紙整列標示，今日加紅色「今天」貼標，不另加圖示。

## Do's and Don'ts

### Do:
- **Do** 用 900 字重與硬陰影說話，保留 Noto Sans TC 400/700/900 單一字體。
- **Do** 價格只寫在菜單頁 `<td class="price">` 文字；首頁只寫摘要「170 元起，多數 190」。
- **Do** 週六是唯一中午時段，所有時間呈現必須與 PRODUCT.md 一致。
- **Do** 觸控目標至少 44px，關 JS 時菜單與營業時間仍可讀。

### Don't:
- **Don't** 用模糊陰影、漸層或第二口音色稀釋鍋湯深紅。
- **Don't** 編品牌故事、寫「招牌」、評分或自創品名（如「沙茶豬肉鍋」）。
- **Don't** 一句 `17:00-21:30` 打天下，營業時間與 JSON-LD 必須逐日分開。
- **Don't** 在首頁逐項列價或在菜單頁加價格 JS 試算。
