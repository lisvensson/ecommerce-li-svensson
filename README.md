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

### ORDERS endpoints
- [GET] http://localhost:3000/api/orders
- Description: Fetches all orders.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
[
    {
        "_id": "6874e759f2b8791fae32f273",
        "customer": "68734f68ff89193f4ce3cfb8",
        "totalPrice": 600,
        "paymentStatus": "paid",
        "paymentId": "payment-1",
        "orderStatus": "processing",
        "createdAt": "2025-07-14T11:17:45.403Z",
        "updatedAt": "2025-07-14T11:17:45.403Z"
    },
    {
        "_id": "6874e7b9f2b8791fae32f279",
        "customer": "6874d6dfe147358b9e3d69e9",
        "totalPrice": 1100,
        "paymentStatus": "paid",
        "paymentId": "payment-2",
        "orderStatus": "completed",
        "createdAt": "2025-07-14T11:19:21.792Z",
        "updatedAt": "2025-07-14T11:19:21.792Z"
    },
]
```

- [GET] http://localhost:3000/api/orders/:id
- Description: Fetches a specific order by ID.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
{
    "_id": "6874f9c5d7407475c91ddffe",
    "customer": {
        "_id": "6874d6dfe147358b9e3d69e9",
        "firstName": "Test",
        "lastName": "Testsson",
        "address": "Testvägen 1",
        "postalCode": "12345",
        "city": "Teststad",
        "country": "Testland",
        "phone": "+4671234567",
        "email": "test@test.com",
        "password": "$2b$15$pxNSuq6Pq6O929h/2NodkuNGJG3vBv7LdN4i6FwKLSyVYTbXAIRxq",
        "role": "customer",
        "createdAt": "2025-07-14T10:07:27.924Z",
        "updatedAt": null
    },
    "totalPrice": 900,
    "paymentStatus": "paid",
    "paymentId": "payment-4",
    "orderStatus": "pending",
    "createdAt": "2025-07-14T12:36:21.510Z",
    "updatedAt": "2025-07-14T12:36:21.510Z",
    "orderItems": [
        {
            "_id": "6874f9c5d7407475c91de000",
            "orderId": "6874f9c5d7407475c91ddffe",
            "productId": {
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
            },
            "productName": "Product name 2",
            "unitPrice": 200,
            "quantity": 3,
            "createdAt": "2025-07-14T12:36:21.548Z",
            "updatedAt": "2025-07-14T12:36:21.548Z"
        },
        {
            "_id": "6874f9c5d7407475c91de002",
            "orderId": "6874f9c5d7407475c91ddffe",
            "productId": {
                "_id": "68734e1aff89193f4ce3cfb3",
                "name": "Product name 3",
                "details": "Details 3",
                "description": "Description 3",
                "price": 300,
                "stock": 3,
                "category": "Category 3",
                "size": "3",
                "images": [
                    "https://example.com/image1.jpg",
                    "https://example.com/image2.jpg",
                    "https://example.com/image3.jpg"
                ],
                "createdAt": "2024-07-13T08:00:00.000Z",
                "updatedAt": "2025-07-13T07:05:21.720Z"
            },
            "productName": "Product name 3",
            "unitPrice": 300,
            "quantity": 1,
            "createdAt": "2025-07-14T12:36:21.568Z",
            "updatedAt": "2025-07-14T12:36:21.568Z"
        }
    ]
}
```

- [GET] http://localhost:3000/api/orders/payment/:id
- Description: Fetches a specific order by payment ID.

---

> Request JSON Body:
> `None`

> Response JSON Body:

```
{
    "_id": "6874f9c5d7407475c91ddffe",
    "customer": {
        "_id": "6874d6dfe147358b9e3d69e9",
        "firstName": "Test",
        "lastName": "Testsson",
        "address": "Testvägen 1",
        "postalCode": "12345",
        "city": "Teststad",
        "country": "Testland",
        "phone": "+4671234567",
        "email": "test@test.com",
        "password": "$2b$15$pxNSuq6Pq6O929h/2NodkuNGJG3vBv7LdN4i6FwKLSyVYTbXAIRxq",
        "role": "customer",
        "createdAt": "2025-07-14T10:07:27.924Z",
        "updatedAt": null
    },
    "totalPrice": 900,
    "paymentStatus": "paid updated",
    "paymentId": "payment-4-updated",
    "orderStatus": "pending updated",
    "createdAt": "2025-07-14T12:36:21.510Z",
    "updatedAt": "2025-07-14T12:36:57.036Z"
    "orderItems": [
        {
            "_id": "6874f9c5d7407475c91de000",
            "orderId": "6874f9c5d7407475c91ddffe",
            "productId": {
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
            },
            "productName": "Product name 2",
            "unitPrice": 200,
            "quantity": 3,
            "createdAt": "2025-07-14T12:36:21.548Z",
            "updatedAt": "2025-07-14T12:36:21.548Z"
        },
        {
            "_id": "6874f9c5d7407475c91de002",
            "orderId": "6874f9c5d7407475c91ddffe",
            "productId": {
                "_id": "68734e1aff89193f4ce3cfb3",
                "name": "Product name 3",
                "details": "Details 3",
                "description": "Description 3",
                "price": 300,
                "stock": 3,
                "category": "Category 3",
                "size": "3",
                "images": [
                    "https://example.com/image1.jpg",
                    "https://example.com/image2.jpg",
                    "https://example.com/image3.jpg"
                ],
                "createdAt": "2024-07-13T08:00:00.000Z",
                "updatedAt": "2025-07-13T07:05:21.720Z"
            },
            "productName": "Product name 3",
            "unitPrice": 300,
            "quantity": 1,
            "createdAt": "2025-07-14T12:36:21.568Z",
            "updatedAt": "2025-07-14T12:36:21.568Z"
        }
    ]
}
```

- [POST] http://localhost:3000/api/orders
- Description: Creates a new order.

---

> Request JSON Body:

```
{
    "customer": "6874d6dfe147358b9e3d69e9",
    "paymentStatus": "paid",
    "paymentId": "payment-4",
    "orderStatus": "pending",
    "orderItems": [
        {
            "productId": "68734e08ff89193f4ce3cfb2",
            "productName": "Product name 2",
            "unitPrice": 200,
            "quantity": 3
        },
        {
        "productId": "68734e1aff89193f4ce3cfb3",
        "productName": "Product name 3",
        "unitPrice": 300,
        "quantity": 1
        }
    ]
}
```

> Response JSON Body:

```
{
   "message": "Order created",
   "_id": "6874f9c5d7407475c91ddffe"
}
```

- [PATCH] http://localhost:3000/api/orders/:id
- Description: Updates a specific order by ID.

---

> Request JSON Body:

```
{
    "paymentStatus": "paid updated",
    "paymentId": "payment-4-updated",
    "orderStatus": "pending updated"
}
```

> Response Body:

```
{
    "message": "Order updated",
    "order": {
        "_id": "6874f9c5d7407475c91ddffe",
        "customer": "6874d6dfe147358b9e3d69e9",
        "totalPrice": 900,
        "paymentStatus": "paid updated",
        "paymentId": "payment-4-updated",
        "orderStatus": "pending updated",
        "createdAt": "2025-07-14T12:36:21.510Z",
        "updatedAt": "2025-07-14T12:36:57.036Z"
	}
}
```

- [DELETE] http://localhost:3000/api/orders/:id
- Description: Deletes a specific order by ID.

---

> Request JSON Body:
> `None`

> Response Body:

```
{
    "message": "Order deleted"
}
```