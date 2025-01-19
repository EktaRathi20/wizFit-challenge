# WizFit Challenge

This project is a Vue.js application that integrates with the **WizFit Challenge API** (using mock data due to API unavailability) to display a list of participating schools. It features a responsive design, dynamic search functionality, and pagination to enhance user experience.

---


## 📝 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup and Installation](#setup-and-installation)
- [Mock Data and Pagination](#mock-data-and-pagination)

---

## 📖 Project Overview

The goal of this application is to display a list of schools participating in the **WizFit Challenge**. Due to unavailability of the API, a **mock data solution** was implemented along with a custom **pagination function**. The application adheres to a responsive design and provides search functionality for users to dynamically filter school results.

---

## 🌟 Features

1. **Dynamic Search**: Allows users to filter schools in real-time by name or email.
2. **Pagination**: Displays data in manageable chunks, improving user experience.
3. **Mock Data Integration**: Simulates API functionality for seamless testing.
4. **Error Handling**: Handles edge cases like no search results or API errors (mocked).
5. **Reusable Components**: Modular architecture with components for toast notifications, loaders, and tables.

---

## 📂 Folder Structure

1. `assets/`
   1. `css/` - CSS styles
   2. `images/` - Project images
2. `components/`
   1. `base/`
      1. `Loader.vue` - Loader component
      2. `Toast.vue` - Toast notification
      3. `Table.vue` - Reusable table component
3. `layouts/`
   1. `Header.vue` - Header layout
   2. `Footer.vue` - Footer layout
4. `locales/`
   1. `en.ts` - Localization strings
5. `middleware/`
   1. `ApiClient.ts` - Middleware for API communication
6. `mock/`
   1. `school-list.ts` - Mock data for schools
7. `models/`
   1. `index.ts` - Main model index
   2. `pagination.ts` - Pagination model
   3. `severity.ts` - Severity levels for notifications
8. `plugins/`
   1. `i18n-plugin.ts` - Internationalization plugin
9. `router/`
   1. `index.ts` - Vue Router configuration
10. `services/`
    1. `usePagination.ts` - Pagination logic
    2. `useSchool.ts` - School list service
11. `stores/`
    1. `index.ts` - Main store index
    2. `loader.ts` - Store for loader state
    3. `toast.ts` - Store for toast notifications
12. `utils/`
    1. `index.ts` - Utility functions
    2. `loader-utils.ts` - Loader utility
13. `views/`
    1. `school-list.vue` - Main view for school list
14. `App.vue` - Root Vue component
15. `main.ts` - Entry point for the Vue app
16. `.env` - Environment variables

---

## ⚙️ Setup and Installation

### Prerequisites

- **Node.js**: v22.3.0 or higher
- **npm**: v10.8.1 or higher

1. Clone the repository:

```sh
    git clone https://github.com/your-repo/wizfit-challenge.git
    cd wizfit-challenge
```

2. Install Node Modules

```sh
    npm install
```

3. Run App

```sh
    npm run dev
```

4. Build

```sh
    npm run build
```

5. lint

```sh
    npm run lint
```

## 📊 Mock Data and Pagination

Since the API was not functional, mock data was used. The `paginateAndSearch` function is located in `mock/school-list.ts` and operates as follows:

1. Filters the school list based on search input.
2. Divides results into pages, with customizable page size.
