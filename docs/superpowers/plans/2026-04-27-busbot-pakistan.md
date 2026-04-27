# BusBot Pakistan Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy BusBot Pakistan — a mobile-first Urdu voice bus route finder — using Google AI Studio vibe coding, ready to submit for AI Seekho 2026 by May 3, 2026.

**Architecture:** A React web app built entirely via AI Studio vibe coding prompts. Gemini API handles Urdu natural language understanding and route lookup from a static routes.json database. Voice input uses the browser's built-in Web Speech API. Deployed to Google Cloud Run for a public URL.

**Tech Stack:** Google AI Studio (build mode), Gemini 2.0 Flash API, Web Speech API, React, Tailwind CSS, routes.json (flat file database), Google Cloud Run

---

> **Note for the builder:** You are NOT writing code manually. Every task below tells you exactly what prompt to paste into Google AI Studio. AI Studio writes the code — you just test and iterate. This whole app can be built in 1-2 days.

---

## File Structure (AI Studio will create these)

```
busbot-pakistan/
├── src/
│   ├── App.jsx              — Main app with screen routing (Home/Result/AddRoute)
│   ├── HomeScreen.jsx       — City picker, From/To fields, mic button, search
│   ├── ResultScreen.jsx     — Urdu directions display, share button
│   ├── AddRouteScreen.jsx   — Community route submission form (localStorage)
│   └── gemini.js            — Gemini API call with system prompt + routes.json
├── public/
│   └── routes.json          — Pre-seeded bus routes for Lahore/Karachi/Islamabad
└── index.html
```

---

## Task 1: Prepare the Route Database

**Files:**
- Create: `routes.json` (you will upload/paste this into AI Studio)

This is the data Gemini will use to answer every route question. Do this before opening AI Studio.

- [ ] **Step 1: Create the routes.json file**

Open any text editor (Notepad, VS Code) and paste this exact content. Save it as `routes.json`:

