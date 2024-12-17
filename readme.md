---

## **✨ Features**
- ✅ **JWT Authentication** — Secure login and token generation.
- 🔁 **Retry Logic** — Exponential backoff when the database connection fails.
- 📦 **Modular Code** — Organized and clean folder structure.
- 🛠️ **Error Handling** — Centralized error handling for all API requests.
- 🚀 **Built with Sequelize** — Uses Sequelize ORM for easy interaction with MySQL and along with Exponential Backoff.
  
---

## **💻 Tech Stack**
| **Technology**  | **Usage**            |
|-----------------|---------------------|
| **Node.js**     | Server environment   |
| **Express**     | Backend framework    |
| **Sequelize**   | ORM for MySQL        |
| **MySQL**       | Database             |
| **JWT**         | User authentication  |
| **dotenv**      | Environment variables|

---

## **📦 Installation**
> npm i

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

Curl : 
curl --location 'http://localhost:3000/api/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "john_doe",
    "password": "password123"
  }'

Sql query;

CREATE DATABASE `usermanagement`

-- usermanagement.`user` definition

CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`username`, `password`) 
VALUES 
  ('john_doe', 'password123'),
  ('jane_smith', 'securepass456'),
  ('mike_brown', 'letmein789');
