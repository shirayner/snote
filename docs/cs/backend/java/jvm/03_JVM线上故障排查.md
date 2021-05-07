---
title: 03_JVM线上故障排查
date: 2021-04-29
categories:
  - jvm
tags:
  - jvm
---

[[toc]]

[toc]

## 一、相关排查命令

参考：[线上问题排查命令----JVM 篇](https://blog.csdn.net/u010827436/article/details/46564641)

## 二、排查过程

参考：

> - [JVM 线上故障排查基本操作](https://www.cnblogs.com/stateis0/p/9062196.html)
> - [面试官问：平时碰到系统 CPU 飙高和频繁 GC，你会怎么排查？](https://mp.weixin.qq.com/s/bflX-enjHXV2xLCX6J1qWw)

### 1.CPU 飚高

（1） 使用 `top`命令查看系统 CPU 的占用情况，找到 CPU 占用最高的进程，并记住进程 ID

```bash
top
```

（2） 使用`top -Hp [PID]`查看该进程的各个线程运行情况，找到 CPU 占用最高的线程， 并记住线程 ID

```bash
top -Hp [PID]
```

（3） 使用 JDK 提供的 jstack 工具 dump 线程堆栈信息到指定文件中

```bash
jstack -l [PID] >jstack.log
```

（4） 由于刚刚的线程 ID 是十进制的，而堆栈信息中的线程 ID 是 16 进制的，因此我们需要将 10 进制的转换成 16 进制的，并用这个线程 ID 在堆栈中查找。使用 `printf "%x\n" [十进制数字]`，可以将 10 进制转换成 16 进制。

```bash
printf "%x\n" [十进制数字]
```

（5） 通过刚刚转换的 16 进制数字从堆栈信息里找到对应的线程堆栈，就可以从该堆栈中看出端倪。

（6）分析 dump，可使用 dump 文件的可视化工具进行分析，工具有： MAT，Jprofile，jvisualvm
