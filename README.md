# Budgeting and Investment Recommendation App

Welcome to my **Budgeting and Investment Recommendation App**! This project aims to help users track their finances, calculate disposable income, and optionally provide low-risk investment recommendations based on their financial profile.

---

## Features

### **1. User Authentication**
- **Sign Up/Login System**: Secure user authentication.
- **Password Security**: Passwords are hashed for safe storage.
- **Email Verification**: Users verify their email during sign-up.
- **Multi-Factor Authentication (MFA)**: Adds an additional layer of security with a one-time passcode.

### **2. Budget Tracking**
- **Income and Expense Input**: Users can log and categorize their financial data.
- **Disposable Income Calculation**: Automatically calculates disposable income.

### **3. Notifications**
- **Account Alerts**: Users are notified of changes such as password updates or unusual login activity.
- **Investment Alerts (Optional)**: Notifications about market conditions or portfolio changes.

### **4. User Dashboard**
- A centralized place to view:
  - Budget summary.
  - Disposable income.
  - Projected earnings.
- **(Optional)** AI-generated investment suggestions based on disposable income and risk preferences.

---

## Tech Stack

### **Frontend**
- Built with **React** for a dynamic and responsive user interface.

### **Backend**
- Powered by **Node.js** and **Express** for server-side logic.

### **Database**
- Uses **PostgreSQL** to store user data securely.

---

## Testing

### **Unit Testing**
- Focus on testing individual components and functions.
- Example: Testing disposable income calculations.

### **End-to-End (E2E) Testing**
- Simulates real user workflows like sign-up/login.
- Example: Validating the AI recommendation system.

### **Backend Testing**
- Tests API endpoints and backend logic.
- Tools: Mocha, Chai, and Supertest.

---

## Deployment
The app is deployed with **frontend** and **backend** hosted separately. Links to live environments and deployment details will be provided here:

- **Frontend**: [Frontend Deployment Link](https://icapital-frontend.netlify.app/)
- **Backend**: [Backend Deployment Link](https://icapital-financial-planner-backend.onrender.com/)
- **Trello**: [Trello Link](https://trello.com/b/0KZf9ePw/icapital)

---

## Setup Instructions

### **Prerequisites**
- Node.js (v16 or higher)
- PostgreSQL

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/DiandreMiller/icapital-financial-planner-front-end.git
   cd budgeting-app

2. Install dependencies:
    ```bash
    npm install


3. Navigate to the frontend directory and start the client:
    ```bash
    npm run dev
