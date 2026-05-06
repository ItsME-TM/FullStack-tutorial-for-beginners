# Top Chatbot Intents

## Goal

Find the top 5 chatbot intents in the last 7 days.

## Shared Dataset

Database: mongodb_tasks_shared
Collections: users, orders, sessions, chat_logs

## Collection

chat_logs

## Example Documents

```json
{ "_id": 501, "intent": "greeting", "timestamp": "2026-05-05T10:00:00Z" }
{ "_id": 502, "intent": "order_status", "timestamp": "2026-05-05T11:30:00Z" }
{ "_id": 503, "intent": "greeting", "timestamp": "2026-05-04T09:15:00Z" }
```

## Task

Write an aggregation pipeline that returns the top 5 intents by count in the last 7 days.

## Output Format

Return fields intent and count.
Sort by count descending, then intent ascending.
Limit to 5 results.

## Notes

- Use $$NOW to compute the 7-day cutoff.
- Use $match to filter recent logs.
- Use $group to count by intent.
- For local testing, assume now is 2026-05-06T00:00:00Z.
- Use the shared mongodb_tasks_shared dataset.
