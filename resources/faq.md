---
permalink: /faq.html
sidebar: auto
---

# 常用

## 网址导航

### 我的

[GitHub](https://github.com/1323216010)

[Vercel](https://vercel.com/dashboard)

[微信公众平台](https://mp.weixin.qq.com/)

### 仓库

[npm依赖](https://www.npmjs.com/)

[cdn资源](https://www.jsdelivr.com/)

[docker镜像](https://hub.docker.com/)

### 资源

[3d模型](https://sketchfab.com/)

## 项目相关

### meilisearch

meilisearch是一个用rust写的搜索引擎

docker启动命令

```powershell
docker run -it --rm -p 7700:7700 -e MEILI_MASTER_KEY='MASTER_KEY' getmeili/meilisearch:v1.0
```

MEILI_MASTER_KEY指定token名称

[项目地址](https://github.com/meilisearch/meilisearch)

## 命令和配置

### docker

镜像重命名

```powershell
docker tag yan/kkfileview:4.1.1 yan160100/kkfileview:4.1.1
```

## What are the recommended requirements for hosting a Meilisearch instance?

**The short answer:**

The recommended requirements for hosting a Meilisearch instance will depend on many factors, such as the number of documents, the size of those documents, the number of filters/sorts you will need, and more. For a quick estimate to start with, try to use a machine that has at least ten times the disk space of your dataset.

**The long answer:**

Indexing documents is a complex process, making it difficult to accurately estimate the size and memory use of a Meilisearch database. There are a few aspects to keep in mind when optimizing your instance.

### Memory usage

There are two things that can cause your memory usage (RAM) to spike:

1. Adding documents
2. Updating index settings (if index contains documents)

To reduce memory use and indexing time, follow this best practice: **always update index settings before adding your documents**. This avoids unnecessary double-indexing.

### Disk usage

The following factors have a great impact on the size of your database (in no particular order):

- The number of documents
- The size of documents
- The number of searchable fields
- The number of filterable fields
- The size of each update
- The number of different words present in the dataset

:::tip
Beware heavily multi-lingual datasets and datasets with many unique words, such as IDs or URLs, as they can slow search speed and greatly increase database size. If you do have ID or URL fields, [make them non-searchable](/reference/api/settings.md#update-searchable-attributes) unless they are useful as search criteria.
:::

### Search speed

Because Meilisearch uses a [memory map](/learn/advanced/storage.md#lmdb), **search speed is based on the ratio between RAM and database size**. In other words:

- A big database + a small amount of RAM => slow search
- A small database + tons of RAM => lightning fast search

Meilisearch also uses disk space as [virtual memory](/learn/advanced/storage.md#memory-usage). This disk space does not correspond to database size; rather, it provides speed and flexibility to the engine by allowing it to go over the limits of physical RAM.

At this time, the number of CPU cores has no direct impact on index or search speed. However, **the more cores you provide to the engine, the more search queries it will be able to process at the same time**.

#### Speeding up Meilisearch

Meilisearch is designed to be fast (≤50ms response time), so speeding it up is rarely necessary. However, if you find that your Meilisearch instance is querying slowly, there are two primary methods to improve search performance:

1. Increase the amount of RAM (or virtual memory)
2. Reduce the size of the database

In general, we recommend the former. However, if you need to reduce the size of your database for any reason, keep in mind that:

- **More relevancy rules => a larger database**
  - The proximity [ranking rule](/learn/core_concepts/relevancy.md#ranking-rules) alone can be responsible for almost 80% of database size
- Adding many attributes to [`filterableAttributes`](/reference/api/settings.md#filterable-attributes) also consumes a large amount of disk space
- Multi-lingual datasets are costly, so split your dataset—one language per index
- [Stop words](/reference/api/settings.md#stop-words) are essential to reducing database size
- Not all attributes need to be [searchable](/learn/configuration/displayed_searchable_attributes.md#searchable-fields). Avoid indexing unique IDs.

## email

email 地址: [ypc0100@qq.com](mailto:ypc0100@qq.com)
