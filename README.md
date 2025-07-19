# Repeatify – PearlThoughts

Welcome to **Repeatify**, a flexible and user-friendly recurring date generator app built for **PearlThoughts**.  
This tool helps users define custom recurrence patterns with intuitive options and preview them in real time.

## Demo - 

---

## 🚀 Tech Stack

- ⚡️ Next.js (v15)
- 🗓 React DatePicker
- 🧠 Context API for State Management
- 🧪 Jest & React Testing Library for Unit + Integration Tests
- 🧰 Babel (manual config due to advanced JSX/ESM syntax)
- 💻 GitHub Codespaces Compatible

---

## 📦 Folder Structure

```

📁 src/
┣ 📂app/               # App Router (layout.js, page.js)
┣ 📂components/        # All React UI components
┣ 📂Context/           # React Context for state sharing
┣ 📂styles/            # Tailwind + Custom CSS files
┣ 📂test/              # Unit and Integration tests
┣ 📂utils/             # Utility functions (e.g. date logic)

````

---

## 📁 Prerequisites

### 🔧 Node Version Manager (`.nvmrc`)

This project uses **Node.js 20.x**. Make sure to have [`nvm`](https://github.com/nvm-sh/nvm) installed.

```bash
nvm install    # installs version from .nvmrc
nvm use        # switches to correct Node version
````

---

## 🛠️ Installation & Development

### 🔥 First-time Setup (Recommended in GitHub Codespace)

```bash
git clone https://github.com/Aousulaprashant/Repeatify-PearlThoughts.git
cd Repeatify-PearlThoughts

# Load correct Node.js version
nvm install
nvm use

# Install dependencies
npm install
```

### 🚀 Run the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

---

## 🧪 Running Tests

This project includes:

* ✅ Unit tests for core logic (`generateRecurringDates`)
* 🔗 Integration test for complete UI behavior (`RecurringPicker`)

```bash
npm test
```

## ⚙️ GitHub Codespaces Setup

To run the project in **GitHub Codespaces**, follow these steps:

### ✅ 1. Fix the `.nvmrc` file

Edit `.nvmrc` and make sure it only contains:

```
20
```

### ✅ 2. Install and Use Node.js

```bash
nvm install
nvm use
```

(If it fails, run: `nvm install 20 && nvm use 20`)

### ✅ 3. Install Dependencies

```bash
npm install
```

### ✅ 4. Start the Dev Server

```bash
npm run dev
```

You should see something like:

```
Local:   http://localhost:3000
Network: http://10.0.0.xxx:3000
```

---

## 🧪 Testing

To run tests:

```bash
npm test
```

Includes:

* ✅ Unit Test: `generateRecurringDates.test.js`
* ✅ Integration Test: `RecurringPicker.test.js`

### Example Output:

```
PASS  src/test/generateRecurringDates.test.js
PASS  src/test/RecurringPicker.test.js
Test Suites: 2 passed
Tests:       3 passed
```

---



---

---

## 💡 Features

* 🎯 Flexible recurrence logic (Daily, Weekly, Monthly, Yearly)
* 📅 Modern floating date inputs
* ⚛️ Reactive preview calendar
* 🧪 Tested with Jest + RTL
* 🖼 Styled with Tailwind CSS
* 🧰 Easy-to-understand folder structure

---


---

## 🧠 Powered By

Built as part of the **PearlThoughts** assignment ✨

```

