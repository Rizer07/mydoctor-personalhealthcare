# My Doctor – Personal Health Care

A modern, role-based personal healthcare platform built with Next.js 14, TypeScript, Tailwind CSS, Prisma ORM, and PostgreSQL.

---

## 🚀 Quick Setup Instructions

### 1. Install Node.js
If you haven't installed Node.js yet, download and install the LTS version from:
👉 **[https://nodejs.org/](https://nodejs.org/)**

### 2. Install Project Dependencies
Open your terminal (PowerShell or VS Code Terminal) in this directory and run:
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/mydoctor"
NEXTAUTH_SECRET="your-super-secret-jwt-key"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Push Database Schema
```bash
npx prisma db push
```

### 5. Launch the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🩺 Application Portals & Routes

*   **Landing Page:** `/`
*   **Patient Dashboard:** `/patient`
    *   **Medical Reports & Lab Comparison:** `/patient/reports`
    *   **Smart Doctor Booking:** `/patient/book`
    *   **Medicine Store & Cart:** `/patient/medicines`
*   **Doctor Workspace & Prescription Desk:** `/doctor`
*   **Clinic Receptionist Desk & Billing:** `/receptionist`
*   **Free OpenStreetMap Discovery:** `/map`
*   **WebRTC Video Consultation Room:** `/video/room-101`
