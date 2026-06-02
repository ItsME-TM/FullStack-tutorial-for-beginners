const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const users = db.collection('users');

    // For testing, assume 'now' is 2026-05-06T00:00:00Z
    const now = new Date("2026-05-06T00:00:00Z");
    const cutoffDate = new Date(now.setDate(now.getDate() - 90));

    // TODO: Write an aggregation pipeline to find active users who:
    // 1. Have not logged in within the last 90 days (lastLogin < cutoffDate)
    // 2. OR have no session records at all.
    // Return only _id and email, sorted by _id ascending.

    const results = await users.aggregate([
      // Your pipeline here
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
