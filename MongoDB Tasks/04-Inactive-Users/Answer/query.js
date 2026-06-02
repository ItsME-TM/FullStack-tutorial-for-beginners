const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const users = db.collection('users');

    const cutoffDate = new Date("2026-05-06T00:00:00Z");
    cutoffDate.setDate(cutoffDate.getDate() - 90);

    const results = await users.aggregate([
      {
        $match: { status: "active" }
      },
      {
        $lookup: {
          from: "sessions",
          localField: "_id",
          foreignField: "userId",
          as: "userSessions"
        }
      },
      {
        $addFields: {
          lastLogin: { $max: "$userSessions.lastLogin" }
        }
      },
      {
        $match: {
          $or: [
            { lastLogin: { $lt: cutoffDate } },
            { userSessions: { $size: 0 } }
          ]
        }
      },
      {
        $project: {
          _id: 1,
          email: 1
        }
      },
      {
        $sort: { _id: 1 }
      }
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
