# BlogSite

A blog web app built using **React**, **Redux Toolkit**, **Appwrite** as the backend, and **TinyMCE** for rich text editing. This app allows users to log in, create and manage posts, and upload images. It also features authentication and file handling capabilities.

## Features

- **User Authentication**:
  - Sign up, log in, and log out using **Appwrite** for backend authentication.
  - User authentication flow managed with **React Hook Form** for form handling and validation.

- **Post Creation & Management**:
  - Users can create blog posts, write articles, and upload images.
  - Ability to set the post's status (e.g., Draft, Published).
  - Integrated **TinyMCE Cloud** WYSIWYG editor for rich text formatting.

- **State Management**:
  - **Redux Toolkit** used for state management (specifically for handling authentication).
  - Managed app's state and authentication flow via Redux slices and actions.

- **Routing**:
  - Routes protected with **React Router** based on user authentication.
  - Redirects users to the appropriate pages (login or home) depending on their authentication status.

- **File Handling**:
  - Users can upload and attach images to their blog posts using **Appwrite Storage**.

## Technologies Used

- **React**: Front-end framework for building the user interface.
- **Redux Toolkit**: For global state management and handling user authentication.
- **Appwrite**: Open-source backend for authentication, database, and file storage.
- **React Hook Form**: For handling form submission and validation.
- **TinyMCE**: Rich text editor for creating blog posts with advanced text formatting.
- **React Router**: For routing and navigation between pages.
- **Vite**: Build tool and development server for fast builds and optimized production.



