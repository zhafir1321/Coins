# HackCrypto API Documentation

## Deployed server
- url : [https://api.p2.lc2s6.foxhub.space](https://api.p2.lc2s6.foxhub.space/)
- registered user :
```js
user1 = { fullName: 'User 1', email : 'user1@mail.com', password: 'user1' }
user2 = { fullName: 'User 2', email : 'user2@mail.com', password: 'user2' }
```

Jika mau membuat user baru, silahkan lakukan register user pada postman dengan email yg belum terdaftar

&nbsp;

## Models :

_User_
```
- fullName: string, required
- email: string, required, unique
- password: string, required
```

_Coin_
```
- name: string, required
- symbol: string, required
- logo: string, required
- description: string, required
```

_UserCoin_
```
- UserId: integer, required
- CoinId: integer, required
- quantity: integer, default: 0
```

## Relationship :

>### **Many-to-Many**
Perhatikan relasi antara `User`, `UserCoin`, dan `Coin` gunakan definisi relasi yang sesuai pada sequelize relation [doc](https://sequelize.org/master/manual/advanced-many-to-many.html).

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`

Routes below need authentication:

- `GET /coins`
- `POST /usercoins/:coinId`
- `GET /usercoins`

Routes below need authentication & authorization:
- `GET /usercoins/:id`
- `PUT /usercoins/:id`
- `DELETE /usercoins/:id`

&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "fullName": "string",
  "email": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Full Name is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "access_token": "<token>"
}
```

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /coins

Description:
- Fetch all coins in database.

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "description": "Bitcoin (BTC) is a digital currency that was created in January 2009. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto."
  },
  {
    "id": 2,
    "name": "Ethereum",
    "symbol": "ETH",
    "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    "description": "Ethereum (ETH) is an open-source, blockchain-based, decentralized software platform used for its own cryptocurrency, ether."
  },
  ...,
]
```

&nbsp;

## 4. POST /usercoins/:coinId

Description:
- Add coin to the logged-in user's coin list.

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "coinId": "integer"
}
```

_Response (201 - Created)_
```json
{
  "id": 1,
  "UserId": 1,
  "CoinId": 1,
  "quantity": 0
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Coin not found"
}
```

&nbsp;

## 5. GET /usercoins

Description:
- Fetch all coins in logged-in user's coin list.

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": 1,
    "UserId": 1,
    "CoinId": 1,
    "quantity": 1,
    "Coin": {
      "id": 1,
      "name": "Bitcoin",
      "symbol": "BTC",
      "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      "description": "Bitcoin (BTC) is a digital currency that was created in January 2009. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto."
    }
  }
]
```

&nbsp;

## 6. GET /usercoins/:id

Description:
- Fetch detail usercoin by id

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "id": "integer"
}
```

_Response (200 - OK)_
```json
{
  "id": 1,
  "UserId": 1,
  "CoinId": 1,
  "quantity": 10,
  "Coin": {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "description": "Bitcoin (BTC) is a digital currency that was created in January 2009. It follows the ideas set out in a whitepaper by the mysterious and pseudonymous Satoshi Nakamoto."
  }
}
```

_Response (404 - Not Found)_
```json
{
  "message": "User coin not found"
}
```

&nbsp;

## 4. PUT /usercoins/:id

Description:
- Update usercoins by id

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "id": "integer"
}
```

- body:
```json
{
  "quantity": "integer"
}
```

_Response (200 - OK)_
```json
{
  "id": 1,
  "UserId": 1,
  "CoinId": 1,
  "quantity": 10,
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Quantity is required"
}
OR
{
  "message": "Quantity must be a number"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "User coin not found"
}
```

&nbsp;

## 8. DELETE /usercoins/:id

Description:
- Delete user coin by id

Request:

- headers:
```json
{
  "authorization": "Bearer <token>"
}
```

- params:
```json
{
  "id": "integer"
}
```

_Response (200 - OK)_
```json
{
  "message": "User coin successfully deleted"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "User coin not found"
}
```

&nbsp;

## Global Errror

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_

```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
