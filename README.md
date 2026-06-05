# 🚀 AI Resume Generator

An intelligent, end-to-end AI-powered Resume Generator and ATS Analyzer built using Spring Boot (Spring AI) + Ollama + ChatGPT/DeepSeek APIs on the backend and ReactJS + TailwindCSS + DaisyUI on the frontend.

This project transforms a simple user prompt into a fully structured JSON-based resume format, allowing users to edit, preview, and download their resumes.

---

## ✨ Features

### 🧠 AI Resume Generation Engine
<p align="center"> <img src="https://img.shields.io/badge/AI-Content%20Generation-black?style=for-the-badge&logo=openai"> <img src="https://img.shields.io/badge/Output-Structured%20Resume-success?style=for-the-badge"> </p>

```Diff
+ Describe yourself in natural language
+ AI transforms input into a professional resume
+ Generates:
    → Summary
    → Skills
    → Experience
    → Education
    → Projects
+ Clean, ATS-friendly structure
+ Real-time resume preview
```

### 🔍 ATS Score Analyzer & Templates
<p align="center"> <img src="https://img.shields.io/badge/ATS-Score%20Analysis-blue?style=for-the-badge"> <img src="https://img.shields.io/badge/PDF-Parsing-critical?style=for-the-badge"> <img src="https://img.shields.io/badge/Templates-Professional-purple?style=for-the-badge"> </p>

```Diff
+ Upload resume (PDF format)
+ AI evaluates ATS compatibility score
+ Extracts and analyzes key skills
+ Identifies missing keywords
+ Suggests targeted improvements
+ Browse 10+ ATS-optimized resume templates
+ Single & two-column layout options
+ Easy template preview & selection
```

### 💼 Career Development Toolkit
<p align="center"> <img src="https://img.shields.io/badge/Career-Tools-teal?style=for-the-badge"> <img src="https://img.shields.io/badge/Email-Generator-orange?style=for-the-badge"> <img src="https://img.shields.io/badge/Resources-Hub-pink?style=for-the-badge"> </p>

```Diff
+ Cold Email Hub - Generate professional outreach emails
+ Internship Calendar - Track internship opportunities
+ Interview Preparation - Asked in interviews section
+ DSA Hub - Data structures & algorithms resources
+ System Design Guide - Architecture learning materials
+ Interview Material - Comprehensive prep resources
+ Guidelines - Best practices documentation
```

### 🎨 Interactive Resume Builder UI
<p align="center"> <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/UI-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css"> <img src="https://img.shields.io/badge/Components-DaisyUI-purple?style=for-the-badge"> </p>

```Diff
+ Auto-filled resume fields using AI
+ Fully editable form interface
+ Live preview experience
+ Responsive & modern UI design
+ Smooth UX with component-based architecture
+ Multiple page navigation
+ Toast notifications for user feedback
+ PDF export & print functionality
```

### ⚙️ AI-Powered Backend System
<p align="center"> <img src="https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot"> <img src="https://img.shields.io/badge/AI-Spring%20AI-orange?style=for-the-badge"> </p>

```Diff
+ Built with Spring Boot 3.5.14 + Spring AI 1.1.0
+ Java 21 for latest language features
+ Multi-LLM integration:
    → Ollama (Local)
    → DeepSeek (API)
    → ChatGPT APIs (Cloud)
+ Resume storage & regeneration
+ JSON-based resume schema processing
+ Intelligent prompt orchestration layer
+ REST API with Spring Actuator monitoring
```

### 🌟 System Capabilities Overview
<p align="center"> <img src="https://img.shields.io/badge/Smart-AI%20Driven-critical?style=for-the-badge"> <img src="https://img.shields.io/badge/Fast-RealTime-success?style=for-the-badge"> <img src="https://img.shields.io/badge/Scalable-Architecture-orange?style=for-the-badge"> <img src="https://img.shields.io/badge/UX-Modern%20Design-blueviolet?style=for-the-badge"> </p>

---

## 📁 Project Structure

