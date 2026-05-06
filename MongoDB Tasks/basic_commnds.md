# MongoDB Basic Commands (mongosh)

## Databases

- Show all databases:

  ```
  show dbs
  ```

- Switch to (or create) a database:

  ```
  use mongodb_tasks_shared
  ```

- Show current database:

  ```
  db
  ```

## Collections

MongoDB does not have tables. It uses collections. These commands are the closest equivalents.

- Show all collections in the current database:

  ```
  show collections
  ```

- Create a collection explicitly (optional):

  ```
  db.createCollection("users")
  ```

## Documents (Rows)

- View all documents in a collection:

  ```
  db.users.find()
  ```

- View the first 5 documents:

  ```
  db.users.find().limit(5)
  ```

- View one document:

  ```
  db.users.findOne()
  ```

- Count documents in a collection:

  ```
  db.users.countDocuments()
  ```

## Filter and Sort

- Filter documents:

  ```
  db.users.find({ status: "active" })
  ```

- Sort documents:

  ```
  db.users.find().sort({ firstName: 1 })
  ```

## Distinct Values

- Get distinct values of a field:

  ```
  db.users.distinct("firstName")
  ```

## Aggregation

- Basic aggregation pipeline:

  ```
  db.orders.aggregate([
  	{ $unwind: "$items" },
  	{ $group: { _id: "$items.sku", totalQty: { $sum: "$items.qty" } } },
  	{ $sort: { totalQty: -1 } }
  ])
  ```

## Indexes

- Show indexes:

  ```
  db.users.getIndexes()
  ```

- Create an index:

  ```
  db.users.createIndex({ email: 1 }, { unique: true })
  ```

## Delete and Drop

- Delete many documents:

  ```
  db.users.deleteMany({ status: "disabled" })
  ```

- Drop a collection:

  ```
  db.users.drop()
  ```

- Drop the current database:

  ```
  db.dropDatabase()
  ```
