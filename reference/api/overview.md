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

## Headers

### Content type

Any API request with a payload (`--data-binary`) requires a `Content-Type` header. Content type headers indicate the media type of the resource, helping the client process the response body correctly.

Meilisearch currently supports the following formats:

- `Content-Type: application/json` for JSON
- `Content-Type: application/x-ndjson` for NDJSON
- `Content-Type: text/csv` for CSV

Only the [add documents](/reference/api/documents.md#add-or-replace-documents) and [update documents](/reference/api/documents.md#add-or-update-documents) endpoints accept NDJSON and CSV. For all others, use `Content-Type: application/json`.
