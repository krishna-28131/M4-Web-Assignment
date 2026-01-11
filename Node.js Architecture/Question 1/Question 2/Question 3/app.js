import os from "os";
import fs from "fs/promises";

// -------- Part A: OS Module --------
try {
  console.log("Free Memory:", os.freemem());
  console.log("Total CPU Cores:", os.cpus().length);
} catch (error) {
  console.error("OS Module Error:", error.message);
}

// -------- Part B: File System Operations --------
async function fileOperations() {
  try {
    // Create data.txt
    await fs.writeFile("data.txt", "Hello World");

    // Create Readme.md
    await fs.writeFile("Readme.md", "## This is first line in Readme");

    // Read data.txt
    const data = await fs.readFile("data.txt", "utf-8");
    console.log("data.txt content:", data);

    // Append second line to data.txt
    await fs.appendFile("data.txt", "\nThis is second line");

    // Delete Readme.md
    await fs.unlink("Readme.md");

    console.log("File operations completed successfully");
  } catch (error) {
    console.error("FS Error:", error.message);
  }
}

fileOperations();
