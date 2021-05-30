# 使用Markdown写PPT

[toc]







## 推荐工具

（1）Marp

> - [marp-team/marpit](https://github.com/marp-team/marpit)
> - [Marp：Markdown制作PPT的利器](https://www.jianshu.com/p/70382d05955c)
> - [Marp工具：一种基于Markdown「写」PPT 的新方法](https://github.com/zoomla/marpit-ppt)



## 一、Marp



可以直接使用 [Marp网页版](https://web.marp.app/) 

![img](images/16570883-b8a4f3efa8b64678.png)



但更推荐使用VsCode 的Marp插件来写PPT

### 1.安装  Marp for VS Code

直接搜索 Marp 插件进行安装

![image-20210531001548939](images/image-20210531001548939.png)



### 2.示例

插件安装完成后，就可以通过编写markdown来写PPT了。

```
---
marp: true
---

# Slide 1

foo

---

# Slide 2

bar
```

然后使用快捷键 `ctrl+shift+v` 即可预览PPT。

效果如下：

![image-20210531001936113](images/image-20210531001936113.png)

然后还可以导出为`.pptx`格式的文件。

![image-20210531002057554](images/image-20210531002057554.png)

![image-20210531002126966](images/image-20210531002126966.png)

![image-20210531002207010](images/image-20210531002207010.png)





### 3.相关用法

#### 3.1  分割页

通过 `---`来分割PPT页面

![image-20210531002451856](images/image-20210531002451856.png)





#### 3.2 图片

```markdown
![](image.jpg)
```



