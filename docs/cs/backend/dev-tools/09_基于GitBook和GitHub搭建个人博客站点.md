# 基于GitBook和GitHub搭建个人博客站点

[toc]







## 推荐阅读

> - [GitBook 简明教程](https://www.chengweiyang.cn/gitbook/index.html)
> - [GitHub Pages 使用入门](https://docs.github.com/cn/pages/getting-started-with-github-pages)
> - 



## 一、快速入门

### 1. 安装 gitboot

安装好nodeJs 后，直接使用如下命令安装 gitbook

```bash
$ npm install -g gitbook-cli
```



### 2.初始化书籍目录

（1）创建目录结构

首先创建如下目录结构：

```bash
$ tree book/
book/
├── README.md
└── SUMMARY.md
```



README.md 和 SUMMARY.md 是两个必须文件，README.md 是对书籍的简单介绍：

```bash
$ cat book/README.md 
# README

This is a book powered by [GitBook](https://github.com/GitbookIO/gitbook).
```

SUMMARY.md 是书籍的目录结构。内容如下：

```bash
$ cat book/SUMMARY.md 
# SUMMARY

* [Chapter1](chapter1/README.md)
  * [Section1.1](chapter1/section1.1.md)
  * [Section1.2](chapter1/section1.2.md)
* [Chapter2](chapter2/README.md)
```



（2）使用 `gitbook init`，它会为我们创建 SUMMARY.md 中的目录结构。

```bash
$ cd book
$ gitbook init
$ tree
.
├── README.md
├── SUMMARY.md
├── chapter1
│   ├── README.md
│   ├── section1.1.md
│   └── section1.2.md
└── chapter2
    └── README.md

2 directories, 6 files
```



### 3.编译和预览书籍

书籍目录结构创建完成以后，就可以使用 `gitbook serve` 来编译和预览书籍了：

```bash
$ gitbook serve
Press CTRL+C to quit ...

Live reload server started on port: 35729
Starting build ...
Successfully built!

Starting server ...
Serving book on http://localhost:4000
```

`gitbook serve` 命令实际上会首先调用 `gitbook build` 编译书籍，完成以后会打开一个 web 服务器，监听在本地的 4000 端口。

现在，可以用浏览器打开 [http://127.0.0.1:4000](http://127.0.0.1:4000/) 查看书籍的效果，如下图：

![gitbook](./images/gitbook-sample.png)



### 3. gitbook editor

从 gitbook editor 下载本地编辑器

> https://github.com/GitbookIO/editor-legacy



