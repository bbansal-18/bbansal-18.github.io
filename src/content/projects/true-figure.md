---
title: True Figure
summary: Hospital procedure tracking as a subscription — a doctor app, a live admin dashboard, and no IT department required.
start: "2026-03"
end: Present
role: Builder
featured: true
placeholder: false
tags:
  - React Native
  - React
  - AWS
  - Supabase
  - SaaS
---

## Why it exists

Hospitals in Ludhiana were tracking procedures in ways that did not survive a busy day: scattered records, no live picture for an administrator, and no appetite for hiring an IT staff to keep a custom stack alive. True Figure is the product-shaped answer — procedure tracking and visualization as a SaaS, with deployment, storage, and updates in one subscription.

## What I built

A React Native app for doctors and a live admin dashboard on the web. Auth and the database are role-separated on Supabase; the backend sits on AWS Lightsail. The admin side filters procedures in real time, visualizes the data, and exports Excel-compatible downloads so a hospital can leave with a spreadsheet if that is still how they talk to each other.

Multiple hospitals in Ludhiana are onboarded and using it.

## The design constraint

Zero IT overhead is not a slogan. It is the reason the architecture looks the way it does: managed hosting, locked-down storage, and updates that do not require a local engineer.
