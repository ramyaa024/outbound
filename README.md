# OUTBOUND — Space Exploration Experience

Outbound is an interactive, space-themed single-page web application built using React. It provides a futuristic exploration experience where users can discover destinations, explore Mars, choose missions, and select a route for a Mars reconnaissance mission.

---

## Project Overview

Outbound is designed to create an immersive space exploration experience rather than a traditional information-based website.

Users can:

- Explore different space destinations
- Enter the Mars exploration section
- Explore available Mars missions
- View the Mars Reconnaissance mission
- Choose between a Direct Route and a Gravity-Assisted Route
- Confirm their route selection
- Navigate through different sections of the application

The application follows a single-page design, with sections revealed progressively as the user moves through the exploration journey.

---

## Technologies Used

- **React** — Front-end library for building the application
- **JavaScript** — Application logic and interactions
- **HTML / JSX** — Page structure and React components
- **CSS** — Styling, layout, animations, and visual design
- **Vite** — Development environment and build tool
- **Google Fonts** — Orbitron and Rajdhani
- **Git & GitHub** — Version control and project hosting

---

## Features

### Destination Exploration

Users can explore different destinations, including:

- **Mars** — The Red Frontier
- **Andromeda** — 2.5M Light Years
- **Titan** — The Unknown
- **Europa** — Ocean World

Mars is currently the active destination, while the other destinations are marked as coming soon.

### Mars Exploration

The Mars section provides information about the destination, including:

- Distance
- Estimated travel time
- Planet type

Users can proceed to the Mars mission section using the **Start Mission** button.

### Mission Selection

The application presents four Mars missions:

1. Mars Reconnaissance
2. Mars Rover Survey
3. Mars Atmosphere
4. Mars Life Search

Currently, **Mission 01 — Mars Reconnaissance** is available.

### Route Selection

During Mission 01, users can choose between two routes:

**Direct Route**

- Faster journey
- Uses more fuel

**Gravity-Assisted Route**

- Slower journey
- Saves fuel

The selected route is stored using React state and displayed on the confirmation screen.

### Mission Confirmation

After selecting a route, users can confirm their choice and receive a mission status showing:

- Route confirmed
- Ready for launch
- Selected route

---

## Demo

[Watch the Outbound Demo](https://drive.google.com/file/d/1I2JkHY_S-ZmUKDxbCJ64mVRXwLaTb0ar/view?usp=sharing)

---

## Screenshots

### Home Page

The landing page introduces the Outbound space exploration experience.

### Destination Selection

Users can explore different destinations and select Mars to begin their journey.

### Mars Exploration

The Mars section displays destination information and mission details.

### Mission Selection

Users can choose from different Mars missions, with Mission 01 currently available.

### Route Selection

Users can choose between a Direct Route and a Gravity-Assisted Route based on fuel usage.

### Mission Confirmation

The selected route is confirmed and the mission is shown as ready for launch.

### About Outbound

A short introduction explaining the purpose of the Outbound space exploration experience.

---

## React Implementation

The application uses React state to control the user journey.

For example:

```jsx
const [visibleSections, setVisibleSections] = useState(["home"]);
```

This keeps track of which sections should be visible.

Route selection is also handled using React state:

```jsx
const [selectedRoute, setSelectedRoute] = useState("");
```

This allows the application to dynamically display the route selected by the user.

---

## Project Structure

```text
outbound-react/
│
├── public/
│   └── images/
│       ├── mars.jpg
│       ├── andromeda.jpeg
│       ├── titan.jpeg
│       ├── europa.png
│       ├── mm1.jpeg
│       ├── mm2.webp
│       ├── mm3.jpg
│       ├── mm4.jpg
│       └── spacecraft.jpeg
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

---

## Running the Project Locally

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate into the project

```bash
cd outbound-react
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will provide a local URL similar to:

```text
http://localhost:5173/
```

Open the URL in your browser to view the application.

---

## Design

Outbound follows a futuristic, space-inspired visual style featuring:

- Dark space backgrounds
- Blue and purple gradients
- Glass-style interface elements
- Futuristic typography
- Space imagery
- Hover interactions
- Smooth scrolling
- Mission-style UI elements

The primary fonts used are **Orbitron** and **Rajdhani**.

---

## Project Objective

The main objective of Outbound is to demonstrate how a traditional web design can be developed into an interactive React single-page application.

The project demonstrates concepts including:

- React components
- JSX
- React Hooks
- `useState`
- Event handling
- Conditional rendering
- Dynamic user interaction
- CSS styling
- Single-page navigation

---

## Author

**N Ramya**

Web Development Project — **Outbound**

---

## Future Improvements

Possible future additions include:

- Additional interactive destinations
- More playable missions
- Mission animations
- Spacecraft launch sequences
- More route options
- Interactive planetary information
- Additional React components
- Responsive design improvements for mobile devices

---

**Explore Beyond. Go Outbound.**
