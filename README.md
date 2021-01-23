# ts-node-template

TypeScriptを利用してnode.jsの開発を行うためのテンプレートです。<BR>
主に次のものをサポートしています。

* TypeScript
* jest
* eslint
* prettier
* typedoc

## dev dependencies modules.

次のモジュールは [package.json](/package.json) で管理しています。

* typescript
* tsc-alias
* ts-node
* ts-node-dev
* tsconfig-paths
* jest
* ts-jest
* babel-jest
* eslint
* eslint-config-prettier
* eslint-plugin-prettier
* eslint-plugin-jest
* prettier
* typedoc
* @types/jest
* @babel/core
* @babel/preset-env
* @babel/preset-typescript
* @typescript-eslint/parser
* @typescript-eslint/eslint-plugin
* rimraf
* husky
* lint-staged

## 要件

* Linux / MacOS
* Node.js v12.9 or latter
* yarn

## インストール

`git clone` したディレクトリ内で `yarn` を実行します。

## 設定

各モジュールの設定について説明します。

### tsc

* ES2019
* CommonJS
* Java Scriptのコードを許可
* 型チェックなどのオプションの無効化
  * noImplicitAny
  * strictNullChecks
  * strictFunctionTypes
  * strictBindCallApply
  * strictPropertyInitialization
  * noImplicitThis
  * noUnusedParameters
* nodeモジュール
* モジュールのパスエリアス設定 `/src/foo.ts` -> `@/foo.ts`
  * `ts-node` でパスエリアスを有効にするには、`tsconfig-paths` が必要.
  * `tsc` でパスエリアスを有効にするには、`tsc-alias` が必要.

なお利用するNode.jsのバージョンによって `target` と `lib` は変更して下さい。

| Node.js version | target | lib |
| --- | --- | --- |
| v12.9 | ES2019 | ES2020 |
| v14 | ES2020 | ES2020 |

#### 設定ファイル

* [tsconfig.json](/tsconfig.json)

### jest

* ts-jest有効化
* モッククリア有効化
* モジュールのパスエリアス設定 `/src/foo.ts` -> `@/foo.ts`

#### 設定ファイル

* [jest.config.json](/jest.config.json)

### eslint

* eslint:recommended有効化
* typescript-eslint有効化
* prettier有効化

#### 設定ファイル

* [.eslintec.js](/.eslintrc.js)
* [tsconfig.eslint.json](/tsconfig.eslint.json)

### prettier

* eslintのrulesを参照

#### 設定ファイル

* [.eslintec.js](/.eslintrc.js)
* [.prettierrc.json](/.prettierrc.json)
* [.prettierignore](/.prettierignore)

### husky

* git commit前にlintを実行する

#### 設定ファイル

* [package.json](/package.json)

### lint-staged

* gitのステージに上がっているファイルに対し、eslintを実行する

#### 設定ファイル

* [package.json](/package.json)

## ビルド及び実行/テスト

出力ディレクトリは `./dist` です。

#### 出力ディレクトリをクリーンする

```
yarn clean
```

### ビルドする

```
yarn build
```

### 実行する

トランスパイルしたコードでアプリケーションを実行します。

```
yarn start
```

### 開発モードで実行する

```
yarn dev
```

コードの修正を検知して再実行したい場合はこちらです。

```
yarn dev:watch
```

### テストする

```
yarn test
```

カバレッジを確認する場合はこちらです。

```
yarn test:cov
```

### チェックスタイル、フォーマッター

```
yarn lint
```

チェックと同時に問題を修正します。

```
yarn lint:fix
```

### ドキュメント生成

```
yarn typedoc
```

## 参照

* [TypeScript 日本語](https://www.typescriptlang.org/ja/)
* [TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/)
* [JEST 日本語](https://jestjs.io/ja/)
* [ESLint rules](https://eslint.org/docs/rules/)