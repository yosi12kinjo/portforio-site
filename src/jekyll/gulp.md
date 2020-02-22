---
layout: default
title: gulp
---
# gulp


- <cite>[gulp.js - The streaming build system](https://gulpjs.com/ "gulp.js - The streaming build system")</cite>



## ENOENT errorが出た場合


> ENOENT とは Error NO ENTry の略でファイルやディレクトリが存在しないという意味
> 
>  <cite>[ENOENT とは Error NO ENTry の略でファイルやディレクトリが存在しないという意味のエラーメッセージらしい。 - Qiita](https://qiita.com/YumaInaura/items/4b664cd00675502407ba)</cite>


> A cross platform solution to node's spawn and spawnSync
> 
>  <cite>[moxystudio/node-cross-spawn: A cross platform solution to node&#39;s spawn and spawnSync](https://github.com/moxystudio/node-cross-spawn)</cite>



> I got it. On Windows bunyan isn't recognized in the console as a program but as a command. So to invoke it the use of cmd was needed.
> 
> <cite>[node.js - Error: spawn ENOENT on Windows - Stack Overflow](https://stackoverflow.com/questions/37459717/error-spawn-enoent-on-windows)</cite>


> spawnやexecを使う場合はcmdコマンドを叩けばいい
> 
>  <cite>[WindowsでChildeProcessを使ってもENOENTばかり出てくる際の対処法 - Qiita](https://qiita.com/Hayakuchi0/items/5c2f457e136926849bee)</cite>


## 詰まったところ

### ディレクトリの指定ミス

誤り

    src('scss/**/*.scss')
    
正解
    
    src('src/scss/**/*.scss')
