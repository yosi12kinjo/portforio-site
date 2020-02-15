---
layout: default
title: npm
---
# npm

> npmとはパッケージ管理システムの1種。Node Package Managerの意[3]。
> 
> [npm (パッケージ管理ツール) - Wikipedia](https://ja.wikipedia.org/wiki/Npm_%28%E3%83%91%E3%83%83%E3%82%B1%E3%83%BC%E3%82%B8%E7%AE%A1%E7%90%86%E3%83%84%E3%83%BC%E3%83%AB%29)


## インストール済のパッケージを確認する

>     npm ls --depth=0
> 
> [[Node.js] インストール済みのパッケージ一覧を表示する - Qiita](https://qiita.com/phi/items/9fcca3e7af5d25ff2653)


## グローバル環境とローカル環境の違い


### グローバル環境

> グローバルインストールをした場合、実行ファイルがパスの指定なしで実行できる。上記でhogeパッケージをインストールした場合コンソール画面でhogeコマンドが直接操作できる。
> 
> [【npm】グローバルインストールは控えるべき](https://mosapride.com/index.php/2018/02/06/post-681/)



### ローカル環境

> グローバル環境を汚染しない
> 
> ローカルインストールされたものはプロジェクトディレクトリの中の「node_modules」というディレクトリにインストールされるため、グローバル環境を綺麗に保てます。
> 
> [CLI 環境構築 グローバルインストールとローカルインストールの違いについて - Qiita](https://qiita.com/aya02/items/4c9c827f6a782ef65d57)







## extraneous


> node_modulesに存在するのにpackage.jsonのdependenciesに無いライブラリにextraneousが付く。
> 
> [node.jsの依存ライブラリを整理してみた - Qiita](https://qiita.com/noratmt/items/01666f7b646a90ade507)
