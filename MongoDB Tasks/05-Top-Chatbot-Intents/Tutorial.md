# MongoDB Aggregation: Top Chatbot Intents

In this tutorial, we will learn how to filter documents by date and perform frequency analysis.

## Key Concepts

### 1. Date Filtering
Filtering by date is common in analysis. You can use standard comparison operators like `$gte` (greater than or equal to) with Date objects.

```javascript
{
  $match: {
    timestamp: { $gte: cutoffDate }
  }
}
```

### 2. Counting with `$group`
To count occurrences of a value, group by that value and use `$sum: 1`.

```javascript
{
  $group: {
    _id: "$intent",
    count: { $sum: 1 }
  }
}
```

### 3. Sorting and Limiting
Ranking items requires sorting by the calculated metric (count) in descending order.

```javascript
{ $sort: { count: -1, intent: 1 } },
{ $limit: 5 }
```

## Summary
To find the most frequent occurrences within a time window, first filter the documents by date, group by the category you want to count, and finally sort and limit the results.
