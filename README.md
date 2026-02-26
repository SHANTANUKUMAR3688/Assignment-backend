#  Authentication API (Login & Register)

This project is a simple **Authentication API** built using **Node.js**, **Express.js**, and **MongoDB**.
It includes basic **User Registration and Login functionality** with password hashing and JWT authentication.


##  Installation & Setup Guide

Follow the steps below to run this project locally.

---

###  Clone the Repository

```bash
git clone https://github.com/SHANTANUKUMAR3688/Assignment-backend.git
```

### 2️ Install Dependencies

Make sure **Node.js** is installed on your system.

```bash
npm install
```

---

###  Create Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=mongodb://localhost:27017/authDB
```

If using **MongoDB Atlas**, replace `MONGO_URI` with your cloud connection string.

### 4️ Start MongoDB

If using local MongoDB, run:

```bash
mongod
```

If using MongoDB Atlas, no need to start locally.


### Run the Project

For development (with nodemon):

```bash
npm run dev
```

For production:

```bash
npm start
```

###  Server Running On

```
http://localhost:4000
```

##  Requirements

* Node.js (v14 or higher recommended)
* MongoDB (Local or Atlas)
* npm or yarn

