# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

Using `db.json` as a database is acceptable only for learning or small demo projects, but it is not suitable for real-world applications due to several limitations:

### Limitations of File-Based Storage

**Performance**
- Every read or write operation requires reading the entire file into memory.
- As data grows, file operations become slow and inefficient.

**Scalability**
- File-based storage does not scale well with large amounts of data.
- It cannot efficiently handle millions of records or high traffic.

**Concurrency**
- Multiple users accessing or modifying the file at the same time can cause data corruption.
- There is no proper locking or transaction handling.

**Reliability**
- If the server crashes while writing to the file, data can be lost or corrupted.
- No automatic recovery mechanisms exist.

**Security**
- No built-in authentication, authorization, or access control.
- Data is stored in plain text unless manually encrypted.

Because of these issues, real-world applications use proper database systems instead of file-based storage.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system provides much more than simple data storage. Some important characteristics are:

### Performance
- Fast data retrieval and insertion.
- Uses indexing and query optimization.

### Concurrency
- Allows multiple users to read and write data simultaneously without conflicts.
- Uses locking and transaction management.

### Reliability
- Ensures data is not lost due to crashes or failures.
- Supports backups and recovery mechanisms.

### Data Integrity
- Maintains accuracy and consistency of data.
- Enforces constraints like primary keys, foreign keys, and validations.

### Scalability
- Can handle increasing amounts of data and users.
- Supports vertical and horizontal scaling.

### Fault Tolerance
- Continues working even if some components fail.
- Supports replication and failover systems.

These features make database systems reliable and suitable for production environments.

---

## 3. How many types of databases are there? What are their use cases or applications?

Databases are mainly classified into two broad types:

### 1. Relational Databases (SQL)

**Description**
- Store data in tables with rows and columns.
- Use structured schemas and SQL for querying.
- Follow ACID properties (Atomicity, Consistency, Isolation, Durability).

**Examples**
- MySQL
- PostgreSQL
- Oracle
- SQL Server

**Use Cases**
- Banking systems
- E-commerce applications
- School and university management systems
- Applications requiring strong data consistency and relationships

---

### 2. Non-Relational Databases (NoSQL)

**Description**
- Store data in flexible formats like documents, key-value pairs, graphs, or columns.
- Schema-less or schema-flexible.
- Designed for high scalability and performance.

**Examples**
- MongoDB (Document-based)
- Redis (Key-Value)
- Cassandra (Column-based)
- Neo4j (Graph-based)

**Use Cases**
- Social media platforms
- Real-time analytics
- Chat applications
- Big data and distributed systems

---

### Conclusion
Relational databases are best when data consistency and relationships are critical, while NoSQL databases are preferred for scalability, flexibility, and handling large volumes of unstructured data.
