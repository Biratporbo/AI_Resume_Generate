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

> ### 🎨 Frontend
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

![DaisyUI](https://img.shields.io/badge/DaisyUI-purple?style=flat-square)
![Axios](https://img.shields.io/badge/Axios-blueviolet?style=flat-square)


> ### 🚀 Backend
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat-square&logo=springboot&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white)

![Ollama](https://img.shields.io/badge/Ollama-black?style=flat-square)
![DeepSeek](https://img.shields.io/badge/DeepSeek-purple?style=flat-square)
![OpenAI](https://img.shields.io/badge/OpenAI-darkgreen?style=flat-square&logo=openai)

> ### 🗃️ Database

![JSON Database](https://img.shields.io/badge/JSON%20Database-000000?style=for-the-badge&logo=json&logoColor=white)

> ### ⚙️ Tools

![IntelliJ IDEA](https://img.shields.io/badge/IntelliJ%20IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

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
