# Node.js Internals – Theory

## Node.js Architecture

Node.js is built on a single-threaded, event-driven architecture designed to handle multiple requests efficiently. Instead of creating a new thread for every request, Node.js uses an event loop to manage tasks asynchronously. This makes Node.js fast, lightweight, and suitable for scalable network applications.

The main components of Node.js architecture include the JavaScript engine (V8), Node.js core APIs, native bindings, the event loop, and libuv.

---

## JavaScript Engine (V8)

* V8 is the JavaScript engine developed by Google.
* It converts JavaScript code into machine code that the computer can execute directly.
* V8 provides fast execution by using Just-In-Time (JIT) compilation.
* In Node.js, V8 is responsible only for executing JavaScript, not for handling I/O operations.

---

## Node.js Core APIs

* Core APIs are built-in modules provided by Node.js.
* Examples include `fs`, `http`, `path`, `crypto`, and `events`.
* These APIs allow developers to perform tasks like file handling, networking, and system operations.
* Core APIs internally interact with native bindings to access low-level system features.

---

## Native Bindings

* Native bindings act as a bridge between JavaScript and C/C++ code.
* They allow JavaScript code to communicate with low-level system operations.
* Native bindings connect Node.js core APIs with libuv and the operating system.
* This helps Node.js perform tasks that JavaScript alone cannot handle.

---

## Event Loop

* The event loop is the heart of Node.js asynchronous behavior.
* It continuously checks for pending tasks and executes callbacks when operations are completed.
* The event loop allows Node.js to handle many requests without blocking the main thread.
* It works in phases, each responsible for handling different types of callbacks.

---

## libuv

### What is libuv?

* libuv is a C library used by Node.js to handle asynchronous operations.
* It provides support for event-driven programming.
* libuv manages the event loop and system-level operations.

### Why Node.js needs libuv

* JavaScript alone cannot perform non-blocking I/O operations.
* libuv enables Node.js to perform asynchronous file system, network, and timer operations.
* It makes Node.js cross-platform by handling OS-specific tasks internally.

### Responsibilities of libuv

* Managing the event loop
* Handling asynchronous I/O
* Managing the thread pool
* Providing networking and timer functionalities

---

## Thread Pool

### What is a thread pool?

* A thread pool is a group of background threads used to perform blocking operations.
* These threads work separately from the main event loop.

### Why Node.js uses a thread pool

* Some tasks are blocking by nature, such as file system operations.
* Using a thread pool prevents blocking the main JavaScript thread.
* It helps maintain application responsiveness.

### Operations handled by the thread pool

* File system operations (`fs` module)
* DNS lookups
* Cryptographic operations
* Compression tasks

---

## Worker Threads

### What are worker threads?

* Worker threads allow running JavaScript code in parallel threads.
* Each worker thread has its own event loop.

### Why are worker threads needed?

* To handle CPU-intensive tasks efficiently
* To avoid blocking the main thread
* To improve performance in computation-heavy applications

### Difference between thread pool and worker threads

* Thread pool is managed internally by libuv for background tasks.
* Worker threads are explicitly created by developers.
* Thread pool is used for I/O-related operations, while worker threads are used for CPU-intensive tasks.

---

## Event Loop Queues

### Macro Task Queue

* Contains tasks scheduled by timers and I/O events.
* Examples:

  * `setTimeout`
  * `setInterval`
  * I/O callbacks

### Micro Task Queue

* Contains tasks that need immediate execution after the current operation.
* Examples:

  * `Promise.then()`
  * `process.nextTick()`

### Execution Priority

* Micro task queue is executed before the macro task queue.
* All micro tasks are completed before moving to the next macro task.

---

## Summary

Node.js uses a powerful internal architecture combining V8, libuv, and the event loop to handle asynchronous operations efficiently. By using thread pools and worker threads, Node.js ensures high performance without blocking the main execution thread.