```json
{
  "routes": [
    {
      "id": 1,
      "city": "Lahore",
      "bus": "27",
      "from": "Johar Town",
      "to": "Liberty Market",
      "via": "Ferozepur Road",
      "boarding_stop": "Johar Town Stop, Ferozepur Road",
      "alighting_stop": "Liberty Chowk",
      "travel_time": "15 minutes",
      "fare": "Rs 30",
      "frequency": "Every 10 minutes"
    },
    {
      "id": 2,
      "city": "Lahore",
      "bus": "5",
      "from": "Gulberg",
      "to": "Saddar",
      "via": "Mall Road",
      "boarding_stop": "Gulberg Main Market Stop",
      "alighting_stop": "Saddar Bus Stand",
      "travel_time": "20 minutes",
      "fare": "Rs 25",
      "frequency": "Every 15 minutes"
    },
    {
      "id": 3,
      "city": "Lahore",
      "bus": "12",
      "from": "DHA",
      "to": "Anarkali",
      "via": "Jail Road",
      "boarding_stop": "DHA Phase 1 Main Gate Stop",
      "alighting_stop": "Anarkali Bazaar Stop",
      "travel_time": "25 minutes",
      "fare": "Rs 35",
      "frequency": "Every 20 minutes"
    },
    {
      "id": 4,
      "city": "Lahore",
      "bus": "8",
      "from": "Model Town",
      "to": "Railway Station",
      "via": "Multan Road",
      "boarding_stop": "Model Town Link Road Stop",
      "alighting_stop": "Lahore Railway Station",
      "travel_time": "30 minutes",
      "fare": "Rs 30",
      "frequency": "Every 15 minutes"
    },
    {
      "id": 5,
      "city": "Lahore",
      "bus": "3",
      "from": "Allama Iqbal Town",
      "to": "Badami Bagh",
      "via": "GT Road",
      "boarding_stop": "Allama Iqbal Town Chowk Stop",
      "alighting_stop": "Badami Bagh Bus Terminal",
      "travel_time": "35 minutes",
      "fare": "Rs 25",
      "frequency": "Every 20 minutes"
    },
    {
      "id": 6,
      "city": "Karachi",
      "bus": "W11",
      "from": "Saddar",
      "to": "Clifton",
      "via": "Shaheed-e-Millat Road",
      "boarding_stop": "Saddar Bus Stop near KMC",
      "alighting_stop": "Clifton Block 2 Stop",
      "travel_time": "20 minutes",
      "fare": "Rs 30",
      "frequency": "Every 10 minutes"
    },
    {
      "id": 7,
      "city": "Karachi",
      "bus": "3A",
      "from": "Gulshan",
      "to": "Saddar",
      "via": "University Road",
      "boarding_stop": "Gulshan Chowrangi Stop",
      "alighting_stop": "Empress Market Saddar",
      "travel_time": "30 minutes",
      "fare": "Rs 35",
      "frequency": "Every 15 minutes"
    },
    {
      "id": 8,
      "city": "Karachi",
      "bus": "4K",
      "from": "Orangi",
      "to": "Nazimabad",
      "via": "Manghopir Road",
      "boarding_stop": "Orangi Town Stop",
      "alighting_stop": "Nazimabad No. 1 Stop",
      "travel_time": "25 minutes",
      "fare": "Rs 30",
      "frequency": "Every 20 minutes"
    },
    {
      "id": 9,
      "city": "Karachi",
      "bus": "K-11",
      "from": "Korangi",
      "to": "Tariq Road",
      "via": "Korangi Road",
      "boarding_stop": "Korangi Industrial Area Stop",
      "alighting_stop": "Tariq Road Main Stop",
      "travel_time": "40 minutes",
      "fare": "Rs 40",
      "frequency": "Every 20 minutes"
    },
    {
      "id": 10,
      "city": "Karachi",
      "bus": "N-3",
      "from": "North Karachi",
      "to": "City",
      "via": "Northern Bypass",
      "boarding_stop": "North Karachi Sector 11 Stop",
      "alighting_stop": "City Station Karachi",
      "travel_time": "45 minutes",
      "fare": "Rs 45",
      "frequency": "Every 25 minutes"
    },
    {
      "id": 11,
      "city": "Islamabad",
      "bus": "Feeder Route 1",
      "from": "F-7",
      "to": "Blue Area",
      "via": "Jinnah Avenue",
      "boarding_stop": "F-7 Markaz Stop",
      "alighting_stop": "Blue Area Jinnah Avenue Stop",
      "travel_time": "15 minutes",
      "fare": "Rs 20",
      "frequency": "Every 10 minutes"
    },
    {
      "id": 12,
      "city": "Islamabad",
      "bus": "Feeder Route 3",
      "from": "G-9",
      "to": "F-10",
      "via": "Islamabad Expressway",
      "boarding_stop": "G-9 Markaz Stop",
      "alighting_stop": "F-10 Markaz Stop",
      "travel_time": "20 minutes",
      "fare": "Rs 20",
      "frequency": "Every 15 minutes"
    },
    {
      "id": 13,
      "city": "Islamabad",
      "bus": "Metro Feeder",
      "from": "Rawalpindi Saddar",
      "to": "Islamabad F-6",
      "via": "Murree Road",
      "boarding_stop": "Rawalpindi Saddar Mor Stop",
      "alighting_stop": "F-6 Super Market Stop",
      "travel_time": "35 minutes",
      "fare": "Rs 50",
      "frequency": "Every 20 minutes"
    }
  ]
}
```

- [ ] **Step 2: Verify the file**

Open the saved `routes.json` in your browser (drag and drop it into Chrome). You should see formatted JSON with 13 routes across 3 cities. If Chrome shows a parse error, check for missing commas or brackets.

---

## Task 2: Set Up Google AI Studio

**Files:** No files — browser setup only.

- [ ] **Step 1: Open AI Studio Build Mode**

Go to: **https://ai.studio/build**

Sign in with your personal Gmail account (same one used for AI Seekho registration).

- [ ] **Step 2: Verify you are in Build Mode**

You should see a prompt input area and a live preview panel side by side. If you see just a chat interface, click the **"Build"** tab at the top.

- [ ] **Step 3: Get your Gemini API Key**

Go to: **https://aistudio.google.com/apikey**

Click **"Create API Key"** → copy the key → save it somewhere safe (Notepad). You will need it when AI Studio asks for it during the build.

---

## Task 3: Build the Core App (Home Screen + Gemini Route Finder)

**Files:** AI Studio creates all files automatically.

This is the most important task. One big prompt builds 80% of the app.

- [ ] **Step 1: Paste this prompt into AI Studio Build Mode**

Copy this entire prompt and paste it into the AI Studio prompt box, then press Enter:

