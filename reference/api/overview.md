# API reference

Welcome to the Meilisearch API documentation. If you are new to Meilisearch, check out our [quick start guide!](/learn/getting_started/quick_start.md)

Meilisearch is a RESTful API. This page describes the general behavior of the API.

## 我的

[GitHub](https://github.com/1323216010)

[Vercel](https://vercel.com/dashboard)

[微信公众平台](https://mp.weixin.qq.com/)

## 工具

### 在线ide

[vscode](https://vscode.dev/)

[stackblitz](https://stackblitz.com/)

## 仓库

[npm依赖](https://www.npmjs.com/)

[cdn资源](https://www.jsdelivr.com/)

[docker镜像](https://hub.docker.com/)

## 资源

[3d模型](https://sketchfab.com/)

## Headers

### Content type

Any API request with a payload (`--data-binary`) requires a `Content-Type` header. Content type headers indicate the media type of the resource, helping the client process the response body correctly.

Meilisearch currently supports the following formats:

- `Content-Type: application/json` for JSON
- `Content-Type: application/x-ndjson` for NDJSON
- `Content-Type: text/csv` for CSV

Only the [add documents](/reference/api/documents.md#add-or-replace-documents) and [update documents](/reference/api/documents.md#add-or-update-documents) endpoints accept NDJSON and CSV. For all others, use `Content-Type: application/json`.

### Content encoding

The `Content-Encoding` header indicates the media type is compressed by a given algorithm. Compression improves transfer speed and reduces bandwidth consumption by sending and receiving smaller payloads. The `Accept-Encoding` header, instead, indicates the compression algorithm the client understands.

Meilisearch supports the following compression methods:

- `br`: uses the [Brotli](https://en.wikipedia.org/wiki/Brotli) algorithm
- `deflate`: uses the [zlib](https://en.wikipedia.org/wiki/Zlib) structure with the [deflate](https://en.wikipedia.org/wiki/DEFLATE) compression algorithm
- `gzip`: uses the [GZip](https://en.wikipedia.org/wiki/Gzip) algorithm

#### Request compression

The code sample below uses the `Content-Encoding: gzip` header, indicating that the request body is compressed using the `gzip` algorithm:

```
 cat ~/movies.json | gzip | curl -X POST 'http://localhost:7700/indexes/movies/documents' --data-binary @- -H 'Content-Type: application/json' -H 'Content-Encoding: gzip'
```

#### Response compression

Meilisearch compresses a response if the request contains the `Accept-Encoding` header. The code sample below uses the `gzip` algorithm:

```
curl -sH 'Accept-encoding: gzip' 'http://localhost:7700/indexes/movies/search' | gzip -
```

## Request body

The request body is data sent to the API. It is used with PUT, POST, and PATCH methods to create or update a resource. You must provide request bodies in JSON.
