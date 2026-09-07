---
title: Software developer
summary: Developed a React-based private dashboard for live equities and options to replace the existing spreadsheet dependent workflow
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

## The problem

The investors had an Excel book that could fetched live market data. They needed a live system that used that data to generate charts and graphs that could improve their decision-making. Strategy calls depended on seeing the right option prices at the right moment, and analyzing it off Excel directly wastes time and reduces trading edge.

## The pipeline

I built a private monitoring dashboard for equities and derivatives. A VBA multi-process pipeline to read live Excel, a WebSocket layer to stream prices, and a React frontend to chart and filter so you could isolate an option and visualize market t behavior in miliseconds. Audio alerts fired on threshold-based price moves.

## What I learned

A real-time dashboard is as much about how you move data around as how you draw it on screen. Once alerts and rendering both depend on the same slow path, the whole thing starts to feel laggy even if each piece works fine on its own. Running concurrently could potentially cause many races that could result in erronous data. That's the part I paid the most attention to getting right.