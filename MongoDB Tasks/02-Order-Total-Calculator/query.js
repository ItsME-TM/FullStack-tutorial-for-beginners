const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const orders = db.collection('orders');

    // TODO: Write an aggregation pipeline that returns each order with its total value.
    // Total value is the sum of qty * price for all items in the order.
    // Return fields _id and orderTotal only.
    // Sort by _id ascending.

    const results = await orders.aggregate([
      // Your pipeline here
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
