# Polling APIDot task status

Store data.task_id after submit, then poll /api/generate/status/{task_id} until finished or failed. Use moderate intervals for tests and webhooks for production queues.

