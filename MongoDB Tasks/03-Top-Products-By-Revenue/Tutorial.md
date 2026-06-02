# MongoDB Aggregation: Top Products by Revenue

In this tutorial, we will learn how to process arrays of items within documents and calculate aggregated totals.

## Key Concepts

### 1. `$unwind`
The `$unwind` stage deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.

```javascript
{ $unwind: "$items" }
```

### 2. `$group` with Math Operations
When grouping, we can perform calculations like `$sum` and `$multiply`.

```javascript
{
  $group: {
    _id: "$items.sku",
    revenue: {
      $sum: { $multiply: ["$items.qty", "$items.price"] }
    }
  }
}
```

### 3. `$sort` and `$limit`
- `$sort`: Orders the documents. `-1` is for descending order.
- `$limit`: Restricts the number of documents passed to the next stage.

```javascript
{ $sort: { revenue: -1 } },
{ $limit: 3 }
```

## Summary
To find the top performing items in a list of orders, you must first "flatten" the items using `$unwind`, then group by the product identifier and sum up the calculated revenue.
