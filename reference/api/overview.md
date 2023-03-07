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

## Pagination

Meilisearch paginates all GET routes that return multiple resources, for example, GET `/indexes`, GET `/documents`, GET `/keys`, etc. This allows you to work with manageable chunks of data. All these routes return 20 results per page, but you can configure it using the `limit` query parameter. You can move between pages using `offset`.

All paginated responses contain the following fields:

| Name         | Type    | Description                  |
| :----------- | :------ | :--------------------------- |
| **`offset`** | Integer | Number of resources skipped  |
| **`limit`**  | Integer | Number of resources returned |
| **`total`**  | Integer | Total number of resources    |

### `/tasks` endpoint

Since the `/tasks` endpoint uses a different type of pagination, the response contains different fields. You can read more about it in the [tasks API reference](/reference/api/tasks.md#get-tasks).

## Parameters

Parameters are options you can pass to an API endpoint to modify its response. There are three main types of parameters in Meilisearch's API: request body parameters, path parameters, and query parameters.

### Request body parameters

These parameters are mandatory parts of POST, PUT, and PATCH requests. They accept a wide variety of values and data types depending on the resource you're modifying. You must add these parameters to your request's data payload.

### Path parameters

These are parameters you pass to the API in the endpoint's path. They are used to identify a resource uniquely. You can have multiple path parameters, for example, `/indexes/{index_uid}/documents/{document_id}`.

If an endpoint does not take any path parameters, this section is not present in that endpoint's documentation.

### Query parameters

These optional parameters are a sequence of key-value pairs and appear after the question mark (`?`) in the endpoint. You can list multiple query parameters by separating them with an ampersand (`&`). The order of query parameters does not matter. They are mostly used with GET endpoints.

If an endpoint does not take any query parameters, this section is not present in that endpoint's documentation.

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

## Response body

Meilisearch is an **asynchronous API**. This means that in response to most write requests, you will receive a summarized version of the `task` object:

```json
{
    "taskUid": 1,
    "indexUid": "movies",
    "status": "enqueued",
    "type": "indexUpdate",
    "enqueuedAt": "2021-08-11T09:25:53.000000Z"
}
```

You can use this `taskUid` to get more details on [the status of the task](/reference/api/tasks.md#get-one-task).

See more information about [asynchronous operations](/learn/advanced/asynchronous_operations.md).

## Data types

The Meilisearch API supports [JSON data types](https://www.w3schools.com/js/js_json_datatypes.asp).
