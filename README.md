🎓 Student Portal Web App
A responsive Student Portal web application built using React, Tailwind CSS, and Vite, designed for students to manage academic details in one place. It features a login system, user dashboard, API integration, dark/light mode toggle, and creative UI enhancements.

Features Implemented
Authentication Pages
Login with dummy validation (email: student@portal.com, password: 123456).

Signup form (non-functional, for demo purposes).

Forgot Password → Reset Password flow (for future implementation).

Auth state stored via localStorage to persist login state.

Sticky Navbar
Remains on top while scrolling.

Includes links to: Home, Users, Dashboard, and Logout.

Displays the logged-in user’s name.

Home Page
Welcome text and introduction to the portal.

Users Page
Fetches data from https://jsonplaceholder.typicode.com/users.

Displays user cards with Name, Email, Phone, and Website.

Handles loading and error states gracefully.

Dashboard
Summary cards for GPA, Attendance, and Subjects.

Creative layout using Tailwind’s grid and flex utilities.

Dark / Light Mode
Default dark mode with a toggle to switch to light mode.

Light mode has a custom theme (light blue + black text).

The mode toggle is available on all pages.

UI Creative Enhancements
Page transition animations for smooth navigation.

Card hover glow effects for interactive design.

Toast notifications (using react-hot-toast).

AOS (Animate On Scroll) for dashboard widgets.

Blurred glassmorphism card backgrounds for a modern look.

Animated toggle switch for dark/light mode.

Responsive cards that adapt to various screen sizes.

Icons from react-icons to enhance UI.

🌐 Live Site
Check the live app here:
Live Student Portal Web App

🖼️ Screenshot
You can see the screenshots of the app here.

What I Learned / Challenges Faced
Key Learnings:
Managing dark/light theme toggle globally using Tailwind's dark: classes.

Working with react-router-dom to build protected routes and navigation.

Handling API loading/error states gracefully with Axios.

Structuring React apps using components and pages.

Using react-hot-toast and AOS for better UX and visual effects.

Challenges:
Making sure dark mode styling works consistently across all pages.

Styling Tailwind CSS from Figma references.

Netlify deployment with the correct build output (dist/).

🛠 Tech Stack
React (Frontend framework)

Tailwind CSS (Utility-first CSS framework)

React Router DOM (Routing for single-page application)

Axios (For API requests)

Vite (Build tool for fast development)

AOS (Animate On Scroll) (Scroll animations for better UI effects)

React Hot Toast (Toast notifications)

React Icons (Icons for enhancing UI)

Local Development
Install Dependencies
bash
Copy
npm install
Start Development Server
bash
Copy
npm run dev
🏗️ Build & Deploy
Production Build
To create a production build, use the following command:

bash
Copy
npm run build
This will create an optimized version of your app in the dist/ folder.

Deployment to Netlify:
Make sure to copy the _redirects file from the public/ folder to the dist/ folder after building the app.

Add the following script to your package.json to ensure _redirects is copied:

json
Copy
"build": "vite build && npm run copy-redirects",
"copy-redirects": "cp public/_redirects dist/_redirects"
