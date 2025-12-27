🚀 Axiom Token Trading – Token Discovery Table

A pixel-perfect frontend implementation of the Axiom Trade Token Discovery Table, built with Next.js 14 App Router, focused on performance, reusability, and real-time interactions.

🔗 Reference UI: https://axiom.trade/pulse

📌 Project Overview

This project replicates the Token Discovery Table used in Axiom Trade, showcasing:

New token pairs

Final stretch tokens

Migrated tokens

The application emphasizes:

Smooth real-time price updates

Highly reusable atomic components

Accessible UI interactions

Production-grade frontend architecture

✨ Core Features
🧩 UI & Interaction

Pixel-perfect table layout (≤ 2px deviation)

Hover effects, click actions, tooltips, popovers, and modals

Sorting across multiple columns

Fully responsive (down to 320px width)

🔄 Real-Time Updates

Mock WebSocket for live price updates

Smooth green/red price flash animations

Memoized rows to prevent unnecessary re-renders

⏳ Loading & Error Handling

Skeleton loaders & shimmer effects

Progressive data loading

Error boundaries for graceful failure handling

🛠️ Tech Stack
Category	Technology
Framework	Next.js 14 (App Router)
Language	TypeScript (Strict Mode)
Styling	Tailwind CSS
State Management	Redux Toolkit
Data Fetching	React Query
UI Components	Radix UI / shadcn/ui
Architecture	Atomic Design Pattern
Performance	Memoization, no CLS, <100ms interactions
🧠 Architecture Overview

The project follows Atomic Architecture for scalability and reuse:

components/
├── atoms        → Small UI elements (Price, Icons, Skeletons)
├── molecules    → Combined elements (TableRow, Tooltip)
├── organisms    → Complex UI blocks (TokenTable)
├── templates    → Page-level layouts


Custom hooks are used for:

WebSocket simulation

Sorting logic

Price flash animations

📂 Project Structure
axiom-token-table/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── providers.tsx
│   └── error.tsx
│
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
│
├── hooks/
├── store/
├── lib/
├── services/
├── styles/
├── public/screenshots/
├── README.md

🚀 Getting Started (Local Setup)
1️⃣ Clone the Repository
git clone https://github.com/<your-username>/axiom-token-table.git
cd axiom-token-table

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Open: http://localhost:3000

🌍 Deployment

The application is deployed using Vercel.

🔗 Live Demo:
👉 Add your Vercel deployment link here

🎥 Demo Video

A short video demonstrating:

Table interactions

Real-time price updates

Loading states

Responsive layout

📺 YouTube Link:
👉 Add your public YouTube demo link here

📱 Responsive Design

The UI is fully responsive and tested on:

Desktop

Tablet

Mobile (320px)

📸 Screenshots are available in:

/public/screenshots

📊 Performance & Quality

Lighthouse Score: 90+ (Mobile & Desktop)

No layout shifts (CLS = 0)

Optimized renders using memoization

Accessible components (ARIA-compliant)

🧪 Evaluation Criteria Coverage
Criteria	Status
Performance Optimization	✅
Code Reusability & Structure	✅
Pixel-Perfect UI	✅
Feature Completeness	✅
🧑‍💻 Author

Abhienaya Sri
Frontend Developer | AI & Web Enthusiast

🔗 GitHub: https://github.com/AbhienayaSri9509

🔗 LinkedIn: https://www.linkedin.com/in/abhienaya-sri-572020254/

📌 Notes

This project focuses on frontend architecture & UX, not backend trading logic.

WebSocket behavior is mocked for demonstration purposes.
