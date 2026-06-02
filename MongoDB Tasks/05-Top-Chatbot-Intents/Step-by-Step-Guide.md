# Step-by-Step Guide: Top Chatbot Intents

Follow these steps to solve the task:

## Step 1: Filter by Recent Activity
Use `$match` to only include documents where the `timestamp` is within the last 7 days.
```javascript
{
  $match: {
    timestamp: { $gte: cutoffDate }
  }
}
```

## Step 2: Group and Count
Use the `$group` stage to group by the `intent` field and increment a counter for each occurrence.
```javascript
{
  $group: {
    _id: "$intent",
    count: { $sum: 1 }
  }
}
```

## Step 3: Format the Output
Use `$project` to rename `_id` to `intent` and keep the `count` field.
```javascript
{
  $project: {
    _id: 0,
    intent: "$_id",
    count: 1
  }
}
```

## Step 4: Sort and Limit
Sort by `count` descending (-1) to get the most frequent intents first. Add `intent: 1` as a secondary sort for alphabetical order. Limit the output to 5 results.
```javascript
{ $sort: { count: -1, intent: 1 } },
{ $limit: 5 }
```

## Step 5: Run the script
```bash
npm install
node query.js
```
