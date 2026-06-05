<div align="center">

  # 📄 Resume Maker - Frontend
  
  **A modern, responsive web application for creating, managing, and optimizing professional resumes with ATS compatibility assessment and advanced templates.**
  
  ![React](https://img.shields.io/badge/React_18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📝 Project Overview

Resume Maker is a comprehensive frontend application designed to help professionals create, refine, and optimize their resumes. The platform combines intelligent tools like ATS (Applicant Tracking System) scoring, multiple professional templates, and a cold email generator to streamline the job application process.

## ✨ Key Features & Architecture

* **Resume Generation:** User-friendly interface to create professional resumes from scratch with intuitive form inputs.
* **ATS Score Assessment:** Analyze resumes against ATS compatibility metrics to maximize acceptance by automated systems.
* **Multiple Resume Templates:** Browse and select from professionally-designed ATS-compatible resume templates.
* **Cold Email Hub:** Generate professional cold emails to reach potential employers and recruiters.
* **Real-time Preview:** Live resume preview as users build and customize their resumes.
* **Responsive Design:** Built with Tailwind CSS for seamless experience across all devices.
* **Modern Development Stack:** Vite for ultra-fast builds and React 18 for optimal performance.

---

## 🗂️ Project Structure

```
src/
├── pages/              # Main application pages
│   ├── Home.jsx               # Landing/home page
│   ├── LandingPage.jsx        # Welcome page
│   ├── GenerateResume.jsx     # Resume creation interface
│   ├── ATSScore.jsx           # ATS scoring tool
│   ├── ATSResumeTemplates.jsx # Template selection
│   ├── ColdEmailHub.jsx       # Email generator
│   ├── InternshipCalendar.jsx # Internship information
│   ├── About.jsx              # About page
│   ├── Contact.jsx            # Contact page
│   ├── Services.jsx           # Services overview
│   ├── Resume.jsx             # Resume display
│   └── Root.jsx               # Root layout component
├── components/         # Reusable components
│   ├── Navbar.jsx             # Navigation bar
│   └── Resume.jsx             # Resume component
├── api/                # API integration
│   └── ResumeService.js       # Backend API calls
├── utils/              # Utility functions
├── assets/             # Static assets
└── main.jsx            # Application entry point
```

---

## 🛣️ Main Pages & Features

| Page | Route | Description |
| :--- | :--- | :--- |
| **Home** | `/` | Landing page with key features overview |
| **Generate Resume** | `/generate-resume` | Create and customize resumes |
| **ATS Score** | `/ats-score` | Analyze resume ATS compatibility |
| **ATS Templates** | `/ats-templates` | Browse professional resume templates |
| **Cold Email Hub** | `/cold-email` | Generate professional outreach emails |
| **Internship Calendar** | `/internship-calendar` | View internship opportunities |
| **About** | `/about` | Information about the platform |
| **Services** | `/services` | Overview of available services |
| **Contact** | `/contact` | Contact and support information |

---

## 🚀 How to Run Locally

### Prerequisites
* **Node.js 16+** and **npm** installed.
* **Git** for version control.

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd resume_frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment (if needed):**
   - Create a `.env` file in the project root if backend API URLs need to be configured
   - Example: `VITE_API_BASE_URL=http://localhost:8080/api`

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   - The application will be available at `http://localhost:5173`

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🔧 Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **HTTP Client:** Fetch API / Axios
- **Linting:** ESLint

---

## 📦 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

---

## 🌐 API Integration

The application communicates with a backend API through `src/api/ResumeService.js`. Update the API base URL in your environment configuration to connect to your backend server.

---

## 📄 License

This project is part of a professional portfolio and is provided as-is for demonstration purposes.


