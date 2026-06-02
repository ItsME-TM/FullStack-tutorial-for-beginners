# Order Total Calculator

## Goal

Calculate the total amount for each order based on line items.

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
  "customerId": 1,
  "items": [
    { "sku": "A1", "qty": 2, "price": 4.50 },
    { "sku": "B2", "qty": 1, "price": 9.00 }
  ]
}
{
  "_id": 1002,
  "customerId": 2,
  "items": [
    { "sku": "A1", "qty": 1, "price": 4.50 },
    { "sku": "C3", "qty": 3, "price": 2.00 }
  ]
}
```

## Task

Write an aggregation pipeline that returns each order with its total value.
Total value is the sum of qty \* price for all items in the order.

## Output Format

Return fields \_id and orderTotal only.
Sort by \_id ascending.

## Example Output

```json
{ "_id": 1001, "orderTotal": 18.00 }
{ "_id": 1002, "orderTotal": 10.50 }
```

## Notes

- Do not change the stored documents.
- Use aggregation operators to compute totals.
- Use the shared mongodb_tasks_shared dataset.
