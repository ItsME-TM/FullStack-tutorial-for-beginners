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
        $unwind: "$items"
      },
      {
        $group: {
          _id: "$items.sku",
          revenue: {
            $sum: {
              $multiply: ["$items.qty", "$items.price"]
            }
          }
        }
      },
      {
        $project: {
          _id: 0,
          sku: "$_id",
          revenue: 1
        }
      },
      {
        $sort: {
          revenue: -1,
          sku: 1
        }
      },
      {
        $limit: 3
      }
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
