# 📄 Resume Maker - Backend API

**A robust RESTful API built with Spring Boot for resume generation, ATS analysis, and intelligent resume optimization powered by AI.**

![Java](https://img.shields.io/badge/Java_17-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot_3-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
![REST API](https://img.shields.io/badge/REST_API-009688?style=for-the-badge&logo=fastapi&logoColor=white)

---

## 📝 Project Overview

Resume Maker Backend is a comprehensive API service designed to power intelligent resume generation and optimization. The platform provides endpoints for creating professional resumes, analyzing ATS compatibility, generating cold emails, and leveraging AI capabilities to enhance career application materials. Built with Spring Boot and modern Java practices, it delivers scalable and maintainable backend infrastructure.

## ✨ Key Features & Architecture

* **Resume Generation API:** RESTful endpoints to create, update, and manage professional resumes with structured data models.
* **AI-Powered Resume Optimization:** Integration with AI services to generate and enhance resume content intelligently.
* **ATS Compatibility Analysis:** Advanced algorithms to score and optimize resumes for Applicant Tracking Systems.
* **Cold Email Generation:** API endpoints to generate professional outreach emails for job applications.
* **Template Management:** Serve multiple professional resume templates to frontend clients.
* **Data Validation & Error Handling:** Comprehensive input validation and graceful error responses.
* **Production-Ready Architecture:** Clean layered architecture with Service, Controller, and Model separation.
* **Scalable Design:** Built for easy extension and integration with external AI and data services.

---

## 🗂️ Project Structure

```
src/
├── main/
│   ├── java/com/resume/backend/
│   │   ├── ResumeAiBackendApplication.java      # Spring Boot entry point
│   │   ├── ResumeRequest.java                   # Request data model
│   │   ├── controller/
│   │   │   └── ResumeController.java            # REST API endpoints
│   │   ├── model/                               # Domain models and entities
│   │   │   ├── Resume.java
│   │   │   ├── Template.java
│   │   │   └── ...
│   │   └── service/
│   │       ├── ResumeService.java               # Business logic interface
│   │       └── ResumeServiceImpl.java            # Service implementation
│   └── resources/
│       ├── application.properties                # Application configuration
│       ├── resume_prompt.txt                     # AI prompt templates
│       ├── static/                               # Static assets
│       └── templates/                            # Email templates
└── test/
    └── java/com/resume/backend/
        └── ResumeAiBackendApplicationTests.java # Unit and integration tests
```

---

## 🛣️ API Endpoints

| Method     | Endpoint                 | Description                                |
|:-----------|:-------------------------|:-------------------------------------------|
| **POST**   | `/api/resumes`           | Create a new resume from request data      |
| **GET**    | `/api/resumes/{id}`      | Retrieve a specific resume                 |
| **PUT**    | `/api/resumes/{id}`      | Update an existing resume                  |
| **DELETE** | `/api/resumes/{id}`      | Delete a resume                            |
| **POST**   | `/api/resumes/ats-score` | Analyze and score resume ATS compatibility |
| **GET**    | `/api/templates`         | List available resume templates            |
| **POST**   | `/api/emails`            | Generate professional cold email           |
| **POST**   | `/api/resumes/optimize`  | Optimize resume content using AI           |
| **GET**    | `/api/health`            | Health check endpoint                      |

---

## 🚀 How to Run Locally

### Prerequisites
* **Java Development Kit (JDK) 17+** installed and configured
* **Maven 3.8+** installed
* **Git** for version control

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd resume-ai-backend
   ```

2. **Configure application properties (if needed):**
   - Open `src/main/resources/application.properties`
   - Update database, API keys, and service configurations
   - Example:
     ```properties
     spring.application.name=resume-ai-backend
     server.port=8080
     # Add your AI service API keys here
     ```

3. **Build the project:**
   ```bash
   mvn clean install
   ```

4. **Run the application:**
   ```bash
   mvn spring-boot:run
   ```
   - The API will be available at `http://localhost:8080`
   - API documentation (if Swagger/SpringFox is configured): `http://localhost:8080/swagger-ui.html`

5. **Run tests:**
   ```bash
   mvn test
   ```

6. **Build JAR for production:**
   ```bash
   mvn clean package
   java -jar target/resume-ai-backend-*.jar
   ```

---

## 🔧 Tech Stack

- **Language:** Java 17
- **Framework:** Spring Boot 3.x
- **Build Tool:** Maven
- **REST Architecture:** Spring MVC / Spring WebFlux
- **Data:** Spring Data (JPA/JDBC)
- **Testing:** JUnit 5, Mockito
- **Logging:** SLF4J, Logback
- **Documentation:** JavaDoc, Swagger/OpenAPI (optional)

---

## 📦 Available Maven Commands

```bash
mvn clean              # Clean build artifacts
mvn compile            # Compile source code
mvn test               # Run unit tests
mvn package            # Package application into JAR
mvn spring-boot:run    # Run application directly
mvn install            # Install to local Maven repository
mvn clean install      # Clean and reinstall
mvn verify             # Run integration tests
```

---

## 🔌 Request/Response Examples

### Create Resume
```bash
curl -X POST http://localhost:8080/api/resumes \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "title": "Senior Software Engineer",
    "summary": "Experienced full-stack developer..."
  }'
```

### Get ATS Score
```bash
curl -X POST http://localhost:8080/api/resumes/ats-score \
  -H "Content-Type: application/json" \
  -d '{
    "resumeContent": "..."
  }'
```

### Generate Cold Email
```bash
curl -X POST http://localhost:8080/api/emails \
  -H "Content-Type: application/json" \
  -d '{
    "recipientName": "HR Manager",
    "companyName": "Tech Corp",
    "position": "Senior Developer"
  }'
```

---

## 📋 Configuration

### Application Properties
Located in `src/main/resources/application.properties`:

```properties
# Server Configuration
spring.application.name=resume-ai-backend
server.port=8080
server.servlet.context-path=/api

# Logging
logging.level.root=INFO
logging.level.com.resume.backend=DEBUG

# AI Service Integration
ai.service.api-key=${AI_API_KEY}
ai.service.endpoint=https://api.ai-service.com

# Database (if applicable)
spring.datasource.url=jdbc:mysql://localhost:3306/resume_db
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update
```

---

## 🧪 Testing

The project includes unit and integration tests. Run them with:

```bash
# Run all tests
mvn test

# Run specific test class
mvn test -Dtest=ResumeControllerTest

# Run with coverage report
mvn clean test jacoco:report
```

---

## 🌐 Integration Points

### Frontend Communication
- The backend API is designed to communicate with the Resume Maker Frontend
- Base URL for frontend configuration: `http://localhost:8080/api`
- All endpoints return JSON responses

### External Services
- **AI Service Integration:** For intelligent resume generation and optimization
- **Email Service (Optional):** For sending generated cold emails
- **Database:** For persistent storage of resume data

---

## 📚 Documentation

For detailed API documentation and usage examples, refer to:
- `HELP.md` - Spring Boot generated help file
- JavaDoc comments in source code
- Swagger/OpenAPI (if configured)

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/new-feature`
2. Commit your changes: `git commit -am 'Add new feature'`
3. Push to the branch: `git push origin feature/new-feature`
4. Submit a pull request

---

## 📄 License

This project is part of a professional portfolio and is provided as-is for demonstration purposes.

