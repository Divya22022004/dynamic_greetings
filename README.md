# 🌇 Dynamic Greetings - MERN Stack Project

This project displays a dynamic greeting message (e.g., **Good Morning**, **Good Afternoon**, **Good Evening**, **Good Night**) along with a changing background image based on the current time of day.

Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), this project demonstrates full-stack integration and real-time frontend updates with backend logic.

---

## 🖼️ Demo

https://drive.google.com/drive/folders/1sctod_-TKIWiaSYF8b_ny6IkSWm7mih5?usp=sharing

---

## 🚀 Features

- ⏰ **Time-based greetings** (morning, afternoon, evening, night)
- 🌄 Dynamic background image updates
- 🔁 Real-time data from backend via API
- 🌐 MongoDB used to store and retrieve greeting messages
- ⚛️ Fully responsive frontend using **React**
- 🌍 Express API & Node.js server integration

---

## 🛠️ Tech Stack

| Technology     | Description                     |
|----------------|---------------------------------|
| React          | Frontend library                |
| Node.js        | JavaScript runtime environment  |
| Express.js     | Web framework for Node.js       |
| MongoDB        | NoSQL database                  |
| Mongoose       | ODM for MongoDB                 |
| Axios          | HTTP client for API requests    |


## 📁 Folder Structure

```
dynamic-greeting/
│
├── backend/                  # Backend - Express server
│   ├── node_modules/
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
│
├── frontend/                 # Frontend - React (Vite)
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── Components/
│   │   │   ├── Greeting.css
│   │   │   └── Greeting.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
```
## 🧪 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/dynamic-greeting.git
cd dynamic-greeting
```

### 2. Install Backend Dependencies
```bash
npm install
```

### 3. Setup Environment Variables  
Create a `.env` file in the root:

```env
MONGO_URI=your_mongodb_connection_string  
PORT=5000
```

### 4. Install Frontend Dependencies
```bash
cd client  
npm install
```

### 5. Run in Development Mode

**Backend:**
```bash
npm run dev
```

**Frontend (in another terminal):**
```bash
cd client  
npm start
```

---

### 🏗️ Build and Run in Production

```bash
cd client  
npm run build

cd ..  
node server.js
```

---

### 📸 Time-Based Greetings Logic

| Time Range           | Greeting        | Background Image |
|----------------------|------------------|------------------|
| 12:00 AM – 5:59 AM   | Good Night       | night.jpg        |
| 6:00 AM – 11:59 AM   | Good Morning     | morning.jpg      |
| 12:00 PM – 5:59 PM   | Good Afternoon   | afternoon.jpg    |
| 6:00 PM – 9:59 PM    | Good Evening     | evening.jpg      |
| 10:00 PM – 11:59 PM  | Good Night       | night.jpg        |
