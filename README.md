# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

PROYECT ---- MUSIC APP


Lofi Music Player
This is a UI challenge to replicate a simple lofi music player. The main goal is to build reusable React components and a responsive design.

Features
Search and Playback: Allows users to search for and play lofi music.

Responsive User Interface: The application adapts to work on both mobile and desktop devices.

State Management: Uses React's useState and useEffect to manage application state, such as the current track and playback status.

API Integration: Uses a mock API (api/itunes.js) to get a list of tracks.

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A CSS framework for fast, responsive styling.

Vite: A module bundler and development tool for frontend projects.

Project Structure
The project is organized into a clear, modular component structure to keep the code clean and easy to maintain.

src/
├── api/
│   └── itunes.js       # Logic to interact with the (mock) API
├── components/
│   ├── Header.jsx      # Component for the application header
│   ├── Player.jsx      # Music player component
│   ├── TrackCard.jsx   # Component for each song card
│   └── TrackList.jsx   # Component to display the list of songs
└── App.jsx             # Main component that integrates all others

How to Get Started
Follow these steps to run the application in your local development environment.

1. Clone the repository
git clone https://github.com/your-username/music-lofi-player.git
cd music-lofi-player

2. Install dependencies
npm install

3. Run the application
npm run dev

This will start the application in development mode. Open it in your browser at http://localhost:5173.