const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const users = db.collection('users');

    const results = await users.aggregate([
      {
        $group: {
          _id: "$firstName"
        }
      },
      {
        $project: {
          _id: 0,
          firstName: "$_id"
        }
      },
      {
        $sort: {
          firstName: 1
        }
      }
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
