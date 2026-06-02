const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const orders = db.collection('orders');

    const results = await orders.aggregate([
      {
        $addFields: {
          orderTotal: {
            $sum: {
              $map: {
                input: "$items",
                as: "item",
                in: { $multiply: ["$$item.qty", "$$item.price"] }
              }
            }
          }
        }
      },
      {
        $project: {
          _id: 1,
          orderTotal: 1
        }
      },
      {
        $sort: {
          _id: 1
        }
      }
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
