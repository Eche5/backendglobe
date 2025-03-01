# Globetrotter Challenge - Backend

## Overview
This is the backend for the **Globetrotter Challenge** game, a geography-based guessing game where players guess cities based on clues. The backend manages user authentication, game data, and score tracking.

## Tech Stack
- **Node.js** - Runtime environment
- **Express.js** - Backend framework
- **MongoDB** - Database for storing user data and game progress
- **Mongoose** - ODM for MongoDB

## Features
- User registration and login
- User score and game progress tracking
- Fetching city data (clues and fun facts)
- Updating user scores after each round
- Generating unique invite links

## Setup & Installation

### Prerequisites
Make sure you have the following installed:
- **Node.js** (>= 14.x)
- **MongoDB** (local or cloud-based like MongoDB Atlas)

### Installation Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/globetrotter-backend.git
   cd globetrotter-backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a **.env** file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The backend will run at `http://localhost:5000`

## API Endpoints

### Auth Routes
- **POST /api/auth/signup** – Register a new user
- **POST /api/auth/login** – Login and get a token

### User Routes

- **POST/api/v1/user/update** -Update user score
- **POST/api/v1/user/get-all-users** -get Leaderboard

### Game Routes
- **GET /api/v1/get-all-destinations** – Fetch all available cities and clues

## License
This project is licensed under the MIT License.

---
Feel free to update this README as needed!

