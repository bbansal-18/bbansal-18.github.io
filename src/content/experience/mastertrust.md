---
title: Software developer and quantitative researcher
summary: Built a live F&O execution stack and a custom backtester, then used both to study whether weak directional signals get stronger in ensemble.
start: "2026-05"
end: "2026-08"
org: MasterTrust
role: Software Developer & Quantitative Researcher
location: Ludhiana, Punjab, India
featured: true
placeholder: false
tags:
  - trading systems
  - machine learning
  - full-stack
---

## What the desk needed

MasterTrust needed more than a chart. Traders had to watch futures and options in real time, see what a strategy was actually worth, and send orders to more than one account without babysitting each ticket. The research question sat next to that: could a pile of individually weak directional indicators become a signal worth trusting?

## The execution system

I engineered a proprietary trade execution stack for live F&O monitoring, strategy payoff visualization, and simultaneous multi-account order routing through NorenAPI. The frontend was React: payoff pictures, live P&L, and the options tape in one place so a decision and an order were not two different tools.

## The research

Individually, the weak predictors sat around 51–52% directional accuracy — coin-flip adjacent. I researched ensembles over those signals and got the composite into the 56–57% range. That is not a trading memoir; it is the difference between “this feature feels clever” and “this combination survives a backtest.”

To make that claim inspectable I built a backtesting framework from scratch — not a wrapper around someone else’s engine — so we could evaluate models, benchmark ensemble configurations, and refine indicators against history. A decision-tree-based simulation pipeline sat in front of live deployment: stress the strategy on the past before it touched an account.
