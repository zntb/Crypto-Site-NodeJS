const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function conectToDatabase() {
  const client = await MongoClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("crypto-site");
}

function getDb() {
  if (!database) {
    throw new Error("Please connect to database!");
  }

  return database;
}

module.exports = {
  conectToDatabase: conectToDatabase,
  getDb: getDb,
};
