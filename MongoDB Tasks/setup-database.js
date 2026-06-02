const { MongoClient } = require('mongodb');

async function setup() {
  const uri = "mongodb://localhost:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('mongodb_tasks_shared');

    // 1. Users Collection
    const users = db.collection('users');
    await users.deleteMany({});
    await users.insertMany([
      { _id: 1, firstName: "Ashley", lastName: "Kim", email: "ashley.kim@example.com", status: "active" },
      { _id: 2, firstName: "Jenny", lastName: "Lopez", email: "jenny.lopez@example.com", status: "active" },
      { _id: 3, firstName: "Mike", lastName: "Stone", email: "mike.stone@example.com", status: "active" },
      { _id: 4, firstName: "Daniel", lastName: "Reed", email: "daniel.reed@example.com", status: "active" },
      { _id: 5, firstName: "Noah", lastName: "Clark", email: "noah.clark@example.com", status: "active" },
      { _id: 6, firstName: "Robert", lastName: "Hill", email: "robert.hill@example.com", status: "disabled" },
      { _id: 7, firstName: "Mike", lastName: "Green", email: "mike.green@example.com", status: "active" },
      { _id: 8, firstName: "Priya", lastName: "Patel", email: "priya.patel@example.com", status: "active" },
      { _id: 9, firstName: "Zoe", lastName: "Wang", email: "zoe.wang@example.com", status: "active" },
      { _id: 10, firstName: "Omar", lastName: "Sy", email: "omar.sy@example.com", status: "active" }
    ]);

    // 2. Orders Collection
    const orders = db.collection('orders');
    await orders.deleteMany({});
    await orders.insertMany([
      { _id: 101, userId: 1, items: [{ sku: "A123", qty: 2, price: 50 }, { sku: "B456", qty: 1, price: 30 }], date: new Date("2026-05-01") },
      { _id: 102, userId: 2, items: [{ sku: "A123", qty: 1, price: 50 }], date: new Date("2026-05-02") },
      { _id: 103, userId: 3, items: [{ sku: "C789", qty: 5, price: 10 }], date: new Date("2026-05-03") },
      { _id: 104, userId: 1, items: [{ sku: "B456", qty: 3, price: 30 }], date: new Date("2026-05-04") }
    ]);

    // 3. Sessions Collection
    const sessions = db.collection('sessions');
    await sessions.deleteMany({});
    await sessions.insertMany([
      { _id: 11, userId: 1, lastLogin: new Date("2026-04-30T00:00:00Z") },
      { _id: 12, userId: 2, lastLogin: new Date("2025-12-15T00:00:00Z") },
      { _id: 13, userId: 2, lastLogin: new Date("2026-01-05T00:00:00Z") },
      { _id: 14, userId: 3, lastLogin: new Date("2026-03-01T00:00:00Z") },
      { _id: 15, userId: 5, lastLogin: new Date("2026-01-10T00:00:00Z") }
    ]);

    // 4. Chat Logs Collection
    const chat_logs = db.collection('chat_logs');
    await chat_logs.deleteMany({});
    await chat_logs.insertMany([
      { _id: 1001, intent: "greeting", timestamp: new Date("2026-05-05T10:00:00Z") },
      { _id: 1002, intent: "order_status", timestamp: new Date("2026-05-05T11:00:00Z") },
      { _id: 1003, intent: "greeting", timestamp: new Date("2026-05-04T09:00:00Z") },
      { _id: 1004, intent: "refund", timestamp: new Date("2026-05-06T08:00:00Z") },
      { _id: 1005, intent: "greeting", timestamp: new Date("2026-05-06T09:00:00Z") },
      { _id: 1006, intent: "order_status", timestamp: new Date("2026-05-06T10:00:00Z") }
    ]);

    console.log("Database 'mongodb_tasks_shared' has been successfully populated with test data!");

  } finally {
    await client.close();
  }
}

setup().catch(console.error);
