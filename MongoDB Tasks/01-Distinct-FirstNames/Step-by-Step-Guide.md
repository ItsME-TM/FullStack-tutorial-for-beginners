# Step-by-Step Guide: Distinct First Names

Follow these steps to solve the task:

## Step 1: Initialize the Aggregation
Open `query.js` and locate the `results` variable. We will use the `aggregate` method on the `users` collection.

## Step 2: Add the `$group` Stage
Use the `$group` stage to group documents by the `firstName` field. This effectively finds all unique first names.
```javascript
{ $group: { _id: "$firstName" } }
```

## Step 3: Add the `$project` Stage
To match the required output format (e.g., `{ "firstName": "Ashley" }`), use `$project` to rename `_id` to `firstName` and hide the original `_id`.
```javascript
{ $project: { _id: 0, firstName: "$_id" } }
```

## Step 4: Add the `$sort` Stage
Finally, sort the names in ascending order (1).
```javascript
{ $sort: { firstName: 1 } }
```

## Step 5: Run the script
Install dependencies and run the script:
```bash
npm install
node query.js
```