### 🎨 Frontend Architecture
```
resume_frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with responsive menu
│   │   └── Resume.jsx              # Resume display component
│   ├── pages/
│   │   ├── Home.jsx                # Home page wrapper
│   │   ├── LandingPage.jsx         # Hero section landing page
│   │   ├── GenerateResume.jsx      # Resume creation interface
│   │   ├── Resume.jsx              # Resume display page
│   │   ├── ATSScore.jsx            # ATS score analyzer tool
│   │   ├── ATSResumeTemplates.jsx  # Professional resume templates (10+)
│   │   ├── ColdEmailHub.jsx        # Professional email generator
│   │   ├── InternshipCalendar.jsx  # Internship opportunities tracking
│   │   ├── About.jsx               # About platform page
│   │   ├── Contact.jsx             # Contact form page
│   │   ├── Services.jsx            # Services overview
│   │   └── Root.jsx                # Root layout component
│   ├── api/
│   │   └── ResumeService.js        # API integration service
│   ├── utils/                      # Utility functions
│   ├── assets/                     # Static assets
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles
│   └── main.jsx                    # React entry point
├── package.json                    # Frontend dependencies
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite bundler config
└── README.md                       # Frontend documentation
```

### 🚀 Backend Architecture
```
resume-ai-backend/
├── src/
│   ├── main/
│   │   ├── java/com/resume/backend/
│   │   │   ├── ResumeAiBackendApplication.java    # Spring Boot entry point
│   │   │   ├── ResumeRequest.java                 # Request DTO
│   │   │   ├── controller/
│   │   │   │   └── ResumeController.java          # REST API endpoints
│   │   │   ├── service/
│   │   │   │   ├── ResumeService.java             # Service interface
│   │   │   │   └── ResumeServiceImpl.java          # Service implementation
│   │   │   └── model/                             # Data models
│   │   └── resources/
│   │       ├── application.properties             # Spring configuration
│   │       └── resume_prompt.txt                  # AI prompt template
│   └── test/
│       └── java/com/resume/backend/               # Unit tests
├── pom.xml                                        # Maven configuration
└── README.md                                      # Backend documentation
```

---

## 📄 Pages & Routes

| Page | Route | Feature | Status |
| :--- | :--- | :--- | :--- |
| **Home** | `/` | Landing page with features overview | ✅ Live |
| **Generate Resume** | `/generate-resume` | Create & customize resumes with AI | ✅ Live |
| **ATS Score Checker** | `/atsscore` | Analyze resume ATS compatibility | ✅ Live |
| **ATS Resume Templates** | `/atsresumetemplates` | 10+ professional templates | ✅ Live |
| **Cold Email Hub** | `/coldemailhub` | Generate professional outreach emails | ✅ Live |
| **Internship Calendar** | `/internship-calendar` | Track internship opportunities | ✅ Live |
| **About** | `/about` | Platform mission & values | ✅ Live |
| **Services** | `/services` | Service offerings overview | ✅ Live |
| **Contact** | `/contact` | Contact & support form | ✅ Live |
| **Asked in Interviews** | `/asked-in-interviews` | Interview preparation material | 📋 In Progress |
| **DSA Hub** | `/dsa-hub` | Data structures & algorithms | 📋 In Progress |
| **System Design** | `/system-design` | System design guide | 📋 In Progress |

---

<p align="center"> <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=22&duration=3000&color=00F7FF&center=true&vCenter=true&width=600&lines=Modern+AI+Powered+Stack;Built+for+Scalability+%26+Performance;Clean+Architecture+%2B+Smart+UX" /> </p>

> ### 🎨 Frontend
<p align="center"> <img src="https://img.shields.io/badge/React-19.2.0-0f2027?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=000000"> <img src="https://img.shields.io/badge/React%20Router-7.9.6-F37726?style=for-the-badge&labelColor=000000"> <img src="https://img.shields.io/badge/TailwindCSS-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=0f172a"> </p> <p align="center"> <img src="https://img.shields.io/badge/DaisyUI-5.5.5-7C3AED?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/Framer%20Motion-12.23.24-0055FF?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/Axios-1.13.2-9333EA?style=for-the-badge&labelColor=0f172a"> </p> <p align="center"> <img src="https://img.shields.io/badge/Lucide%20React-0.554.0-FF6B6B?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/jsPDF-3.0.4-EC1C24?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/React%20Hook%20Form-7.66.1-EC5990?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/React%20Hot%20Toast-2.6.0-FF6B6B?style=for-the-badge&labelColor=0f172a"> </p>

