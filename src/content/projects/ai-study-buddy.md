---
title: AI Study Buddy
summary: LeetCode-style coding practice platform where an AI tutor helps you work through problems.
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
links:
  - label: GitHub
    href: https://github.com/bbansal-18/ai_study_buddy
---

## Why it exists

Most "AI tutor" tools will explain code but won't let me figure out solutions, or won't have a built-in coding platform. I wanted something that would faciliate learning while coding, so I built a full-stack study assistant: a problem set you can filter instantly, an AI tutor that has to answer in structured JSON, and live Judge0 test runs that find issues in the code and redirect it to AI directly in the UI for helpful feedback.

## What I built

The client keeps a lightweight index so you can search and filter problems without a round trip to the server. On submission, a Flask backend merges your code into a language-specific test harness and sends it to Judge0 via RapidAPI; results come back as inline feedback instead of raw logs. The tutor's replies are constrained by system prompts requiring JSON-only output, which I parse server-side so a malformed response doesn't break the UI.

I documented the public repo for reuse. Use the link below.  