## 10/6 ~ 10/7 の課題
* Knex.jsの基礎を学習する  
※作成するデータベース、テーブル、カラムの名称、内容等はお任せします
* 発展課題として、10/5の課題で作成したWebアプリケーションに手を加え、DBから取得したデータ (例.userテーブルのnameカラムの一覧データ等) を画面上に表示する

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
    * [CREATEDATABASEステートメント](https://dev.mysql.com/doc/refman/8.0/en/create-database.html)
* knex.js
    * [Installation-node](http://knexjs.org/#Installation-node)
    * [Migrations-CLI](http://knexjs.org/#Migrations-CLI)
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