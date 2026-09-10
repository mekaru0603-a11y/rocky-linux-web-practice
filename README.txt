Rocky Linux VPS Web Practice
=============================

このフォルダは、Rocky Linux + NginxでWebサイトを公開する練習用です。

【ファイル構成】

rocky-linux-web-practice/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.txt

【VPSへの配置例】

Nginxの公開ディレクトリ：
/usr/share/nginx/html/

最終的には以下の構成にしてください。

/usr/share/nginx/html/
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js

【学習ポイント】

1. index.htmlを公開ディレクトリへ配置する
2. cssディレクトリを作成する
3. style.cssをcssディレクトリへ配置する
4. jsディレクトリを作成する
5. script.jsをjsディレクトリへ配置する
6. ブラウザからVPSへアクセスする
7. CSSを変更して見た目が変わることを確認する
8. JavaScriptのボタンを押して動作を確認する

【確認コマンド】

find /usr/share/nginx/html -maxdepth 3 -type f -print

curl http://localhost/

【注意】

既存のindex.htmlを上書きする前に、必要ならバックアップしてください。
例：
sudo cp -a /usr/share/nginx/html/index.html /usr/share/nginx/html/index.html.bak
