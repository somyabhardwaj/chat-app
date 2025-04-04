��#   c h a t - a p p 
 
 📦 src
 ┣ 📂 app               # Application entry point with routing
 ┃ ┣ 📂 auth           # Authentication routes (e.g., login, register)
 ┃ ┣ 📂 dashboard      # Dashboard-related pages
 ┃ ┣ 📂 chat           # Chat module (real-time messaging)
 ┃ ┣ 📂 users          # User-related pages
 ┃ ┣ 📜 layout.tsx     # Layout component (Navbar, Sidebar, etc.)
 ┃ ┣ 📜 root.tsx       # Root layout for TanStack Router
 ┃ ┗ 📜 index.tsx      # App Router configuration
 ┣ 📂 components       # Reusable UI components
 ┃ ┣ 📂 ui             # Generic UI components (buttons, modals, inputs)
 ┃ ┣ 📂 forms          # Form components (input fields, validations)
 ┃ ┗ 📂 chat           # Chat-specific components
 ┣ 📂 hooks            # Custom React hooks
 ┣ 📂 lib              # External libraries setup (axios, socket.io, etc.)
 ┣ 📂 services         # API services (fetching/sending data)
 ┣ 📂 store            # Zustand/Redux state management
 ┣ 📂 utils            # Utility functions/helpers
 ┣ 📂 types            # TypeScript types & interfaces
 ┣ 📂 styles           # Global styles (Tailwind, SCSS)
 ┣ 📜 main.tsx         # React entry point
 ┗ 📜 index.css        # Global CSS
