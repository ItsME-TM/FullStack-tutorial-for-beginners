const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const chat_logs = db.collection('chat_logs');

    // For testing, assume 'now' is 2026-05-06T00:00:00Z
    const now = new Date("2026-05-06T00:00:00Z");
    const cutoffDate = new Date(now.setDate(now.getDate() - 7));

    // TODO: Write an aggregation pipeline to find the top 5 intents by count
    // for chat logs created in the last 7 days (timestamp >= cutoffDate).
    // Return 'intent' and 'count' fields, sorted by count desc, intent asc.

    const results = await chat_logs.aggregate([
      // Your pipeline here
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