> ### 🚀 Backend
<p align="center"> <img src="https://img.shields.io/badge/Spring%20Boot-3.5.14-6DB33F?style=for-the-badge&logo=springboot&logoColor=white&labelColor=0b1f13"> <img src="https://img.shields.io/badge/Java-21-007396?style=for-the-badge&logo=java&logoColor=white&labelColor=0f172a"> <img src="https://img.shields.io/badge/Spring%20AI-1.1.0-6DB33F?style=for-the-badge&logoColor=white&labelColor=0b1f13"> </p> <p align="center"> <img src="https://img.shields.io/badge/Ollama-Local%20LLM-111111?style=for-the-badge"> <img src="https://img.shields.io/badge/DeepSeek-AI%20Model-6D28D9?style=for-the-badge"> <img src="https://img.shields.io/badge/OpenAI-Cloud%20AI-412991?style=for-the-badge&logo=openai"> <img src="https://img.shields.io/badge/Lombok-Code%20Gen-BC1623?style=for-the-badge"> </p>

> ### 🗃️ Database

<p align="center"> <img src="https://img.shields.io/badge/JSON-Document%20Store-000000?style=for-the-badge&logo=json&logoColor=white&labelColor=111827"> </p>

> ### ⚙️ Tools

<p align="center"> <img src="https://img.shields.io/badge/IntelliJ-IDE-000000?style=for-the-badge&logo=intellijidea&logoColor=white&labelColor=1a1a1a"> <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a1a1a"> <img src="https://img.shields.io/badge/Postman-API%20Testing-FF6C37?style=for-the-badge&logo=postman&logoColor=white&labelColor=1a1a1a"> </p>

---

## 🧠 AI Prompt Format (Used for Resume Generation)

```Diff
I am a Java Developer with 2 years of experience in building scalable backend applications using Spring Boot and microservices architecture. I have hands-on expertise in MySQL and MongoDB for data management.

I am proficient in AWS and Docker, enabling efficient cloud deployment and containerized application development. I have professional experience working as a Software Engineer at ABC Tech.

I hold a Bachelor's degree in Computer Applications and have built projects such as an Expense Management System using Spring Boot and React.js.

I am an AWS Certified Solutions Architect and have a strong interest in open-source contributions and continuous learning.
```

---

## 📸 Screenshots

### 🖥️ Home Page
![Homepage](./screenshots/home.png)

### ✨ About Section
![Aboutpage](./screenshots/about.png)

### 📊 ATS Score Analyzer
![ATSScorepage](./screenshots/atsscore.png)

### 🧠 AI Resume Description Input
![Descriptionpage](./screenshots/description_input.png)

### 📝 Resume Form (Editable)
![Reviewpage](./screenshots/review_form.png)

### 📄 Final Resume Preview
![GenerateResumepage](./screenshots/generate_resume.png)

---

## ⚙️ How It Works

<p align="center"> <img src="https://img.shields.io/badge/Workflow-AI%20Pipeline-0ff?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Experience-Interactive-a855f7?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Output-ATS%20Optimized-22c55e?style=for-the-badge&labelColor=020617"> </p>

### 🧠 Intelligent Resume Pipeline

