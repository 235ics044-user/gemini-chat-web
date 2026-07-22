# 🤖 Gemini AI Chat using GitHub Pages + Appwrite Function

## Project Overview

Is project ka objective hai Gemini AI ko secure tareeke se use karna bina API key ko frontend me expose kiye .

Architecture:

```
User
   │
   ▼
GitHub Pages (HTML/CSS/JavaScript)
   │
   │ fetch()
   ▼
Appwrite Function
   │
   ▼
Gemini API
   │
   ▼
Gemini Response
   │
   ▼
GitHub Pages UI
```

---

# Why this Architecture?

Agar Gemini API ko directly JavaScript se call karenge to API Key browser me expose ho jayegi.

Isliye API Key ko Appwrite Function ke Environment Variable me store kiya gaya hai.

Frontend sirf Appwrite Function ko call karta hai.

---

# Components

## 1. GitHub Pages

Purpose:
- User Interface
- User Input
- Response Display

Files:

```
index.html
style.css
script.js
```

JavaScript ka kaam:

```
User Prompt

↓

fetch(Appwrite Function)

↓

Receive JSON

↓

Display Response
```

---

## 2. Appwrite Function

Language:

```
Python
```

Responsibilities:

- Read Prompt
- Load GEMINI_API_KEY
- Call Gemini
- Return JSON

Example Flow

```
Browser

↓

prompt=Hello

↓

Appwrite Function

↓

Gemini API

↓

{
    "response":"Hello Human!"
}
```

---

## 3. Gemini API

Model Priority

1.

```
gemini-3.6-flash
```

Fallback Models

```
gemini-flash-latest

gemini-3.5-flash-lite

gemini-3.1-flash-lite

gemini-flash-lite-latest
```

Agar first model fail ho jaye to automatically next model use kiya jayega.

---

# Environment Variables

Appwrite

```
GEMINI_API_KEY=YOUR_API_KEY
```

Never expose API key inside JavaScript.

---

# Project Structure

```
Frontend

index.html
style.css
script.js

↓

Appwrite Function

main.py

↓

Gemini API
```

---

# Security

Correct

```
Browser

↓

Appwrite

↓

Gemini
```

Wrong

```
Browser

↓

Gemini
```

Reason:

Browser me API key visible ho jayegi.

---

# API Request

```
GET

https://YOUR_FUNCTION_URL/?prompt=Hello
```

Response

```json
{
  "success": true,
  "model": "gemini-3.6-flash",
  "response": "Hello!"
}
```

---

# Future Improvements

- ChatGPT Style UI
- Markdown Rendering
- Syntax Highlighting
- Chat History
- Copy Button
- Image Upload
- Streaming Responses
- Voice Input
- Dark / Light Theme
- Authentication
- Rate Limiting
- Database Storage
- Conversation Memory

---

# Deployment

Frontend

GitHub Pages

Backend

Appwrite Functions

AI

Google Gemini API

---

# Complete Flow

```
User

↓

GitHub Pages

↓

JavaScript fetch()

↓

Appwrite Function

↓

Gemini API

↓

Gemini Response

↓

Appwrite JSON

↓

JavaScript

↓

Display on Screen
```

---

# Notes

✔ API Key remains secure.

✔ Frontend is completely static.

✔ Backend can be updated without changing frontend.

✔ Easy to deploy.

✔ Easy to scale.

✔ Works with any frontend framework later (React, Flutter Web, Next.js, Vue etc.)

---

Author

Created as a learning project to understand:

- GitHub Pages
- Appwrite Functions
- Google Gemini API
- Secure API Architecture
- Serverless Backend
