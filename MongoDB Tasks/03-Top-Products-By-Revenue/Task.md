# Top Products By Revenue

## Goal

Find the top 5 products by total revenue across all orders.

## Shared Dataset

**Important:** Before starting, ensure you have run the setup script in the parent directory: `node ../setup-database.js`

Database: mongodb_tasks_shared
Collections: users, orders, sessions, chat_logs

## Collection

orders

## Example Documents

```json
{
  "_id": 1001,
  "items": [
    { "sku": "A1", "qty": 2, "price": 4.50 },
    { "sku": "B2", "qty": 1, "price": 9.00 }
  ]
}
{
  "_id": 1003,
  "items": [
    { "sku": "B2", "qty": 2, "price": 9.00 },
    { "sku": "D4", "qty": 5, "price": 1.50 }
  ]
}
```

## Task

Write an aggregation pipeline that returns the top 5 SKUs by total revenue.
Revenue per SKU is the sum of qty \* price across all orders.

## Output Format

Return fields sku and revenue.
Sort by revenue descending, then sku ascending.
Limit to 5 results.

## Example Output

```json
{ "sku": "B2", "revenue": 36.00 }
{ "sku": "C3", "revenue": 22.00 }
{ "sku": "A1", "revenue": 18.00 }
```

## Notes

- Use $unwind to work with items.
- Use $group to aggregate revenue per sku.
- Use the shared mongodb_tasks_shared dataset.
