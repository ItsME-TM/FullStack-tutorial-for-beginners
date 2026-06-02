# Step-by-Step Guide: Top Products By Revenue

Follow these steps to solve the task:

## Step 1: Flatten the Items Array
Since each order contains an array of items, we first need to break these items out into individual documents using `$unwind`.
```javascript
{ $unwind: "$items" }
```

## Step 2: Group by SKU and Calculate Revenue
Use the `$group` stage to group by `items.sku`. Inside the group, create a `revenue` field that uses `$sum` to add up the results of `$multiply: ["$items.qty", "$items.price"]`.
```javascript
{
  $group: {
    _id: "$items.sku",
    totalRevenue: {
      $sum: { $multiply: ["$items.qty", "$items.price"] }
    }
  }
}
```

## Step 3: Project the Final Fields
Use `$project` to rename `_id` to `sku` and format the output.
```javascript
{
  $project: {
    _id: 0,
    sku: "$_id",
    revenue: "$totalRevenue"
  }
}
```

## Step 4: Sort and Limit
Sort by `revenue` in descending order (-1). If revenues are tied, sort by `sku` in ascending order (1). Finally, limit the results to the top 3.
```javascript
{ $sort: { revenue: -1, sku: 1 } },
{ $limit: 3 }
```

## Step 5: Run the script
```bash
npm install
node query.js
```
