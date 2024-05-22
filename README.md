# Sidewalk

このプロジェクトは、日本と韓国の飛行に関する情報（航空券、空港、航空会社、為替など）を視覚化して提供するウェブサイトです。

## 紹介

日本と韓国を行き来しながら、航空券や為替データに関心を持つようになり、これらのデータを一目で見られるように視覚化したサイトがあれば便利だと考え、このプロジェクトを始めました。
新しい技術や開発の知識をこのプロジェクトに取り入れながら、様々なサービスを追加し、日本や韓国に興味のあるユーザーが便利に利用できるプラットフォームに成長させることを目指しています。

- 開発期間：2023年12月6日～2024年5月21日
- 開発人数：1

## Tech Stack

### Environment
<p>
    <img src="https://img.shields.io/badge/windows-0078D4?style=flat-square&logo=windows&logoColor=white">
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat-square&logo=Visual Studio Code&logoColor=white">
    <img src="https://img.shields.io/badge/git-F05032?style=flat-square&logo=git&logoColor=white">
    <img src="https://img.shields.io/badge/github-181717?style=flat-square&logo=github&logoColor=white">
</p>

### Config

<img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white">

### Development

<p>
    <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=black">
    <img src="https://img.shields.io/badge/node.js-339933?style=flat-square&logo=Node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white">
    <img src="https://img.shields.io/badge/next.js-000000?style=flat-square&logo=next.js&logoColor=white">
    <img src="https://img.shields.io/badge/recoil-3578E5?style=flat-square&logo=recoil&logoColor=white">
    <img src="https://img.shields.io/badge/prisma-2D3748?style=flat-square&logo=prisma&logoColor=white">
    <img src="https://img.shields.io/badge/postgreSQL-4169E1?style=flat-square&logo=postgreSQL&logoColor=white">
    <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2kz1h9OozlCgjx7krHurWw.png" height="27">
</p>

### Deploy

<img src="https://img.shields.io/badge/vercel-000000?style=flat-square&logo=vercel&logoColor=white">

### Communication

<img src="https://img.shields.io/badge/notion-000000?style=flat-square&logo=notion&logoColor=white">

## Architecture

```plaintext
./
    | app
        | [locale]          ：ページフォルダ
        | api
            | airlines      ：航空情報
            | airports      ：空港情報
            | dashboard     ：ダッシュボード情報
            | flights       ：フライト情報
            | external-apis ：外部 APIs
    | components
        | atoms
        | molecules
        | organisms
        | templates
        | styles.ts         ：コンポネントで使用される共通スタイルを定義
    | hooks
        | providers         ：プロバイダー向けのフォルダ
        ...                 ：共通フックスが集まっている
    | messages              ：多言語対応のためのメッセージフォルダ
        | ja.json
        | ko.json
    | prisma
        | dummy             ：ダミーデータ
        | migrations        ：マイグレーションファイル
        | prisma.ts
        | schema.prisma
    | public
        | fonts
        | images            ：イメージファイル
        | map               ：日本と韓国の地図ファイルがある
        | svgs
    | store                 ：Clientグローバルステータスのフォルダ (Recoil)
    | styles                ：グローバルスタイル
    | types                 ：グローバルタイプ
    | utils
    ...
```

## Features

### ダッシュボード

    初めての画面であるダッシュボードでは、航空券と為替レートの情報を一目で確認できます。

<img src="public/readme/dashboard-ticket.png" alt="Dashboard" width="1000"/>
<img src="public/readme/dashboard-kawase.png" alt="Dashboard" width="1000"/>

#### 航空券

1. 日本と韓国の平均航空券価格
   - 今年の基準で日本行、韓国行のチケット価格を表示
2. 安い及び高い航空券の曜日
   - チケット価格のデータの基準で安い、高い曜日を表示
3. 明日の航空券のチケット
   - 明日の日本行、韓国行安い往復のチケットを表示
4. オススメの旅行先
   - 人気がある旅行先の情報を表示 (まだ、機能追加されてない)
5. オススメの旅行チケット
   - ランダムでチケットを表示
   - クリックし、フライトページに遷移 (まだ、機能追加されてない)
6. 航空券の平均価格グラフ
   - 現在の基準で前後一週間のチケットの価格をグラフで表示

#### 為替

