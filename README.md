
##  NodeJS Assignment

### Features

- Live Website
- All restaurants list (for user)
- Complete restaurant details along with review(for user)
- Complete restaurant List with total reviews count(for admin)
### Section I: Database Design
[![chrome-screenshot-lucid-app.png](https://i.postimg.cc/d3180R3S/chrome-screenshot-lucid-app.png)](https://postimg.cc/qhPtb388)


### Section II: RESTful API Design

| HTTP Verb | API Endpoint | Brief Description                |
| :-------- | :------- | :------------------------- |
| `POST` | `/createRestaurant` | Create new restaurant data|
| `GET`| `/getAllRestaurant` | Get all restaurants List |
| `GET`| `/getRestaurantById/:restaurantId` | Get restaurant details by id|
| `POST`| `/createReview/:restaurantId` | Create Review of restaurant |
| `GET`| `/getReviews/:restaurantId` | Get all reviews for a restaurant |



### Screenshots

[![chrome-screenshot-5.png](https://i.postimg.cc/y8q1PFcq/chrome-screenshot-5.png)](https://postimg.cc/RNRxCJgG)

[![chrome-screenshot-6.png](https://i.postimg.cc/V6Nm64Qt/chrome-screenshot-6.png)](https://postimg.cc/kVLkYQ5M)

[![chrome-screenshot-7.png](https://i.postimg.cc/TwHGWmf4/chrome-screenshot-7.png)](https://postimg.cc/DJsR9SWr)

[![chrome-screenshot-8.png](https://i.postimg.cc/xd59nh7Y/chrome-screenshot-8.png)](https://postimg.cc/06zTCWPH)

### Demo

[Live wesite](https://restaurant-frnl.onrender.com)


### Tech Stack

**Client:** React, Bootstrap

**Server:** Node, Express, MongoDB
### 🛠 Skills
Javascript, NodeJS, ReactJS, ExpressJS, MongoDB, Bootstrap

### Section III: ES6 Basics

1. Given an array const a = [1, 3, 5, 2, 4] generate an array result1 from a, which should be equal to [1, 5, 4]. The solution should be of the form: 
**const result1 = a.filter((i,idx)=>(idx%2 == 0 ? i : ""))**

2. Given an array const a = [1, 3, 5, 2, 4]generate an array result2 from a, which should be equal to [1, 9, 25, 4, 16]. The solution should be of the form: 
**const result2 = a.map((i)=>(i * i))**

3. Given an array const a = [1, 3, 5, 2, 4]generate an array result3 from a, which should be equal to [1, 25, 16]. The solution should be of the form: 
**const result3 = a.filter((i,idx)=>(idx%2 == 0 ? i : "")).map((i)=>(i * i))**
### Run Locally

Clone the project

```bash
  git clone https://github.com/lavverma/restaurant.git
```
For server run

checkout branch server

Go to the project directory

```bash
  cd server
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  node src/index.js
```

For Client run

checkout branch master

Go to the project directory

```bash
  cd client
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn run dev
```


### Author

- [Lav verma](https://github.com/lavverma)

