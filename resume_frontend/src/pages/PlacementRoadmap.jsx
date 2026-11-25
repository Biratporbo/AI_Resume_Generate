import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  FileText,
  Calendar,
  Share2,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Rocket,
  Calculator,
  UserCheck,
  MessageSquare,
  Award,
  Building2,
  Compass,
  BookOpen,
  ExternalLink,
  Check,
  Clock,
  Target,
  Briefcase,
  TrendingUp,
  Globe,
  Flame,
  Lightbulb
} from "lucide-react";

// --- 1. PLACEMENT PROCESS TYPES ---
const placementProcessTypes = [
  {
    title: "Service Companies",
    companies: "TCS, Infosys, Wipro, Cognizant, Capgemini, HCL",
    tag: "Mass & Campus",
    rounds: [
      "Online Aptitude Test — quantitative, logical, verbal",
      "Technical Test or Coding Round — 1 to 2 DSA problems",
      "Technical Interview — CS fundamentals, projects, coding",
      "HR Interview — behavioral, communication, culture fit"
    ]
  },
  {
    title: "Product Companies",
    companies: "Amazon, Microsoft, Flipkart, Paytm, Zomato",
    tag: "High Package",
    rounds: [
      "Online Coding Round — 2 to 4 DSA problems (medium to hard)",
      "Technical Interview Round 1 — DSA problem solving + discussion",
      "Technical Interview Round 2 — system design or more DSA",
      "HR / Bar Raiser Round — values, leadership principles, situational"
    ]
  },
  {
    title: "Mass Recruiters",
    companies: "TCS NQT, Infosys, Wipro",
    tag: "High Volume",
    rounds: [
      "Hire in bulk from colleges across India",
      "Cut-offs matter significantly for shortlisting",
      "Aptitude & verbal ability act as the primary filter",
      "Basic coding + clean communication clears interviews"
    ]
  },
  {
    title: "Dream / Super Dream",
    companies: "FAANG, Top Unicorns & Funded Startups",
    tag: "Top Tier",
    rounds: [
      "Heavy DSA, system design, and deep project architecture required",
      "Strong problem-solving under strict time constraints",
      "Network and employee referrals significantly improve shortlisting",
      "Open-source or production deployments add strong edge"
    ]
  }
];

// --- 2. PREPARATION TIMELINES ---
const timelines = [
  {
    id: "12m",
    label: "12+ Months",
    subtitle: "Starting Early (2nd or 3rd Year)",
    badge: "Ideal Scenario — Build Deep Mastery",
    steps: [
      { period: "Months 1–3", task: "Programming language + DSA basics" },
      { period: "Months 4–6", task: "DSA intermediate + CS fundamentals" },
      { period: "Months 7–9", task: "DSA advanced + projects + aptitude" },
      { period: "Months 10–11", task: "Mock tests + interview prep + resume" },
      { period: "Month 12", task: "Placement season — targeted company prep" }
    ]
  },
  {
    id: "6m",
    label: "6 Months",
    subtitle: "Final Year / Pre-Placement",
    badge: "Balanced Acceleration Plan",
    steps: [
      { period: "Months 1–2", task: "DSA foundations + CS fundamentals simultaneously" },
      { period: "Months 3–4", task: "DSA intermediate + aptitude + one strong project" },
      { period: "Month 5", task: "Mock tests + interview questions + resume" },
      { period: "Month 6", task: "Company-specific prep + mock interviews" }
    ]
  },
  {
    id: "3m",
    label: "≤ 3 Months",
    subtitle: "Placement Season Is Here",
    badge: "High-Intensity Sprint Plan",
    steps: [
      { period: "Week 1–2", task: "DSA revision — top 150 patterns only" },
      { period: "Week 3–4", task: "CS fundamentals — OS, DBMS, CN, OOPs (one topic per day)" },
      { period: "Week 5–6", task: "Aptitude speed drills + previous year papers" },
      { period: "Week 7–8", task: "Mock tests + HR prep + resume final version" },
      { period: "Week 9–12", task: "Targeted company prep + mock interviews daily" }
    ]
  }
];