1. 日韓間の為替レート

   - USD基準で日韓間の為替を表示
   - 為替の右で昨日との為替を比べて増減数値を表示
   - 更新された時間データを表示

2. 円とWONの為替が高い、安い時の価格
   - 今月の基準で為替の安い時、高い時の価格を表示
3. 為替計算機
   - 現在の為替基準で計算した値を表示
   - 円からWON、WONから円に交換ができる
4. 為替グラフ
   - 国を選択する事ができ、選択されたデータを表示
   - 年、月、日の選択ができて時間的なデータを表示

#### 空港情報

    日韓にある空港情報を見れるページ

<img src="public/readme/airports-page.png" alt="airports" width="1000"/>

1. 空港情報

   - 日韓の選択バトンを押したら選択された国の空港情報を表示
   - 空港の数と更新日を表示

2. 空港の基本情報が表示される
3. 空港の天気の情報が表示される
4. 空港リンククリックすると該当空港サイトに遷移

#### 航空社情報

    日韓を行き来する航空社の情報をみれるページ

<img src="public/readme/airlines-page.png" alt="airlines" width="1000"/>

1.  日韓を行き来する航空社の情報を表示
2.  リンククリックすると該当航空社サイトに遷移
3.  航空社のタイプによって整列が可能

#### フライト情報

    フライトの検索結果とか日韓の地図を見れるページ

<img src="public/readme/flights-page-01.png" alt="flights1" width="1000"/>
<img src="public/readme/flights-page-02.png" alt="flights2" width="1000"/>
<img src="public/readme/flights-page-03.png" alt="flights3" width="1000"/>
<img src="public/readme/flights-page-04.png" alt="flights4" width="1000"/>

1.  ナビゲーションの検索結果によってフライトの情報を表示
    - 左サイドからスライドパンネルが出てきて検索結果によってフライトの情報を表示
2.  日韓の図

    - 空港の情報を図の上に赤い丸で表示
    - Hoverすると、現在の言語による空港のタイトルを表示
    - 拡大、クリックして図を移動する事ができる

#### ナビゲーション

    ナビを担当するページ

<img src="public/readme/nav-page-01.png" alt="nav-page-01" width="1000"/>
<img src="public/readme/nav-page-02.png" alt="nav-page-02" width="1000"/>
<img src="public/readme/nav-page-03.png" alt="nav-page-03" width="1000"/>
<img src="public/readme/nav-page-04.png" alt="nav-page-04" width="1000"/>
<img src="public/readme/nav-page-05.png" alt="nav-page-05" width="200"/>

1.  フライト条件操作

    - 旅行先を選択バトンタッチ
      - 日韓の旅行先を選択できるパンネルがバトンの下に出る
      - 出発地で日本を選択したら、目的地には韓国にある空港しか選択ができない
    - 往復か片道かを選択
    - 上の条件によって旅行の日にちを選択ができるカレンダーパンネルが出る
    - 希望価格を選択する事ができる
    - 検索バトンタッチすると、条件データが存在したらフライトページに遷移

2.  日韓言語選択

    - 日韓言語選択バトンタッチするとバトンの下に選択バトンが出てきて希望な言語選択する事ができる

3.  ページによって代表タイトルを表示

### 参考サイト

---

#### API

- [Flights API](https://uat.developers.amadeus.com/)
- [Weather API](https://openweathermap.org/)
- [Currency API](https://currencylayer.com/)
- [Curl to fetch](https://uat.developers.amadeus.com/)

#### CSS

- [Loading Animation](https://loading.io/css/)
- [Animation cubic-bezier](https://cubic-bezier.com/#0,0,1,1)
- [Box shadow](https://getcssscan.com/css-box-shadow-examples)

#### Design

- [design 1](https://www.behance.net/gallery/190465533/RadCare-Web-App?tracking_source=search_projects%7Cweb+design+panel&l=39)
- [design 2](https://www.behance.net/gallery/168827057/Web-Service-For-Buying-Plane-Tickets?tracking_source=search_projects%7Cairport+web+design&l=43)
- [design 3](https://www.behance.net/gallery/192951329/Salse-Management-Dashboard?tracking_source=search_projects%7Cweb+design+panel&l=38)

#### Image

- [Icons 1](https://www.svgrepo.com/svg/497141/global)
- [Icons 2](https://icon666.com/)
- [Icons 3](https://simpleicons.org/)
