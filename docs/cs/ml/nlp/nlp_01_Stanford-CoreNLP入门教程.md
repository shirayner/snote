# Stanford CoreNLP 入门教程

[toc]



## 推荐阅读

> - [stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/index.html)
> - [Stanford Core NLP用法简介](http://fancyerii.github.io/books/stanfordnlp/)
> - [开源中文分词工具探析（六）：Stanford CoreNLP](https://www.cnblogs.com/en-heng/p/8428504.html)
> - [CoreNLP-4.2.0 使用以及踩坑](https://blog.csdn.net/zyf2333/article/details/114366464)



## 前言

源码工程见：



## 一、简介

[Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/index.html)是Stanford NLP Group基于他们的科研工作开发的一套NLP工具。Stanford NLP组的成员来自语言学系和计算机系，它是Stanford AI实验室的一部分。

Stanford CoreNLP提供了一系列自然语言处理的工具，可以实现如下功能：

> - 词性标注：
> - 命名实体识别：例如识别人名、地名、日期和时间
> - 句法分析：
> - 指代消解：
> - 情感分析：
> - 开放关系抽取：
> - 





### 1.词性标注

> - [词性标记集](https://www.ibm.com/docs/zh/wca/3.5.0?topic=analytics-part-speech-tag-sets)
> - [中文、英文词性标注](https://zhuanlan.zhihu.com/p/352068878)
> - [词性标注](https://chmx0929.gitbook.io/machine-learning/zi-ran-yu-yan-chu-li/zi-ran-yu-yan-chu-li/ci-xing-biao-zhu-yu-ming-ming-shi-ti-shi-bie)



### 2.命名实体识别

> - [命名实体识别](https://chmx0929.gitbook.io/machine-learning/zi-ran-yu-yan-chu-li/zi-ran-yu-yan-chu-li/ming-ming-shi-ti-shi-bie)
> - [一文详解深度学习在命名实体识别(NER)中的应用](https://www.jiqizhixin.com/articles/2018-08-31-2)
> - [命名实体识别 – Named-entity recognition | NER](https://easyai.tech/ai-definition/ner/)
> - [中文命名实体识别NER的原理、方法与工具](https://zhuanlan.zhihu.com/p/156914795)
> - [NLP实战-中文命名实体识别](https://zhuanlan.zhihu.com/p/61227299)
> - [基于bi-lstm+crf的NER识别](https://zhuanlan.zhihu.com/p/71225432)
> - [LSTM+CRF for NER](http://xtf615.com/2018/11/27/ner/)
> - [命名实体识别](https://www.aminer.org/research_report/5d1326f97fb2beaed5721b5b)
> - [命名实体识别实践与探索](https://github.com/wavewangyue/ner)





### 3.成分句法分析

> - [CS224n笔记6 句法分析](https://www.hankcs.com/nlp/cs224n-dependency-parsing.html)
> - [李宏毅nlp学习笔记08：Constituency parsing（Parsing一般指句法分析）](https://blog.csdn.net/weixin_42721412/article/details/109604323)
> - [constituent parsing & dependency parsing](https://zhuanlan.zhihu.com/p/31766972)



Constituency Parsing主要用phrase structure grammer即短语语法来不断的将词语整理成嵌套的组成成分，又被称为context-free grammers，简写做CFG。

其主要步骤是先对每个词做词性分析part of speech, 简称POS，然后再将其组成短语，再将短语不断递归构成更大的短语。



 先对每个词做词性分析part of speech, 简称POS，然后再将其组成短语，再将短语不断递归构成更大的短语







### 4.依存句法分析

> - [CS224N笔记(五):Dependency Parsing](https://zhuanlan.zhihu.com/p/66268929)
> - [句法分析：依存分析（Dependency Parsing）](https://blog.csdn.net/qq_27586341/article/details/110001823)
> - [十八-生成句法分析树](https://wohugb.github.io/chatbot/18.tree/)
> - 



### 5.关系提取

> - [KBP_CoreNLP](https://stanfordnlp.github.io/CoreNLP/kbp.html)
> - [TAC关系抽取数据集](https://www.moshangxingzou.com/index.php/2019/08/22/370/)
> - [关系抽取(分类)总结](https://shomy.top/2018/02/28/relation-extraction/)
> - [中文实体链接 (Entity Linking)](https://github.com/didi/ChineseNLP/blob/master/zh/docs/entity_linking.md)



提取满足[TAC-KBP](https://tac.nist.gov/2017/KBP/)竞争规范的`("subject", "relation", "object")`关系三元组



### 6.实体提及

> - [中文实体标注 (Entity Tagging)](https://github.com/didi/ChineseNLP/blob/master/zh/docs/entity_tagging.md)

实体标注 (Entity Tagging) 任务是识别实体概念在文本中的提及 (entity mention) 并且标注对应的类型，比如人（PER），组织（ORG），地缘政治实体（GPE），地点（LOC）等。



### 7.共指解析（Coreference Resolution）

> - [Coreference Resolution_stanford](https://nlp.stanford.edu/projects/coref.shtml)
> - [【转】Coreference resolution (共指解析)](http://www.iamzxs.com/2018/08/07/%E3%80%90%E8%BD%AC%E3%80%91coreference-resolution-%E5%85%B1%E6%8C%87%E8%A7%A3%E6%9E%90/)
> - [斯坦福CS224n(15)指代消解](https://zhuanlan.zhihu.com/p/53550123)
> - [指代消解_CKIP Lab](https://ckip.iis.sinica.edu.tw/project/coref)
> - [Coreference resolution_NLP-progress](http://nlpprogress.com/english/coreference_resolution.html)

概念：

> 共指解析是查找引用文本中同一实体的所有表达式的任务，共指即多个词指向同一个词。



### 8.引用提取和归因

> - [Quote Extraction And Attribution_stanford](https://stanfordnlp.github.io/CoreNLP/quote.html)













