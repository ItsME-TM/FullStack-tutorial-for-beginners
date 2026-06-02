# MongoDB Distinct and Sorting

In this tutorial, we will learn how to retrieve unique values from a collection and sort them.

## The `distinct` Method

MongoDB provides a `distinct` command to find unique values for a specific field.

```javascript
db.collection.distinct("fieldName")
```

This returns an array of unique values.

## Aggregation Pipeline for Distinct Values

While `distinct` is simple, using an aggregation pipeline is more flexible, especially when you need to sort or transform the output format.

### 1. `$group` Stage
To get distinct values, we can group by the field.

```javascript
{ $group: { _id: "$firstName" } }
```

### 2. `$project` Stage
To rename the `_id` field to something more meaningful and remove the default `_id`.

```javascript
{ $project: { _id: 0, firstName: "$_id" } }
```

### 3. `$sort` Stage
To sort the results.

```javascript
{ $sort: { firstName: 1 } }
```

## When to use which?
- Use `distinct()` when you just need a simple array of values.
- Use `aggregate()` when you need to sort, filter, or return objects instead of simple values.
