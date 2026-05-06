# MongoDB Query Building: Step by Step Guide

## Understanding the Problem

**Goal**: Get all distinct first names from the users collection, sorted alphabetically.

Let's break this down into thinking steps:

## Step 1: Understand What "Distinct" Means

"Distinct" means unique values. In the example data:
```json
{ "_id": 1, "firstName": "Ashley", ... }
{ "_id": 2, "firstName": "Jenny", ... }
{ "_id": 3, "firstName": "Mike", ... }
{ "_id": 7, "firstName": "Mike", ... }
```

The distinct first names would be: Ashley, Jenny, Mike

Even though "Mike" appears twice, we only want it once in our results.

## Step 2: Choose the Right MongoDB Method

For getting distinct values, MongoDB provides two main approaches:

### Method A: `distinct()` method
Simple and direct for this use case
```javascript
db.users.distinct("firstName")
```

### Method B: Aggregation pipeline
More flexible for complex operations
```javascript
db.users.aggregate([
  { $group: { _id: "$firstName" } }
])
```

For this task, the `distinct()` method is simpler and more direct.

## Step 3: Add Sorting

The requirement is to sort alphabetically (ascending order). 

### With `distinct()`:
```javascript
db.users.distinct("firstName").sort()
```

### With aggregation:
```javascript
db.users.aggregate([
  { $group: { _id: "$firstName" } },
  { $sort: { _id: 1 } }
])
```

## Step 4: Format the Output

The required output format is:
```json
{ "firstName": "Ashley" }
{ "firstName": "Jenny" }
{ "firstName": "Mike" }
```

### With `distinct()` method:
```javascript
db.users.distinct("firstName")
.sort()
.then(names => {
  names.forEach(name => {
    console.log({ firstName: name });
  });
})
```

### With aggregation (recommended approach):
```javascript
db.users.aggregate([
  { $group: { _id: "$firstName" } },
  { $sort: { _id: 1 } },
  { $project: { firstName: "$_id", _id: 0 } }
])
```

## Step 5: Final Query (Best Solution)

The aggregation pipeline approach is better because:
1. It returns documents in the exact format required
2. It's more flexible for future modifications
3. It keeps everything within MongoDB (no client-side processing)

```javascript
// Final query
db.users.aggregate([
  // Stage 1: Group by firstName to get distinct values
  {
    $group: {
      _id: "$firstName"
    }
  },
  // Stage 2: Sort alphabetically (ascending)
  {
    $sort: {
      _id: 1
    }
  },
  // Stage 3: Rename _id to firstName and remove _id field
  {
    $project: {
      firstName: "$_id",
      _id: 0
    }
  }
])
```

## Understanding Each Stage

### Stage 1: `$group`
```javascript
{ $group: { _id: "$firstName" } }
```
- `$group` groups documents by a field
- `_id` specifies the field to group by
- `$firstName` is the field path (the `$` means it's a field value)

### Stage 2: `$sort`
```javascript
{ $sort: { _id: 1 } }
```
- `$sort` sorts the documents
- `_id: 1` means sort in ascending order (A-Z)
- Use `-1` for descending order (Z-A)

### Stage 3: `$project`
```javascript
{ $project: { firstName: "$_id", _id: 0 } }
```
- `$project` reshapes the documents
- `firstName: "$_id"` creates a new field from the existing _id
- `_id: 0` removes the _id field from output

## Alternative: Using `distinct()` with client-side processing

```javascript
// Get distinct names
const names = await db.collection('users').distinct('firstName');

// Sort names
names.sort();

// Format output
const result = names.map(name => ({ firstName: name }));

// Or output directly
names.forEach(name => {
  console.log({ firstName: name });
});
```

## Key Concepts Learned

1. **Field paths**: Use `$fieldName` to reference field values in stages
2. **Aggregation pipeline**: Stages process documents sequentially
3. **$group**: Creates groups of documents based on field values
4. **$sort**: Orders documents (1 = ascending, -1 = descending)
5. **$project**: reshapes documents, includes/excludes fields

## Practice Exercise

Try modifying the query to:
1. Get distinct last names instead of first names
2. Sort in reverse alphabetical order
3. Get distinct names where status is "active" (hint: add a $match stage)

## Common Mistakes to Avoid

1. Forgetting the `$` prefix in field paths (`$firstName` not `firstName`)
2. Mixing up the sort order (1 for ascending, -1 for descending)
3. Not removing the `_id` field when it's not needed in output
4. Trying to use `distinct()` in aggregation syntax (they're different methods)