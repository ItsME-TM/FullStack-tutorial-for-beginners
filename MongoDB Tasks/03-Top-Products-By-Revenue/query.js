const { MongoClient } = require('mongodb');

async function main() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');
    const orders = db.collection('orders');

    // TODO: Write an aggregation pipeline that returns the top 3 SKUs by total revenue.
    // Revenue per SKU is the sum of (qty * price) for that SKU across all items in all orders.
    // Each result should have 'sku' and 'revenue' fields.
    // Sort by revenue descending, then sku ascending.

    const results = await orders.aggregate([
      // Your pipeline here
    ]).toArray();

    console.log(JSON.stringify(results, null, 2));

  } finally {
    await client.close();
  }
}

main().catch(console.error);
