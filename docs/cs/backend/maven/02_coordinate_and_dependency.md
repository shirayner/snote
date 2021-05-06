---
title: 02_坐标与依赖
date: 2021-04-29
categories:
  - maven
tags:
  - maven
---

[[toc]]

## 一、前言

## 二、坐标元素

Maven 坐标为各种构件引入了秩序，任何一个构件都必须明确定义自己的坐标，而一组 Maven 坐标是通过一些元素定义的，它们是 groupId、artifactId、version、packaging、classifier。

> - 上述 5 个元素中 groupId、artifactId、version 是必须定义的，packaging 是可选的（默认为 jar），而 classifier 是不能直接定义的。
> - 项目构件的文件名是与坐标相对应的，一般的规则为 artifactId-version［-classifier］.packaging，［-classifier］表示可选

### 1.groupId

定义当前 Maven 项目隶属的实际项目

- 首先，Maven 项目和实际项目不一定是一对一的关系。比如 SpringFramework 这一实际项目，其对应的 Maven 项目会有很多，如 spring-core、spring-context 等。这是由于 Maven 中模块的概念，因此，一个实际项目往往会被划分成很多模块。
- 其次，groupId 不应该对应项目隶属的组织或公司。原因很简单，一个组织下会有很多实际项目，如果 groupId 只定义到组织级别，而后面我们会看到，artifactId 只能定义 Maven 项目（模块），那么实际项目这个层将难以定义。
- 最后，groupId 的表示方式与 Java 包名的表示方式类似，通常与域名反向一一对应。

### 2.artifactId

定义实际项目中的一个 Maven 项目（模块）

- 推荐的做法是使用实际项目名称作为 artifactId 的前缀。

### 3.version

定义 Maven 项目当前所处的版本

### 4.packaging

定义 Maven 项目的打包方式

- 打包方式通常与所生成构件的文件扩展名对应，如 jar、war。
- 打包方式会影响到构建的生命周期，比如 jar 打包和 war 打包会使用不同的命令。
- 当不定义 packaging 的时候，Maven 会使用默认值 jar。

### 5.classifier

用来帮助定义构建输出的一些附属构件。

- 附属构件与主构件对应

  > 如主构件是 nexus-indexer-2.0.0.jar，该项目可能还会通过使用一些插件生成如 nexus-indexer-2.0.0-javadoc.jar、nexus-indexer-2.0.0-sources.jar 这样一些附属构件，其包含了 Java 文档和源代码。这时候，javadoc 和 sources 就是这两个附属构件的 classifier。这样，附属构件也就拥有了自己唯一的坐标。

- 不能直接定义项目的 classifier，因为附属构件不是项目直接默认生成的，而是由附加的插件帮助生成。

## 三、依赖元素

根元素 project 下的 dependencies 可以包含一个或者多个 dependency 元素，以声明一个或者多个项目依赖。

每个依赖可以包含的元素有：

### 1.gav

groupId、artifactId 和 version：依赖的基本坐标

### 2.type

依赖的类型，对应于项目坐标定义的 packaging。

大部分情况下，该元素不必声明，其默认值为 jar。

### 3.scope

依赖的范围

> - Maven 在编译项目主代码的时候需要使用一套 classpath。
> - Maven 在编译和执行测试的时候会使用另外一套 classpath。
> - 实际运行 Maven 项目的时候，又会使用一套 classpath，

Maven 有以下几种依赖范围：

![1546244402969](./images/1546244402969.png)

（1）compile

- 编译依赖范围

- 如果没有指定，就会默认使用该依赖范围。使用此依赖范围的 Maven 依赖，对于**编译、测试、运行**三种 classpath 都有效。
- 典型的例子是 spring-core，在编译、测试和运行的时候都需要使用该依赖。

（2）test

- 测试依赖范围。
- 使用此依赖范围的 Maven 依赖，只对于**测试**classpath**有效**，在编译主代码或者运行项目的使用时将无法使用此类依赖。
- 典型的例子是 JUnit，它只有在编译测试代码及运行测试的时候才需要。

（3）provided

- 已提供依赖范围。
- 使用此依赖范围的 Maven 依赖，对于**编译**和**测试**classpath**有效**，但在**运行**时**无效**。
- 典型的例子是 servlet-api，编译和测试项目的时候需要该依赖，但在运行项目的时候，由于容器已经提供，就不需要 Maven 重复地引入一遍。

（4）runtime

