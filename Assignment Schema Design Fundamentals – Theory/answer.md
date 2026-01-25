# Schema Design Fundamentals – Theory

## What is Schema Design and What a Database Schema Represents

Schema design is the process of planning and defining the structure of a relational database before storing any data. A database schema represents the blueprint of the database. It defines tables, columns, data types, relationships between tables, and constraints.  
For example, in an e-commerce application, the schema may include tables like Users, Orders, and Products and define how they are related.

---

## Why Schema Design is Required Before Writing Backend Code

Schema design is required before writing backend code because backend logic depends on how data is stored and accessed. A well-designed schema ensures that data can be inserted, updated, and retrieved efficiently.  
Without proper schema design, backend code may break frequently, require constant changes, and cause performance issues.

---

## Impact of Poor Schema Design

Poor schema design can negatively affect the system in many ways:
- **Data inconsistency:** Same data may appear differently in multiple places.
- **Difficult maintenance:** Small changes require updates in many queries and tables.
- **Scalability issues:** As data grows, queries become slow and inefficient.

For example, storing user details repeatedly in an Orders table can lead to incorrect or mismatched user data.

---

## Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied to database columns to ensure data accuracy and integrity. Databases enforce validations to prevent invalid data from being stored.

Common validations include:
- **NOT NULL:** Ensures a value must be provided.
- **UNIQUE:** Ensures values are not duplicated.
- **DEFAULT:** Assigns a default value if none is given.
- **PRIMARY KEY:** Uniquely identifies each record.

These validations protect data even if backend validation fails.

---

## Difference Between a Database Schema and a Database Table

A database schema is the overall structure of the database, including all tables and their relationships.  
A database table is a single structure within the schema that stores data related to one entity.  
In simple terms, the schema is the complete design, and tables are its components.

---

## Why a Table Should Represent Only One Entity

Each table should represent only one entity to avoid confusion and redundancy.  
For example, a Users table should contain only user-related data and not order or payment details.  
This makes the database easier to understand, maintain, and scale.

---

## Why Redundant or Derived Data Should Be Avoided

Redundant data means storing the same information multiple times, and derived data is data that can be calculated from existing data.  
Storing such data increases the risk of inconsistency and wastes storage space.  
For example, storing total price when it can be calculated from quantity and price may result in incorrect values.

---

## Importance of Choosing Correct Data Types

Choosing the correct data types improves storage efficiency, performance, and data validation.  
For example:
- INT for numbers like age
- DATE for dates
- BOOLEAN for true/false values

Incorrect data types can allow invalid data and reduce performance.

---

## Conclusion

Schema design is a critical foundation of relational databases. A well-designed schema ensures data integrity, simplifies backend development, and supports scalability and maintainability of applications.