// --- 3. 9-PHASE MASTER ROADMAP ---
const roadmapPhases = [
  {
    id: 1,
    shortTitle: "Language & Basics",
    phase: "Phase 1 – Programming Language & Problem-Solving Foundation",
    timeline: "Foundation",
    roleFocus: "Pick One Language & Go Deep",
    icon: Code2,
    tagline: "Do not switch languages mid-preparation. Pick one language and master its standard library and OOPs.",
    metrics: [
      { label: "Recommended", value: "C++ / Java" },
      { label: "Core Focus", value: "Syntax + STL + OOPs" },
      { label: "Rule", value: "No Mid-Prep Switching" }
    ],
    sections: [
      {
        title: "C++ (Recommended for DSA & CP)",
        tag: "Fastest",
        desc: "Fastest execution, excellent STL (vectors, maps, sets, priority queues). Most widely used in competitive programming and DSA interviews.",
        points: ["Vectors, Maps, Sets, Priority Queues", "Fast I/O & Memory Efficiency", "Pointers & References"]
      },
      {
        title: "Java (Recommended for Product Interviews)",
        tag: "Enterprise",
        desc: "Strong OOPs support, readable code, widely accepted. Collections framework is equivalent to C++ STL.",
        points: ["ArrayList, HashMap, HashSet, PriorityQueue", "Strong OOPs & Interfaces", "Exception Handling"]
      },
      {
        title: "Python (ML/AI & Prototyping)",
        tag: "Concise",
        desc: "Fewer lines of code, great for ML/AI roles, but slower execution in time-critical competitive DSA settings.",
        points: ["Lists, Dicts, Sets, Heapq, Collections", "Fast Scripting & Prototyping", "Watch out for TLE on tight constraints"]
      },
      {
        title: "What to Learn in Your Language",
        tag: "Checklist",
        desc: "Master these core language pillars before jumping into complex data structures.",
        points: [
          "Data types, operators, conditionals, loops, functions",
          "Arrays, strings, and string manipulation",
          "OOPs: classes, objects, inheritance, polymorphism, abstraction, encapsulation",
          "Exception handling, file I/O & built-in data structures"
        ]
      }
    ],
    resources: [
      { title: "Python for Beginners", platform: "LearnPython.org", url: "https://www.learnpython.org/" },
      { title: "Java Tutorial", platform: "W3Schools", url: "https://www.w3schools.com/java/" },
      { title: "C++ Tutorial", platform: "Learn-CPP.org", url: "https://www.learn-cpp.org/" },
      { title: "JavaScript Tutorial", platform: "W3Schools", url: "https://www.w3schools.com/js/" }
    ]
  },
  {
    id: 2,
    shortTitle: "DSA Mastery",
    phase: "Phase 2 – Data Structures and Algorithms (DSA)",
    timeline: "14-Week Order",
    roleFocus: "Most Important Skill",
    icon: Layers,
    tagline: "DSA is the single most important skill for placement at any tech company. There are no shortcuts — but there is a right order.",
    metrics: [
      { label: "Learning Order", value: "Levels 1 to 4" },
      { label: "Medium Timer", value: "30 Mins Max" },
      { label: "Hard Timer", value: "45 Mins Max" }
    ],
    sections: [
      {
        title: "Level 1 – Absolute Basics (Week 1–2)",
        tag: "Week 1–2",
        desc: "Build speed with linear traversal and foundational number theory.",
        points: [
          "Arrays — traversal, searching, sorting, two pointers, sliding window",
          "Strings — manipulation, palindrome checks, anagrams, pattern matching",
          "Basic math — prime numbers, GCD, LCM, modular arithmetic"
        ]
      },
      {
        title: "Level 2 – Core Data Structures (Week 3–5)",
        tag: "Week 3–5",
        desc: "Master pointer manipulation, LIFO/FIFO structures, and O(1) lookups.",
        points: [
          "Linked Lists — singly, doubly, circular, reversal, cycle detection",
          "Stacks — infix/postfix, next greater element, valid parentheses",
          "Queues — deque, circular queue, monotonic queue",
          "Hashing — frequency counting, two-sum variants, grouping"
        ]
      },
      {
        title: "Level 3 – Non-linear Structures (Week 6–9)",
        tag: "Week 6–9",
        desc: "Frequently tested in Tier-1 product company technical rounds.",
        points: [
          "Binary Trees — traversals (inorder, preorder, postorder), height, diameter",
          "Binary Search Trees — insert, delete, search, LCA, kth smallest",
          "Heaps — min-heap, max-heap, top K problems, median of stream",
          "Tries — insert, search, prefix problems"
        ]
      },
      {
        title: "Level 4 – Advanced Topics (Week 10–14)",
        tag: "Week 10–14",
        desc: "Conquer complex optimization, graph networks, and divide & conquer.",
        points: [
          "Graphs — BFS, DFS, cycle detection, topological sort, Dijkstra, Bellman-Ford, MST",
          "Dynamic Programming — 0/1 knapsack, LCS, LIS, edit distance, MCM, partition DP",
          "Backtracking — N-Queens, sudoku solver, permutations/subsets",
          "Binary Search on answer, Greedy, Segment/Fenwick Trees, Divide & Conquer"
        ]
      }
    ],
    tips: [
      "Understand the pattern behind each problem — don't memorize solutions",
      "Check the editorial even after passing to discover optimal approaches",
      "Categorise by pattern: sliding window, two pointers, BFS/DFS, DP on trees",
      "Time yourself after Week 2 (30 min medium, 45 min hard); check a hint after 30 min stuck"
    ],
    resources: [
      { title: "Complete DSA Roadmap", platform: "Let's Code", url: "https://www.lets-code.co.in/articles/dsa" },
      { title: "LeetCode Top 150 Questions", platform: "Let's Code", url: "https://www.lets-code.co.in/articles/leetcodetop150questions" },
      { title: "DSA with C++ (Striver)", platform: "YouTube", url: "https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz" },
      { title: "DSA with Java", platform: "YouTube", url: "https://www.youtube.com/watch?v=6iCHf7OZn6c&list=PL6Zs6LgrJj3tDXv8a_elC6eT_4R5gfX4d" },
      { title: "DSA with Python", platform: "YouTube", url: "https://www.youtube.com/watch?v=aWKEBEg55ps&list=PLKYEe2WisBTFEr6laH5bR2J19j7sl5O8R" },
      { title: "DSA with JavaScript", platform: "YouTube", url: "https://www.youtube.com/watch?v=PbQPUPpM1vc&list=PLKhlp2qtUcSZtJefDThsXcsAbRBCSTgW4" },
      { title: "LeetCode", platform: "Product Interviews", url: "https://leetcode.com/" },
      { title: "GeeksforGeeks", platform: "Theory + Practice", url: "https://www.geeksforgeeks.org/" },
      { title: "HackerRank", platform: "Certifications", url: "https://www.hackerrank.com/" },
      { title: "CodeChef", platform: "Competitive", url: "https://www.codechef.com/" },
      { title: "Codeforces", platform: "Competitive", url: "https://codeforces.com/" }
    ]
  },
  {
    id: 3,
    shortTitle: "CS Fundamentals",
    phase: "Phase 3 – CS Fundamentals",
    timeline: "Core Theory",
    roleFocus: "OS, DBMS, CN & OOPs",
    icon: Cpu,
    tagline: "CS fundamentals are tested heavily at service companies and increasingly at product companies too. A single round on OS or DBMS can make or break your shortlisting.",
    metrics: [
      { label: "Core Pillars", value: "4 Subjects" },
      { label: "SQL Focus", value: "Joins & Indexing" },
      { label: "Design Focus", value: "SOLID + Patterns" }
    ],
    sections: [
      {
        title: "Operating Systems (OS)",
        tag: "OS",
        desc: "Understand how modern operating systems schedule tasks, manage memory, and prevent deadlocks.",
        points: [
          "Processes vs threads — creation, states, context switching",
          "CPU scheduling — FCFS, SJF, Round Robin, Priority scheduling",
          "Deadlocks — conditions, prevention, avoidance (Banker's), detection",
          "Memory management — paging, segmentation, virtual memory, LRU/FIFO/Optimal",
          "File systems (inode, allocation) & Synchronisation (mutex, semaphores, monitors)"
        ]
      },
      {
        title: "Database Management Systems (DBMS)",
        tag: "DBMS & SQL",
        desc: "Master relational modeling, SQL queries, normalization, and database internals.",
        points: [
          "ER & Relational model — entities, cardinality, primary/foreign/candidate/super keys",
          "SQL — SELECT, JOIN (inner, left, right, full), GROUP BY, HAVING, subqueries, views",
          "Normalisation (1NF, 2NF, 3NF, BCNF) & Transactions (ACID, commit, rollback)",
          "Concurrency control (locks, 2PL), Indexing (B-tree, B+ tree) & NoSQL basics"
        ]
      },
      {
        title: "Computer Networks (CN)",
        tag: "Networks",
        desc: "Know what happens end-to-end when you type a URL in your browser.",
        points: [
          "OSI 7-layer model & TCP/IP model protocols",
          "IP addressing — IPv4, IPv6, subnetting, CIDR notation",
          "Protocols — HTTP/HTTPS, FTP, SMTP, DNS, DHCP, ARP",
          "TCP vs UDP (3-way handshake, 4-way termination), Routing (RIP, OSPF, BGP) & Network devices"
        ]
      },
      {
        title: "Object-Oriented Programming (OOPs)",
        tag: "OOPs",
        desc: "Write modular, extensible code and articulate software design principles clearly.",
        points: [
          "Classes, objects, constructors, destructors",
          "4 Pillars: Inheritance, Polymorphism (overloading/overriding), Abstraction, Encapsulation",
          "SOLID principles — SRP, OCP, LSP, ISP, DIP",
          "Common Design Patterns — Singleton, Factory, Observer"
        ]
      }
    ],
    resources: [
      { title: "OS Playlist – Gate Smashers", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p" },
      { title: "OS Playlist – Neso Academy", platform: "YouTube (English)", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRjT3oJxI4vNHlEtB3NdkQFn" },
      { title: "DBMS Playlist – Gate Smashers", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y" },
      { title: "SQL Practice", platform: "W3Schools", url: "https://www.w3schools.com/sql/" },
      { title: "Top SQL 50", platform: "LeetCode", url: "https://leetcode.com/studyplan/top-sql-50/" },
      { title: "CN Playlist – Gate Smashers", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLmXKhU9FNesSjFbXSZGF8JF_4LVwwofCd" },
      { title: "CN Playlist – Neso Academy", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx" },
      { title: "OOPs Playlist – Apna College", platform: "YouTube", url: "https://www.youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk" },
      { title: "Complete CS Fundamentals", platform: "YouTube", url: "https://www.youtube.com/watch?v=oe9YEuoeDIs" }
    ]
  },
  {
    id: 4,
    shortTitle: "Build Projects",
    phase: "Phase 4 – Build Strong Projects",
    timeline: "Portfolio",
    roleFocus: "Strongest Differentiator",
    icon: Rocket,
    tagline: "Interviewers ask deep questions about your projects — your architecture decisions, challenges faced, and how you would scale it.",
    metrics: [
      { label: "Requirement", value: "Live Demo + GitHub" },
      { label: "Quality", value: "Solves Real Problem" },
      { label: "Ownership", value: "Explain Every Choice" }
    ],
    sections: [
      {
        title: "Web Development (Full Stack)",
        tag: "Full Stack",
        desc: "End-to-end applications demonstrating frontend polish, APIs, and database persistence.",
        points: [
          "Job board with company profiles and application tracking",
          "Real-time collaborative notes app (like Notion lite)",
          "E-commerce platform with payment gateway integration",
          "Community Q&A platform (like Stack Overflow mini)"
        ]
      },
      {
        title: "Backend / API Engineering",
        tag: "Backend",
        desc: "High-reliability systems focusing on security, rate limiting, and concurrency.",
        points: [
          "URL shortener with analytics dashboard",
          "REST API for a social media feed with rate limiting",
          "Authentication system with JWT, OAuth2, refresh tokens",
          "File storage service with upload, download, and sharing"
        ]
      },
      {
        title: "Machine Learning / AI",
        tag: "AI / ML",
        desc: "Practical applied AI systems wrapped in usable web interfaces.",
        points: [
          "Resume parser and job matcher",
          "Sentiment analysis on product reviews",
          "Image classification web app",
          "Chatbot using a fine-tuned LLM"
        ]
      },
      {
        title: "Mobile / Other & Project Standards",
        tag: "Standards",
        desc: "Every strong project solves a real problem (not a tutorial copy) and has a live demo & clean GitHub code.",
        points: [
          "Expense tracker with budget alerts",
          "Real-time location sharing app",
          "Health and fitness tracker with data visualisation",
          "Must have: clean README, architecture clarity & live URL"
        ]
      }
    ],
    resources: [
      { title: "Full Stack Open", platform: "University of Helsinki", url: "https://fullstackopen.com/en/" },
      { title: "Developer Roadmaps", platform: "Roadmap.sh", url: "https://roadmap.sh/" },
      { title: "The Odin Project", platform: "Full Stack Curriculum", url: "https://www.theodinproject.com/" },
      { title: "Build Your Own X", platform: "GitHub", url: "https://github.com/codecrafters-io/build-your-own-x" },
      { title: "Free Hosting (Vercel)", platform: "Frontend / Fullstack", url: "https://vercel.com/" },
      { title: "Render Cloud Hosting", platform: "Backend / DB", url: "https://render.com/" }
    ]
  },
  {
    id: 5,
    shortTitle: "Aptitude",
    phase: "Phase 5 – Aptitude and Reasoning",
    timeline: "OA Filter",
    roleFocus: "Clear Round 1",
    icon: Calculator,
    tagline: "Most students lose the first round because they do not take aptitude seriously. A strong coder who fails the aptitude test does not get to show their coding skills.",
    metrics: [
      { label: "Sections", value: "Quant + Logic + Verbal" },
      { label: "Focus", value: "Speed & Accuracy" },
      { label: "Priority", value: "Mass & Service Drives" }
    ],
    sections: [
      {
        title: "Quantitative Aptitude",
        tag: "Quant",
        desc: "Build calculation speed and formula recall for timed online assessments.",
        points: [
          "Number system, HCF and LCM, remainders",
          "Percentages, profit and loss, simple & compound interest",
          "Ratio, proportion, averages, mixtures",
          "Time, speed, distance (trains, boats), Time & work, pipes",
          "Permutations, combinations, probability & Data interpretation"
        ]
      },
      {
        title: "Logical Reasoning",
        tag: "Logic",
        desc: "Structured thinking under strict time pressure.",
        points: [
          "Coding-decoding, blood relations, direction sense",
          "Puzzles and seating arrangements",
          "Syllogisms, cause and effect",
          "Statement and assumption, statement and conclusion"
        ]
      },
      {
        title: "Verbal Ability",
        tag: "English",
        desc: "Frequently tested in TCS NQT, Infosys, Cognizant, and Accenture.",
        points: [
          "Reading comprehension",
          "Sentence correction & para-jumbles",
          "Synonyms, antonyms, vocabulary",
          "Cloze test & one-word substitutions"
        ]
      }
    ],
    resources: [
      { title: "IndiaBIX Practice Questions", platform: "IndiaBIX", url: "https://www.indiabix.com/" },
      { title: "Complete Free Aptitude Material", platform: "YouTube", url: "https://www.youtube.com/watch?v=GY2Soujv2VY" },
      { title: "TCS NQT Aptitude PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/tcsnqtaptitude" }
    ]
  },
  {
    id: 6,
    shortTitle: "Resume & LinkedIn",
    phase: "Phase 6 – Resume and LinkedIn Optimization",
    timeline: "Shortlisting",
    roleFocus: "Beat the ATS",
    icon: UserCheck,
    tagline: "Your resume is shortlisted before any human reads it — an ATS scans it first. A poor resume stops you before the process even starts.",
    metrics: [
      { label: "Format", value: "Single-Column PDF" },
      { label: "Length", value: "1 Page (<2 Yrs Exp)" },
      { label: "Outreach", value: "Senior Referrals" }
    ],
    sections: [
      {
        title: "ATS Resume Checklist",
        tag: "Resume",
        desc: "Follow strict formatting and impact-quantification rules to pass automated screening.",
        points: [
          "Single-column, clean format — no tables, no graphics, no columns",
          "One page if under 2 years of experience; lead with skills, projects, education",
          "Use action verbs ('Built', 'Designed', 'Reduced', 'Improved', 'Led') & quantify impact",
          "Include GitHub links for all projects, check spelling, save as PDF with your name"
        ]
      },
      {
        title: "LinkedIn Profile Optimization",
        tag: "Networking",
        desc: "Turn your profile into an inbound recruiter magnet and referral engine.",
        points: [
          "Professional photo (not a selfie, not blurry)",
          "Headline: 'Full Stack Developer | DSA | React | Node.js | Seeking SDE Roles 2026'",
          "About section: 3–5 sentences explaining what you build and what you seek",
          "Add all projects with GitHub links & politely ask seniors at target companies for referrals"
        ]
      }
    ],
    resources: [
      { title: "AI Resume Builder", platform: "Internal Tool", url: "/generate-resume" },
      { title: "ATS Score Checker", platform: "Internal Tool", url: "/atsscore" },
      { title: "Cold Email & Referral Templates", platform: "Internal Tool", url: "/coldemailhub" }
    ]
  },
  {
    id: 7,
    shortTitle: "Interview Prep",
    phase: "Phase 7 – Technical, System Design & HR Prep",
    timeline: "Final Rounds",
    roleFocus: "Think Out Loud",
    icon: MessageSquare,
    tagline: "Solving on LeetCode is half the battle. Explaining your thought process, edge cases, system scaling, and HR stories wins the offer.",
    metrics: [
      { label: "Intro Pitch", value: "90 Seconds Max" },
      { label: "Daily Coding", value: "5–10 Problems" },
      { label: "HR Round", value: "Eliminative" }
    ],
    sections: [
      {
        title: "Technical Interview Mastery",
        tag: "Coding Round",
        desc: "What interviewers actually evaluate: thinking out loud, edge cases, optimization, and project depth.",
        points: [
          "Explain your approach before writing a single line of code",
          "Proactively catch edge cases and optimize brute-force to optimal",
          "Prepare for: 'Why this tech?', 'What would you change?', 'How would you scale this?'"
        ]
      },
      {
        title: "System Design (SDE-2 & Dream Companies)",
        tag: "Architecture",
        desc: "Essential distributed systems concepts expected even for fresher dream roles.",
        points: [
          "Scaling (vertical vs horizontal, load balancers) & Microservices vs Monolith",
          "Databases (SQL vs NoSQL, sharding, replication) & Caching (Redis, CDN, invalidation)",
          "Message queues (Kafka, RabbitMQ) & designing URL shortener, Twitter feed, chat, notifications"
        ]
      },
      {
        title: "HR Interview Framework",
        tag: "HR Round",
        desc: "Do not underestimate HR — it is eliminative at many companies.",
        points: [
          "'Tell me about yourself' — 90 sec: who you are → what you built → what you seek",
          "'Why join our company?' — mention specific products, engineering culture, values",
          "'Strengths / Weaknesses' — give measurable examples & show active self-improvement",
          "'Where in 5 years?' — align growth with technical impact and leadership"
        ]
      }
    ],
    resources: [
      { title: "HR Interview Questions PDF", platform: "Google Drive", url: "https://drive.google.com/file/d/1zE1mlCmWSzhTxFl_uhF20FkI4gvJJISj/view?usp=drive_link" },
      { title: "System Design Primer", platform: "GitHub", url: "https://github.com/donnemartin/system-design-primer" }
    ]
  },
  {
    id: 8,
    shortTitle: "Mock Tests & Interviews",
    phase: "Phase 8 – Mock Tests and Mock Interviews",
    timeline: "Simulation",
    roleFocus: "20+ Full Mocks",
    icon: Award,
    tagline: "Students who do mock interviews consistently outperform those who only solve problems silently.",
    metrics: [
      { label: "Full-Length Mocks", value: "At Least 20" },
      { label: "Environment", value: "Zero Distractions" },
      { label: "Review", value: "Record & Watch" }
    ],
    sections: [
      {
        title: "Full-Length Mock Tests",
        tag: "Assessment",
        desc: "Simulate real test-day pressure before placement season begins.",
        points: [
          "Take at least 20 full-length timed mock tests",
          "No phone, no distractions, strict exam-like timing",
          "Analyze every wrong answer and time sink immediately afterward"
        ]
      },
      {
        title: "Live Mock Interviews",
        tag: "Peer & Senior",
        desc: "Non-negotiable practice to eliminate nervousness and polish communication.",
        points: [
          "Practice with peers — take turns being interviewer and interviewee",
          "Ask placed seniors to conduct realistic mock rounds for you",
          "Record yourself and watch it back to spot habits to improve"
        ]
      }
    ],
    resources: [
      { title: "AmbitionBox Test Patterns", platform: "AmbitionBox", url: "https://www.ambitionbox.com/" },
      { title: "PrepInsta Placement Papers", platform: "PrepInsta", url: "https://prepinsta.com/" },
      { title: "Pramp Peer Mock Interviews", platform: "Pramp", url: "https://www.pramp.com/" }
    ]
  },
  {
    id: 9,
    shortTitle: "Company Prep",
    phase: "Phase 9 – Company-Specific Preparation",
    timeline: "Targeted",
    roleFocus: "PYQs & Patterns",
    icon: Building2,
    tagline: "Different companies have different hiring patterns. Target your shortlisted companies with previous year questions.",
    metrics: [
      { label: "Service Drives", value: "TCS, Infosys, Wipro" },
      { label: "Product Drives", value: "Amazon, Microsoft" },
      { label: "Strategy", value: "PYQ Pattern Mastery" }
    ],
    sections: [
      {
        title: "Service & Mass Recruiters",
        tag: "Campus Drives",
        desc: "Targeted focus areas for top Indian IT & consulting recruiters.",
        points: [
          "TCS NQT — heavy on aptitude, English, and basic coding",
          "Infosys — aptitude + coding round (SP/DSE) + communication skills",
          "Wipro — three rounds: aptitude, coding, technical/HR interview",
          "Cognizant (GenC / GenC Next), Capgemini, Accenture, HCL — variable coding & aptitude"
        ]
      },
      {
        title: "Top Product Giants",
        tag: "Product Tier",
        desc: "High-bar DSA, Leadership Principles, and architecture focus.",
        points: [
          "Amazon — 2–3 DSA coding rounds + Leadership Principles in HR; focus on medium-hard LeetCode, Trees, Graphs, DP & System Design basics",
          "Microsoft — 3–4 rounds mixing DSA and System Design; focus on coding clarity, edge cases, and solution optimisation"
        ]
      }
    ],
    resources: [
      { title: "TCS NQT Coding PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/tcspyq" },
      { title: "TCS NQT Aptitude PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/tcsnqtaptitude" },
      { title: "Infosys SP & DSE Questions", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/infosys-sp-and-dse-previous-year-coding-questions" },
      { title: "Wipro Coding PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/wiprocodingquestions" },
      { title: "Cognizant PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/cognizantcodingquestions" },
      { title: "Capgemini Questions", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/capgeminiquestions" },
      { title: "Accenture Questions", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/accenturequestions" },
      { title: "HCL Coding PYQs", platform: "Let's Code", url: "https://www.lets-code.co.in/previousyearcodingquestion/hcl-previous-year-coding-questions" }
    ]
  }
];

// --- 4. INTERACTIVE READINESS CHECKLIST ---
const checklistCategories = [
  {
    category: "Resume & ATS Hygiene",
    icon: FileText,
    items: [
      { id: "r1", text: "Single-column, clean format — no tables, no graphics, no columns" },
      { id: "r2", text: "One page (under 2 yrs exp) leading with skills, projects, education" },
      { id: "r3", text: "Action verbs used with quantified impact (e.g. 'Reduced latency by 40%')" },
      { id: "r4", text: "GitHub links included, Grammarly checked, saved as PDF with your name" }
    ]
  },
  {
    category: "LinkedIn & Network",
    icon: Globe,
    items: [
      { id: "l1", text: "Professional photo & targeted headline (e.g. 'Full Stack Developer | DSA | Seeking SDE 2026')" },
      { id: "l2", text: "About section (3–5 sentences) clearly stating skills and target roles" },
      { id: "l3", text: "All major projects added with descriptions, live demos, and GitHub links" },
      { id: "l4", text: "Connected with seniors/alumni at target companies for polite referrals" }
    ]
  },
  {
    category: "Technical & Interview Readiness",
    icon: TrendingUp,
    items: [
      { id: "t1", text: "Completed 150–250+ pattern-based DSA problems across Levels 1–4" },
      { id: "t2", text: "Revised OS, DBMS (SQL), Computer Networks, and OOPs + SOLID principles" },
      { id: "t3", text: "Completed 20+ full-length timed mock tests & peer/senior mock interviews" },
      { id: "t4", text: "Prepared 90-second intro and company-specific HR answers" }
    ]
  }
];

// --- 5. KEY HABITS ---
const keyHabits = [
  {
    title: "Code Every Single Day",
    desc: "Even 45 focused minutes compounds significantly over months into unstoppable momentum."
  },
  {
    title: "Don't Just Solve — Analyse",
    desc: "Review every wrong answer and every suboptimal solution to understand the underlying pattern."
  },
  {
    title: "Build in Public",
    desc: "Push every project and practice milestone to GitHub, and share what you built on LinkedIn."
  },
  {
    title: "Network Actively",
    desc: "Most placed students had referrals or spoke to employees before applying — start building connections early."
  },
  {
    title: "Track Your Preparation",
    desc: "Use a spreadsheet or checklist to track topics covered, problems solved, and mock test scores."
  },
  {
    title: "Stay Updated",
    desc: "Placement patterns evolve year to year — follow active tech communities on Discord and LinkedIn."
  }
];

function PlacementRoadmap() {
  const [selectedTimeline, setSelectedTimeline] = useState("12m");
  const [selectedPhase, setSelectedPhase] = useState(0);
  const [completedItems, setCompletedItems] = useState({});

  const toggleCheck = (id) => {
    setCompletedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalItems = checklistCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const checkedCount = Object.values(completedItems).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);

  const activeTimeline = timelines.find((t) => t.id === selectedTimeline) || timelines[0];
  const activePhase = roadmapPhases[selectedPhase];

  return (
    <div className="relative min-h-screen bg-[#0a0a0c] text-white overflow-hidden selection:bg-fuchsia-500 selection:text-white py-20 px-4 sm:px-6 lg:px-8">
      
      {/* --- AMBIENT GLASS GLOW BACKGROUND ORBS --- */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-gradient-to-tr from-purple-600/20 via-fuchsia-600/20 to-pink-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-[700px] -left-48 w-[500px] h-[500px] bg-purple-700/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-[1400px] -right-48 w-[550px] h-[550px] bg-fuchsia-700/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-40 left-1/3 w-[600px] h-[400px] bg-indigo-700/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* ================= 1. HERO SECTION ================= */}
        <div className="text-center pt-8 pb-12 relative">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/[0.03] border border-fuchsia-500/30 text-fuchsia-300 backdrop-blur-xl shadow-[0_0_25px_rgba(217,70,239,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-fuchsia-400 animate-pulse" />
            <span>Complete Placement Preparation Roadmap FY'26/27</span>
            <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-ping" />
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(217,70,239,0.35)]">
            Placement Roadmap
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            The most detailed, free placement preparation guide for students targeting top tech companies in 2026–27. Whether you're in your second year building a foundation or a final-year student with 3 months left, learn exactly what to do, when to do it, and where to learn it.
          </p>

          <p className="mt-3 text-xs sm:text-sm text-fuchsia-300/80 max-w-2xl mx-auto font-medium">
            Built for students targeting TCS, Infosys, Wipro, Cognizant, Accenture, Amazon, Microsoft, Flipkart & more.
          </p>

          {/* Glass CTA Action Pills */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              to="/generate-resume"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(217,70,239,0.35)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>Create AI Resume</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/internship-calendar"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-purple-400" />
              <span>Internship Calendar</span>
            </Link>

            <Link
              to="/coldemailhub"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Share2 className="w-4 h-4 text-fuchsia-400" />
              <span>Cold Email Hub</span>
            </Link>
          </div>
        </div>

        {/* ================= 2. UNDERSTANDING THE PLACEMENT PROCESS ================= */}
        <section className="mt-10 mb-16">
          <div className="text-center mb-8">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-500/10 border border-purple-500/30 text-purple-300">
              Know Your Target
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Understanding the Placement Process
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-1 max-w-2xl mx-auto">
              Knowing which companies you are targeting shapes your entire preparation strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementProcessTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent group-hover:via-fuchsia-500/70 transition-all" />
                <div className="flex items-center justify-between gap-2 mb-2">
                  <Briefcase className="w-4 h-4 text-fuchsia-400 shrink-0" />
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-300">
                    {type.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{type.title}</h3>
                <p className="text-xs text-purple-300 font-medium mt-1 mb-3">{type.companies}</p>
                <ul className="space-y-2 border-t border-white/[0.06] pt-3">
                  {type.rounds.map((r, rIdx) => (
                    <li key={rIdx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed">
                      <span className="text-fuchsia-400 font-bold mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. THE PREPARATION TIMELINE ================= */}
        <section className="mb-16">
          <div className="p-6 sm:p-8 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_12px_48px_0_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-fuchsia-400">
                  <Clock className="w-4 h-4" />
                  <span>Adaptive Study Schedule</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  The Preparation Timeline
                </h2>
              </div>

              {/* Timeline Switcher Pills */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10">
                {timelines.map((tl) => (
                  <button
                    key={tl.id}
                    onClick={() => setSelectedTimeline(tl.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      selectedTimeline === tl.id
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                        : "text-gray-400 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {tl.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <h3 className="text-lg font-bold text-white">{activeTimeline.subtitle}</h3>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/15 border border-purple-500/30 text-purple-300">
                  {activeTimeline.badge}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {activeTimeline.steps.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.07] hover:border-fuchsia-500/40 transition-all"
                  >
                    <div className="text-xs font-bold text-fuchsia-400 uppercase tracking-wider">
                      {step.period}
                    </div>
                    <p className="text-sm text-gray-200 font-medium mt-1.5 leading-snug">
                      {step.task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. 9-PHASE MASTER ROADMAP SELECTOR ================= */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300">
              9-Phase Blueprint
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
              Step-by-Step Preparation Phases
            </h2>
          </div>

          <div className="p-2 sm:p-3 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] relative">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-500/40 to-transparent" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {roadmapPhases.map((phase, idx) => {
                const IconComp = phase.icon;
                const isSelected = selectedPhase === idx;

                return (
                  <button
                    key={phase.id}
                    onClick={() => setSelectedPhase(idx)}
                    className={`relative p-3 rounded-2xl text-left transition-all duration-300 group overflow-hidden flex flex-col justify-between ${
                      isSelected
                        ? "bg-gradient-to-b from-white/[0.14] to-white/[0.04] border border-fuchsia-500/60 shadow-[0_0_25px_rgba(217,70,239,0.28)] -translate-y-0.5"
                        : "bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/15"
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400" />
                    )}

                    <div className="flex items-center justify-between gap-1 mb-2">
                      <div className={`p-1.5 rounded-lg ${
                        isSelected
                          ? "bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40"
                          : "bg-white/[0.04] text-gray-400 group-hover:text-purple-300"
                      }`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className={`text-[10px] font-bold ${isSelected ? "text-fuchsia-300" : "text-gray-500"}`}>
                        P{phase.id}
                      </span>
                    </div>

                    <div className={`text-xs font-bold leading-tight ${isSelected ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                      {phase.shortTitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= ACTIVE PHASE DETAILED GLASS CARD ================= */}
        <div className="relative rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_12px_48px_0_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500">
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent shadow-[0_0_20px_rgba(217,70,239,0.8)]" />

          {/* Phase Header Banner */}
          <div className="p-6 sm:p-10 border-b border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-fuchsia-500/15 border border-fuchsia-500/30 text-fuchsia-300">
                    {activePhase.timeline}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/[0.04] border border-white/10 text-gray-300">
                    {activePhase.roleFocus}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  {activePhase.phase}
                </h2>

                <p className="text-gray-300 max-w-2xl text-base sm:text-lg font-light leading-relaxed">
                  {activePhase.tagline}
                </p>
              </div>

              {/* Phase Metrics Pills */}
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-2.5 shrink-0">
                {activePhase.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 sm:px-4 sm:py-2.5 rounded-xl backdrop-blur-xl bg-white/[0.03] border border-white/10"
                  >
                    <div className="text-[10px] sm:text-xs uppercase font-semibold text-gray-400 tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-fuchsia-300 mt-0.5">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Phase Sections Grid */}
          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Detailed Topics & Action Plan
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {activePhase.sections.map((sec, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.07] hover:border-fuchsia-500/40 hover:bg-white/[0.04] transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-fuchsia-500/20 transition-all" />

                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-fuchsia-300 transition-colors">
                        {sec.title}
                      </h4>
                      <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-purple-500/10 border border-purple-500/20 text-purple-300">
                        {sec.tag}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {sec.desc}
                    </p>

                    <ul className="space-y-2 pt-3 border-t border-white/[0.06]">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                          <span className="text-fuchsia-400 font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Effective Practice Tips (e.g. Phase 2 DSA) */}
            {activePhase.tips && (
              <div className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-purple-500/[0.05] border border-purple-500/20">
                <div className="flex items-center gap-2 mb-3 text-purple-300 font-bold text-sm uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-fuchsia-400" />
                  <span>How to Practice Effectively</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {activePhase.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <Check className="w-4 h-4 text-fuchsia-400 shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Curated Resources */}
            {activePhase.resources && activePhase.resources.length > 0 && (
              <div className="pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-5">
                  <BookOpen className="w-5 h-5 text-fuchsia-400" />
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    Free Resources & Practice Links
                  </h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activePhase.resources.map((res, rIdx) => {
                    const isInternal = res.url.startsWith("/");

                    return isInternal ? (
                      <Link
                        key={rIdx}
                        to={res.url}
                        className="p-4 rounded-xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:border-fuchsia-500/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-semibold text-fuchsia-400 uppercase tracking-wider">
                            {res.platform}
                          </div>
                          <div className="text-sm font-bold text-white mt-1 group-hover:text-fuchsia-300 transition-colors">
                            {res.title}
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-fuchsia-300 font-medium">
                          <span>Open Feature</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </Link>
                    ) : (
                      <a
                        key={rIdx}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.08] hover:border-purple-500/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-[11px] font-semibold text-purple-400 uppercase tracking-wider">
                            {res.platform}
                          </div>
                          <div className="text-sm font-bold text-white mt-1 group-hover:text-purple-300 transition-colors">
                            {res.title}
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-1.5 text-xs text-gray-400 group-hover:text-purple-300 font-medium">
                          <span>Open Resource</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ================= 5. INTERACTIVE READINESS CHECKLIST ================= */}
        <div className="mt-20">
          <div className="p-6 sm:p-10 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 shadow-[0_12px_48px_0_rgba(0,0,0,0.6)] relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-purple-500/10 border border-purple-500/30 text-purple-300">
                  Interactive Tracker
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  Pre-Placement Readiness Checklist
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mt-1">
                  Check off your milestones across ATS resume hygiene, LinkedIn presence, and technical prep.
                </p>
              </div>

              {/* Live Completion Gauge */}
              <div className="p-4 rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 min-w-[240px]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-300">Readiness Score</span>
                  <span className="text-sm font-extrabold text-fuchsia-400">{progressPercent}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-white/[0.05] overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 transition-all duration-500 shadow-[0_0_12px_rgba(217,70,239,0.7)]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="text-[11px] text-gray-400 mt-2 text-right">
                  {checkedCount} of {totalItems} completed
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {checklistCategories.map((category, catIdx) => {
                const CatIcon = category.icon;
                return (
                  <div
                    key={catIdx}
                    className="p-5 sm:p-6 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.07] hover:border-purple-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/[0.06]">
                      <div className="p-2 rounded-lg bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">
                        <CatIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-bold text-white text-base">{category.category}</h3>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((item) => {
                        const isDone = !!completedItems[item.id];
                        return (
                          <li
                            key={item.id}
                            onClick={() => toggleCheck(item.id)}
                            className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 flex items-start gap-3 select-none ${
                              isDone
                                ? "bg-fuchsia-500/[0.08] border-fuchsia-500/40 text-gray-200"
                                : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] text-gray-400 hover:text-gray-200"
                            }`}
                          >
                            <div className={`mt-0.5 w-4 h-4 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                              isDone
                                ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 border-transparent text-white shadow-[0_0_10px_rgba(217,70,239,0.5)]"
                                : "border-white/20 bg-black/20"
                            }`}>
                              {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                            <span className={`text-xs leading-relaxed ${isDone ? "line-through text-gray-400" : ""}`}>
                              {item.text}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= 6. KEY HABITS SECTION ================= */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300">
              <Flame className="w-3.5 h-3.5" />
              <span>Winning Mindset</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mt-3">
              Key Habits That Separate Placed Students from Others
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyHabits.map((habit, hIdx) => (
              <div
                key={hIdx}
                className="p-6 rounded-2xl backdrop-blur-xl bg-[#111116]/80 border border-white/10 hover:border-fuchsia-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="w-6 h-6 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white text-xs font-bold flex items-center justify-center">
                    {hIdx + 1}
                  </span>
                  <h3 className="font-bold text-white text-base">{habit.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{habit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= 7. BOTTOM GLASS CTA BANNER ================= */}
        <div className="mt-24 mb-10 relative rounded-3xl backdrop-blur-2xl bg-gradient-to-r from-purple-950/40 via-fuchsia-950/30 to-pink-950/40 border border-fuchsia-500/30 p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(217,70,239,0.2)] overflow-hidden">
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-fuchsia-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

          <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Take Your Placement Prep to the Next Level?
          </h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Turn your skills into high-converting applications with our AI-powered resume generator, ATS analyzer, and outreach tools.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/generate-resume"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(217,70,239,0.5)] hover:shadow-[0_0_40px_rgba(217,70,239,0.8)] transition-all hover:-translate-y-0.5"
            >
              Build Your Resume Now
            </Link>
            <Link
              to="/atsscore"
              className="px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-purple-400/50 transition-all hover:-translate-y-0.5"
            >
              Analyze Resume ATS Score
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default PlacementRoadmap;
