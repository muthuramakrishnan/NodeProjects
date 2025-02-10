const fs = require("fs");
const privateConstructorKey = Symbol("privateConstructorKey");

class Reader {
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
      const reader = new Reader(this.filePath, privateConstructorKey);
      return reader;
    }
  };

  doSyncRead() {
    try {
      const data = fs.readFileSync(this.filePath, {
        encoding: "utf-8",
        flag: "r",
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  doAsyncRead() {
    fs.readFile(this.filePath, "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }

  async doSyncReadPromise() {
    try {
      const data = await fs.promises.readFile(this.filePath, "utf-8");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  asyncReadPromise() {
    fs.promises
      .readFile(this.filePath, "utf-8")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  readWithStream() {
    const readableStream = fs.createReadStream(this.filePath, "utf8");
    // Listen for the 'data' event, which gets triggered when data is available to read
    readableStream.on("data", (chunk) => {
      console.log("Received chunk: ", chunk);
    });

    // Handle the 'end' event when the entire file is read
    readableStream.on("end", () => {
      console.log("Finished reading the file.");
    });

    // Handle any error during reading
    readableStream.on("error", (err) => {
      console.error("Error reading file:", err);
    });
  }
}

module.exports = Reader;
