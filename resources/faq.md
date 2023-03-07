---
permalink: /faq.html
sidebar: auto
---

# FAQ

配置、命令...

## meilisearch

meilisearch是一个用rust写的搜索引擎

[项目地址](https://github.com/meilisearch/meilisearch)

```powershell
docker run -it --rm -p 7700:7700 -e MEILI_MASTER_KEY='MASTER_KEY' getmeili/meilisearch:v1.0
```

MEILI_MASTER_KEY指定token名称

## Is killing a Meilisearch process safe?

Killing Meilisearch is **safe**, even in the middle of a process (ex: adding a batch of documents). When you restart the server, it will start the task from the beginning.
More information in the [asynchronous operations guide](/learn/advanced/asynchronous_operations.md).

## Do you provide a public roadmap for Meilisearch and its integration tools?

Yes, as Meilisearch and its integration tools are open source, we maintain a [public roadmap](https://roadmap.meilisearch.com/) for the general features we plan to do.

For more accurate features and issues, everything is detailed in the issues of all our [GitHub repositories](https://github.com/meilisearch/meilisearch/issues).

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

email地址: [ypc0100@qq.com](ypc0100@qq.com).