[![](https://mermaid.ink/img/pako:eNptU8tu2zAQ_JUFTzZqx4ofscJDAKuuARdtbFhxD4UuhLRViEqkuqSCOob_vSspSg-ODoLImd2dGYpnkdoMhRQO_9RoUlxrlZMqEwP8VIq8TnWljIcjKAdHhwSDDVnj0WTDa9amYR1QpVywvYajBo4r0iaHyFoPq_0HrLhlIb3oFOGbOiFdc1bbhsTvPdkXnSG5a866G-ctqRwT0xGO44eHjYQv7IBgjS4lXXltDUzgWBVWZSzf1SV27A2zIwn7XfwEE1XpCbXgJEeDpDzC7sD7RhWn1_cJEdfEEn6oQmcN5dBE63wHxgyutpLtmazRXlYeBl_j3SO49BlLNey7rLbjrk_sqU59Tdgqq6xxCINOI2uOU0s4_N97HcnWMbY2Ct-3i8dvTsim6Bw329W-qn0vuUulFdJP6RNg6Ch513DKfKrwCeI6z9kRp-bESOSkMyFZJY5EiVSqZinOTXkiPJvCREj-zBT9TkRiLlzD5_PT2rIvI1vnz0L-UoXjVV01ub39ie-71Ar4bGvjhVzOw7aJkGfxV8jpbH6zuJ1Ow9k0DO6Xi3AxEichZ3c34XJ-H94GwewuDMLwMhKv7diAAeZgpjmr790VaG_C5R9Kfflh?type=png)](https://mermaid.live/edit#pako:eNptU8tu2zAQ_JUFTzZqx4ofscJDAKuuARdtbFhxD4UuhLRViEqkuqSCOob_vSspSg-ODoLImd2dGYpnkdoMhRQO_9RoUlxrlZMqEwP8VIq8TnWljIcjKAdHhwSDDVnj0WTDa9amYR1QpVywvYajBo4r0iaHyFoPq_0HrLhlIb3oFOGbOiFdc1bbhsTvPdkXnSG5a866G-ctqRwT0xGO44eHjYQv7IBgjS4lXXltDUzgWBVWZSzf1SV27A2zIwn7XfwEE1XpCbXgJEeDpDzC7sD7RhWn1_cJEdfEEn6oQmcN5dBE63wHxgyutpLtmazRXlYeBl_j3SO49BlLNey7rLbjrk_sqU59Tdgqq6xxCINOI2uOU0s4_N97HcnWMbY2Ct-3i8dvTsim6Bw329W-qn0vuUulFdJP6RNg6Ch513DKfKrwCeI6z9kRp-bESOSkMyFZJY5EiVSqZinOTXkiPJvCREj-zBT9TkRiLlzD5_PT2rIvI1vnz0L-UoXjVV01ub39ie-71Ar4bGvjhVzOw7aJkGfxV8jpbH6zuJ1Ow9k0DO6Xi3AxEichZ3c34XJ-H94GwewuDMLwMhKv7diAAeZgpjmr790VaG_C5R9Kfflh)

### 🧩 Step-by-Step Flow

<table> <tr> <td width="50%">
    
### 📝 Step 01 — Input
```Diff
+ User enters personal/professional details
+ Natural language input supported
+ No strict formatting required
```
</td> <td width="50%">

### 🧠 Step 02 — AI Structuring
```Diff
+ Backend processes input
+ Converts into structured JSON schema
+ Organizes resume sections intelligently
```
</td> </tr> <tr> <td width="50%">

### 🎨 Step 03 — UI Population
```Diff
+ JSON auto-fills resume builder
+ Sections mapped dynamically
+ Instant preview generation
```
</td> <td width="50%">

### ✏️ Step 04 — Customization
```Diff
+ User edits any section
+ Fine-tunes content easily
+ Real-time updates in UI
```
</td> </tr> <tr> <td width="50%">

### 📄 Step 05 — Resume Output
```Diff
+ Clean, professional layout
+ ATS-friendly formatting
+ Ready for export/use
```
</td> <td width="50%">
    
### 🔍 Step 06 — ATS Analysis
```Diff
+ Upload existing resume (optional)
+ AI evaluates ATS score
+ Detects missing skills & keywords
+ Suggests targeted improvements
```
</td> </tr> </table>

### ⚡ Workflow Highlights
<p align="center"> <img src="https://img.shields.io/badge/AI-Automation-00f7ff?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/JSON-Driven%20Pipeline-facc15?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/UX-Interactive%20Editing-a855f7?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/ATS-Optimization-22c55e?style=for-the-badge&labelColor=020617"> </p>

---

## 🏁 How to Run the Project
<p align="center"> <img src="https://img.shields.io/badge/Setup-Quick%20Start-0ff?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Environment-Local%20Development-a855f7?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Mode-Full%20Stack-22c55e?style=for-the-badge&labelColor=020617"> </p>

### ⚙️ Backend Setup
```Bash
# Navigate to backend
cd backend

# Run Spring Boot application
mvn spring-boot:run
```

### 🎨 Frontend Setup
```Bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

### 🚀 Run Flow

[![](https://mermaid.ink/img/pako:eNpdkctqwzAQRX9FzNoJfsgPaVGI84BCCyWlm9peCEtxTGLJqDJtagz9jm76i_2EKnaSRbXSmXvvDCP1UCougMLuqN7LPdMGPWxziexZZM_mzCkrD0LyAs1mdyjNFk_3aNtJWcuqmIzLi3GjlTQ35yp7-W9MR2GdLZWUojTItrooq0mZYD3CJlu0LdoKxk_o9-f7qwAHKl1zoEZ3woFG6IadEfpzLAezF43IgdorZ_qQQy4Hm2mZfFWquca06qo90B07vlnqWs6MWNWs0qy5VbVdQuil6qQB6rkhHrsA7eEDaBLO_SSKI4L9IMQYJw6crMuPbJkEhLiEJCSKvcGBz3GuO49814uxF5EQu9gNAwcEr43Sj9PTjz8w_AHwg3aY?type=png)](https://mermaid.live/edit#pako:eNpdkctqwzAQRX9FzNoJfsgPaVGI84BCCyWlm9peCEtxTGLJqDJtagz9jm76i_2EKnaSRbXSmXvvDCP1UCougMLuqN7LPdMGPWxziexZZM_mzCkrD0LyAs1mdyjNFk_3aNtJWcuqmIzLi3GjlTQ35yp7-W9MR2GdLZWUojTItrooq0mZYD3CJlu0LdoKxk_o9-f7qwAHKl1zoEZ3woFG6IadEfpzLAezF43IgdorZ_qQQy4Hm2mZfFWquca06qo90B07vlnqWs6MWNWs0qy5VbVdQuil6qQB6rkhHrsA7eEDaBLO_SSKI4L9IMQYJw6crMuPbJkEhLiEJCSKvcGBz3GuO49814uxF5EQu9gNAwcEr43Sj9PTjz8w_AHwg3aY)


### ⚡ Quick Notes
<p align="center"> <img src="https://img.shields.io/badge/Backend-Port%208080-6DB33F?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Frontend-Port%203000-61DAFB?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Requirement-Java%20%2B%20NodeJS-f97316?style=for-the-badge&labelColor=020617"> </p>


### 💡 Pro Tips
```Diff
+ Run backend first to avoid API connection errors
+ Ensure Java 21+ and Node.js 18+ are installed
+ Use separate terminals for frontend & backend
+ For local LLM: Start Ollama before backend
+ Check firewall settings if API calls fail
+ Use 'npm run build' for production deployment
+ Monitor backend logs for AI provider issues
```

### 🐛 Troubleshooting

| Issue | Solution |
| :--- | :--- |
| API connection refused | Ensure backend is running on port 8080 |
| AI responses slow | Check LLM provider (Ollama/OpenAI) status |
| PDF export failing | Verify `html-to-image` dependency |
| Resume not generating | Check backend logs for Spring AI errors |
| CORS errors | Verify CORS configuration in Spring Boot |

---

## 🔌 API Documentation

### Main Endpoints

**Resume Generation**
```bash
POST /api/resume/generate
Content-Type: application/json

Request:
{
  "prompt": "I am a Java developer with 2 years experience...",
  "aiProvider": "ollama"  // or "deepseek", "openai"
}

Response:
{
  "id": "resume-123",
  "summary": "...",
  "skills": [...],
  "experience": [...],
  "education": [...],
  "projects": [...]
}
```

**ATS Analysis**
```bash
POST /api/resume/analyze-ats
Content-Type: multipart/form-data

FormData:
- file: resume.pdf
- analyzeMode: "detailed"

Response:
{
  "score": 85,
  "requiredSkills": [...],
  "missingKeywords": [...],
  "improvements": [...]
}
```

### Frontend Services

**ResumeService.js**
```javascript
// Generate resume from prompt
generateResume(prompt, provider)

// Analyze ATS score
analyzeATSScore(file)

// Fetch templates
getResumeTemplates()

// Export resume to PDF
exportToPDF(resumeData)
```

---

## 📊 Project Statistics

### Frontend (React + Vite)
- **Total Pages:** 12 components
- **Routes:** 10 active + 3 in progress
- **Dependencies:** 16 npm packages
- **Total Size:** ~5MB (production build)
- **Languages:** JavaScript (JSX)
- **Styling:** TailwindCSS + DaisyUI

### Backend (Spring Boot)
- **Controllers:** 1 (ResumeController)
- **Services:** 2 (ResumeService, ResumeServiceImpl)
- **Models:** Extensible entity structure
- **API Endpoints:** RESTful architecture
- **Build System:** Maven 3.x
- **Java Version:** 21
- **Spring Boot Version:** 3.5.14

---

## 🌐 Deployment Ready

### Production Build

**Frontend:**
```bash
npm run build
# Output: resume_frontend/dist/

# Serve with any static server:
# - Netlify
# - Vercel
# - GitHub Pages
# - Nginx
```

**Backend:**
```bash
mvn clean package
# Creates: resume-ai-backend/target/*.jar

# Run JAR:
java -jar resume-ai-backend-0.0.1-SNAPSHOT.jar

# Docker deployment ready
```

### Environment Variables

**Backend:**
```env
SPRING_AI_OLLAMA_BASE_URL=http://localhost:11434
SPRING_AI_OPENAI_API_KEY=your-key-here
SPRING_AI_DEEPSEEK_API_KEY=your-key-here
SERVER_PORT=8080
```

**Frontend:**
```env
VITE_API_URL=https://api.yourdomain.com
VITE_API_TIMEOUT=10000
```

---

## 🤝 Contributions
<p align="center"> <img src="https://img.shields.io/badge/Contributions-Welcome-0ff?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Open%20Source-Community%20Driven-a855f7?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/PRs-Encouraged-22c55e?style=for-the-badge&labelColor=020617"> </p>

### 💡 Get Involved
```Diff
+ Fork the repository
+ Create your feature branch
+ Make your changes
+ Submit a pull request 🚀
```

### 🐛 Found a Bug or Have an Idea?
```Diff
+ Open an issue with clear details
+ Suggest new features or improvements
+ Help enhance AI capabilities & UI/UX
```

### 🌟 Contribution Goals
<p align="center"> <img src="https://img.shields.io/badge/Code-Quality-facc15?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/AI-Enhancements-a855f7?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/UI-Experience-0ea5e9?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Performance-Optimization-22c55e?style=for-the-badge&labelColor=020617"> </p>

### ⚡ Contribution Flow
[![](https://mermaid.ink/img/pako:eNo9kcFOwzAMhl8l8oFTh9ou7ZockFi3nZhAO9LuEK1eW61JSpYyYNoDcOEVeEUegSwb-GT78-9flo-w0RUCh22nD5tGGEseVqUiLu6LhTY7ssJer8lodEemRW5QWCRTI9SmWV_Gpp7lxVLskOSNUDXuryj3aFbkWsrWktw5XcnMk3nx2KMiT0PXOZuXAff2yueeL4oVvrZ4IDdkiaZG8vP99bmGAGrTVsCtGTAAiUaKcwnHs7YE26DEErhLK2F2JZTq5DS9UM9ayz-Z0UPdAN-Kbu-qoa_cYbNW1EbI_65BVaHJ9aAs8ChMMr8F-BHegGfJbZylk5TReJxQSh18d1Nx6tpszFjIWMbSSXQK4MP7hrdpHEYTGqUsoSENk3EAWLVWm-XlBf4Tp1-nSHlk?type=png)](https://mermaid.live/edit#pako:eNo9kcFOwzAMhl8l8oFTh9ou7ZockFi3nZhAO9LuEK1eW61JSpYyYNoDcOEVeEUegSwb-GT78-9flo-w0RUCh22nD5tGGEseVqUiLu6LhTY7ssJer8lodEemRW5QWCRTI9SmWV_Gpp7lxVLskOSNUDXuryj3aFbkWsrWktw5XcnMk3nx2KMiT0PXOZuXAff2yueeL4oVvrZ4IDdkiaZG8vP99bmGAGrTVsCtGTAAiUaKcwnHs7YE26DEErhLK2F2JZTq5DS9UM9ayz-Z0UPdAN-Kbu-qoa_cYbNW1EbI_65BVaHJ9aAs8ChMMr8F-BHegGfJbZylk5TReJxQSh18d1Nx6tpszFjIWMbSSXQK4MP7hrdpHEYTGqUsoSENk3EAWLVWm-XlBf4Tp1-nSHlk)

### ❤️ Final Note

>Contributions, ideas, and feedback are what make this project grow.

>Let’s build something amazing together 🚀

---

## 📜 License
<p align="center"> <img src="https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Open%20Source-Free%20to%20Use-0ea5e9?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Usage-Personal%20%26%20Commercial-a855f7?style=for-the-badge&labelColor=020617"> </p>

### 📄 License Overview
```Diff
+ This project is licensed under the MIT License
+ You are free to use, modify, and distribute this software
+ Suitable for personal and commercial use
```

### ⚖️ Permissions
<p align="center"> <img src="https://img.shields.io/badge/Use-Allowed-22c55e?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Modify-Allowed-0ff?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Distribute-Allowed-facc15?style=for-the-badge&labelColor=020617"> <img src="https://img.shields.io/badge/Private%20Use-Allowed-a855f7?style=for-the-badge&labelColor=020617"> </p>

### ⚠️ Disclaimer
```Diff
- This software is provided "as is"
- No warranty or liability is included
```

### 🔗 Full License
```Markdown
Refer to the LICENSE file for complete details.
```
