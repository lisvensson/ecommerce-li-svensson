# ecommerce-li-svensson

## API ENDPOINTS
### PRODUCTS endpoints

- [GET] /api/products
- Description: Fetches all products.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
[
	{
        "_id": "68734ce9ff89193f4ce3cfb1",
        "name": "Product name 1",
        "details": "Details 1",
        "description": "Description 1",
        "price": 100,
        "stock": 1,
        "category": "Category 1",
        "size": "1",
        "images": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        "createdAt": "2024-07-13T08:00:00.000Z",
        "updatedAt": "2025-07-13T07:03:42.839Z"
    },
    {
        "_id": "68734e08ff89193f4ce3cfb2",
        "name": "Product name 2",
        "details": "Details 2",
        "description": "Description 2",
        "price": 200,
        "stock": 2,
        "category": "Category 2",
        "size": "2",
        "images": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        "createdAt": "2024-07-13T08:00:00.000Z",
        "updatedAt": "2025-07-13T07:04:40.258Z"
	}
]
```

- [GET] /api/products/:id
- Description: Fetches a specific product by ID.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
{
    "_id": "68735fec361ac4b93bc0e4cc",
    "name": "Product name 6",
    "details": "Details 6",
    "description": "Description 6",
    "price": 600,
    "stock": 6,
    "category": "Category 6",
    "size": "6",
    "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ],
    "createdAt": "2025-07-13T07:27:40.048Z",
    "updatedAt": null
}
```

- [POST] /api/products
- Description: Creates a new product.

---

> Request JSON Body:

```
{
    "name": "Product name 6",
    "details": "Details 6",
    "description": "Description 6",
    "price": 600,
    "stock": 6,
    "category": "Category 6",
    "size": "6",
    "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ]
}
```

> Response JSON Body:

```
{
   "message": "Product created",
   "_id": "68735fec361ac4b93bc0e4cc"
}
```

- [PATCH] /api/products/:id
- Description: Updates a specific product by ID.

---

> Request JSON Body:

```
{
    "name": "Product name 6 updated",
    "details": "Details 6 updated",
    "description": "Description 6 updated",
    "price": 600,
    "stock": 6,
    "category": "Category 6 updated",
    "size": "6 updated",
    "images": [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
    ]
}
```

> Response Body:

```
{
   "message": "Product updated",
   "product": {
        "name": "Product name 6 updated",
        "details": "Details 6 updated",
        "description": "Description 6 updated",
        "price": 600,
        "stock": 6,
        "category": "Category 6 updated",
        "size": "6 updated",
        "images": [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        "createdAt": "2025-07-13T07:27:40.048Z",
        "updatedAt": "2025-07-13T07:34:35.852Z"
    }
}
```

- [DELETE] /api/products/:id
- Description: Deletes a specific product by ID.

---

> Request JSON Body:
> `None`

> Response Body:

```
{
    "message": "Product deleted"
}
```