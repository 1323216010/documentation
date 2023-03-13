---
permalink: /faq.html
sidebar: auto
---

# 常用

## 项目相关

### meilisearch

meilisearch是一个用rust写的搜索引擎

docker启动命令

```powershell
docker run -it --rm -p 7700:7700 -e MEILI_MASTER_KEY='MASTER_KEY' getmeili/meilisearch:v1.0
```

MEILI_MASTER_KEY指定token名称

[项目地址](https://github.com/meilisearch/meilisearch)

### ws

ws 是一个简单易用、速度极快且经过全面测试的 WebSocket 客户端和服务器实现。

[项目地址](https://github.com/websockets/ws)

### websocket

Gorilla WebSocket 是WebSocket协议的 Go实现。

[项目地址](https://github.com/gorilla/websocket)

## 命令、语句和配置

### js

控制台命令网页为暗黑模式

```javascript
document.documentElement.style.filter='invert(85%) hue-rotate(180deg)'
```

### docker

镜像重命名

```powershell
docker tag yan/kkfileview:4.1.1 yan160100/kkfileview:4.1.1
```

### npm

清理缓存

```powershell
npm cache clear --force
```

### linux

查看cpu信息

```powershell
cat  /proc/cpuinfo
```

### sql

给id生成uuid

```sql
UPDATE t_demo set id = REPLACE(UUID(),"-","") 
```
