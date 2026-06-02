# Step-by-Step Guide: Order Total Calculator

Follow these steps to calculate the total for each order:

## Step 1: Calculate Total for Each Item
Use the `$addFields` stage with `$map` and `$multiply` to calculate the price for each item in the `items` array and then `$sum` them to get the `orderTotal`.

```javascript
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
}
```

## Step 2: Project Necessary Fields
Use `$project` to only keep the `_id` and the newly created `orderTotal`.

```javascript
{
  $project: {
    _id: 1,
    orderTotal: 1
  }
}
```

## Step 3: Sort the Results
Sort the output by `_id` in ascending order.

```javascript
{ $sort: { _id: 1 } }
```

## Step 4: Verify
Run the script to see the calculated totals:
```bash
node query.js
```
