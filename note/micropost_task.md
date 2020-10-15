# ToDoアプリを作ろう
## 目標
ToDoアプリの作成を通して、HTML, CSS, JavaScriptの基礎を学ぶ
## 課題
* ToDoアプリの作成
* 課題の追加,削除(完了時)を行うことができる
* ToDoタスクはArrayなどで保管し、ページをリロードすると消える様な実装を想定
## 学習内容
### HTML
* etc
### CSS
* class, id
* etc
### JavaScript
* dom操作
＊ etc

# ToDoアプリをウェブアプリケーションとして作成しよう
## 目標
ToDoアプリをNode.jsを用いてWebアプリケーションとして作成し、Webアプリケーション開発の基礎を学ぶ
## 課題
* Node.js/express.jsで実装し直す
* 前章同様に、ToDoタスクはArrayなどで保管し、サーバーを再起動すると消える様な実装
* 同時に複数のユーザーがアクセスした時、同じものが見えてしまう。同時に同じ操作を行いエラーなどとなることを期待 (次章移行で認可、排他制御を学ぶ）
## 学習内容
### node.js
* httpサーバーを起動し、GETリクエストを処理する (localhost:3000 にアクセスし、なにかが返ってくる程度)
* パスの概念(path を変えGETリクエストを行うとレスポンスが変わるなど)
### npm
* 外部モジュールの存在(express.js) / 今までは自分で作成したモジュールのみを扱っている
* npm を用いて外部モジュールをインストールできる
### express.js
* etc.

# データベースについて
## 目標
今まで作成していたアプリケーションは永続化の仕組みを持たない。データベースを利用して永続化する。
## 課題
ToDoアプリにデータベースを組み込む。
## 学習内容
### データベース
* 自分でインストールするならMySQLのインストール
* 面倒くさいことすべて
### ToDoデータベース
* todo アプリケーションで必要なデータ構造の検討(設計)
* todo データベースの作成
* tasks テーブルの作成
* CRUD (Insert, Select, Delete (Updateはないかも) によるToDoタスクの操作


# アプリケーションとデータベースの接続
## 目標
Node.jsからデータベースに接続し、前前章でArrayに保存してたやつをデータベースにいれる
## 課題
## 学習内容
### DB操作
* 生のconnectionを操作
### ライブラリを利用
* knex.js
### 排他制御 (トランザクション)
* 同じタスクを同時に消してもエラーにならない（変なことにならない）

# 認証、認可
## 目標
今までのアプリケーションは誰でも見て、タスクを作成、削除することができた  
サインイン機能を作成し、自分のタスクは自分のみが作成、削除できるようにする  
他のユーザのタスクは参照することだけできるようにする
## 課題
* サインアップ、サインイン機能の追加 (認証)
* 自身のタスクのみ更新(CRUDのCreate,Delete)できるように。他社のタスクは参照のみ(CRUDのRead)
## 学習内容
### 生で認証機能を実装する
* userテーブルを作成
* 生でサインイン、サインアップ機能を実装してみる
### パスワードを安全に保管するには？
* ハッシュ関数について
* bcrypt
### passport.js
* いくつか実装させたのち passport.jsミドルウェアの導入

# 最終課題
## 目標
よりそれっぽいアプリケーションを作成する。Micropost(Todoと機能はほぼ同じなので、容易に取り組める）
## 課題
* micropost


---

## HTML
### 課題
プロフィールページを作成する

### 達成目標
* htmlの基本構文を書くことができる
* \<h>タグで見出しを作成できる
* \<ui>タグ、\<li>タグでリストを作成できる
* \<img>タグで画像を表示できる
* \<a>タグでリンクを作成できる


## CSS
### 課題
プロフィールページに装飾を加える

### 達成目標
* cssの適用方法がわかる
* margin、paddingで余白を設定できる
* heightで高さを設定できる
* widthで幅を設定できる
* borderで線のスタイル、太さ、色を指定できる
* font-sizeで文字の大きさを指定できる
* font-weightで文字の太さを指定できる
* colorで文字の色を指定できる
* floatで要素を横並びにできる


## JavaScript
### 課題
JavaScriptコンソールを基本文法を学習する

### 達成目標
* 変数・定数の宣言、変数の代入方法がわかる
* if文で条件分岐ができる
* 配列を生成し、配列の参照ができる
* for文で配列をループで処理できる
* データ型とその種類がわかる
* 比較演算子とその種類がわかる
* 関数、非同期関数の宣言方法がわかる
* モジュールのインポート/エクスポート方法がわかる
* console.log()を用いて出力できる

## npm
### 課題
パッケージをインストールする

### 達成目標
* パッケージとは何かがわかる
* npmとは何かがわかる
* npm installでパッケージをインストールできる
* package.jsonの役割がわかる
* package.jsonの役割がわかる
* /node_modulesが何かがわかる


## Node.js基礎
### 課題
Node.jsでHTTPサーバを作成する

### 達成目標
* HTTP, HTTPサーバとは何か、メソッドとはなにか
* ポートとは
* ブラウザを利用しGETリクエストを行い、Node.jsによるHTTPサーバーで処理することができる
* ブラウザのFormを利用しPOSTリクエストを行い、POSTデータを受け取り処理することができる

### 参考資料
* [Node.js入門](http://www.tohoho-web.com/ex/nodejs.html)

## Node.js応用
### 課題
Node.jsでアプリケーションを作成する

### 達成目標
* URIとは (パスによるルーティングができる)
* Node.jsを使用したウェブアプリケーションが作成できる
* 関数を作成できる

### 参考資料
* [Nodeビギナーズブック](https://www.nodebeginner.org/index-jp.html)


## Express.js基礎
Express.jsの基礎を学習する

### 達成目標
* express-generatorを使用したウェブアプリケーションが作成できる
* express-generatorによって生成される各ディレクトリの役割がわかる
* ルーティングを定義できる
* ミドルウェアを作成、使用できる
* テンプレートファイルのレンダリング方法がわかる
* テンプレートエンジンEJSを使用できる

### 参考資料
* [Express チュートリアル Part 2: スケルトン Web サイトの作成](https://developer.mozilla.org/ja/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
* [基本的なルーティング](https://expressjs.com/ja/starter/basic-routing.html)
* [ルーティング](https://expressjs.com/ja/guide/routing.html)
* [Express アプリケーションで使用するミドルウェアの作成](https://expressjs.com/ja/guide/writing-middleware.html)
* [ミドルウェアの使用](https://expressjs.com/ja/guide/using-middleware.html)
* [Expressでのテンプレート・エンジンの使用](https://expressjs.com/ja/guide/using-template-engines.html)
* [EJS](https://ejs.co/#docs)


## データベース
### 課題
データベースの基礎を学習する

### 達成目標
* データベースとはなにかがわかる
* テーブルとはなにかがわかる
* カラムとはなにかがわかる
* データ型とはなにかがわかる
* int、varchar、datetime、tinyintがどのようなデータを持つかがわかる


## MySQL
### 課題
MySQLの環境構築をする

### 達成目標
* ユーザのパスワードを設定できる
* MySQLを起動、停止できる
* MySQLにログインできる


## SQL
### 課題
SQLを用いて以下を行う
* データベースの作成
* テーブルの作成
* データの追加
* データの変更
* データの削除
* データの取得

### 達成目標
* SQLとは何かがわかる
* CREATE DATABASE文でデータベースを作成する
* CREATE TABLE文でテーブルを作成できる
* INSERT文でデータを追加できる
* UPDATE文でデータを更新できる
* DELETE文でデータを削除できる


## Knex.js
### 課題
todoアプリを作成する

1. 準備
    1. express-generatorをインストール  
        `npm install express-generator -g`
    1. テンプレートアプリを生成  
        ※テンプレートエンジンはejsを選択  
        `express TodoApp --view=ejs`
    1. 生成されたアプリ直下に移動  
        `cd TodoApp`
    1. knex.jsとmysqlモジュールをインストール  
        `npm install knex mysql`
    1. todo-appで使用するデータベースを作成  
        データベース名はtodoappとする
    1. **knex.jsのmigration機能で** todo-appで使用するテーブルを作成する
        - テーブル名  
            task
        - カラム
            - id  
                属性: AUTO_INCREMENT、PRIMARY KEY
            - title  
                型: varchar(255)  
                属性: NOT NULL  
                ※todoのタイトル用のカラム
            - content  
                型: varchar(255)  
                属性: NOT NULL  
                ※todoの内容用のカラム
        - 完成イメージ  
            `mysql> show columns from task;`
            | Field | Type | Null | Key | Default | Extra |
            | :--- | :---: | ---: | ---: | ---: | ---: |
            | id | int unsigned | NO | PRI | NULL | auto_increment |
            | title | varchar(255) | NO || NULL ||
            | content | varchar(255) | NO || NULL ||

    1. **knex.jsのseed機能で** taskテーブルにサンプルデータを投入する

1. 実装  
    Todoアプリの機能
    - Todoを登録できる機能 ※「登録」ボタンより
    - 完了したTodoを削除できる機能 ※「削除」ボタンより
    - Todo一覧を見れる機能

    URL
    - /
        - Todoを登録するためのフォーム (タイトル・内容の2つ) 、「登録」ボタンが表示される
        ※

    - /todo
        - 登録されているTodo (のタイトル・内容) を一覧表示する
        - 各Todoに「削除」ボタンを置く

上記の内容を満たすように実装してください。  
DBの操作は参考資料にある、knex.jsのドキュメントを参考にしてください。

### 達成目標
* MySQLの環境構築、データベースの作成ができる
* migrationを実行し、テーブルを作成できる
* seedを実行し、レコードを追加できる
* .select、.insert、.delを扱える
* .then、.catchを用いて、DB処理の正常終了時とエラー時の処理を実装できる
* DBから取得したデータをEJSファイルに渡し、表示させることができる
* \<form>タグ、\<input>タグで入力フォームを作成し、入力データをPOSTで送信できる
* \<input>タグで type="hidden" を用いて、非表示のデータをPOSTで送信できる


## Passport.js
### 課題
Todoアプリに以下の機能を追加する  
- ユーザ登録機能
- サインイン (ログイン) 機能
- ログアウト機能

### 準備
1. 認証、ログインに使用するパッケージをインストールする  
`npm install passport passport-local`

1. knex.jsのmigration機能でuserテーブルを作成する
    - テーブル名  
        user
    - カラム
        - id  
            属性: AUTO_INCREMENT、PRIMARY KEY
        - username  
            型: varchar(255)  
            属性: NOT NULL, UNIQUE  
            ※ユーザ名用のカラム
        - password  
            型: varchar(255)  
            属性: NOT NULL  
            ※パスワード用のカラム
        - isAdmin
            型: varchar(255)  
            属性: NOT NULL  
            ※管理者権限の有無を管理するカラム
    - 完成イメージ  
        `mysql> show columns from task;`
        | Field | Type | Null | Key | Default | Extra |
        | :--- | :---: | ---: | ---: | ---: | ---: |
        | id | int unsigned | NO | PRI | NULL auto_increment |
        | username | varchar(255) | NO || NULL ||
        | password | varchar(255) | NO || NULL ||
        | isAdmin | tinyint(1) | YES || NULL ||
​
### 実装
- /signup  
    以下を表示する
    - ユーザを登録するためのフォーム
        - UserName ※ユーザ名の入力欄
        - Password ※パスワードの入力欄
    - 「Sign up」ボタン　※押下で登録される

- /signin  
    以下を表示する
    - ログインするためのフォーム
        - UserName ※ユーザ名の入力欄
        - Password ※パスワードの入力欄
    - 「Sign in」ボタン ※押下で認証を行い、問題なければサインイン (ログイン)  
        認証、ログインの実装方法は参考資料にあるpassportjsの資料を参考にしてください

- ヘッダー  
    各ページの上部に配置する ※header.ejsを作成し、各ページにincludeしてください  
    ヘッダー内には以下の項目を表示する
    - 未ログイン
        - 「Sign up」※押下で/signupに遷移
        - 「Sign in」※押下で/signinに遷移
    - ログイン済み
        - 「logout」※押下でログアウト  
            ログアウトの実装方法は参考資料にあるpassportjsの資料を参考にしてください

### 達成目標
* passport.jsを用いてユーザの認証、ログイン、ログアウトが実装できる
* ejsのincludeが扱える


## パスワードの扱い方
### 課題
パスワードの保存についての注意点と対策を学習する

### 達成目標
* 平文での保存の危険性がわかる
* ハッシュとは何かがわかる
* md5とは何かがわかる


## bcrypt
### 課題
bcryptを用いて、Todoアプリのパスワード保存部分を平文保存からハッシュ値保存に変更する

### 達成目標
* bcryptでハッシュ化することができる

### 参考資料
* https://www.npmjs.com/package/bcrypt
* https://github.com/kelektiv/node.bcrypt.js


## modal
TodoアプリのTodo削除時にmodalを表示する

### 達成目標
* modalとは何かがわかる
* JavaScriptでmodalを表示することができる


## セッションとCookie
### 課題
セッションとCookieが行っていることを学習する

### 達成目標
* セッションとCookieの役割、違いがわかる


## express-session & cookie-parser
### 課題
express-sessionとcookie-parserを用いて、Todoアプリにログイン維持機能を追加する

### 達成目標
* express-sessionを用いたセッション管理ができる
* cookie-parserでcookieを設定できる

### 参考資料
* https://github.com/expressjs/session/blob/master/README.md
* https://blog.capilano-fw.com/?p=5655


## SMTP
### 課題
SMTPの概要を学習する

### 達成目標
* SMTPがどのようなプロトコルなのかがわかる
* SMTPサーバの役割がわかる


## nodemailer
### 課題
nodemailerを利用し、Todoアプリにパスワードリセット機能を追加する

### 達成目標
nodemailerでgmailを送信できる

### 参考資料
* https://nodemailer.com/about/


## Bootstrap
### 課題
TodoアプリにBootstrapを適用する

### 達成目標
* グリッドシステムを使用し、レスポンシブル対応ができる
* btnでボタンのデザインを指定できる


### 参考資料
* https://getbootstrap.jp/docs/4.2/getting-started/introduction/ 
