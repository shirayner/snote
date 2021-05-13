# Spock 集成PowerMock

[toc]

## 一、Spock 集成PowerMock

引入依赖

```xml
 
    <properties>
        <java.version>1.8</java.version>
        <maven.compiler.target>${java.version}</maven.compiler.target>
        <maven.compiler.source>${java.version}</maven.compiler.source>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>

        <!-- Test start-->
        <jacoco.version>0.8.5</jacoco.version>
        <junit.version>4.12</junit.version>
        <spock.version>1.3-groovy-2.5</spock.version>
        <groovy.version>2.5.8</groovy.version>
        <mockito.version>1.10.19</mockito.version>
        <powermock.version>1.6.2</powermock.version>
        <!-- Test end-->
    </properties>

    <dependencies>
        <!-- junit -->
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
        </dependency>

        <!-- jacoco -->
        <dependency>
            <groupId>org.jacoco</groupId>
            <artifactId>org.jacoco.agent</artifactId>
            <version>${jacoco.version}</version>
            <classifier>runtime</classifier>
        </dependency>

        <!-- groovy -->
        <dependency>
            <groupId>org.codehaus.groovy</groupId>
            <artifactId>groovy</artifactId>
        </dependency>

        <!-- spock -->
        <dependency>
            <groupId>org.spockframework</groupId>
            <artifactId>spock-core</artifactId>
        </dependency>

        <!-- mockito-->
        <dependency>
            <groupId>org.mockito</groupId>
            <artifactId>mockito-core</artifactId>
        </dependency>

        <!-- powermock-->
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-core</artifactId>
        </dependency>
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-module-junit4</artifactId>
        </dependency>
        <dependency>
            <groupId>org.powermock</groupId>
            <artifactId>powermock-api-mockito</artifactId>
        </dependency>
    </dependencies>


	<dependencyManagement>
        <dependencies>       
            <!-- test -->
            <dependency>
                <groupId>junit</groupId>
                <artifactId>junit</artifactId>
                <version>${junit.version}</version>
                <scope>test</scope>
            </dependency>
            <dependency>
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-nop</artifactId>
                <version>${slf4j-nop.version}</version>
                <scope>test</scope>
            </dependency>

            <!-- groovy -->
            <dependency>
                <groupId>org.codehaus.groovy</groupId>
                <artifactId>groovy</artifactId>
                <version>${groovy.version}</version>
                <optional>true</optional>
            </dependency>

            <!-- spock -->
            <dependency>
                <groupId>org.spockframework</groupId>
                <artifactId>spock-core</artifactId>
                <version>${spock.version}</version>
                <scope>test</scope>
                <optional>true</optional>
            </dependency>


            <!-- mockito-->
            <dependency>
                <groupId>org.mockito</groupId>
                <artifactId>mockito-core</artifactId>
                <version>${mockito.version}</version>
                <scope>test</scope>
                <optional>true</optional>
            </dependency>

            <!-- powermock-->
            <dependency>
                <groupId>org.powermock</groupId>
                <artifactId>powermock-core</artifactId>
                <version>${powermock.version}</version>
                <scope>test</scope>
                <optional>true</optional>
            </dependency>
            <dependency>
                <groupId>org.powermock</groupId>
                <artifactId>powermock-module-junit4</artifactId>
                <version>${powermock.version}</version>
                <exclusions>
                    <exclusion>
                        <artifactId>hamcrest-core</artifactId>
                        <groupId>org.hamcrest</groupId>
                    </exclusion>
                </exclusions>
                <scope>test</scope>
                <optional>true</optional>
            </dependency>
            <dependency>
                <groupId>org.powermock</groupId>
                <artifactId>powermock-api-mockito</artifactId>
                <version>${powermock.version}</version>
                <exclusions>
                    <exclusion>
                        <artifactId>mockito-all</artifactId>
                        <groupId>org.mockito</groupId>
                    </exclusion>
                </exclusions>
                <scope>test</scope>
                <optional>true</optional>
            </dependency>
        </dependencies>
    </dependencyManagement>

    <build>
        <pluginManagement>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-surefire-plugin</artifactId>
                    <version>2.9</version>
                    <configuration>
                        <systemPropertyVariables>
                            <jacoco-agent.destfile>target/jacoco.exec</jacoco-agent.destfile>
                        </systemPropertyVariables>
                        <includes>
                            <include>**/*Spec.java</include>
                            <include>**/*Test.java</include>
                        </includes>
                    </configuration>
                </plugin>
                <plugin>
                    <groupId>org.jacoco</groupId>
                    <artifactId>jacoco-maven-plugin</artifactId>
                    <version>${jacoco.version}</version>
                    <executions>
                        <execution>
                            <id>default-instrument</id>
                            <goals>
                                <goal>instrument</goal>
                            </goals>
                        </execution>
                        <execution>
                            <id>default-restore-instrumented-classes</id>
                            <goals>
                                <goal>restore-instrumented-classes</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
                <!--groovy 编译-->
                <plugin>
                    <groupId>org.codehaus.gmavenplus</groupId>
                    <artifactId>gmavenplus-plugin</artifactId>
                    <version>1.6.3</version>
                    <executions>
                        <execution>
                            <goals>
                                <goal>compile</goal>
                                <goal>compileTests</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </pluginManagement>

        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-surefire-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.jacoco</groupId>
                <artifactId>jacoco-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.codehaus.gmavenplus</groupId>
                <artifactId>gmavenplus-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>

```











## 二、PowerMock 示例

### 推荐阅读

> - [PowerMock踩坑指南](https://www.jianshu.com/p/44fcadaf041d)
> - [PowerMock笔记](https://blog.csdn.net/hbtj_1216/article/details/81981666)





### 1.Mock静态方法

#### 1.1 方法内部调用其他类的静态方法

> - [使用PowerMock模拟静态方法](https://my.oschina.net/simpleton/blog/399434)



#### 1.2 静态初始化

成员变量初始化时调用其他类的静态方法，代码块，静态变量







### 2.Mock链式方法

> - [Mockito如何mock一条链式调用](https://blog.csdn.net/dengnanhua/article/details/106167833)
> - [Powermock链式方法调用最终类](https://stackoom.com/question/2W3EL/Powermock链式方法调用最终类)



### 3.Mock方法内部New出来的方法

参考：

> - [Java单元测试打桩-mockito，PowerMockito简单使用，模拟方法内new对象](https://blog.csdn.net/ccityzh/article/details/80139807)
> - 
> - 













