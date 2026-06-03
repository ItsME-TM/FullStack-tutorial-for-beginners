<p align="center">
  <img src="banner.svg" alt="Full-Stack Masterclass Banner" width="800">
</p>

# Full-Stack Masterclass: Tutorials for Beginners

Welcome to the **Full-Stack Masterclass**, a comprehensive collection of self-contained tutorials and hands-on projects designed to take you from zero to hero in modern web development. This repository covers the four pillars of the modern stack: **React**, **Node.js**, **SQL (SQLite)**, and **NoSQL (MongoDB)**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/Code%20of%20Conduct-Contributor%20Covenant-blue.svg)](CODE_OF_CONDUCT.md)
[![All Contributors](https://img.shields.io/github/all-contributors/ItsME-TM/React-tutorial-for-beginners?color=ee8449&style=flat-square)](#contributors)

---

## 🚀 Project Overview

This repository is structured to provide a consistent learning experience across different technologies. Each tutorial follows a professional pattern:
- 📖 **Task.md**: Clear requirements and objectives.
- 🎓 **Tutorial.md**: Theoretical background and concepts.
- 🚶 **Step-by-Step-Guide.md**: A guided walkthrough for the implementation (where applicable).
- 🧪 **Boilerplate / query.sql**: A starting point with TODOs for you to complete.
- ✅ **Answer/**: A reference solution to verify your work.

---

## 🛠️ Repository Structure

### ⚛️ React Tutorials
Interactive UI components built with React (CDN-based for easy setup).
- **1. Introduction**: Setup and basic rendering.
- **2. Display Multiple Elements**: JSX rules and fragments.
- **3. Total Cost Calculator**: `useState` and event handling.
- **4. Chatbot Project**: Props, components, and mapping lists.
- **5. Hooks**: Deep dive into `useState` and `useEffect`.
- **6. Calculator**: Advanced state management and logic.

### 🟢 Node.js Projects
Backend utilities and core Node.js concepts.
- **API Key Manager**: Secure key generation.
- **CSV Tools**: Data processing.
- **File Validator**: System-level checks.
- **JWT Validator**: Security and authentication.
- **Password Utils**: Hashing with Bcrypt.
- **Request Logger**: Middleware-style logging.
- **URL Shortener**: Practical backend application.

### 📊 SQL Tasks
Relational database management using SQLite.
- **01. Library Basics**: Filtering data with `SELECT` and `WHERE`.
- **02. Store Joins**: Combining tables with `INNER JOIN`.
- **03. Company Aggregates**: Using `GROUP BY` and aggregate functions.
- **04. Hospital Filtering**: Advanced multi-condition date filtering.
- **05. University Enrollment**: Many-to-Many relationships and triple joins.

### 🍃 MongoDB Tasks
NoSQL database aggregation and management challenges.
- **01. Distinct First Names**: Basic querying and distinct sets.
- **02. Order Total Calculator**: Mathematical aggregations.
- **03. Top Products By Revenue**: Complex data analysis.
- **04. Inactive Users**: Joins (`$lookup`) and date filtering.
- **05. Top Chatbot Intents**: Real-time log analysis.

---

## 🚦 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (for MongoDB tasks)
- [SQLite3](https://sqlite.org/index.html) (usually pre-installed on most OS; otherwise used via `npm`)

### 2. Database Setup
Depending on which tasks you are starting, you must seed your local database:

**For MongoDB Tasks:**
```bash
cd "MongoDB Tasks"
npm install
node setup-database.js
```

**For SQL Tasks:**
```bash
cd "SQL Tasks"
npm install
node setup-db.js
```

### 3. Running Tutorials
- **React**: Simply open the `.html` files in any modern web browser.
- **Node/MongoDB**: Navigate to the specific project folder and run `npm install`, then `node [filename].js`.
- **SQL**: Navigate to the task folder and run the query against the database:
  ```bash
  sqlite3 tutorial.db < folder-name/query.sql
  ```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place! Whether it's fixing a bug, improving documentation, or adding a new tutorial, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) before getting started.

---

## 👥 Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Developed with ❤️ for the Developer Community
</p>