```
You are an expert React developer building a mobile-first web app for Pakistan called "BusBot Pakistan" (پاکستان کا بس گائیڈ).

Build a complete React web app with Tailwind CSS that has these features:

## App Overview
A bus route finder for Pakistani cities. Users type or speak their origin and destination, and the app uses the Gemini API to find the best bus route from a JSON database and reply in Urdu.

## Screen 1: Home Screen (default screen)
- Header: Show "🚌 BusBot Pakistan" as the title and "پاکستان کا بس گائیڈ" as subtitle
- City selector: A dropdown with options: Lahore, Karachi, Islamabad
- Two text input fields:
  - First field placeholder: "کہاں سے؟ (From where?)"
  - Second field placeholder: "کہاں جانا ہے؟ (Where to go?)"
- A large green mic button labeled "🎤 بولیں" that uses the Web Speech API to record voice input. When tapped, it listens for speech and fills both fields with the transcribed text.
- A green search button labeled "ڈھونڈیں (Search)"
- A small link at the bottom: "نیا روٹ شامل کریں (Add a Route)" that goes to Screen 3

## Screen 2: Result Screen
- Back button (← واپس) that returns to Screen 1
- Show the route result from Gemini in a card with:
  - Route summary header (e.g. "جوہر ٹاؤن → لبرٹی مارکیٹ")
  - The full Gemini response in Urdu shown clearly
  - A "نیا سفر ڈھونڈیں (Search Again)" button
  - A "یہ روٹ شیئر کریں (Share Route)" button that uses the Web Share API

## Screen 3: Add a Route Screen
- Header: "نیا روٹ شامل کریں (Add a Route)"
- Back button
- Form fields: City (dropdown), Bus Number, From, To, Fare (Rs)
- Submit button labeled "جمع کریں (Submit)"
- On submit: save the route to localStorage as JSON array under key "userRoutes"
- Show a success message in Urdu: "شکریہ! آپ کا روٹ شامل کر دیا گیا۔"

## Gemini API Integration
Use the Gemini API (model: gemini-2.0-flash) to find bus routes. When the user clicks Search:

1. Load routes from this inline JSON data (hardcode it in the app):
[PASTE THE ROUTES.JSON CONTENT HERE]

2. Also load any user-added routes from localStorage key "userRoutes"

3. Call Gemini with this system prompt:
"You are BusBot Pakistan, a friendly and helpful bus route guide for Pakistani cities. Always reply in simple, friendly Urdu. Be warm and helpful like a friend giving directions."

4. Send this user message to Gemini:
"میرے پاس یہ بس روٹس کا ڈیٹا ہے: [JSON DATA]. میں [CITY] میں [FROM] سے [TO] جانا چاہتا ہوں۔ مجھے بتائیں: کون سی بس لوں، کہاں سے چڑھوں، کتنا وقت لگے گا، اور کرایہ کتنا ہوگا؟ اگر کوئی روٹ نہیں ملا تو اردو میں معذرت کریں۔"

5. Show a loading spinner while waiting for Gemini response
6. Display the response on Screen 2

## Design
- Colors: Primary green #00a651, white background, dark text
- Pakistan flag green for buttons and header
- Large text (18px minimum) for readability on small screens
- Single column layout, max-width 480px, centered
- Large tap targets (minimum 48px height for all buttons)
- Responsive — works on 360px wide screens

## API Key
Use the Gemini API key: [YOUR_API_KEY_HERE] (replace with actual key)
Call the API directly from the frontend using fetch() to https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=API_KEY

Build the complete app now with all screens working.
```

> **Important:** Before clicking Enter, replace `[PASTE THE ROUTES.JSON CONTENT HERE]` with the full JSON content from Task 1, and replace `[YOUR_API_KEY_HERE]` with your actual Gemini API key.

- [ ] **Step 2: Wait for AI Studio to build**

AI Studio will take 1-2 minutes to generate the app. Watch the live preview on the right side. You should see the BusBot Pakistan home screen appear.

- [ ] **Step 3: Test the basic search**

In the live preview, do this test:
1. Select **Lahore** from the city dropdown
2. Type **Johar Town** in the From field
3. Type **Liberty Market** in the To field
4. Click **ڈھونڈیں**
5. Wait for the result screen to appear with Urdu directions

Expected result: A response like *"بس نمبر 27 لیں، جوہر ٹاؤن اسٹاپ سے سوار ہوں، لبرٹی چوک پر اتریں، کرایہ تقریباً 30 روپے ہے"*

- [ ] **Step 4: If anything looks wrong, use the Fix button**

