# Kafka环境搭建

[toc]





## 推荐阅读

> - [**基于Zookeeper搭建Kafka高可用集群.md**](https://github.com/heibaiying/BigData-Notes/blob/master/notes/installation/%E5%9F%BA%E4%BA%8EZookeeper%E6%90%AD%E5%BB%BAKafka%E9%AB%98%E5%8F%AF%E7%94%A8%E9%9B%86%E7%BE%A4.md)
> - [Kafka【第一篇】Kafka集群搭建](https://www.cnblogs.com/luotianshuai/p/5206662.html)
> - [Apache Kafka 教程_W3Cschool](https://www.w3cschool.cn/apache_kafka/)
> - [Kafka集群搭建及必知必会](https://juejin.cn/post/6844903800239570958)
> - [Kafka quick start](https://kafka.apache.org/quickstart)



## 一、环境准备

需要先进行 Zookeeper环境搭建，可参考：

> [Zookeeper_01_环境搭建](../Zookeeper/Zookeeper_01_环境搭建.md)



## 二、Kafka 环境搭建

搭建好Zookeeper环境之后，就可以开始部署Kafka了

### 1.下载并解压Kafka

前往官网下载Kafka

> https://kafka.apache.org/downloads



解压之后目录如下：

```bash
$ ls -l | awk '{print $9}'

bin/
config/
libs/
LICENSE
NOTICE
site-docs/
```



### 2.创建logs目录

创建三个日志存储目录

```bash
 mkdir -p logs/01 logs/02 logs/03
```



### 3.配置 server.properties



（1）进入conf目录，复制 `server.properties`，并分别重命名为`server1.properties`、`server2.properties`、`server3.properties`

（2）然后修改这三个配置文件，需要修改下面四个属性

> - `broker.id`
> - `listeners`
> - `log.dirs`
> - `zookeeper.connect`

（3）修改后，各个配置文件的这四个属性分别为：

- server1.properties

  ```properties
  # The id of the broker. 集群中每个节点的唯一标识
  broker.id=1
  # 监听地址
  listeners=PLAINTEXT://localhost:9092
  # 数据的存储位置
  log.dirs=D:/dev-env/kafka/kafka_2.11-1.0.0/logs/01
  # Zookeeper连接地址
  zookeeper.connect=localhost:2181,localhost:2182,localhost:2183
  ```

  

- server2.properties

  ```properties
  broker.id=2
  listeners=PLAINTEXT://localhost:9093
  log.dirs=D:/dev-env/kafka/kafka_2.11-1.0.0/logs/02
  zookeeper.connect=localhost:2181,localhost:2182,localhost:2183
  ```

  

- server3.properties

  ```properties
  broker.id=3
  listeners=PLAINTEXT://localhost:9094
  log.dirs=D:/dev-env/kafka/kafka_2.11-1.0.0/logs/03
  zookeeper.connect=localhost:2181,localhost:2182,localhost:2183
  ```



### 4.启动Broker集群

进入 bin/windows 目录，然后执行如下命令分别启动三个Kafka Broker 节点

```bash
$ ./kafka-server-start.bat ../../config/server1.properties
$ ./kafka-server-start.bat ../../config/server2.properties
$ ./kafka-server-start.bat ../../config/server3.properties
```



### 5.验证

（1）创建测试主题

```bash
$ ./kafka-topics.bat --create --zookeeper localhost:2181 --replication-factor 3 --partitions 1 --topic hello-kafk

Created topic "hello-kafka".
```



（2）获取主题列表

```bash
$  ./kafka-topics.bat  --list --zookeeper localhost:2181
hello-kafka
```



（3）启动生产者以发送消息

```bash
./kafka-console-producer.bat --broker-list localhost:9092 --topic hello-kafka
```



（4）启动消费者以接收消息

```bash
./kafka-console-producer.bat  --zookeeper localhost:2181 —topic hello-kafka --from-beginning
```







