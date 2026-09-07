---
title: Software developer and quantitative researcher
summary: Built a live F&O execution full-stack website, then spent 5 weeks studying how weak directional signals behave in ensemble.
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

MasterTrust connected me to a client. Their traders needed to watch live futures and options positions, see what an open strategy was actually worth, and route orders across multiple accounts without managing each one by hand. Alongside that, they were looking to answer a research question: could combining several individually weak directional indicators produce a signal worth actually trading on?

## The execution system

I built the execution system for MasterTrust's client, which included real-time F&O price monitoring, payoff visualization for open strategies, and simultaneous multi-account order routing, all in one website, so a trader could see a position and act on it without switching tools. I also built an algorithmic engine running weekly non-directional strategies, and a reconciliation pipeline tracking average buy/sell price, net quantity, and realized P&L per contract.

## The research

On the research side, I built a backtesting framework from scratch to actually test whether ensembling those weak indicators helped, rather than assuming it would, and a decision-tree-based simulation pipeline to stress-test strategies against historical data before anything touched a live account.

Individually, the weak predictors sat around 51–52% directional accuracy. I researched ensembles over those signals and got the composite into the 56–57% range. To make this claim, I built a backtesting framework from scratch so we could evaluate models, benchmark ensemble configurations, and refine indicators against history.