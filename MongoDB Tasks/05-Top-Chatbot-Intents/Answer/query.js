const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const chat_logs = db.collection('chat_logs');

    const now = new Date("2026-05-06T00:00:00Z");
    const cutoffDate = new Date(now.setDate(now.getDate() - 7));

    const results = await chat_logs.aggregate([
      {
        $match: {
          timestamp: { $gte: cutoffDate }
        }
      },
      {
        $group: {
          _id: "$intent",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          intent: "$_id",
          count: 1
        }
      },
      {
        $sort: {
          count: -1,
          intent: 1
        }
      },
      {
        $limit: 5
      }
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
