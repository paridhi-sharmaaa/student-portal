# Student Portal Web Application

A modern student portal web application built with React, Tailwind CSS, and React Router. This portal provides students with academic management tools, event tracking, and user networking capabilities.

## LIVE LINK:
  https://student-portal-navy-six.vercel.app/
  
## Features

- **User Authentication**
  - Secure login/signup with form validation
  - Protected routes for authenticated users
  - Persistent session using localStorage

- **Dashboard**
  - Academic summary cards (GPA, Attendance, etc.)
  - Recent activity feed
  - Upcoming deadlines

- **Events Management**
  - Interactive calendar view
  - Add/edit events
  - Filter events by date

- **User Profiles**
  - View student profiles
  - Personal and academic information
  - Responsive design

- **Dark Mode**
  - Toggle between light/dark themes
  - Persists across sessions

- **Responsive Design**
  - Works on desktop, tablet, and mobile devices

## Technologies Used

- **Frontend**
  - React.js
  - Tailwind CSS
  - React Router
  - React Calendar
  - Axios (for API calls)

- **State Management**
  - React Context API
  - LocalStorage for persistence

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/student-portal-js.git

2. Navigate to the project directory:
   ```bash
   cd student-portal-js

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
   ```bash
   npm run dev
   
5.  Open your browser and visit:

    http://localhost:3000

## Project Structure
![Uploading Screenshot 2025-06-26 at 11.57.26 PM.png…]()


## Configuration
The application can be configured by modifying these files:

src/context/AuthContext.jsx - Authentication settings

tailwind.config.cjs - Tailwind CSS configuration

vite.config.js - Vite build settings

## Available Scripts

npm run dev - Start development server

npm run build - Create production build

npm run lint - Run ESLint

npm run preview - Preview production build

## Contributing:

Contributions are welcome! Please follow these steps:

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some amazing feature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

