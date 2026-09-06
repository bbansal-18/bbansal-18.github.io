---
title: Software developer
summary: A private dashboard for live equities and options — Excel as the source of truth, a WebSocket as the wire, React as the place you actually look.
start: "2025-06"
end: "2025-08"
org: HNI Investor
role: Software Developer
location: Ludhiana, Punjab, India
featured: true
placeholder: false
tags:
  - real-time systems
  - React
  - WebSockets
---

## The constraint

The book still lived in Excel. The people making decisions needed a screen that did not, and they needed it live. Strategy calls depended on seeing the right names and the right options at the right moment — not on a refresh button.

## The pipeline

I built a private monitoring dashboard for equities and derivatives. A VBA multi-process pipeline forked work to read live Excel, a WebSocket layer streamed prices, and a React frontend charted and filtered so you could isolate a name or an option without waiting on the spreadsheet. Audio alerts fired on threshold-based price moves. The notification path was deliberately separate from the ingestion path, so a beep did not have to wait on a chart, and a chart did not stall on a beep.

## What I took with me

Real-time UX is a routing problem as much as a rendering problem. Keeping the alert layer off the data plane was the difference between a dashboard that felt live and one that felt busy.
