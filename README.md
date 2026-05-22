# GPT Image 2 API with APIDot

Build with the GPT Image 2 API using APIDot: cURL, Node.js, polling, webhooks, pricing, and fal.ai comparison in one production-oriented GitHub repo.

[Get API Key](https://apidot.ai/dashboard/api-key) | [API Docs](https://apidot.ai/docs/gpt-image-2) | [Model Page](https://apidot.ai/models/gpt-image-2) | [Main Examples](https://github.com/APIDotAI/apidot-examples)

## Why this repo exists

Use GPT Image 2 when you need readable text, photoreal product visuals, cleaner UI mockups, and more controlled image edits in the same workflow. `gpt-image-2` handles new image generation, `gpt-image-2-edit` handles guided edits, and both use the same APIDot async job flow.

This repository turns that workflow into runnable server-side examples: a verified cURL request, a native Node.js polling example, webhook receiver notes, prompt examples, pricing context, and production integration guardrails.

## Overview

GPT Image 2 is OpenAI's advanced image generation and editing model for visuals that need clear text, believable detail, and stronger instruction following. It is designed for practical image work where the result should look closer to a usable asset than a loose concept draft.

Its core strengths include reasoning-guided composition, stronger text rendering, photoreal product detail, UI-style layout generation, and precise image editing from references. This makes GPT Image 2 useful for ads, ecommerce visuals, posters, infographics, interface mockups, and localized creative assets.

On APIDot, use `gpt-image-2` for prompt-based image generation and `gpt-image-2-edit` when the request includes reference images for controlled edits. The API also exposes quality, size, and resolution controls, including 1K, 2K, 4K, preset aspect ratios, and custom canvas sizes where supported.

## Capabilities

- Using reasoning-guided composition for cleaner visual structure: GPT Image 2 can follow more complex instructions when arranging subjects, layouts, text areas, and scene details. This helps generated images feel more intentional, especially for posters, product scenes, diagrams, and multi-element compositions.
- Generating readable text for posters, labels, UI, and infographics: GPT Image 2 is especially useful when the image needs real words that people can read. It can handle headlines, labels, buttons, packaging copy, diagram notes, and other text-heavy visual elements more reliably than general image models.
- Creating photoreal product visuals with stronger lighting and materials: GPT Image 2 can produce product and lifestyle images with more believable lighting, surface detail, color, and material texture. This makes it a strong fit for ecommerce hero shots, campaign visuals, catalog assets, and realistic brand imagery.
- Building UI mockups and screenshot-style layouts with clearer hierarchy: GPT Image 2 can generate interface-style images where layout, spacing, panels, and text placement matter. It is useful for dashboard concepts, landing page visuals, app mockups, and presentation graphics that should look more like real screens.
- Using `gpt-image-2-edit` to preserve structure during controlled edits: With reference images, `gpt-image-2-edit` can change background, styling, context, text, or local details while staying closer to the original composition. This is useful when the goal is to improve or adapt an existing image instead of starting over.
- Supporting quality, resolution, and canvas control for final assets: GPT Image 2 supports practical output controls for different asset needs, including quality levels, common aspect ratios, higher resolutions, and custom canvas sizes where allowed. This helps teams match the generated image to ads, product pages, social posts, or design handoff requirements.

## Common use cases

GPT Image 2 is most useful when the job depends on readable text, believable product or interface visuals, and a clean handoff between generation and editing in the same async workflow.

- UI mockups and product interface concepts
- Ads with readable on-image text
- Ecommerce product images and hero shots
- Social graphics and editorial visuals
- Diagrams, infographics, and presentation visuals
- Retouching and contextual image edits

## Pricing on APIDot

Catalog price: $0.005 / generation.
Pricing snapshot: per generation | Low: 1K 1 credits, 2K 2 credits, 4K 4 credits | Medium: 1K 3 credits, 2K 6 credits, 4K 12 credits | High: 1K 12 credits, 2K 24 credits, 4K 48 credits

This README uses the pricing data currently published in the APIDot model catalog. Check the APIDot model page before high-volume production runs.

### Model-specific pricing

- gpt-image-2: per generation | Low: 1K 1 credits, 2K 2 credits, 4K 4 credits | Medium: 1K 3 credits, 2K 6 credits, 4K 12 credits | High: 1K 12 credits, 2K 24 credits, 4K 48 credits
- gpt-image-2-edit: per generation | Low: 1K 1 credits, 2K 2 credits, 4K 4 credits | Medium: 1K 3 credits, 2K 6 credits, 4K 12 credits | High: 1K 12 credits, 2K 24 credits, 4K 48 credits

## APIDot vs fal.ai

For tiers with fal.ai comparison data in the APIDot catalog, APIDot shows up to 75% lower listed price. Treat this as a catalog snapshot and verify current pricing before launch.

| Tier | APIDot listed price | fal.ai listed price | Note |
| --- | ---: | ---: | --- |
| Low quality 1K generation | $0.005 | $0.01 | APIDot is 50% lower in this tier |
| Low quality 2K generation | $0.01 | $0.01 | Listed comparison tier |
| Low quality 4K generation | $0.02 | $0.02 | Listed comparison tier |
| Medium quality 1K generation | $0.015 | $0.06 | APIDot is 75% lower in this tier |
| Medium quality 2K generation | $0.03 | $0.06 | APIDot is 50% lower in this tier |
| Medium quality 4K generation | $0.06 | $0.11 | APIDot is 45% lower in this tier |
| High quality 1K generation | $0.06 | $0.22 | APIDot is 73% lower in this tier |
| High quality 2K generation | $0.12 | $0.23 | APIDot is 48% lower in this tier |
| High quality 4K generation | $0.24 | $0.41 | APIDot is 41% lower in this tier |

## Quick start

    cp .env.example .env
    # Edit .env and set APIDOT_API_KEY
    cd node
    npm start

The same request shape is available as a copy-paste cURL example in curl/generate.md.

## Minimal API request

Submit to APIDot's unified async generation endpoint:

    POST https://api.apidot.ai/api/generate/submit
    Authorization: Bearer <APIDOT_API_KEY>
    Content-Type: application/json

Primary payload:

```json
{
  "model": "gpt-image-2",
  "callback_url": "https://your-domain.com/callback",
  "input": {
    "prompt": "A premium product photo of a silver espresso machine on a clean white studio background, realistic lighting, high detail",
    "quality": "low",
    "size": "1:1",
    "resolution": "1K"
  }
}
```

Generate images or edit reference images with GPT Image 2 through APIDot's unified async submit endpoint.

GPT Image 2 uses the same APIDot async workflow as other media models: submit once, get a task id immediately, then poll shared status or receive a webhook callback. Use `gpt-image-2` for text-to-image generation and `gpt-image-2-edit` when the request must include one or more reference images.

## Model IDs and request variants

### gpt-image-2

```json
{
  "model": "gpt-image-2",
  "callback_url": "https://your-domain.com/callback",
  "input": {
    "prompt": "A premium product photo of a silver espresso machine on a clean white studio background, realistic lighting, high detail",
    "quality": "low",
    "size": "1:1",
    "resolution": "1K"
  }
}
```

### gpt-image-2-edit

```json
{
  "model": "gpt-image-2-edit",
  "callback_url": "https://your-domain.com/callback",
  "input": {
    "prompt": "Replace the background with a clean white studio backdrop and add a soft natural shadow",
    "quality": "high",
    "size": "2304x2048",
    "resolution": "2K",
    "image_urls": [
      "https://your-domain.com/source-image.png"
    ]
  }
}
```

## Request parameters

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| model | string | yes | Target model id. Use `gpt-image-2` or `gpt-image-2-edit`. |
| callback_url | string | no | Optional webhook callback URL for terminal task updates. |
| input | object | yes | Container for GPT Image 2 generation or editing parameters. |
| input.prompt | string | yes | Main instruction describing the target image, edit intent, composition, and text requirements. |
| input.quality | string | no | Output quality preset. Supported values: `low`, `medium`, `high`. |
| input.size | string | no | Output size preset. Supported values: `auto`, `1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`, or custom `WIDTHxHEIGHT`. |
| input.resolution | string | no | Resolution preset. Supported values: `1K`, `2K`, `4K`. `auto` size or no size always resolves to 1K behavior. |
| input.image_urls | string[] | no | Reference image URLs. Only supported by `gpt-image-2-edit`, where this field is required. |

## Practical integration notes

- Be explicit about composition, typography, subject framing, and any text that must appear in the final image.
- Use `input.image_urls` only with `gpt-image-2-edit`, where at least one reference image is required.
- Use `input.quality`, `input.size`, and `input.resolution` together so the request matches your intended output and billing preview.
- Store the returned task id immediately so polling, retries, and webhook updates stay idempotent.

## Polling and webhooks

APIDot media generation is asynchronous. Store data.task_id immediately after submit, poll /api/generate/status/{task_id} for local tests, and use callback_url webhooks for production queues where users may leave the page before completion.

Webhook handlers should verify task ownership, persist callback events, return 2xx quickly, and be idempotent because duplicate deliveries can happen.

## Response and errors

- code: HTTP-style status code. Successful submits return `200`.
- data.task_id: Async task identifier returned immediately after submission.
- data.status: Initial task status, typically `not_started`.
- data.created_time: ISO 8601 timestamp for task creation.

Common error classes:

- 400 invalid_request: Missing prompt, unsupported quality, size, or resolution, unsupported `input.n`, passing `image_urls` to `gpt-image-2`, or a missing `image_urls` array for `gpt-image-2-edit`.
- 401 authentication_error: Missing, expired, or invalid Bearer API key.
- 402 insufficient_credits: The current prepaid balance cannot cover the estimated image generation cost.
- 429 rate_limited: The API key is temporarily above the allowed submit rate.

## Production notes

- Keep APIDot API keys in server-side environment variables.
- Persist task_id, selected model, request payload, user ID, and status together.
- Use a moderate polling interval for tests and webhooks for durable production callbacks.
- Validate source media URLs before submitting requests that depend on source files.
- Avoid logging API keys, private prompts, private media URLs, or callback URLs.
- Retry transient network failures with backoff, but do not retry unchanged invalid payloads.

## FAQ

### What is the difference between `gpt-image-2` and `gpt-image-2-edit`?

`gpt-image-2` is the text-to-image variant for generating new visuals from a prompt. `gpt-image-2-edit` is the editing variant for requests that include one or more reference image URLs and need controlled changes to an existing image.

### Why do teams choose GPT Image 2 for UI, product, and marketing visuals?

Because those workflows usually depend on readable in-image text, believable materials and lighting, and more stable layout structure. GPT Image 2 is a better fit when the image needs to work like a mockup, ad, product visual, or screenshot-style asset, not just look visually interesting.

### What size and resolution options are supported on this page?

The current tool supports `auto`, `1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`, and custom `WIDTHxHEIGHT`, plus `1K`, `2K`, and `4K` resolution. Custom sizes require `2K` or `4K`, and 4K billing only applies to true 4K sizes such as `16:9`, `9:16`, `21:9`, or a custom size with a 3840 edge.

### Does `gpt-image-2-edit` require reference images, and when should I use edit mode?

Yes. Edit mode is for guided changes to an existing image, so the request needs one or more `image_urls`. Use it when you want to preserve the original composition more closely while changing the background, context, styling, or local details. If you want to generate from text alone, stay with `gpt-image-2`.

### Does GPT Image 2 support multiple outputs or `input.n`?

No. The current APIDot GPT Image 2 flow returns one image per request, and `input.n` is not supported in this model shape.

### How much does GPT Image 2 cost on APIDot?

GPT Image 2 is billed by fixed quality and resolution tiers on APIDot. Low costs 1 / 2 / 4 credits for 1K / 2K / 4K, Medium costs 3 / 6 / 12 credits, and High costs 12 / 24 / 48 credits. The same tier table applies to both `gpt-image-2` and `gpt-image-2-edit`.

### When are credits deducted?

Credits are deducted for successful generations. You can confirm the final task state through polling or webhook delivery before consuming the resulting image URL in your application.

### How do I integrate GPT Image 2 into production?

Use APIDot's async workflow: submit the job, store the returned `task_id`, track completion through `/api/generate/status/<task_id>` or a callback URL, and consume the final image URL only after the task reaches a terminal state.

### Which GPT Image 2 model id should I send?

Use `gpt-image-2` for text-to-image generation without reference images. Use `gpt-image-2-edit` when the request must include one or more `input.image_urls` reference images.

### Can I request multiple images with input.n?

No. The GPT Image 2 experience on this page returns one image per request, so `input.n` is not supported.

### Do both variants use the same endpoint?

Yes. Both variants submit to `/api/generate/submit`. You switch behavior with the top-level `model` field. Only `gpt-image-2-edit` accepts `input.image_urls`.

### Is APIDot the creator of the underlying model?

No. This is an APIDot integration repository for calling GPT Image 2 through APIDot. OpenAI is listed as the model provider in the APIDot catalog. Use the APIDot model page for current availability, pricing, and usage terms.

## Related links

- APIDot: https://apidot.ai
- GPT Image 2 model page: https://apidot.ai/models/gpt-image-2
- GPT Image 2 API docs: https://apidot.ai/docs/gpt-image-2
- APIDot quickstart: https://apidot.ai/docs/quickstart
- APIDot webhooks: https://apidot.ai/docs/webhooks
- Main APIDot examples repo: https://github.com/APIDotAI/apidot-examples

## Related APIDot model API repositories

More image API examples from APIDot:

| Model | Repository |
| --- | --- |
| Nano Banana 2 | [nano-banana-2-api](https://github.com/APIDotAI/nano-banana-2-api) |
| Nano Banana Pro | [nano-banana-pro-api](https://github.com/APIDotAI/nano-banana-pro-api) |
| Seedream 4.5 | [seedream-4.5-api](https://github.com/APIDotAI/seedream-4.5-api) |


