# GPT Image 2 cURL Quickstart

## What this example shows

This example shows how to submit a GPT Image 2 image generation task through APIDot, store the returned `task_id`, and poll the shared status endpoint for the result.

It includes both supported request shapes from the APIDot docs:

- `gpt-image-2` for text-to-image generation.
- `gpt-image-2-edit` for image editing with reference image URLs.

## When to use it

Use this example when you need a server-side cURL quickstart for image generation, ecommerce visuals, UI mockups, ads, or controlled edits from a reference image.

For production apps, submit the task from your backend, persist `task_id`, and prefer webhooks when you have a public callback endpoint.

## Requirements

- An APIDot account.
- An APIDot API key stored server-side.
- `curl` installed locally.
- A backend or terminal environment that does not expose secrets to browser code.

## Environment variables

Use placeholders only. Do not commit real credentials.

```env
APIDOT_API_KEY=YOUR_API_KEY_HERE
```

## How to run

These examples use Bash line continuation. On Windows, run them in Git Bash/WSL or adapt them to `curl.exe` PowerShell syntax.

Add `callback_url` only when you have a real webhook receiver. See the [webhooks docs](https://apidot.ai/docs/webhooks) for the production callback flow.

```bash
export APIDOT_API_KEY="YOUR_API_KEY_HERE"

curl --fail-with-body --request POST \
  --url https://api.apidot.ai/api/generate/submit \
  --header "Authorization: Bearer $APIDOT_API_KEY" \
  --header "Content-Type: application/json" \
  --data '{
    "model": "gpt-image-2",
    "input": {
      "prompt": "A premium product photo of a silver espresso machine on a clean white studio background, realistic lighting, high detail",
      "quality": "low",
      "size": "1:1",
      "resolution": "1K"
    }
  }'
```

Store the returned `data.task_id`, then poll status:

```bash
curl --fail-with-body --request GET \
  --url https://api.apidot.ai/api/generate/status/task-unified-example \
  --header "Authorization: Bearer $APIDOT_API_KEY"
```

Use `gpt-image-2-edit` when you need to edit an existing image:

```json
{
  "model": "gpt-image-2-edit",
  "callback_url": "https://example.com/api/apidot/webhook",
  "input": {
    "prompt": "Replace the background with a clean white studio backdrop and add a soft natural shadow",
    "quality": "high",
    "size": "2304x2048",
    "resolution": "2K",
    "image_urls": [
      "https://example.com/source-image.png"
    ]
  }
}
```

## Expected response

Submit response:

```json
{
  "code": 200,
  "data": {
    "task_id": "task-unified-example",
    "status": "not_started",
    "created_time": "2026-04-19T21:19:42"
  }
}
```

Shortened status response:

```json
{
  "code": 200,
  "data": {
    "task_id": "task-unified-example",
    "status": "finished",
    "output": {
      "files": [
        {
          "file_url": "https://example.com/generated-image.png",
          "file_type": "image"
        }
      ]
    },
    "error_message": null
  }
}
```

## Production notes

- Store `data.task_id` before polling or waiting for a webhook.
- Keep APIDot API keys on the server side only.
- Poll at a moderate interval and avoid hot loops.
- Treat `finished` and `failed` as terminal states.
- Log task IDs and status transitions, but never log API keys or customer input containing sensitive data.
- Use `callback_url` only when you have a public webhook receiver and can process callbacks idempotently.

## Common mistakes

- Committing a real API key to GitHub.
- Calling APIDot directly from browser code.
- Using `gpt-image-2-edit` without `input.image_urls`.
- Sending `image_urls` to the text-to-image variant when you meant to use edit mode.
- Losing the returned `task_id` before the image task reaches a terminal state.

## Related links

- Website: https://apidot.ai
- Docs: https://apidot.ai/docs
- GPT Image 2 docs: https://apidot.ai/docs/gpt-image-2
- Image models: https://apidot.ai/models/image
- Quickstart: https://apidot.ai/docs/quickstart
- Webhooks: https://apidot.ai/docs/webhooks
- GitHub: https://github.com/APIDotAI
- Examples: https://github.com/APIDotAI/apidot-examples
- Related landing page: https://apidot.ai/models/gpt-image-2

