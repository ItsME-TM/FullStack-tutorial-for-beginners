# MongoDB Join: Inactive Users ($lookup)

In this tutorial, we will learn how to join two collections and filter based on aggregated values from the joined data.

## Key Concepts

### 1. `$lookup`
The `$lookup` stage performs a left outer join to a collection in the same database.

```javascript
{
  $lookup: {
    from: "sessions",
    localField: "_id",
    foreignField: "userId",
    as: "userSessions"
  }
}
```
This adds an array field `userSessions` to each user document.

### 2. `$addFields` with `$max`
We can calculate the most recent login date from the array of sessions.

```javascript
{
  $addFields: {
    lastLogin: { $max: "$userSessions.lastLogin" }
  }
}
```

### 3. Filtering with `$or` and Date Comparisons
To find inactive users, we check if their last login was too long ago OR if they never logged in (empty sessions array).

```javascript
{
  $match: {
    $or: [
      { lastLogin: { $lt: cutoffDate } },
      { userSessions: { $size: 0 } }
    ]
  }
}
```

## Summary
Joins in MongoDB are handled via the `$lookup` stage. Once data is joined, you can use array operators and aggregation functions to compute values across the joined documents and filter accordingly.