If you see an error, click the **"Fix"** button in AI Studio — Gemini will self-heal the code. If the UI looks off, type in the prompt box: *"Fix the layout to be more mobile-friendly with larger buttons"*

---

## Task 4: Add and Test Voice Input

**Files:** AI Studio modifies `App.jsx` or `HomeScreen.jsx` automatically.

- [ ] **Step 1: Test the mic button in Chrome**

Open the live preview in a new tab (click the external link icon in AI Studio preview). Then:
1. Click the **🎤 بولیں** button
2. Chrome will ask for microphone permission — click **Allow**
3. Say: *"Johar Town se Liberty Market"* in English or Urdu
4. The fields should fill in automatically

- [ ] **Step 2: If voice input is not working, paste this fix prompt**

```
The mic button is not working. Fix the Web Speech API implementation:
- Use window.SpeechRecognition || window.webkitSpeechRecognition
- Set recognition.lang = 'ur-PK' for Urdu, with 'en-US' as fallback
- When speech is detected, put the full transcript into BOTH the From and To fields so the user can edit them
- Show a visual indicator (red pulsing circle) while recording
- Show the text "سن رہا ہوں..." (Listening...) while recording
- If the browser doesn't support speech recognition, show a message: "آپ کا براؤزر آواز کو سپورٹ نہیں کرتا۔ براہ کرم Chrome استعمال کریں۔"
```

- [ ] **Step 3: Test voice with Urdu speech**

Try saying in Urdu: *"جوہر ٹاؤن سے لبرٹی مارکیٹ"*

The speech-to-text should capture it and Gemini should still understand the intent correctly.

---

## Task 5: Test All Routes and Edge Cases

**Files:** No code changes — testing only.

- [ ] **Step 1: Test a Karachi route**

1. Select **Karachi** from dropdown
2. Type **Saddar** in From, **Clifton** in To
3. Click search
4. Expected: Gemini replies with Bus W11 details in Urdu

- [ ] **Step 2: Test a route that does NOT exist**

1. Select **Lahore**
2. Type **Airport** in From, **Wapda Town** in To
3. Click search
4. Expected: Gemini apologises in Urdu and suggests adding the route

- [ ] **Step 3: Test informal/casual Urdu input**

Type in the From field: *"yaar johar se liberty jaana hai"* (leave To field empty)
Click search.
Expected: Gemini understands the casual request and finds the route.

- [ ] **Step 4: Fix any issues found**

If Gemini gives wrong results, paste this into AI Studio prompt:

```
The Gemini prompt needs improvement. Update it so:
1. The full routes JSON is always included in the message sent to Gemini
2. The system instruction emphasises: "Only use routes from the provided JSON data. Do not invent routes."
3. If the user's input is informal or mixed language, Gemini should still extract the city landmarks correctly
```

---

## Task 6: Test Add a Route Feature

**Files:** AI Studio modifies `AddRouteScreen.jsx` automatically if needed.

- [ ] **Step 1: Add a test route**

1. Click **"نیا روٹ شامل کریں"** link on the home screen
2. Fill in:
   - City: Lahore
   - Bus Number: 99
   - From: Airport
   - To: Wapda Town
   - Fare: 50
3. Click **جمع کریں**
4. Expected: Success message appears in Urdu

- [ ] **Step 2: Verify route is saved to localStorage**

Open Chrome DevTools (F12) → Application tab → Local Storage → look for key `userRoutes`. You should see a JSON array with the route you just added.

- [ ] **Step 3: Test that the new route is findable**

Go back to Home, search **Airport → Wapda Town** in Lahore.
Expected: Gemini finds the user-added route and gives directions.

- [ ] **Step 4: Fix if user routes aren't loading**

If the search doesn't find the user-added route, paste this prompt:

```
Fix the route loading logic. When the user clicks search:
1. Load the hardcoded routes array from the app
2. Also load routes from localStorage key "userRoutes" (parse JSON, default to empty array if null)
3. Merge both arrays into one combined array
4. Send the FULL combined array to Gemini in the prompt
```

---

## Task 7: Polish the UI

**Files:** AI Studio updates CSS/Tailwind automatically.

- [ ] **Step 1: Make it look great on mobile**

Paste this prompt into AI Studio:

