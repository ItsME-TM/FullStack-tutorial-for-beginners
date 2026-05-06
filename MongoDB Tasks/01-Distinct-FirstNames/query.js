// Connect to MongoDB
const { MongoClient } = require('mongodb');

async function getDistinctFirstNames() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("mongodb_tasks");
    const users = database.collection("users");

    // Method 1: Using distinct() method
    console.log("Method 1: Using distinct()");
    const distinctNames = await users.distinct("firstName");
    console.log(distinctNames.sort());
    return distinctNames;

  } finally {
    await client.close();
  }
}

// Run the function
getDistinctFirstNames().catch(console.error);