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

## Authorization

By [providing Meilisearch with a master key at launch](/learn/security/master_api_keys.md#protecting-a-meilisearch-instance), you protect your instance from unauthorized requests. The provided master key must be at least 16 bytes. From then on, you must include the `Authorization` header along with a valid API key to access protected routes (all routes except [`/health`](/reference/api/health.md).

<CodeSamples id="authorization_header_1" />

The [`/keys`](/reference/api/keys.md) route can only be accessed using the master key. For security reasons, we recommend using regular API keys for all other routes.

::: note
 v0.24 and below use the `X-MEILI-API-KEY: apiKey` authorization header:
<CodeSamples id="updating_guide_check_version_old_authorization_header" />
:::

[To learn more about keys and security, refer to our dedicated guide.](/learn/security/master_api_keys.md)

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
