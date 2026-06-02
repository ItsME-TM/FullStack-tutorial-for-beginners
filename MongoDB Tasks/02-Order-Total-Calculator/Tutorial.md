# Computing Totals in Aggregation

This tutorial covers how to perform calculations on arrays within documents.

## Working with Arrays

When a document contains an array of items (like an order contains line items), we often need to perform a calculation on each element and then sum them up.

### 1. The `$map` operator
The `$map` operator applies an expression to each element of an array and returns an array with the applied results.

```javascript
{
  $map: {
    input: "$items",
    as: "item",
    in: { $multiply: ["$$item.qty", "$$item.price"] }
  }
}
```

### 2. The `$sum` operator
The `$sum` operator can take an array of numbers (like the one returned by `$map`) and return their total.

```javascript
{
  $sum: { $map: { ... } }
}
```

### 3. Adding Fields with `$addFields`
The `$addFields` stage allows you to add new fields to your documents based on computations.

```javascript
{
  $addFields: {
    orderTotal: { $sum: { $map: { ... } } }
  }
}
```

## Alternatives
You could also use `$unwind` followed by a `$group` stage to achieve similar results, but `$addFields` with `$map` is often more efficient for calculations within a single document's array.
