# DemoApp

A beautiful and modern React Native mobile application showcasing an animated drawer navigation system with a sleek, elegant user interface.

<p align="center">
  ![Demo Video](./assets/demo-video.mp4)
</p>

## Project Overview

DemoApp is a mobile application that demonstrates advanced React Native animation techniques and modern UI/UX patterns. The app features a custom drawer navigation system with smooth transitions, animations, and a clean design aesthetic.

### Key Features

- **Custom Animated Drawer Navigation**: Smooth and visually appealing drawer transitions with scale, rotation, and translation effects
- **Bottom Tab Navigation**: Secondary navigation using bottom tabs for main app sections
- **Modern UI Design**: Clean, minimal interface with attention to detail and visual feedback
- **TypeScript Implementation**: Fully typed codebase for better developer experience and code quality
- **Component-Based Architecture**: Modular design for maintainable and reusable code

## Project Structure

```
app-demo/
├── assets/                 # Images, icons, and media files
│   └── recording.MP4       # Demo recording of the app
├── src/                    # Source code
│   ├── components/         # Reusable UI components
│   │   ├── App.tsx         # Main App component
│   │   ├── Drawer/         # Drawer navigation components
│   │   └── MainContent/    # Main content area components
│   ├── constants/          # Application constants (colors, routes, etc.)
│   ├── screens/            # Screen components
│   │   ├── Start.tsx       # Main start screen with bottom tabs
│   │   ├── Status.tsx      # Status screen
│   │   ├── Community.tsx   # Community screen
│   │   ├── Chats.tsx       # Chats screen
│   │   ├── Settings.tsx    # Settings screen
│   │   └── ...             # Other screen components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── index.tsx           # Entry point for the application
├── app.json                # Expo configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Design Decisions & Implementation

### 1. Custom Drawer Navigation

Rather than using an off-the-shelf drawer navigation, we implemented a custom solution to achieve specific animation and design goals:

- The main content area scales down and rotates slightly when the drawer opens
- A smooth translation effect slides the main content to reveal the drawer
- The drawer itself animates from below with a staggered effect

This custom implementation provides more control over the animation timing, easing, and visual effects than standard libraries.

### 2. Component Architecture

The application follows a clear separation of concerns:

- **App.tsx**: Serves as the container for the entire application, managing the drawer state and animations
- **Drawer**: Contains user profile and navigation options
- **MainContent**: Houses the actual app screens and the toggle button for the drawer
- **Screens**: Individual screen components that represent different app sections

This modular approach makes the codebase maintainable and allows for easy expansion with new features.

### 3. Animation Implementation

We used React Native's Animated API for all animations, which provides excellent performance by running animations on the native thread. Key animation techniques include:

- Parallel animations for multiple properties (scale, rotation, translation)
- Interpolation for converting animation values (e.g., for rotation degrees)
- useRef for maintaining animation values between renders
- useCallback for optimizing animation functions

### 4. Navigation Pattern

The app implements a hybrid navigation pattern:

- Primary navigation via the custom drawer
- Secondary navigation through bottom tabs (using @react-navigation/bottom-tabs)

This combination provides users with multiple ways to navigate the app while maintaining a consistent and intuitive experience.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository
```bash
git clone https://github.com/fazil-amir/gerald-react-native-app.git
cd gerald-react-native-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open the app on your device using Expo Go or run on a simulator

## Future Enhancements

- Add authentication flow
- Implement dark mode support
- Add more interactive elements and micro-interactions
- Enhance accessibility features
- Implement state management (Redux or Context API)

## Demo

Check out the app in action:

<video width="320" height="240" controls>
  <source src="https://github.com/fazil-amir/gerald-react-native-app/blob/master/assets/recording.MP4" type="video/mp4">
</video>

*Note: If the video doesn't play in the README, check the assets/recording.MP4 file directly.*

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- React Native Animated API
- React Native Gesture Handler 