- 运行时依赖范围。
- 使用此依赖范围的 Maven 依赖，对于**测试**和**运行**classpath**有效**，但在**编译**主代码时**无效**。
- 典型的例子是 JDBC 驱动实现，项目主代码的编译只需要 JDK 提供的 JDBC 接口，只有在执行测试或者运行项目的时候才需要实现上述接口的具体 JDBC 驱动。

（5）system

- 系统依赖范围。
- 该依赖与三种 classpath 的关系，和 provided 依赖范围完全一致。但是，使用 system 范围的依赖时必须通过 systemPath 元素显式地指定依赖文件的路径。由于此类依赖不是通过 Maven 仓库解析的，而且往往与本机系统绑定，可能造成构建的不可移植，因此应该谨慎使用。
- systemPath 元素可以引用环境变量，

可以用来依赖本地 jar，如：

```xml
	<dependency>
		<groupId>com.taobao</groupId>
		<artifactId>taobao-sdk-java-auto_1479188381469-20181016</artifactId>
		<version>4.0</version>
		<scope>system</scope>
		<systemPath>${project.basedir}/lib/taobao-sdk-java-auto_1479188381469-20181016.jar</systemPath>
	</dependency>
```

（6）import（Maven2.0.9 及以上）

- 导入依赖范围。
- 该依赖范围不会对三种 classpath 产生实际的影响，

依赖传递

依赖调解：

> 第一原则：路径最近者优先。
>
> 第二原则：第一声明者优先。

### 4.optional

标记依赖是否可选

​

### 5.exclusions

用来排除传递性依赖

- 使用 exclusions 元素声明排除依赖，exclusions 可以包含一个或者多个 exclusion 子元素，因此可以排除一个或者多个传递性依赖。
- 需要注意的是，声明 exclusion 的时候只需要 groupId 和 artifactId，而不需要 version 元素，

### 6.最佳实践

#### 6.1 排除依赖

- 排除某些 SNAPSHOT 依赖
- 排除不想要的传递性依赖

#### 6.2 归类依赖

使用属性来归类依赖

#### 6.3 优化依赖

- 查看当前项目的已解析依赖：`mvn dependency:list`

> Maven 会自动解析所有项目的直接依赖和传递性依赖，并且根据规则正确判断每个依赖的范围，对于一些依赖冲突，也能进行调节，以确保任何一个构件只有唯一的版本在依赖中存在。在这些工作之后，最后得到的那些依赖被称为已解析依赖（ResolvedDependency）。

- 查看当前项目的依赖树：`mvn dependency:tree`

> 将直接在当前项目 POM 声明的依赖定义为顶层依赖，而这些顶层依赖的依赖则定义为第二层依赖，以此类推，有第三、第四层依赖。当这些依赖经 Maven 解析后，就会构成一个依赖树，通过这棵依赖树就能很清楚地看到某个依赖是通过哪条传递路径引入的。

`mvn dependency:tree > dependency.txt` 可将依赖树结果输出到 `dependency.txt` 文件中

- 依赖分析：`mvn dependency:analyze`

可分析出`Used undeclared dependencies` 和 `Unused declared dependencies found`，从而优化 pom 依赖

```java
[WARNING] Used undeclared dependencies found:
[WARNING]    org.springframework:spring-beans:jar:4.3.4.RELEASE:compile
[WARNING]    org.unidal.framework:foundation-service:jar:3.0.8:compile
[WARNING]    com.google.guava:guava:jar:19.0:compile
[WARNING]    org.springframework:spring-context:jar:4.3.4.RELEASE:compile
[WARNING]    org.springframework:spring-core:jar:4.3.4.RELEASE:compile
[WARNING]    commons-collections:commons-collections:jar:3.2.2:compile
[WARNING]    commons-lang:commons-lang:jar:2.6:compile
[WARNING]    com.google.code.gson:gson:jar:2.8.0:compile
[WARNING]    org.springframework:spring-test:jar:4.3.4.RELEASE:test
[WARNING]    org.springframework.boot:spring-boot-test:jar:1.4.3.RELEASE:test
[WARNING]    org.slf4j:log4j-over-slf4j:jar:1.7.21:compile
[WARNING] Unused declared dependencies found:
[WARNING]    org.projectlombok:lombok:jar:1.16.12:compile
[WARNING]    org.springframework.boot:spring-boot-starter-test:jar:1.4.3.RELEASE:test
```

#### 6.4 坐标命名

```xml
 <groupId>com.company.bu.team</groupId>
 <artifactId>artifact</artifactId>
```
