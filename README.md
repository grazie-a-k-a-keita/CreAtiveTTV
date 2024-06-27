## CreAtiveTTV

入力されたテキストを音声として出力するサービス

※ TTVとは、 `Text to Voice` の略

### How To Develop

#### React - Vite

```bash
# サーバー起動
$ bun dev
```

#### Firebase Hosting - 初回

[Firebase ドキュメント](https://firebase.google.com/docs/hosting/quickstart?hl=ja)

1. Firebase CLI をインストールする

```bash
$ bun add firebase-tools
```

2. `package.json` に `script` を追加

```js
"scripts": {
  ...
  "firebase": "firebase"
}
```

3. Firebase CLI にログイン

```bash
$ bun run firebase login
$ bun run firebase projects:list
```

4. プロジェクトを初期化する

```bash
$ bun run firebase init hosting
```

5. サイトにデプロイする

```bash
$ bun run firebase deploy --only hosting
```

#### Firebase Hosting - 開発後

1. ビルド

```bash
$ bun run build
```

2. 再デプロイ

```bash
# 未ログイン状態の場合はログインを先に行う
$ bun run firebase deploy --only hosting
```

### Web Speech API

- [Web_Speech_API](https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API)
- [SpeechSynthesisUtterance](https://developer.mozilla.org/ja/docs/Web/API/)

### commit message

| TH       | TH                                     |
| -------- | -------------------------------------- |
| feat     | 新しい機能                             |
| fix      | バグの修正                             |
| docs     | ドキュメントのみの変更                 |
| style    | 空白、フォーマット、セミコロン追加など |
| refactor | 仕様に影響がないコード改善(リファクタ) |
| perf     | パフォーマンス向上関連                 |
| test     | テスト関連                             |
| chore    | ビルド、補助ツール、ライブラリ関連     |

### Domain

- [creative-ttv.web.app](https://creative-ttv.web.app/)
- [creative-ttv.firebaseapp.com](https://creative-ttv.firebaseapp.com/)
