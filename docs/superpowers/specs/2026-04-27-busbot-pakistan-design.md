# BusBot Pakistan — Design Spec
**Date:** 2026-04-27  
**Competition:** AI Seekho 2026 (Google + MoITT)  
**Track:** App Banao  
**Deadline:** May 3, 2026  

---

## Overview

BusBot Pakistan is a mobile-first web app that helps anyone in Pakistan find bus routes by speaking or typing in Urdu or English. The user speaks their origin and destination — Gemini AI understands, searches a route database, and replies with step-by-step directions in simple Urdu.

**Tagline:** پاکستان کا پہلا اردو وائس بس روٹ فائنڈر

---

## Problem Being Solved

Pakistan's public bus system has no reliable digital guide. Millions of daily commuters — students, workers, elderly — rely on word of mouth to find routes. Most existing apps are English-only and don't cover local bus networks. BusBot solves this with Urdu voice input and a community-grown route database.

---

## Core User Flow

1. User opens the app on their phone browser (no install needed)
2. Selects their city (Lahore, Karachi, Islamabad)
3. Taps the mic button and speaks in Urdu or types their origin + destination
4. Gemini AI extracts the locations, searches the route database, and replies in simple Urdu
5. User sees step-by-step directions: bus number, stop name, travel time, estimated fare
6. If route not found, user is prompted to add it (community contribution)

---

## Architecture

```
User (Phone Browser)
        ↓
   React Web App
   - Web Speech API → captures Urdu voice input
   - Text input → fallback if no mic
        ↓
   Gemini API (Google AI Studio)
   - Understands Urdu/English natural language
   - Extracts: city, origin, destination
   - Searches route database (passed as context)
   - Replies in Urdu with directions
        ↓
   Route Database (routes.json)
   - Pre-seeded routes for Lahore, Karachi, Islamabad
   - Users can submit new routes via a form
        ↓
   Google Cloud Run
   - Public deployment URL for submission
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Google AI Studio | Gemini API — Urdu understanding + route response |
| Web Speech API | Browser-native voice input (no extra library) |
| React | UI framework (built via AI Studio vibe coding) |
| Tailwind CSS | Styling — mobile-first, clean |
| routes.json | Route database — simple flat JSON, no backend |
| Google Cloud Run | Hosting — free with competition cloud credits |

---

## Screens

### Screen 1 — Home
- App title: BusBot Pakistan / پاکستان کا بس گائیڈ
- City selector dropdown (Lahore, Karachi, Islamabad)
- "From" text field (کہاں سے؟)
- "To" text field (کہاں جانا ہے؟)
- Large mic button (🎤 بولیں) — triggers voice input
- Search button (ڈھونڈیں)

### Screen 2 — Result
- Back button
- Route summary header (e.g. جوہر ٹاؤن → لبرٹی)
- Step-by-step directions in Urdu:
  - Bus number
  - Boarding stop
  - Travel time
  - Estimated fare
  - Alighting stop
- Share route button
- Search again button

### Screen 3 — Add a Route
- City dropdown
- Bus number field
- From field
- To field
- Estimated fare field
- Submit button (جمع کریں)

---

## AI Integration (Gemini)

### System Prompt Structure
```
You are BusBot Pakistan, a friendly bus route guide for Pakistani cities.
You always reply in simple, friendly Urdu (Roman Urdu is also acceptable).
Here is the route database: {JSON_DATA}

User wants to travel in {CITY} from {ORIGIN} to {DESTINATION}.

Instructions:
- Find the best matching route from the database
- Reply with: bus number, boarding stop, travel time, fare, alighting stop
- If no route matches, apologize in Urdu and invite the user to add the route
- Keep the reply short, friendly, and easy to understand for a non-tech user
```

### Voice Input Flow
1. User taps mic button
2. Web Speech API records audio and converts to text (supports Urdu)
3. Text is sent to Gemini API along with city selection
4. Gemini parses origin + destination even from casual/informal speech
5. Gemini queries the route JSON and returns Urdu directions

### Fallback Behavior
If route not found:
> معذرت، یہ روٹ ابھی ہمارے پاس نہیں ہے۔ کیا آپ اسے شامل کرنا چاہیں گے؟

User is redirected to the Add a Route screen.

---

## Route Database (Pre-seeded for Demo)

### Lahore (5 routes)
- Johar Town → Liberty Market (Bus 27)
- Gulberg → Saddar (Bus 5)
- DHA → Anarkali (Bus 12)
- Model Town → Railway Station (Bus 8)
- Allama Iqbal Town → Badami Bagh (Bus 3)

### Karachi (5 routes)
- Saddar → Clifton (Bus W11)
- Gulshan → Saddar (Bus 3A)
- Orangi → Nazimabad (Bus 4K)
- Korangi → Tariq Road (Bus K-11)
- North Karachi → City (Bus N-3)

### Islamabad (3 routes)
- F-7 → Blue Area (Feeder Route 1)
- G-9 → F-10 (Feeder Route 3)
- Rawalpindi Saddar → Islamabad F-6 (Metro Feeder)

---

## Design Language

- **Colors:** Green (#00a651) + White — Pakistan flag inspired
- **Font:** Clean sans-serif, large text for readability on small screens
- **Layout:** Single column, mobile-first, large tap targets
- **Language:** Urdu labels with English fallback
- **Tone:** Friendly, informal — like a helpful friend, not a government app

---

## What Makes This a Strong Competition Entry

1. **Real Pakistan problem** — no good Urdu bus guide exists today
2. **Urdu voice AI** — uses Gemini's multilingual capability in a novel way
3. **Community growth angle** — users add routes, making it self-improving
4. **Accessible to everyone** — works on any cheap Android phone browser
5. **Built with Google's stack** — AI Studio + Gemini + Cloud Run = perfect fit for AI Seekho judges

---

## Out of Scope (for this submission)

- Real-time GPS tracking
- Offline mode
- User accounts / login
- Payment integration
- Android/iOS native app
