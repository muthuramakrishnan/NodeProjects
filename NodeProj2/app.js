const Reader = require("./Reader");
const Writer = require("./Writer");

const reader = new Reader.Builder()
  .setFilePath(__dirname + "/greetings.txt")
  .build();
// reader.doSyncRead();
// reader.readWithStream();

const writer = new Writer.Builder()
  .setFilePath(__dirname + "/greetings.txt")
  .build();
// writer.doSyncWrite();
writer.writeWithStream();
