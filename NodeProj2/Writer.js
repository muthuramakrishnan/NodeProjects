const fs = require("fs");
const privateConstructorKey = Symbol("privateConstructorKey");

class Writer {
  constructor(filePath, key) {
    if (key !== privateConstructorKey) {
      throw new Error("Cannot instantiate directly");
    }
    this.filePath = filePath;
  }

  static Builder = class {
    setFilePath(filePath) {
      this.filePath = filePath;
      return this;
    }
    build() {
      const writer = new Writer(this.filePath, privateConstructorKey);
      return writer;
    }
  };

  doSyncWrite() {
    try {
      fs.writeFileSync(this.filePath, "hello");
    } catch (error) {
      console.error(error);
    }
  }

  doAsyncWrite() {
    fs.writeFile(this.filePath, "Hello", (error) => {
      if (error) {
        console.error(error);
      }
    });
  }

  doSyncWritePromise() {
    try {
      fs.promises.writeFile(this.filePath, "hello");
    } catch (error) {
      console.error(error);
    }
  }

  doAsyncWritePromise() {
    fs.promises.writeFile(this.filePath, "hello").catch((error) => {
      console.error(error);
    });
  }

  writeWithStream() {
    // Create a writable stream to write data to a file
    const writableStream = fs.createWriteStream(this.filePath, "utf8");

    // Write data to the stream
    writableStream.write("Hello, world!\n");
    writableStream.write("This is a new line.\n");

    // End the stream (after which no more data can be written)
    writableStream.end(() => {
      console.log("Finished writing to the file.");
    });

    // Handle any error during writing
    writableStream.on("error", (err) => {
      console.error("Error writing to file:", err);
    });
  }
}

module.exports = Writer;
