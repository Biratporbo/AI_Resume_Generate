import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Search,
  Play,
  ExternalLink,
  Brain,
  Code2,
  Cloud,
  BarChart3,
  Palette,
  Briefcase,
  Shield,
  Globe,
  Smartphone,
  UserCheck,
  GraduationCap,
  Gamepad2,
  Cpu,
  Blocks,
  Youtube,
  X,
  ArrowRight
} from "lucide-react";

const playlistCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    items: [
      { title: "AI Agents", url: "https://www.youtube.com/watch?v=dhhVxJ_qUPc&list=PLwdhOAfEpxTaHqf_o0waIy-EPz0PWEvFh" },
      { title: "Artificial Intelligence", url: "https://www.youtube.com/playlist?list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF" },
      { title: "Agentic AI", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVMBr14UQ30AFlnlQ7eL5wjl" },
      { title: "AI Based Automation", url: "https://www.youtube.com/watch?v=djrMoZk_5uM&list=PLlHtucAD9KT05szfZJ2NnJ4ZbmcY_MxJF" },
      { title: "AI for Beginners", url: "https://www.youtube.com/watch?v=RRKwmeyIc24&list=PLOspHqNVtKADfxkuDuHduUkDExBpEt3DF" },
      { title: "MLOPS", url: "https://www.youtube.com/watch?v=5pniK1RV_6o&list=PLupK5DK91flV45dkPXyGViMLtHadRr6sp" },
      { title: "AI Basic to Advanced", url: "https://www.youtube.com/watch?v=4eFYlFXijO0&list=PL3raOeh09Igm62Er2i5NVhMc-xkbPrWO5" },
      { title: "Full End to End Machine Learning in Python", url: "https://www.youtube.com/watch?v=bY__YW-xknU&list=PLfFghEzKVmjsNtIRwErklMAN8nJmebB0I" },
      { title: "Mathematics for Machine Learning", url: "https://www.youtube.com/watch?v=JO9jNe6BemE&list=PLLy_2iUCG87D1CXFxE-SxCFZUiJzQ3IvE" },
      { title: "Machine Learning Operations (MLOps)", url: "https://www.youtube.com/playlist?list=PLZ2ps__7DhBaAR2w3oX5yMIQA8pUo5zt2" },
      { title: "A.I. Engineering", url: "https://www.youtube.com/watch?v=OYvlznJ4IZQ&list=PLMCXHnjXnTnt-aA0yHoa6QcVdQ0Mu3g9j" },
      { title: "AI Engineer Basics", url: "https://www.youtube.com/watch?v=OYvlznJ4IZQ&list=PLMCXHnjXnTnt-aA0yHoa6QcVdQ0Mu3g9j" },
      { title: "Large Language Models (LLMs)", url: "https://www.youtube.com/playlist?list=PLz-ep5RbHosU2hnz5ejezwaYpdMutMVB0" },
      { title: "Stable Diffusion and AI Art", url: "https://www.youtube.com/playlist?list=PLH1tkjphTlWXjL8NgBGgDhgOA3uglEpTe" },
      { title: "ChatGPT and Prompt Engineering", url: "https://www.youtube.com/playlist?list=PL6o08pkcQol7-TlFJl05pEEp4hw418DmM" },
      { title: "Computer Vision with OpenCV", url: "https://www.youtube.com/playlist?list=PLKikgSZ8GZYd7EXmKZSLwITvoCm0KFI5B" },
      { title: "Natural Language Processing Advanced", url: "https://www.youtube.com/playlist?list=PLLssT5z_DsK8BdawOVCCaTCO99Ya58ryR" },
      { title: "Reinforcement Learning Deep Dive", url: "https://www.youtube.com/playlist?list=PLMrJAkhIeNNQe1JXNvaFvURxGY4gE9k74" },
      { title: "AI Model Deployment", url: "https://www.youtube.com/playlist?list=PLhH3UpV2flrwDQvp1lONPgRB7mDc9gGbr" },
      { title: "AI Ethics and Responsible AI", url: "https://www.youtube.com/playlist?list=PL_sRaHPTaX-wU5LDL7B7mn0ZbkS7-DaQW" },
      { title: "GenAI with JS", url: "https://www.youtube.com/playlist?list=PLXQpH_kZIxTUmzQUh3WWTza7CYYrytR_y" }
    ]
  },
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    items: [
      { title: "Alternatives", url: "https://www.youtube.com/watch?v=GCTEVZjxznc&list=PLAC2AM9O1C5KioUMeH9qIjbAV_RMmX8rd" },
      { title: "Kafka Connect", url: "https://www.youtube.com/watch?v=mdsNGujpsF8&list=PLa7VYi0yPIH0uIC2F0M1_FsVUsx8j3ekm" },
      { title: "Backend in Python", url: "https://www.youtube.com/watch?v=tN6oJu2DqCM&list=PLWKjhJtqVAbn21gs5UnLhCQ82f923WCgM" },
      { title: "AR/VR Courses", url: "https://www.youtube.com/playlist?list=PLj9EMv4WPz2zNd1UAYZQd6uqD2bJ6D3uf" },
      { title: "Robotics", url: "https://www.youtube.com/watch?v=NRj6gzah7JA&list=PL4g1oAdmuCfqmYvURLzVFkMMUIybdspTAuzbl0QKj5uhC" },
      { title: "Java Spring Boot", url: "https://www.youtube.com/watch?v=m3FVXfr1Nr4&list=PLxhSr_SLdXGMuioQzjhu_Xkp-qn4ibtx6" },
      { title: "Quantum Computing", url: "https://www.youtube.com/watch?v=zm64o27eHYw&list=PLxP0p--aBHmIe--9rczWe4AZmw03e2bz0" },
      { title: "Go", url: "https://www.youtube.com/watch?v=JoJ8Sw5Yb4c&list=PLRAV69dS1uWQGDQoBYMZWKjzuhCaOnBpa" },
      { title: "Web3", url: "https://www.youtube.com/watch?v=Wb6MmUa0bu0&list=PLVKLWop9wWA9n9NQZ2GURoB_a1gOezN_e" },
      { title: "Python", url: "https://www.youtube.com/watch?v=QXeEoD0pB3E&list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3" },
      { title: "Vibe Coding", url: "https://www.youtube.com/watch?v=KFNfQwmLnS8&list=PLIDybdspTAuzbl0QKj5uhC" },
      { title: "Blockchain & Web3", url: "https://www.youtube.com/watch?v=2uYuWiICCM0&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-" },
      { title: "ServiceNow Developer", url: "https://www.youtube.com/watch?v=Ca3t0PKXVJE&list=PLe4QSsKLT0SbaCL40-KRIkZIcedofQgv4" },
      { title: "System Design (HLD + LLD)", url: "https://www.youtube.com/watch?v=rliSgjoOFTs&list=PL6W8uoQQ2c61X_9e6Net0WdYZidm7zooW" },
      { title: "Data Structures and Algorithms in Java", url: "https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d" },
      { title: "PCB Design", url: "https://www.youtube.com/watch?v=7h33KDtKXEg&list=PLWiMVu6LCYtCtiyv7qNSjcuem9y__UwFk" },
      { title: "Blockchain, Solidity", url: "https://www.youtube.com/watch?v=josqjcH79PE&list=PLvyl1YgaAepJ6cWgHWNIXBQZ_PljIcfyo" },
      { title: "C#/ASP.NET", url: "https://www.youtube.com/playlist?list=PLVlQHNRLflP-jc5Fbhfdhzv52AWYq836j" },
      { title: "Blockchain", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn" },
      { title: ".Net Web API", url: "https://www.youtube.com/playlist?list=PL3ewn_1_1B7gO-GAdXjVRh-6thRog6ddg" },
      { title: "DSA in JS", url: "https://www.youtube.com/playlist?list=PLSH9gf0XETos9m1n1B1TIvHJWjkdH0IdzmXT" },
      { title: "Java Backend Development", url: "https://www.youtube.com/watch?v=r4EqfjMsP48&list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O" },
      { title: "Advanced DSA", url: "https://www.youtube.com/watch?v=WIabUqbOFP0&list=PLv9sD0fPjvSHqIOLTIvHJWjkdH0IdzmXT" },
      { title: "System Design and Kafka", url: "https://www.youtube.com/watch?v=SqcXvc3ZmRU&list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX" },
      { title: "Hibernate", url: "https://www.youtube.com/watch?v=PMR0ld5h938&list=PLsyeobzWxl7qBZtsEvp_n2A7sJs2MpF3r" },
      { title: "Rust Programming Language", url: "https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y" },
      { title: "TypeScript Advanced Patterns", url: "https://www.youtube.com/playlist?list=PLYvdvJlnTOjF6aJsWWAt7kZRJvzw-en8B" },
      { title: "GraphQL Complete Guide", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f" },
      { title: "Microservices Architecture", url: "https://www.youtube.com/playlist?list=PLab_if3UBk9-BjDP7Yh4uiy8z0pEd14Tp" },
      { title: "Design Patterns in Software Engineering", url: "https://www.youtube.com/playlist?list=PLaatXkJEXKyJo09VGzc1RIrQ9WqDk3wNj" },
      { title: "Clean Code and Best Practices", url: "https://www.youtube.com/playlist?list=PLZlA0Gpn_vH-xGQ-nQ87rXI7QkM6W3E79" },
      { title: "API Development with FastAPI", url: "https://www.youtube.com/playlist?list=PLhH3UpV2flrwDQvp1lONPgRB7mDc9gGbr" },
      { title: "Functional Programming Concepts", url: "https://www.youtube.com/playlist?list=PLZ3Lq8n8w8y0b2j5jX0j5jX0j5jX0j5j" },
      { title: "C++ for Game Development", url: "https://www.youtube.com/playlist?list=PL6xSOsbVA1eZ4JHn9T43TXBodSW_9ny-k" },
      { title: "DSA", url: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { title: "Algorithms", url: "https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O" },
      { title: "DSA with Python", url: "https://www.youtube.com/playlist?list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12" },
      { title: "Spring Boot", url: "https://www.youtube.com/playlist?list=PLsyeobzWxl7qbKoSgR5ub6jolI8-ocxCF" }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      { title: "Azure Data Engineer Associate", url: "https://www.youtube.com/watch?v=sYfy2bQWIKg&list=PL9ooVrP1hQOGpbAJW6fvGa68Yb1C9Ytkt" },
      { title: "MLOps and DevOps", url: "https://www.youtube.com/watch?v=-QxwB7PoSdA&list=PLiQS6N-W1p3m9squzZ2eAtUzEUulNjTJREhQe" },
      { title: "CI/CD", url: "https://www.youtube.com/playlist?list=PLdpzxOOAlwvLUH6ww022l7OZGakJYP9WY" },
      { title: "DevOps End to End Project", url: "https://www.youtube.com/watch?v=Fu2MjgUwo-A&list=PLAdTNZIZj_-YSCCVcNB0ucfZPHKUAxNH" },
      { title: "DevOps", url: "https://www.youtube.com/watch?v=Ou9j73aWgyE&list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa" },
      { title: "Terraform (IAC)", url: "https://www.youtube.com/playlist?list=PLOa-edppsqFlLbAQJiJb_f2vmyIXY817_" },
      { title: "Infrastructure", url: "https://www.youtube.com/playlist?list=PLFGUksPYY9Qp5rLjedeUIwcu13eAeETkh" },
      { title: "AWS and Docker", url: "https://www.youtube.com/watch?v=jPdIRX6q4jA&list=PLy7NrYWoggjwPggqtFsI_zMAwvG0SqYCb" },
      { title: "Kubernetes Advanced Concepts", url: "https://www.youtube.com/playlist?list=PLy7NrYWoggjxTjaaix3zT8sXa9r3f7tpt" },
      { title: "Google Cloud Platform (GCP)", url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOHkM2M6QdK6cX7t1o9r1o9r" },
      { title: "Site Reliability Engineering (SRE)", url: "https://www.youtube.com/playlist?list=PL8oW8Jq2iXdyi1W3s7T7Q2Q3Q4Q5Q6Q7Q" },
      { title: "Infrastructure as Code Patterns", url: "https://www.youtube.com/playlist?list=PLiMW0l8h5iR7r7r7r7r7r7r7r7r7r7r7r" },
      { title: "Monitoring with Prometheus & Grafana", url: "https://www.youtube.com/playlist?list=PLy7NrYWoggjw_LIiDKH0FZwT1ROgv1Y5N" },
      { title: "GitOps and Flux", url: "https://www.youtube.com/playlist?list=PLj6h78yzfVNuj2uR7sPIjD0eC9Ztlp5G7" },
      { title: "Serverless Architecture", url: "https://www.youtube.com/playlist?list=PL3N9eeOlCrP6n4f5c4O4O4O4O4O4O4O4O" },
      { title: "Cloud Cost Optimization", url: "https://www.youtube.com/playlist?list=PLv2Y2q2uZ4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z4Z" }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: BarChart3,
    items: [
      { title: "Tableau", url: "https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF" },
      { title: "SQL", url: "https://www.youtube.com/watch?v=D_0Veya2XAY&list=PLNcg_FV9n7qZY_2eAtUzEUulNjTJREhQe" },
      { title: "DBMS", url: "https://www.youtube.com/watch?v=kBdlM6hNDAE&list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
      { title: "Data Analysis", url: "https://www.youtube.com/watch?v=rGx1QNdYzvs&list=PLUaB-1hjhk8FE_XZ87vPPSfHqb6OcM0cF" },
      { title: "Pandas and NumPy Advanced", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wWQxZkmTXGwe" },
      { title: "Data Visualization with D3.js", url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOHYBeYbd4hZ8sMzMR9k3s7M" },
      { title: "Apache Spark for Big Data", url: "https://www.youtube.com/playlist?list=PLf0swTFhTI7q5yJ2tJ8qRTO7u4W5l1hKr" },
      { title: "Time Series Analysis", url: "https://www.youtube.com/playlist?list=PLv2Xj7aKp6sCH5g6z3nK6tG1b3F1q6gG9" },
      { title: "Statistical Learning", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rO2oJ7V0s5K5cB4b-r5bF3b" },
      { title: "Data Engineering Fundamentals", url: "https://www.youtube.com/playlist?list=PLV8x1CyqD0CgkRpEWHsE9dY3G7oO7r2dO" },
      { title: "A/B Testing and Experimentation", url: "https://www.youtube.com/playlist?list=PLRKtJgoFzK7eO7bK4qM3K7Z2ZxY0Y0Z0Z" },
      { title: "Power BI Advanced Techniques", url: "https://www.youtube.com/playlist?list=PL1F3N9s75Gpk0aFpvK5h2Z4o3f5o5n5n5" }
    ]
  },
  {
    id: "design-creative",
    title: "Design & Creative",
    icon: Palette,
    items: [
      { title: "Content Creation 0 to Hero", url: "https://www.youtube.com/watch?v=Oq7jsbjUJ8Q&list=PLW-zSkCnZ-gDgc_YNSC7uCaYNLoMwLPp8" },
      { title: "Graphic Design", url: "https://www.youtube.com/playlist?list=PLYfCBK8IplO4E2sXtdKMVpKJZRBEoMvpn" },
      { title: "Video Editing", url: "https://www.youtube.com/watch?v=gbZ6hCNlq7g&list=PLlHtucAD9KT2_Gh27QvKE3FIEf3A4Il9_" },
      { title: "Animation", url: "https://www.youtube.com/watch?v=DulhBQCl3yo&list=PL6iXuvO0yGxGHc8sgJJd9hikyW3jD7vso" },
      { title: "Graphic & Instructional Designer", url: "https://www.youtube.com/watch?v=QXi0a0sOujM&list=PLDW3IzDXPIgoo6jL17QJoDXCf6mcSxC7X" },
      { title: "Motion Graphics from Basics to Advance", url: "https://www.youtube.com/playlist?list=PLZE9N0yU2VMVB-ZAOsVxwT_WPW_NJBOO1" },
      { title: "Revit & AutoCAD", url: "https://www.youtube.com/playlist?list=PLMtzJAOD3B7YpZpVB17IFAFQG6Nqij-mY" },
      { title: "Sound Mixing and Engineering", url: "https://www.youtube.com/playlist?list=PLCdJUdtVPP0EaF24GGQ0OSBFysAvF9tCv" },
      { title: "Photography and Videography", url: "https://www.youtube.com/playlist?list=PL7W5udALs-AlIByQQ8KnleHQdKq_9m0vD" },
      { title: "Figma Advanced Prototyping", url: "https://www.youtube.com/playlist?list=PLXDU_eVOJcx6qF2pJ2e1k2T3k3T3k3T3k" },
      { title: "Adobe After Effects Motion Design", url: "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6PRg5ZxgLHgvQiqhOfExg0P" },
      { title: "UI/UX Design Systems", url: "https://www.youtube.com/watch?v=HNJmWKndUA4&list=PLkmvmF0zhgT_8FirlLcTQI01ayjYB-46_" },
      { title: "3D Design with Cinema 4D", url: "https://www.youtube.com/playlist?list=PLDZUqtNh1kzDScUB17JqQUKgwwMOtrTyV" },
      { title: "Brand Identity Design", url: "https://www.youtube.com/playlist?list=PLvOO82HO3mimeLT2IuQRiFt8k59rPGg8-" },
      { title: "Typography Fundamentals", url: "https://www.youtube.com/watch?v=QrNi9FmdlxY&list=PLroLjS4HDi0A9Vhx0Ww28ljL5932wmEDn" },
      { title: "Color Theory for Designers", url: "https://www.youtube.com/watch?v=AgQUTXN6KlI" }
    ]
  },
  {
    id: "business-finance",
    title: "Business & Finance",
    icon: Briefcase,
    items: [
      { title: "Scrum Master", url: "https://www.youtube.com/watch?v=DbCvs-60ytM&list=PL9ooVrP1hQOF1nCUBIFxOSD80UYSsx4vq" },
      { title: "Business Computing", url: "https://www.youtube.com/watch?v=pMAjc73FVl4&list=PL0UO8FP6kuzWs8C8NJaBShBW6bW2IbZT7" },
      { title: "Stock Chart Analysis", url: "https://www.youtube.com/playlist?list=PLX2SHiDXfualH_xMbGM-3zWC47s9gUjGR_" },
      { title: "Content Marketing", url: "https://www.youtube.com/playlist?list=PLvJ_dXFSpd2u5dP7r3VJY_RXCQ84StTXv" },
      { title: "Salesforce", url: "https://www.youtube.com/watch?v=mc5cQ1vHcr0&list=PL-gW8Fj5TGrqr9oCcfX1MWcoh2oluUHI9" },
      { title: "B2B Marketing", url: "https://www.youtube.com/watch?v=BKer-uSxjlw&list=PLLy_2iUCG87C3qniP4kidTHN2HW03sfOc" },
      { title: "Micro Finance", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63UUkfL0onkxF6MYgVa04Fn" },
      { title: "CFA Level 1", url: "https://www.youtube.com/watch?v=lFrxwyBJ6qs&list=PLxAunyTa64uewhsyAF93FlJ9mMfd-DxO7" },
      { title: "Business Documentary", url: "https://www.youtube.com/watch?v=jbe2h1n1bLc&list=PLbNSr1_1b1C6MnoH" },
      { title: "Web3 GTM", url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA" },
      { title: "Social Media Management", url: "https://www.youtube.com/playlist?list=PLUllurxaY2k4mZP7LPwwJhfK6kXqQfGqn" },
      { title: "Forex", url: "https://www.youtube.com/playlist?list=PLK3V_1jIohqIXBEG7urkZHYmAeetK7Hjv" },
      { title: "Finance", url: "https://www.youtube.com/playlist?list=PLSlzC-HFo7w6YbU8G7jyUt6F_qjuCzfUK" },
      { title: "Product Management", url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUIE8vrshd0pKiYl7PKpINPe" },
      { title: "Startup Fundraising Guide", url: "https://www.youtube.com/playlist?list=PLgMU_ie96T-LLMMiyIANaEZOI2-6eu-nd" },
      { title: "Financial Modeling in Excel", url: "https://www.youtube.com/playlist?list=PLF2M2K6iZ4Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z6Z" },
      { title: "Digital Marketing Mastery", url: "https://www.youtube.com/playlist?list=PLAyVInuo2DPRHBGlzsDXpmbjQzIFHp9Q8" },
      { title: "SEO and SEM Strategies", url: "https://www.youtube.com/playlist?list=PLp0Jbd6e3dO8O8O8O8O8O8O8O8O8O8O8O" },
      { title: "E-commerce Business Growth", url: "https://www.youtube.com/playlist?list=PLk8tQ4kWovWvWovWovWovWovWovWovWov" },
      { title: "Agile and Scrum Methodologies", url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJKZEL96YBV78Dd5gsHSVZ7" },
      { title: "Investment Banking Fundamentals", url: "https://www.youtube.com/playlist?list=PLU2wpJsXyAjnmTQPc4KM7kP1dq2lnkQ5O" },
      { title: "SaaS Metrics and Analytics", url: "https://www.youtube.com/playlist?list=PLz8Iz-KiXP3vI0G6uSPK0o0o0o0o0o0o0" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    items: [
      { title: "Azure Cloud Security Engineering", url: "https://www.youtube.com/watch?v=RSiYvksk8cY&list=PLhLKc18P9YODINxsjyo_osTnK0jytTC4H" },
      { title: "AWS Cloud Security Engineering", url: "https://www.youtube.com/watch?v=4EMWBYVggQI&list=PLrU93JvkXVl5TamdCdCwzqFs6vt5vySFi" },
      { title: "Cybersecurity", url: "https://www.youtube.com/watch?v=lpa8uy4DyMo&list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_" },
      { title: "Hardware Security and System Verilog", url: "https://www.youtube.com/playlist?list=PLbRMhDVUMngfulSvKL0cT-tn8ULtERsWk" },
      { title: "Cyber Security", url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft" },
      { title: "Web3 Security", url: "https://www.youtube.com/playlist?list=PLTJasqY2MI_8XWRY3Ovw39DEkunIyPJUt" },
      { title: "Ethical Hacking Certification", url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOFNILGSLOiflM9kKnEM16Ox" },
      { title: "Penetration Testing Tools", url: "https://www.youtube.com/playlist?list=PLTgRMOcmRb3NayWOBA1-GxM2mBp3ioeKm" },
      { title: "Network Security Fundamentals", url: "https://www.youtube.com/playlist?list=PLWFO5PWKxrzX_1Wh3mFWtVhf7dQn8Uexr" },
      { title: "Malware Analysis", url: "https://www.youtube.com/playlist?list=PLfouvuAjspToULN9r9cmQqgDwZzsqH05w" },
      { title: "Application Security (AppSec)", url: "https://www.youtube.com/playlist?list=PLIbCFt2m6LvK6uYt0JF_WBngkkzgns96R" },
      { title: "OWASP Top 10 Vulnerabilities", url: "https://www.youtube.com/playlist?list=PLIbCFt2m6LvK6uYt0JF_WBngkkzgns96R" },
      { title: "Bug Bounty Hunting", url: "https://www.youtube.com/playlist?list=PLBf0hzazHTGNJXBjepzN7l9OHcuH9ZvOq" },
      { title: "Digital Forensics", url: "https://www.youtube.com/playlist?list=PLlv3b9B16ZacikAtT8NDXpNbGqU8vU4CE" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    items: [
      { title: "Framer", url: "https://www.youtube.com/watch?v=EQwpeWiL1aA&list=PL9p5auxyrweNdaSZKq9k7cOcYDzZyR7fc" },
      { title: "Frontend UI/UX for Beginners", url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUULzCiDV5VyF7zR6zoDIT_eH" },
      { title: "Web Dev", url: "https://www.youtube.com/playlist?list=PLEiEAq2VkUULCC3eEATL4zzuapTjmo1Z_" },
      { title: "Webflow", url: "https://www.youtube.com/playlist?list=PLPmnoMVpkxfj-DzMkYNf7LM3ebjwoY6b2" },
      { title: "React Native", url: "https://www.youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c" },
      { title: "React", url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3" },
      { title: "Node JS", url: "https://www.youtube.com/watch?v=5eaBOxXABkU&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS" },
      { title: "Frontend Development", url: "https://www.youtube.com/watch?v=9He4UBLyk8Y&list=PLWKjhJtqVAbmMuZ3saqRIBimAKIMYkt0E" },
      { title: "Next.js 14 App Router", url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjOKd6gdf4QtV1uYNiQnruI" },
      { title: "Vue.js 3 Composition API", url: "https://www.youtube.com/playlist?list=PLnKfPkeIekbb7X0TqmNNdX-CKOJaYNTpu" },
      { title: "Svelte and SvelteKit", url: "https://www.youtube.com/playlist?list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua" },
      { title: "Progressive Web Apps (PWA)", url: "https://www.youtube.com/playlist?list=PLlrxD0HtieHjqO1pNqScMngrV7oFro-TY" },
      { title: "Web Accessibility (a11y)", url: "https://www.youtube.com/playlist?list=PLkp9DtRqqaKAmiPF3yxdog4-0OQMstSEh" },
      { title: "Web Performance Optimization", url: "https://www.youtube.com/playlist?list=PLAwxTw4SYaPmKmNX-INgcxQWf30KuWa_A" },
      { title: "Tailwind CSS Mastery", url: "https://www.youtube.com/playlist?list=PLqGj3iMvMa4KQcb0p_5lA0rn4t0iE6kDb" },
      { title: "Astro Static Site Generator", url: "https://www.youtube.com/playlist?list=PL0Zuz27SZ-6Pk-QJId1q0BOjST1LH6o3s" }
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    icon: Smartphone,
    items: [
      { title: "Flutter Complete Course", url: "https://www.youtube.com/playlist?list=PLFyjjoCMAPtxq8V9fuVmgsYKLNIKqSEV4" },
      { title: "iOS Development with Swift", url: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B" },
      { title: "Android Development with Kotlin", url: "https://www.youtube.com/playlist?list=PLQ_Ai1O7sMV0LRCZJaHpl_9WLQunMqrzG" },
      { title: "React Native Advanced", url: "https://www.youtube.com/playlist?list=PLY3ncAV1dSVBORiufyN8lwIW5JUL7hSL1" },
      { title: "Mobile UI/UX Design Patterns", url: "https://www.youtube.com/playlist?list=PLrtjkLnNjGHu09kr99red3iVlzV2wrR9Q" },
      { title: "SwiftUI Masterclass", url: "https://www.youtube.com/playlist?list=PLwnphfuyBZiBK5fy6Ha_2ezlu1sAje-D2" },
      { title: "Jetpack Compose for Android", url: "https://www.youtube.com/playlist?list=PLQ_Ai1O7sMV33aJHfqR-vquGZE1OCOS51" },
      { title: "Mobile App Testing & QA", url: "https://www.youtube.com/playlist?list=PLZMWkkQEwOPljbe1hlEbSveA3Clw6xPlb" },
      { title: "Cross-Platform Development", url: "https://www.youtube.com/playlist?list=PLFyjjoCMAPtxq8V9fuVmgsYKLNIKqSEV4" },
      { title: "Mobile Performance Optimization", url: "https://www.youtube.com/playlist?list=PL6gx4Cwl9DGDgp7nGSUnnXihbTLFZJ79B" }
    ]
  },
  {
    id: "personal-dev",
    title: "Personal Development",
    icon: UserCheck,
    items: [
      { title: "Spanish Language", url: "https://www.youtube.com/watch?v=kJQjXAVEWt0&list=PLv63dFTP4Sjq6knRsZQIybdTnRE38cZZoy" },
      { title: "Communication Skills", url: "https://www.youtube.com/watch?v=tPk1h2VZ2DI&list=PLID58IQe16nFcsed5sqo0VfQUZ7EF8rqY" },
      { title: "New to Software Industry and Corporate Culture", url: "https://www.youtube.com/watch?v=KzDuKTetCYQ&list=PL4uxSEwqGBqSWFiwOKDZfGzgWRQIPr0Om" },
      { title: "Social Etiquettes and Mannerisms", url: "https://www.youtube.com/watch?v=B3q_paSabAI&list=PLzMsBOv1s_dRDBCa9yh8m7sGXFCJM5oE-" },
      { title: "Time Management", url: "https://www.youtube.com/playlist?list=PLbzY0hV_ebw2kao7Wi_Vb96IhoJOSH1mE" },
      { title: "Creative Writing", url: "https://www.youtube.com/playlist?list=PLSH_xM-KC3Zv-79sVZTTj-YA6IAqh8qeQ" },
      { title: "Parenting", url: "https://www.youtube.com/playlist?list=PLNHDwUHKA9sc94DA719iESmwJUNICrXw7" },
      { title: "Poetry", url: "https://www.youtube.com/playlist?list=PLkXex1_1b1n1B1TIvHJWjkdH0IdzmXT" },
      { title: "Public Speaking Mastery", url: "https://www.youtube.com/playlist?list=PLSpgcjZTuDM6j7JKIS_QEETsMEPuDBD3S" },
      { title: "Leadership and Management Skills", url: "https://www.youtube.com/playlist?list=PLnJ6CeayQGsXOvOIqtfdV1R2mZ7NwrkUN" },
      { title: "Productivity Hacks and Systems", url: "https://www.youtube.com/playlist?list=PLXbD8_1DmDvdJmCYfXYqXR4Y0bz0A-qGF" },
      { title: "Mindfulness and Meditation", url: "https://www.youtube.com/playlist?list=PL7by6RYPG3HDE8kJe2DXiS3M_yTzCGJz6" },
      { title: "Career Development Strategies", url: "https://www.youtube.com/watch?v=g7YtnABojdk" },
      { title: "Negotiation Skills", url: "https://www.youtube.com/playlist?list=PLS5XOICJQYn0pD-CKqS9HMtRQptRTSJ6N" },
      { title: "Memory Improvement Techniques", url: "https://www.youtube.com/playlist?list=PLS03YcC7nLGXnlZ7rbf8YIknStMdKv1IF" },
      { title: "Critical Thinking and Logic", url: "https://www.youtube.com/playlist?list=PLrPZ7w8j9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9" }
    ]
  },
  {
    id: "academic",
    title: "Academic",
    icon: GraduationCap,
    items: [
      { title: "Epistemology", url: "https://www.youtube.com/watch?v=Dm8dxBscFIE&list=PLz0n_SjOttTc2k5SeO8VJYS_Yl9THy6cM" },
      { title: "Math from Scratch", url: "https://www.youtube.com/watch?v=JbhBdOfMEPs&list=PLybg94GvOJ9FoGQeUMFZ4SWZsr30jlUYK" },
      { title: "International Relations", url: "https://www.youtube.com/playlist?list=PLFiKKZWevLSw1ep4KN0viK64WG1C6DkIl" },
      { title: "Basics of Electrical Engineering", url: "https://www.youtube.com/playlist?list=PLmAmHQ-_5ySzJrY5XlO0SPdQneyhr9v0B" },
      { title: "Hindi for RPSC AE Mains 2026", url: "https://www.youtube.com/watch?v=ErIUhLaPOyo&list=PLuGzhqCK7seDXd7WTuo4QVnKI1FAMwKpJ" },
      { title: "Psychology", url: "https://www.youtube.com/watch?v=NNnIGh9g6fA&list=PL848F2368C90DDC3D" },
      { title: "Game Theory", url: "https://www.youtube.com/watch?v=NSVmOC_5zrE&list=PLKI1h_nAkaQoDzI4xDIXzx6U2ergFmedo" },
      { title: "Linear Algebra", url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab" },
      { title: "Philosophy", url: "https://www.youtube.com/watch?v=BNYJQaZUDrI&list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR" },
      { title: "Best GK GS for CGL", url: "https://www.youtube.com/watch?v=7BbcwVjVTno&list=PLQYgCxDYkIszqKY_VUh7GhNCGTsVB6b9J" },
      { title: "MHCET Law", url: "https://www.youtube.com/watch?v=AIGv3Z0Yjck&list=PLS7IuLRcfmQuEit8ox0KmgSJ1z8XQQtjg" },
      { title: "Mathematical Economics for Masters", url: "https://www.youtube.com/watch?v=BXWNkn1n1ZU&list=PLjgFFMYvzVjeZokRvzINSZoCoEhJKhJpu" },
      { title: "CSAT", url: "https://www.youtube.com/playlist?list=PLFiKKZWevLSwghGVD15EOv7_q6AZ4oaf5" },
      { title: "Family Law", url: "https://www.youtube.com/playlist?list=PLIEVEMAFhG492arJC6QWmd0xqVlmufZIG" },
      { title: "Intellectual Property Right", url: "https://www.youtube.com/playlist?list=PLIEVEMAFhG4_JmLtWGr6G0PRGB13xapyC" },
      { title: "Govt. Job Prep", url: "https://www.youtube.com/playlist?list=PLN7-HyA4mGr_nBKEwzDgH0Ub390cpbq0q" },
      { title: "Reasoning", url: "https://www.youtube.com/playlist?list=PLAeePiDQTajdaTcC4WC70gwvMHaPBpwwz" },
      { title: "Heat Transfer in Chemical Engineering", url: "https://www.youtube.com/playlist?list=PL1gyM10tgL1hK9666oGndGlWDQdpQbq9" },
      { title: "UPSC CSE", url: "https://www.youtube.com/c/UnacademyUPSC/playlists" },
      { title: "Calculus Complete Course", url: "https://www.youtube.com/watch?v=8WF7BTr9luw" },
      { title: "Organic Chemistry Fundamentals", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtONguuhLdVmq0HTKS0jksS4" },
      { title: "Quantum Mechanics Introduction", url: "https://www.youtube.com/watch?v=D7BHkS5tOAU" },
      { title: "Microeconomics and Macroeconomics", url: "https://www.youtube.com/playlist?list=PL-uRhZ_p-BM5uZ2vG5zq2z5z5z5z5z5z5" },
      { title: "World History Comprehensive", url: "https://www.youtube.com/playlist?list=PLBDA2E52FB1EF80C9" },
      { title: "Astrophysics Explained", url: "https://www.youtube.com/playlist?list=PLybg94GvOJ9E9BcCODbTNw2xU4b1cWSi6" },
      { title: "Political Science Theories", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOfse2ncvffeelTrqvhr6Rc" },
      { title: "Molecular Biology", url: "https://www.youtube.com/playlist?list=PLYcLrRDaR8_cpMqa1bbUwD2T39RJA6_o3" },
      { title: "Environmental Science", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOikZljhKAe28AkupJXnS2u" },
      { title: "Classical Literature Analysis", url: "https://www.youtube.com/playlist?list=PL9q3z3z3z3z3z3z3z3z3z3z3z3z3z3z3z" }
    ]
  },
  {
    id: "game-dev",
    title: "Game Development",
    icon: Gamepad2,
    items: [
      { title: "Unity Game Development Basics", url: "https://www.youtube.com/playlist?list=PL210A1B3A2EB882EA" },
      { title: "Unreal Engine 5 Complete Course", url: "https://www.youtube.com/playlist?list=PLGEDpELN0zHDiStehu4bleZ7KVhOaGAUK" },
      { title: "Godot Engine Tutorial Series", url: "https://www.youtube.com/playlist?list=PLpj8TZGNIBNxe-Sba4mohPSXOxoyicLYs" },
      { title: "Game Design Principles", url: "https://www.youtube.com/playlist?list=PLrSZDOvRCmRBLuY5_DPZ0xqdMonjbNjZ_" },
      { title: "3D Modeling for Games with Blender", url: "https://www.youtube.com/playlist?list=PLob6hbUtmU2P9AA4Le5uwcAnknogHvSPR" },
      { title: "Game Physics and Mathematics", url: "https://www.youtube.com/playlist?list=PLW3Zl3wyJwWMC516An98BF8Pn6nfXaEWe" },
      { title: "VR Game Development", url: "https://www.youtube.com/playlist?list=PLGEDpELN0zHDiStehu4bleZ7KVhOaGAUK" },
      { title: "Multiplayer Game Programming", url: "https://www.youtube.com/playlist?list=PLmcbjnHce7Scovukpm2UbvBmhPKvM52uD" },
      { title: "Mobile Game Development", url: "https://www.youtube.com/playlist?list=PLk7v1Z2rk4hjD-53VX9uqX_e6lZF9wSOX" },
      { title: "Game Audio and Sound Design", url: "https://www.youtube.com/playlist?list=PLnmtnFt6ekNVdb2DqNbbkAmHVWXbeShWS" },
      { title: "Indie Game Development Guide", url: "https://www.youtube.com/playlist?list=PLOVbOuqy_uQMZ_nAy2rqJPjy5mIf91-tI" }
    ]
  },
  {
    id: "iot-robotics",
    title: "IoT & Robotics",
    icon: Cpu,
    items: [
      { title: "Arduino Projects for Beginners", url: "https://www.youtube.com/playlist?list=PLnJ6CeayQGsXOvOIqtfdV1R2mZ7NwrkUN" },
      { title: "Raspberry Pi Complete Course", url: "https://www.youtube.com/playlist?list=PLGs0VKk2DiYxdMjCJmcP6jt4Yw6OHK85O" },
      { title: "ESP32 & ESP8266 IoT Projects", url: "https://www.youtube.com/playlist?list=PLNFq0T6Z3JPsMWtVgmqPnpIu41LNMDPiA" },
      { title: "ROS Robot Operating System", url: "https://www.youtube.com/playlist?list=PLuteWQUGtU9BU0sQIVqRQa24p-pSBCYNv" },
      { title: "Home Automation with IoT", url: "https://www.youtube.com/playlist?list=PLlBmS9EKFyde68PcgXY_tBQMYJRzz_bj6" },
      { title: "Drone Programming and Control", url: "https://www.youtube.com/playlist?list=PLMoSUbG1Q_r9jAzsvkx9g_yofGBgGhoB3" },
      { title: "Sensor Networks and IoT", url: "https://www.youtube.com/playlist?list=PLTLcz6IpeLYJg4O2gZNsyek5-GVPERGAK" },
      { title: "Computer Vision for Robotics", url: "https://www.youtube.com/playlist?list=PLMoSUbG1Q_r8jFS04rot-3NzidnV54Z2q" },
      { title: "Industrial IoT (IIoT)", url: "https://www.youtube.com/playlist?list=PLTLcz6IpeLYJg4O2gZNsyek5-GVPERGAK" },
      { title: "Edge Computing and IoT", url: "https://www.youtube.com/playlist?list=PLbMP1JcGBmSGsjKYsnwEjimYoFZi-PKJr" }
    ]
  },
  {
    id: "web3",
    title: "Blockchain & Web3",
    icon: Blocks,
    items: [
      { title: "Ethereum Smart Contract Development", url: "https://www.youtube.com/playlist?list=PL16WqdAj66SCOdL6XIFbke-XQg2QWRYdR" },
      { title: "DeFi Development Fundamentals", url: "https://www.youtube.com/playlist?list=PLvZuUVUD4dXqNrH3c8fDq8uJ3aW5Q2m9Q" },
      { title: "NFT Creation and Smart Contracts", url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoH8HgNqIWtL2eV4wS2hJ2vA" },
      { title: "Web3.js and Ethers.js", url: "https://www.youtube.com/playlist?list=PLbbtODcOYIoFs0PDlTdxpEsZiyDR2q9aA" },
      { title: "Cryptocurrency Trading Strategies", url: "https://www.youtube.com/playlist?list=PLQYgCxDYkIszqKY_VUh7GhNCGTsVB6b9J" },
      { title: "Blockchain Security Best Practices", url: "https://www.youtube.com/playlist?list=PLhLKc18P9YODINxsjyo_osTnK0jytTC4H" },
      { title: "Polygon and Layer 2 Solutions", url: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP" },
      { title: "DAO Development and Governance", url: "https://www.youtube.com/playlist?list=PLAx1YswjkDmOGh54W_OED-FctBvfcZbXc" }
    ]
  }
];

function UltimateDeveloperPlaylists() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const totalPlaylists = useMemo(
    () => playlistCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return playlistCategories
      .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
      .map((cat) => {
        const filteredItems = query
          ? cat.items.filter(
              (item) =>
                item.title.toLowerCase().includes(query) ||
                cat.title.toLowerCase().includes(query)
            )
          : cat.items;
        return { ...cat, items: filteredItems };
      })
      .filter((cat) => cat.items.length > 0);
  }, [selectedCategory, searchQuery]);

  const visibleCount = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    [filteredCategories]
  );

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white overflow-hidden selection:bg-fuchsia-500 selection:text-white py-20 px-4 sm:px-6 lg:px-8">
      {/* Ambient Glass Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-purple-600/20 via-fuchsia-600/20 to-pink-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[600px] -left-48 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1300px] -right-48 w-[550px] h-[550px] bg-fuchsia-700/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/3 w-[600px] h-[400px] bg-indigo-700/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* ================= HERO SECTION ================= */}
        <div className="text-center pt-8 pb-10 relative">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/[0.03] border border-fuchsia-500/30 text-fuchsia-300 backdrop-blur-xl shadow-[0_0_25px_rgba(217,70,239,0.25)]">
            <Youtube className="w-4 h-4 text-fuchsia-400" />
            <span>Awesome Developer Playlists • {totalPlaylists}+ Curated Courses</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(217,70,239,0.35)]">
            Ultimate Developer Playlists
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Learning from the right resources can completely change your growth path. This curated collection brings together some of the best YouTube playlists across AI, programming, cloud, data science, design, business, cybersecurity, development, personal growth, academics, gaming, IoT, robotics, and Web3.
          </p>

          <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
            Whether you are a student, a working professional, or a self learner, these playlists cover everything from beginner fundamentals to advanced concepts. Save this list, explore at your own pace, and build real skills with high quality content.
          </p>

          {/* Hero CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              to="/placement-roadmap"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(217,70,239,0.35)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Placement Roadmap</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/generate-resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Build AI Resume</span>
            </Link>
          </div>
        </div>

        {/* ================= SEARCH & CATEGORY FILTER BAR ================= */}
        <div className="p-4 sm:p-6 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] mb-12 relative">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

          {/* Search Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search playlists (e.g., AI Agents, React, Rust, Kubernetes, DSA, System Design)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/[0.04] border border-white/10 focus:border-fuchsia-500/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/20 text-sm text-white placeholder-gray-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="text-xs font-semibold text-gray-300 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 shrink-0 text-center">
              Showing <span className="text-fuchsia-400 font-bold">{visibleCount}</span> of {totalPlaylists} playlists
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-5">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                  : "bg-white/[0.03] text-gray-300 border-white/10 hover:bg-white/[0.07] hover:text-white"
              }`}
            >
              All Categories ({totalPlaylists})
            </button>

            {playlistCategories.map((cat) => {
              const IconComp = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-transparent shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                      : "bg-white/[0.03] text-gray-300 border-white/10 hover:bg-white/[0.07] hover:text-white"
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-gray-400"}`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= PLAYLIST CATEGORIES GRID ================= */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 text-center">
            <p className="text-lg font-bold text-white">No matching playlists found</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different keyword or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="mt-5 px-5 py-2.5 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm font-semibold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategories.map((category) => {
              const CatIcon = category.icon;
              return (
                <section
                  key={category.id}
                  className="p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_12px_48px_0_rgba(0,0,0,0.5)] relative overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                        <CatIcon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        {category.title}
                      </h2>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/10 border border-purple-500/30 text-purple-300">
                      {category.items.length} Playlists
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.items.map((item, idx) => (
                      <a
                        key={`${category.id}-${idx}`}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.07] hover:border-fuchsia-500/50 hover:bg-white/[0.06] transition-all duration-300 group flex items-center justify-between gap-3 hover:-translate-y-0.5 shadow-md"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center shrink-0 group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all">
                            <Play className="w-4 h-4 text-fuchsia-300 group-hover:text-white fill-current" />
                          </div>
                          <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors truncate">
                            {item.title}
                          </span>
                        </div>

                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-fuchsia-300 shrink-0 transition-colors" />
                      </a>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* ================= BOTTOM GLASS CTA BANNER ================= */}
        <div className="mt-20 mb-10 relative rounded-3xl backdrop-blur-2xl bg-gradient-to-r from-purple-950/40 via-fuchsia-950/30 to-pink-950/40 border border-fuchsia-500/30 p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(217,70,239,0.2)] overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Turn These Skills into Your Next Offer?
          </h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Pair your learning journey with our AI Resume Generator, ATS Score Checker, and Placement Roadmap to land your dream role.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/generate-resume"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] transition-all hover:-translate-y-0.5"
            >
              <span>Build AI Resume</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/placement-roadmap"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-purple-400/50 transition-all hover:-translate-y-0.5"
            >
              <span>Explore Placement Roadmap</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UltimateDeveloperPlaylists;
