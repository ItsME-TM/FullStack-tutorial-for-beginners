# Inactive Users

## Goal

Return active users who have not logged in within the last 90 days.

## Shared Dataset

**Important:** Before starting, ensure you have run the setup script in the parent directory: `node ../setup-database.js`

Database: mongodb_tasks_shared
Collections: users, orders, sessions, chat_logs

## Collections

users
sessions

## Example Documents

users

```json
{ "_id": 1, "email": "ashley.kim@example.com", "status": "active" }
{ "_id": 2, "email": "jenny.lopez@example.com", "status": "active" }
{ "_id": 4, "email": "daniel.reed@example.com", "status": "active" }
{ "_id": 6, "email": "robert.hill@example.com", "status": "disabled" }
{ "_id": 8, "email": "priya.patel@example.com", "status": "active" }
```

sessions

```json
{ "_id": 11, "userId": 1, "lastLogin": "2026-04-30T00:00:00Z" }
{ "_id": 12, "userId": 2, "lastLogin": "2025-12-15T00:00:00Z" }
{ "_id": 13, "userId": 2, "lastLogin": "2026-01-05T00:00:00Z" }
{ "_id": 14, "userId": 3, "lastLogin": "2026-03-01T00:00:00Z" }
{ "_id": 15, "userId": 5, "lastLogin": "2026-01-10T00:00:00Z" }
```

## Task

Write an aggregation pipeline to return active users whose most recent login is older than 90 days from now.
Users with no session records should be included.

## Output Format

Return fields \_id and email only.
Sort by \_id ascending.

## Notes

- Use a $lookup from users to sessions.
- Compute the most recent lastLogin per user.
- Compare against a 90-day cutoff using $$NOW.
- For local testing, assume now is 2026-05-06T00:00:00Z.
- Use the shared mongodb_tasks_shared dataset.
