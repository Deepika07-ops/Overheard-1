# Overheard 🎙

> *Stories from the air around you.*

An AI-powered web app that listens to the ambient sound around you 
and generates fictional micro-stories about the strangers nearby — 
based purely on sound, never on voices or faces.

## How it works

1. You click the mic button
2. The app analyzes ambient sound — volume, rhythm, frequency
3. It builds a scene description from those sounds
4. An AI writes a unique fictional story every 20 seconds
5. Type your location (lab, cafe, train...) to shape the stories

## Tech stack

- **Frontend** — HTML, CSS, Web Audio API
- **Backend** — Node.js, Express
- **AI** — LLaMA 3.1 via Groq API (free)
- **Audio** — Web Audio API AnalyserNode

## Setup

1. Clone the repo
   git clone https://github.com/YOURUSERNAME/overheard.git

2. Install dependencies
   npm install

3. Create a .env file
   GROQ_API_KEY=your-key-here

4. Run it
   node server.js

5. Open browser at http://localhost:3001

## Get a free Groq API key

https://console.groq.com

## What makes it unique

Most apps process sound to extract information.
Overheard processes sound to generate imagination.
The same room at different times of day produces completely 
different stories — because the sound is different.

## Built by

A student who learned Node.js and built this in one day. 🚀
