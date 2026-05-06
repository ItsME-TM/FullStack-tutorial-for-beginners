# Distinct First Names

## Goal

Return all distinct first names from the users collection, sorted alphabetically.

## Shared Dataset

Database: mongodb_tasks_shared
Collections: users, orders, sessions, chat_logs

## Collection

users

## Example Documents

```json
{ "_id": 1, "firstName": "Ashley", "lastName": "Kim", "email": "ashley.kim@example.com", "status": "active" }
{ "_id": 2, "firstName": "Jenny", "lastName": "Lopez", "email": "jenny.lopez@example.com", "status": "active" }
{ "_id": 3, "firstName": "Mike", "lastName": "Stone", "email": "mike.stone@example.com", "status": "active" }
{ "_id": 7, "firstName": "Mike", "lastName": "Green", "email": "mike.green@example.com", "status": "active" }
```

## Task

Write a MongoDB query or aggregation pipeline that returns the distinct values of firstName in ascending order.

## Output Format

Each result should have a single field named firstName.

## Example Output

```json
{ "firstName": "Ashley" }
{ "firstName": "Daniel" }
{ "firstName": "Jenny" }
{ "firstName": "Mike" }
{ "firstName": "Noah" }
{ "firstName": "Omar" }
{ "firstName": "Priya" }
{ "firstName": "Robert" }
{ "firstName": "Zoe" }
```

## Notes

- Distinct values must be sorted alphabetically.
- Use only the users collection.
- Use the shared mongodb_tasks_shared dataset.
