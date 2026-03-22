# 🚀 AI Resume Generator

An intelligent, end-to-end AI-powered Resume Generator and ATS Analyzer built using Spring Boot (Spring AI) + Ollama + ChatGPT/DeepSeek APIs on the backend and ReactJS + TailwindCSS + DaisyUI on the frontend.

This project transforms a simple user prompt into a fully structured JSON-based resume format, allowing users to edit, preview, and download their resumes.

---

## ✨ Features

### 🧠 AI Resume Generation Engine
<p align="center"> <img src="https://img.shields.io/badge/AI-Content%20Generation-black?style=for-the-badge&logo=openai"> <img src="https://img.shields.io/badge/Output-Structured%20Resume-success?style=for-the-badge"> </p>

+ Describe yourself in natural language
+ AI transforms input into a professional resume
+ Generates:
    → Summary
    → Skills
    → Experience
    → Education
    → Projects
+ Clean, ATS-friendly structure

### 🔍 ATS Score Analyzer
<p align="center"> <img src="https://img.shields.io/badge/ATS-Score%20Analysis-blue?style=for-the-badge"> <img src="https://img.shields.io/badge/PDF-Parsing-critical?style=for-the-badge"> </p>

+ Upload resume (PDF format)
+ AI evaluates ATS compatibility score
+ Extracts and analyzes key skills
+ Identifies missing keywords
+ Suggests targeted improvements

### 🎨 Interactive Resume Builder UI
<p align="center"> <img src="https://img.shields.io/badge/Frontend-React-61DAFB?style=for-the-badge&logo=react"> <img src="https://img.shields.io/badge/UI-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css"> <img src="https://img.shields.io/badge/Components-DaisyUI-purple?style=for-the-badge"> </p>

+ Auto-filled resume fields using AI
+ Fully editable form interface
+ Live preview experience
+ Responsive & modern UI design
+ Smooth UX with component-based architecture

### ⚙️ AI-Powered Backend System
<p align="center"> <img src="https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot"> <img src="https://img.shields.io/badge/AI-Spring%20AI-orange?style=for-the-badge"> </p>

+ Built with Spring Boot + Spring AI
+ Multi-LLM integration:
    → Ollama
    → DeepSeek
    → ChatGPT APIs
+ Resume storage & regeneration
+ JSON-based resume schema processing
+ Intelligent prompt orchestration layer

### 🌟 System Capabilities Overview
<p align="center"> <img src="https://img.shields.io/badge/Smart-AI%20Driven-critical?style=for-the-badge"> <img src="https://img.shields.io/badge/Fast-RealTime-success?style=for-the-badge"> <img src="https://img.shields.io/badge/Scalable-Architecture-orange?style=for-the-badge"> <img src="https://img.shields.io/badge/UX-Modern%20Design-blueviolet?style=for-the-badge"> </p>

---

## 🏗️ Tech Stack

<p align="center"> <img src="https://readme-typing-svg.herokuapp.com?font=Orbitron&size=22&duration=3000&color=00F7FF&center=true&vCenter=true&width=600&lines=Modern+AI+Powered+Stack;Built+for+Scalability+%26+Performance;Clean+Architecture+%2B+Smart+UX" /> </p>

> ### 🎨 Frontend
<p align="center"> <img src="https://img.shields.io/badge/React-Gradient-0f2027?style=for-the-badge&logo=react&logoColor=61DAFB&labelColor=000000"> <img src="https://img.shields.io/badge/TailwindCSS-UI%20Engine-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white&labelColor=0f172a"> <img src="https://img.shields.io/badge/JavaScript-Core-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black&labelColor=1a1a1a"> </p> <p align="center"> <img src="https://img.shields.io/badge/DaisyUI-Component%20Kit-7C3AED?style=for-the-badge&labelColor=0f172a"> <img src="https://img.shields.io/badge/Axios-HTTP%20Client-9333EA?style=for-the-badge&labelColor=0f172a"> </p>

> ### 🚀 Backend
<p align="center"> <img src="https://img.shields.io/badge/SpringBoot-Backend%20Core-6DB33F?style=for-the-badge&logo=springboot&logoColor=white&labelColor=0b1f13"> <img src="https://img.shields.io/badge/Java-Enterprise-007396?style=for-the-badge&logo=java&logoColor=white&labelColor=0f172a"> </p> <p align="center"> <img src="https://img.shields.io/badge/Ollama-Local%20LLM-111111?style=for-the-badge"> <img src="https://img.shields.io/badge/DeepSeek-AI%20Model-6D28D9?style=for-the-badge"> <img src="https://img.shields.io/badge/OpenAI-Cloud%20AI-412991?style=for-the-badge&logo=openai"> </p>

> ### 🗃️ Database

<p align="center"> <img src="https://img.shields.io/badge/JSON-Document%20Store-000000?style=for-the-badge&logo=json&logoColor=white&labelColor=111827"> </p>

> ### ⚙️ Tools

<p align="center"> <img src="https://img.shields.io/badge/IntelliJ-IDE-000000?style=for-the-badge&logo=intellijidea&logoColor=white&labelColor=1a1a1a"> <img src="https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=1a1a1a"> <img src="https://img.shields.io/badge/Postman-API%20Testing-FF6C37?style=for-the-badge&logo=postman&logoColor=white&labelColor=1a1a1a"> </p>

---

## 🧠 AI Prompt Format (Used for Resume Generation)

"I am a Java Developer with 2 years of experience in building scalable backend applications using Spring Boot and Microservices. I have expertise in MySQL, and MongoDB. I am proficient in AWS and Docker for cloud deployments. I have worked at ABC Tech as a Software Engineer . I hold a Bachelor's degree in Computer Application. I have built an Expense Management System using Spring Boot and React.js. I am AWS Certified Solutions Architect and passionate about open-source contributions."

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
```Dif
+ User enters personal/professional details
+ Natural language input supported
+ No strict formatting required
```
</td> <td width="50%">

### 🧠 Step 02 — AI Structuring
```Dif
+ Backend processes input
+ Converts into structured JSON schema
+ Organizes resume sections intelligently
```
</td> </tr> <tr> <td width="50%">

### 🎨 Step 03 — UI Population
```Dif
+ JSON auto-fills resume builder
+ Sections mapped dynamically
+ Instant preview generation
```
</td> <td width="50%">

### ✏️ Step 04 — Customization
```Dif
+ User edits any section
+ Fine-tunes content easily
+ Real-time updates in UI
```
</td> </tr> <tr> <td width="50%">

### 📄 Step 05 — Resume Output
```Dif
+ Clean, professional layout
+ ATS-friendly formatting
+ Ready for export/use
```
</td> <td width="50%">
    
### 🔍 Step 06 — ATS Analysis
```Dif
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

### 💡 Pro Tip
```Dif
+ Run backend first to avoid API connection errors
+ Ensure Node.js & Java are installed
+ Use separate terminals for frontend & backend
```

---

## 🤝 Contributions

Pull requests are welcome!

Feel free to open issues for new feature suggestions or bug reports.

---

![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)
