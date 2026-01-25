# User–Todo Management System (Node.js + Supabase)

## 📌 Objective
This project is a backend User–Todo Management System built using Node.js and Express.js with Supabase (PostgreSQL) as the database.  
It demonstrates relational schema design, foreign key usage, cascade delete behavior, and complete CRUD operations.

---

## 🧱 Database Schema

### Users Table
- id (UUID, Primary Key)
- name (TEXT, NOT NULL)
- email (TEXT, UNIQUE, NOT NULL)
- password (TEXT, NOT NULL)
- created_at (TIMESTAMP)

### Todos Table
- id (UUID, Primary Key)
- title (TEXT, NOT NULL)
- description (TEXT)
- is_completed (BOOLEAN, default: false)
- user_id (UUID, Foreign Key → users.id)
- created_at (TIMESTAMP)

### Relationship
- One User → Many Todos
- Cascade Delete: Deleting a user automatically deletes all related todos

---

## 🚀 Tech Stack
- Node.js
- Express.js
- Supabase (PostgreSQL)
- bcryptjs
- express-validator

---

## 📂 Project Structure

