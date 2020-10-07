## 10/7 ~ 10/9 の課題
Todoアプリの作成

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
    1. MySQLをインストール
    1. MySQLサーバーを起動
    1. rootユーザのパスワードを設定
    1. todo-appで使用するデータベースを作成  
        データベース名はtodoappとする
    1. knex.jsのmigration機能でtodo-appで使用するテーブルを作成する
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

    1. knex.jsのseed機能でtaskテーブルにサンプルデータを投入する

1. 実装  
    Todoアプリの機能
    - Todoを登録できる機能
    - 完了したTodoを削除できる機能
    - Todo一覧を見れる機能

    URL
    - /
        - Todoを登録するためのフォーム (タイトル・内容の2つ) 、登録ボタンが表示される

    - /todo
        - 登録されているTodo (のタイトル・内容) を一覧表示する
        - 各Todoに「完了」ボタンを置く

上記の内容を満たすように実装してください。  
DBの操作は参考資料にある、knex.jsのドキュメントを参考にしてください。


### 達成目標
* MySQLの環境構築、データベースの作成ができる
* migrationを実行し、テーブルを作成できる
* seedを実行し、レコードを追加できる
* .select、.insert、.delを扱える
* .then、.catchを用いて、DB処理の正常終了時とエラー時の処理を実装できる
* DBから取得したデータをEJSファイルに渡し、表示させることができる

### 参考資料
* MySQL
    * [第2章MySQLのインストールとアップグレード](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
    * [最初の MySQL アカウントのセキュリティー設定](https://dev.mysql.com/doc/refman/5.6/ja/default-privileges.html)
    * [CREATEDATABASEステートメント](https://dev.mysql.com/doc/refman/8.0/en/create-database.html)
* knex.js
    * [Migrations-CLI](http://knexjs.org/#Migrations-CLI)
    * http://knexjs.org/#Chainable
    * [Seeds-CLI](http://knexjs.org/#Seeds-CLI)
    * https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261  
※migrationファイル、seedファイル作成時に参考にしてください
    * [Builder-select](http://knexjs.org/#Builder-select)
    * [Builder-insert](http://knexjs.org/#Builder-insert)
    * [Builder-del](http://knexjs.org/#Builder-del%20/%20delete)
    * [Interfaces-then](http://knexjs.org/#Interfaces-then)
    * [Interfaces-catch](http://knexjs.org/#Interfaces-catch)
* EJS
    * https://expressjs.com/ja/guide/using-template-engines.html
    * https://ejs.co/#docs
* HTML
    * [初めてのフォーム](https://developer.mozilla.org/ja/docs/Learn/Forms/Your_first_HTML_form)
    * [\<input type="submit">](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/submit)
    * [\<input type="hidden">](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/hidden)