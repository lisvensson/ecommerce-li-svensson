# ecommerce-li-svensson

## API ENDPOINTS
### PRODUCTS endpoints

- [GET] http://localhost:3000/api/products
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

- [GET] http://localhost:3000/api/products/:id
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

- [POST] http://localhost:3000/api/products
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

- [PATCH] http://localhost:3000/api/products/:id
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

- [DELETE] http://localhost:3000/api/products/:id
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

### USERS endpoints
- [GET] http://localhost:3000/api/users
- Description: Fetches all users.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
[
    {
        "_id": "68734ebaff89193f4ce3cfb7",
        "firstName": "Admin",
        "lastName": "Adminsson",
        "address": "Admin Gata 1",
        "postalCode": "12345",
        "city": "Adminstad",
        "country": "Adminland",
        "phone": "+46701234567",
        "email": "admin@admin.com",
        "password": "admin",
        "role": "admin",
        "createdAt": "2025-07-13T08:00:00.000Z",
        "updatedAt": "2025-07-13T08:00:00.000Z"
	},
	{
        "_id": "68734f68ff89193f4ce3cfb8",
        "firstName": "Kund",
        "lastName": "Kundsson",
        "address": "Kund Gata 1",
        "postalCode": "12345",
        "city": "Kundstad",
        "country": "Kundland",
        "phone": "+46701234567",
        "email": "kund@kund.com",
        "password": "kund",
        "role": "customer",
        "createdAt": "2025-07-13T08:00:00.000Z",
        "updatedAt": "2025-07-13T08:00:00.000Z"
	}
]
```

- [GET] http://localhost:3000/api/users/:id
- Description: Fetches a specific user by ID.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
{
    "_id": "6874b0207c27af76fa251b33",
    "firstName": "Test",
    "lastName": "Testsson",
    "address": "Testvägen 1",
    "postalCode": "12345",
    "city": "Teststad",
    "country": "Testland",
    "phone": "+4671234567",
    "email": "test@test.com",
    "password": "$2b$15$b72G9n2FRQORDUemypuKfelgbEA6AlKXKKwBGR/RNNWZZo.JmSddq",
    "role": "admin",
    "createdAt": "2025-07-14T07:22:08.782Z",
    "updatedAt": null
}
```

- [GET] http://localhost:3000/api/users/email/:email
- Description: Fetches a specific user by email.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
{
    "_id": "6874b0207c27af76fa251b33",
    "firstName": "Test updated",
    "lastName": "Testsson updated",
    "address": "Testvägen 1 updated",
    "postalCode": "12345 updated",
    "city": "Teststad updated",
    "country": "Testland updated",
    "phone": "+4671234567 updated",
    "email": "test@test.com updated",
    "password": "$2b$15$6FtCL1i1pgATUW03weeFauiFjtxLpdc.8NrhhxJ6mcR2DybA2ea2u",
    "role": "admin",
    "createdAt": "2025-07-14T07:22:08.782Z",
    "updatedAt": "2025-07-14T07:25:15.144Z"
}
```

- [POST] http://localhost:3000/api/users
- Description: Creates a new user.

---

> Request JSON Body:

```
{
    "firstName": "Test",
    "lastName": "Testsson",
    "address": "Testvägen 1",
    "postalCode": "12345",
    "city": "Teststad",
    "country": "Testland",
    "phone": "+4671234567",
    "email": "test@test.com",
    "password": "test",
    "role": "admin"
}
```

> Response JSON Body:

```
{
   "message": "User created",
   "_id": "6874b0207c27af76fa251b33"
}
```

- [PATCH] http://localhost:3000/api/users/:id
- Description: Updates a specific user by ID.

---

> Request JSON Body:

```
{
    "firstName": "Test updated",
    "lastName": "Testsson updated",
    "address": "Testvägen 1 updated",
    "postalCode": "12345 updated",
    "city": "Teststad updated",
    "country": "Testland updated",
    "phone": "+4671234567 updated",
    "email": "test@test.com updated",
    "password": "testupdated"
}
```

> Response Body:

```
{
    "message": "User updated",
    "user": {
        "_id": "6874b0207c27af76fa251b33",
        "firstName": "Test updated",
        "lastName": "Testsson updated",
        "address": "Testvägen 1 updated",
        "postalCode": "12345 updated",
        "city": "Teststad updated",
        "country": "Testland updated",
        "phone": "+4671234567 updated",
        "email": "test@test.com updated",
        "password": "$2b$15$6FtCL1i1pgATUW03weeFauiFjtxLpdc.8NrhhxJ6mcR2DybA2ea2u",
        "role": "admin",
        "createdAt": "2025-07-14T07:22:08.782Z",
        "updatedAt": "2025-07-14T07:25:15.144Z"
    }
}
```

- [DELETE] http://localhost:3000/api/users/:id
- Description: Deletes a specific user by ID.

---

> Request JSON Body:
> `None`

> Response Body:

```
{
    "message": "User deleted"
}
```