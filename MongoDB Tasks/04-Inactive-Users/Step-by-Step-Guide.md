# Step-by-Step Guide: Inactive Users

Follow these steps to solve the task:

## Step 1: Filter Active Users
Start by matching only users who have an "active" status.
```javascript
{ $match: { status: "active" } }
```

## Step 2: Join with Sessions
Use `$lookup` to bring in the user's login sessions.
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

## Step 3: Find the Most Recent Login
Use `$addFields` and `$max` to find the latest `lastLogin` date from the `userSessions` array.
```javascript
{
  $addFields: {
    lastLogin: { $max: "$userSessions.lastLogin" }
  }
}
```

## Step 4: Filter for Inactivity
Apply a `$match` stage with `$or`. A user is inactive if:
- `lastLogin` is less than 90 days ago (`cutoffDate`).
- The `userSessions` array is empty (`$size: 0`).

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

## Step 5: Project and Sort
Select only the `_id` and `email` fields, and sort by `_id`.

## Step 6: Run the script
```bash
npm install
node query.js
```
