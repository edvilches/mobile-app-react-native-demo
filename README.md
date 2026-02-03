# Mobile App based on React-Native

In this project I develop a minimal react-native web and mobile app. This app displays a filter menu and images to select Mobile Suits from Gundam Wing Franchise.

# Architecture

This project has the following directory structure. As you can see, there is two separate projects (backend and frontend) which collaborates to keep the mobile app running.

```bash
/mobile-app-reactive-demo
├── /backend
│   ├── /src
│   │   ├── /config             # Environment and DB configs
│   │   ├── /controllers        # Logic executors
│   │   ├── /routes             # Backend API URL's
│   │   ├── /services           # Logic designs
│   │   ├── app.js              # Main orchestrator
│   │   ├── index.js            # API executor
│   │   └── server.js           # Server listener
│   ├── package.json            # Lists backend project dependencies, scripts, and metadata for Node.js
│   └── README.md               # Backend documentation file
│
├── /frontend
│   ├── /assets
│   │   └──  **.png             # Project Image files
│   └── App.js                  # Main routing setup
│   └── index.js                # Setup and executes native app in target device
│   └── package.json            # Lists frontend project dependencies, scripts, and metadata
│
├── package-lock.json
├── package.json
└── README.md
```

# Installation

To install this project properly I recommend to clone the repo and install each sub project and test them separatelly.

- Click here to read [backend](https://github.com/edvilches/mobile-app-react-native-demo/tree/main/backend) documentation.
- Click here to read [frontend](https://github.com/edvilches/mobile-app-react-native-demo/tree/main/frontend) documentation.

# Final comments

This is an experimental project, feel free to modify it locally and try new features. At the moment I am not taking merge requests unfortunatelly.
