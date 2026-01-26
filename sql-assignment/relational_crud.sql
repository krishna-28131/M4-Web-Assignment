
-- RELATIONAL CRUD OPERATIONS USING SQL

-- STEP 1: CREATE TABLES WITH RELATIONSHIP

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,
    status TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- STEP 2: INSERT DATA

-- Insert users
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com'),
('Charlie', 'charlie@example.com'),
('Diana', 'diana@example.com'),
('Evan', 'evan@example.com');

-- Insert orders
INSERT INTO orders (user_id, amount, status) VALUES
(1, 100, 'pending'),
(1, 200, 'completed'),
(1, 150, 'completed'),
(2, 300, 'pending'),
(2, 120, 'completed'),
(3, 500, 'completed'),
(4, 250, 'cancelled'),
(5, 400, 'pending'),
(5, 180, 'completed');

-- STEP 3: READ DATA

-- Fetch all users
SELECT * FROM users;

-- Fetch all orders
SELECT * FROM orders;

-- Fetch orders for a specific user (user_id = 1)
SELECT *
FROM orders
WHERE user_id = 1;

-- Fetch users who have more than one order
SELECT u.id, u.name, COUNT(o.id) AS total_orders
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 1;

-- Fetch total order amount per user
SELECT u.id, u.name, SUM(o.amount) AS total_amount
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;

-- STEP 4: UPDATE DATA

-- Update email of one user
UPDATE users
SET email = 'bob.updated@example.com'
WHERE name = 'Bob';

-- Update status of all orders for a user
UPDATE orders
SET status = 'completed'
WHERE user_id = 1;

-- Update amount of a single order
UPDATE orders
SET amount = 175
WHERE id = 3;

-- STEP 5: DELETE DATA

-- Delete one order using order id
DELETE FROM orders
WHERE id = 9;

-- Delete all orders of a specific user
DELETE FROM orders
WHERE user_id = 4;

-- Try deleting a user with existing orders (will fail)
DELETE FROM users
WHERE id = 1;

-- STEP 6: CONCEPTUAL QUESTION

-- Why should orders not be stored inside the users table?
-- Because one user can have many orders.
-- This follows database normalization,
-- avoids data duplication,
-- and makes the database scalable and efficient.
