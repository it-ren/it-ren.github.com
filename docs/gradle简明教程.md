# Gradle 简明教程

[Gradle](https://gradle.org) 是 Java 社区最广泛使用的构建工具之一（另一个是 [Maven](https://maven.apache.org)），也是 Android App 开发默认的打包工具。

### 1. 在项目中使用 Gradle 的正确方式：Gradle Wrapper
官方推荐使用[Gradle Wrapper](https://docs.gradle.org/current/userguide/gradle_wrapper.html)插件
来为项目配置使用 Gradle 的标准环境。 为项目配置 Gradle Wrapper 的方法是通过 gradle 命令 或 gradlew 脚本执行 init 任务：
```shell
# GRADLE_HOME 指向安装路径 
$GRADLE_HOME/bin/gradle init
# or OTHER_PROJECT_HOME 是指其它含有 Gradle Wrapper 脚本的项目
<OTHER_PROJECT_HOME>/gradlew init 
```
init 命令将在当前目录下生成 gradle 的配置文件和脚本，其中 wrapper 相关的文件有：
    ├── gradle
    │   └── wrapper
    │       ├── gradle-wrapper.jar  
    │       └── gradle-wrapper.properties   
    ├── gradlew
    └── gradlew.bat

其中 gradle/wrapper/gradle-wrapper.properties 文件中配置了 Gradle 的版本：
```properties
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
# distributionUrl=https\://services.gradle.org/distributions/gradle-8.11-bin.zip
# 下载速度慢时，可选择国内镜像，例如腾讯
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.11-bin.zip
# 或 指定 gradle 发行版本在本地的存储路径，流入：D:盘 YOUR-PACKAGE-PATH 目录下：
# distributionUrl= file://{/D:/YOUR-PACKAGE-PATH}/gradle-8.11-bin.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```
