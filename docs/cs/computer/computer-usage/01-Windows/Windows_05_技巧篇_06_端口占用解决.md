# Windows 端口占用解决方案

[toc]



## 一、Windows 端口占用解决方案

### 1.获取指定端口的PID

```bash
netstat -ano|findstr 端口号
```

如：

```bash
D:\Users\ray>netstat -ano|findstr 8080
  TCP    10.32.115.144:59618    10.5.51.29:8080        ESTABLISHED     15780
  TCP    10.32.115.144:60821    10.22.85.33:8080       TIME_WAIT       0
  TCP    10.32.115.144:60822    10.4.61.90:8080        TIME_WAIT       0
```





### 2.强制关闭对应进程

```bash
taskkill  -F -PID 进程号
```

如：

```bash
D:\Users\ray>taskkill  -F -PID  15780
成功: 已终止 PID 为 15780 的进程。
```



