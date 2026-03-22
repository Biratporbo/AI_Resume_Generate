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

1. User enters description
→ Backend converts it into structured JSON

2. JSON populates the resume form

3. User edits details if needed

4. Resume is rendered in clean UI

5. Optionally: Upload Resume → ATS Score

6. AI suggests improvements + missing skills

---

## 🏁 How to Run the Project
### Backend Setup
cd backend
mvn spring-boot:run

### Frontend Setup
cd frontend
npm install
npm start

---

## 🤝 Contributions

Pull requests are welcome!

Feel free to open issues for new feature suggestions or bug reports.

---

![License](https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge)
