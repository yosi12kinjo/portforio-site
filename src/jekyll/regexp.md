---
layout: default
title: 正規表現
---
# 正規表現


## ガイド

- <cite>[正規表現 - JavaScript &#124; MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions)</cite>



## リファレンス

- <cite>[RegExp - JavaScript &#124; MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp)</cite>


## example

search for

    ^(>|-) (\[[^\]]+\]\([^\)]+\))

replace with

    $1 <cite>$2</cite>
