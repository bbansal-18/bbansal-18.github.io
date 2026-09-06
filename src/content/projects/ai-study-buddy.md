---
title: AI Study Buddy
summary: LeetCode-style practice, an LLM tutor, and Judge0 in the same loop — with the model forbidden from talking in anything but JSON.
start: "2025-05"
end: "2025-07"
role: Builder
featured: false
placeholder: false
tags:
  - React
  - Flask
  - OpenAI
  - Judge0
---

## Why it exists

Most “AI tutors” will happily narrate. I wanted something that would also run the code. AI Study Buddy is a full-stack study assistant: a problem set you can filter instantly, a tutor that has to answer in structured JSON, and live Judge0 test runs with failing assertions surfaced in the UI.

## What I built

The client keeps a lightweight index (enough to search and filter without a round trip). On submit, the Flask backend merges user code into a language-specific harness and sends it to Judge0 via RapidAPI. Judge0’s JSON comes back as inline feedback, not a wall of logs. The OpenAI path is fenced by system prompts that demand JSON only, then parsed server-side so the UI is not one malformed sentence away from breaking.

I documented the public repo for reuse. If you have that URL, it belongs in the frontmatter `links` of this file.