```
Polish the UI to look professional and Pakistani:
1. Make the header background Pakistan green (#00a651) with white text
2. Add a small Pakistani flag emoji 🇵🇰 next to the title
3. Make all buttons minimum 52px tall with rounded corners
4. Add a subtle green border to the input fields
5. On the Result screen, show the Gemini response inside a white card with a green left border
6. Add a loading spinner (green color) while Gemini is fetching the response
7. Make the font size 17px minimum throughout
8. Add a small footer: "AI Seekho 2026 | Built with Google AI Studio"
9. The mic button should be large (64px diameter) green circle in the center
```

- [ ] **Step 2: Test on mobile size**

In Chrome, press F12 → click the mobile device icon (toggle device toolbar) → select **Galaxy S8+** or any 360px wide device.

Verify:
- All text is readable
- Buttons are large enough to tap
- No horizontal scrolling
- The mic button is prominently visible

- [ ] **Step 3: Fix any mobile layout issues**

If anything looks cramped or broken on mobile, type in AI Studio:
```
Fix the mobile layout: [describe exactly what looks wrong]
```

---

## Task 8: Deploy to Google Cloud Run

**Files:** No code changes — deployment only.

- [ ] **Step 1: Redeem your Google Cloud credits**

Go to: **https://www.trygcp.dev/claim/vibe-coding-event**
Sign in with your personal Gmail → follow steps to claim credits.
Verify credits applied at: **https://console.cloud.google.com** → Billing → Credits

- [ ] **Step 2: Publish from AI Studio**

In AI Studio, click the **"Publish"** or **"Share"** button (top right of the interface).

When prompted:
1. Click **"Create Project"** → name it `busbot-pakistan`
2. Select your billing account with the applied credits
3. Click **Deploy**

Wait 2-3 minutes for deployment.

- [ ] **Step 3: Copy your public URL**

AI Studio will show a public URL like:
`https://busbot-pakistan-xxxx.run.app`

Copy this URL — this is what you submit for AI Seekho 2026.

- [ ] **Step 4: Test the live deployment**

Open the URL on your actual phone (not the computer).
Do a full test:
1. Select Lahore, search Johar Town → Liberty Market
2. Try the mic button
3. Try adding a new route
4. Share the result using the Share button

If everything works → you are done!

- [ ] **Step 5: If deployment fails**

If the Publish button asks for billing and you don't have credits yet, paste this into AI Studio chat:

```
How do I deploy this React app to Google Cloud Run manually using the gcloud CLI?
```

AI Studio will give you step-by-step terminal commands.

---

## Task 9: Final Checks Before Submission

- [ ] **Check 1: App loads in under 3 seconds on mobile**

Open the URL on your phone with mobile data (not WiFi). It should load quickly.

- [ ] **Check 2: Gemini responds in Urdu**

Do one final test search in Lahore. The response must be in Urdu, not English.

If it's replying in English, paste this into AI Studio:

```
Update the Gemini system instruction to: "You are BusBot Pakistan. You MUST always reply in Urdu only, never in English. Use simple, everyday Urdu that any Pakistani can understand."
Then redeploy.
```

- [ ] **Check 3: Voice works on the phone**

Tap the mic button on your actual phone in Chrome. Speak a route. Verify it works.

- [ ] **Check 4: The app looks good in a screenshot**

Take a screenshot of the Home screen and the Result screen. These are for your competition submission description.

- [ ] **Check 5: Note down your submission details**

Write down:
- Public URL: `https://busbot-pakistan-xxxx.run.app`
- Track: App Banao
- AI used: Gemini 2.0 Flash (Google AI Studio)
- Problem solved: Bus route finding for Pakistani cities with Urdu voice input

---

## Submission Checklist for AI Seekho 2026

- [ ] App is live at a public Google Cloud Run URL
- [ ] Urdu voice input works on Chrome for Android
- [ ] At least 3 routes across 2 cities tested and working
- [ ] Add a Route feature works
- [ ] UI is mobile-friendly and looks clean
- [ ] Submit URL at: **https://rsvp.withgoogle.com/events/aiseekho2026**

---

## Day-by-Day Schedule (6 days left)

| Day | Tasks |
|---|---|
| Day 1 (today) | Task 1 (routes.json) + Task 2 (AI Studio setup) + Task 3 (build core app) |
| Day 2 | Task 4 (voice input) + Task 5 (test all routes) |
| Day 3 | Task 6 (Add a Route) + Task 7 (Polish UI) |
| Day 4 | Task 8 (Deploy) + Task 9 (Final checks) |
| Day 5 | Buffer day — fix any issues, improve Urdu prompts |
| Day 6 (May 3) | Submit before midnight |
