# 🎙️ PrepPilot — Real-Time AI Voice Mock Interview Platform

PrepPilot is an AI-powered mock interview platform designed to help developers and job seekers practice technical, behavioral, and mixed interviews in real-time. Powered by **Vapi AI** for voice conversations and **Google Gemini** for intelligent question generation and performance evaluation.

---

## ✨ Features

- 🗣️ **Voice-Driven Interview Generation**: Converse with an AI assistant to customize your mock interview (role, tech stack, experience level, question count, and focus type).
- 🎙️ **Live Voice Mock Interviews**: Practice interviews in real-time with an AI voice interviewer with natural conversational flow.
- 📊 **Detailed AI Feedback & Scoring**: Instant scoring (0–100) across 5 core categories:
  - Communication Skills
  - Technical Knowledge
  - Problem-Solving
  - Cultural & Role Fit
  - Confidence & Clarity
- 🔐 **Authentication & Security**: Firebase Authentication with secure server-side session cookies.
- 💾 **Database Integration**: Cloud Firestore for persistent interview storage, transcripts, and evaluation logs.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Server Actions)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Voice AI**: Vapi AI Web SDK
- **LLM / AI Model**: Google Gemini 2.0 Flash via @ai-sdk/google & Vercel AI SDK
- **Backend / Database**: Firebase Admin & Client SDK (Auth, Firestore)
- **Deployment**: Vercel

---

## 🚀 Getting Started

### 1. Clone the Repository
git clone https://github.com/saikrishna8076/Prep_Pilot.git
cd Prep_Pilot

### 2. Install Dependencies
npm install

### 3. Set Up Environment Variables
Create a .env.local file in the root directory and add the following keys:

NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_or_assistant_id
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="your_firebase_private_key"
NEXT_PUBLIC_BASE_URL=http://localhost:3000

### 4. Run the Development Server
npm run dev

Open http://localhost:3000 in your browser.

---

## 🌐 Deployment

Deploy easily to Vercel:

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Add the environment variables in your Vercel Project Settings (Settings -> Environment Variables).
4. Set NEXT_PUBLIC_BASE_URL to your live Vercel URL.
5. Deploy!

---

## 📝 License

This project is open-source and available under the MIT License.
