# BlogSite

A blog web app built using **React**, **Redux Toolkit**, **Spring Boot**, **MongoDB**, and **TinyMCE** for rich text editing. This app allows users to log in, create and manage posts, and upload images. It features user authentication, CRUD operations, and file handling.

## Features

- **User Authentication**:
  - Sign up, log in, and log out using **Spring Security** for backend authentication.
  - Authentication flow managed with **React Hook Form** for form handling and validation.
  - Role-based authorization for access control.

- **Post Creation & Management**:
  - Users can create blog posts, write articles, and upload images.
  - Ability to set post status (e.g., Draft, Published).
  - Integrated **TinyMCE Cloud** WYSIWYG editor for rich text formatting.
  - CRUD operations for managing posts (Create, Read, Update, Delete).

- **State Management**:
  - **Redux Toolkit** used for global state management, particularly handling user authentication and post data.
  - App state and authentication flow are managed via Redux slices and actions.

- **Routing**:
  - Routes are protected with **React Router** based on user authentication.
  - Redirects users to the appropriate pages (login or home) depending on their authentication status.

- **File Handling**:
  - Users can upload and attach images to their blog posts.
  - Image files are stored and served by the backend.

## Technologies Used

- **Frontend**:
  - **React**: Front-end framework for building the user interface.
  - **Redux Toolkit**: For global state management and handling user authentication.
  - **React Hook Form**: For handling form submission and validation.
  - **TinyMCE**: Rich text editor for creating blog posts with advanced text formatting.
  - **React Router**: For routing and navigation between pages.
  - **Vite**: Build tool and development server for fast builds and optimized production.

- **Backend**:
  - **Spring Boot**: For creating the backend REST API.
  - **MongoDB**: NoSQL database (via MongoDB Atlas) for storing user data, posts, and images.
  - **Spring Security**: For managing authentication and role-based access control.
  - **Lombok**: For reducing boilerplate code by generating getters, setters, and utility methods.
  - **Maven**: Build tool for dependency management and project structure.

## Backend Overview

This backend powers the blog web application and is built with **Spring Boot** and **MongoDB**.

### Key Features:
- **User Account Creation**: Users can register and create their own accounts.
- **CRUD Operations**: Users can add, update, delete, and view blog posts. Each post includes details like title, content, and images.
- **MVC Architecture**: The app follows the Model-View-Controller (MVC) architecture for better organization and maintainability.
- **MongoDB**: MongoDB Atlas is used as the backend database for storing user data and posts.
- **Spring Security**: Handles user authentication and role-based authorization, ensuring only authorized users can perform certain actions.
- **Role-Based Access Control**: Different user roles are allowed specific actions (e.g., Admin vs. User).
- **Image Upload & Management**: Users can upload images with their posts, which are stored and served by the backend.

### Technologies Used:
- **Spring Boot**: For building RESTful APIs and backend logic.
- **MongoDB**: Used to store and manage data in a NoSQL database.
- **Spring Security**: For authentication and role-based authorization.
- **Lombok**: Used to reduce boilerplate code by auto-generating getters, setters, and other utility methods.

### Source code Backend link: https://github.com/VipinRana08/blog_site_backend