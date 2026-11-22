import React, { useState } from "react";
import { Link } from "react-router-dom";

const roadmapPhases = [
  {
    phase: "Phase 1: Foundations & DSA",
    timeline: "Months 1 - 3",
    icon: "💻",
    tagline: "Build strong problem-solving skills in one primary language",
    color: "from-purple-500 to-indigo-600",
    topics: [
      { name: "Master 1 Language", desc: "C++ (STL) / Java (Collections) / Python" },
      { name: "Data Structures", desc: "Arrays, Strings, Linked Lists, Stacks, Queues" },
      { name: "Algorithms", desc: "Binary Search, Recursion, Sorting, Two Pointers" },
      { name: "Target Practice", desc: "Solve 150+ LeetCode / GFG problems (Easy to Medium)" }
    ],
    resources: [
      { title: "Striver's A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
      { title: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/" },
      { title: "NeetCode Roadmap", url: "https://neetcode.io/roadmap" }
    ]
  },
  {
    phase: "Phase 2: Advanced DSA & Core CS Subjects",
    timeline: "Months 4 - 6",
    icon: "🧠",
    tagline: "Ace technical rounds and university-level fundamentals",
    color: "from-fuchsia-500 to-pink-600",
    topics: [
      { name: "Advanced DSA", desc: "Trees, Graphs (BFS/DFS, Dijkstra), Dynamic Programming, Tries" },
      { name: "Operating Systems", desc: "Process Management, Threads, Deadlocks, Virtual Memory" },
      { name: "Database Management (DBMS)", desc: "SQL Queries, Indexing, Normalization, ACID Properties, Transactions" },
      { name: "Computer Networks & OOPs", desc: "OSI Model, TCP/IP, DNS, Polymorphism, Abstraction, Encapsulation" }
    ],
    resources: [
      { title: "Gate Smashers CS Subjects", url: "https://www.youtube.com/@GateSmashers" },
      { title: "SQLZoo Practice", url: "https://sqlzoo.net/" },
      { title: "InterviewBit CS Fundamentals", url: "https://www.interviewbit.com/" }
    ]
  },
  {
    phase: "Phase 3: Development & Capstone Projects",
    timeline: "Months 7 - 9",
    icon: "🚀",
    tagline: "Build industry-grade projects that stand out on your resume",
    color: "from-blue-500 to-cyan-500",
    topics: [
      { name: "Full-Stack Development", desc: "React, Node.js / Spring Boot, REST APIs, Tailwind CSS" },
      { name: "Databases & Cloud", desc: "PostgreSQL / MongoDB, Redis caching, AWS / Docker deployment" },
      { name: "System Design Basics", desc: "Load Balancing, Caching, Horizontal vs Vertical Scaling, API Design" },
      { name: "2 Major Projects", desc: "Deploy with live links, clean GitHub READMEs, and architecture diagrams" }
    ],
    resources: [
      { title: "Full Stack Open", url: "https://fullstackopen.com/en/" },
      { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer" },
      { title: "GitHub Awesome Projects", url: "https://github.com/" }
    ]
  },
  {
    phase: "Phase 4: Resume, Aptitude & Mock Interviews",
    timeline: "Months 10 - 12",
    icon: "🎯",
    tagline: "Final sprint to clear online assessments and interview rounds",
    color: "from-emerald-500 to-teal-500",
    topics: [
      { name: "ATS Resume Optimization", desc: "Use single-column ATS templates, measurable impact (X-Y-Z formula)" },
      { name: "Quantitative Aptitude & Reasoning", desc: "Percentages, P&C, Probability, Logical Puzzles for campus tests" },
      { name: "Behavioral & HR Prep", desc: "STAR method for 'Tell me about yourself', conflict resolution, leadership" },
      { name: "Live Mock Interviews", desc: "Peer-to-peer mocks on Pramp, Interviewing.io, or with college seniors" }
    ],
    resources: [
      { title: "IndiaBIX Aptitude", url: "https://www.indiabix.com/" },
      { title: "Pramp Free Mock Interviews", url: "https://www.pramp.com/" },
      { title: "Generate AI Resume", url: "/generate-resume" }
    ]
  }
];

const checklistItems = [
  { category: "Profiles & Branding", items: ["Optimized LinkedIn profile with updated headline & projects", "Clean GitHub profile with pinned repositories & live demo links", "LeetCode / Codeforces profile showing active contest participation"] },
  { category: "Technical Assessment Readiness", items: ["Can solve LeetCode medium questions in under 30 minutes", "Clear understanding of SQL joins, subqueries, and indexing", "Ability to explain projects end-to-end including challenges faced"] },
  { category: "Application Strategy", items: ["Customized cold emails for startup founders & recruiters", "Campus placement drive registration & company-specific pattern analysis", "On-campus and off-campus referral networking"] }
];

function PlacementRoadmap() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30">
          Career Guidance
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent">
          Placement Preparation Roadmap
        </h1>
        <p className="mt-4 text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto">
          A step-by-step master guide to cracking Software Engineering campus placements and off-campus roles at top tech companies.
        </p>

        {/* Quick Action Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/generate-resume"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-semibold transition-all shadow-[0_0_20px_rgba(217,70,239,0.4)]"
          >
            Create ATS Resume
          </Link>
          <Link
            to="/internship-calendar"
            className="px-6 py-3 rounded-xl bg-[#111113] hover:bg-gray-800 text-gray-300 font-semibold border border-purple-500/30 transition-all"
          >
            View Internship Calendar
          </Link>
          <Link
            to="/coldemailhub"
            className="px-6 py-3 rounded-xl bg-[#111113] hover:bg-gray-800 text-gray-300 font-semibold border border-purple-500/30 transition-all"
          >
            Cold Email Templates
          </Link>
        </div>
      </div>

      {/* Phase Selector Tabs */}
      <div className="max-w-5xl mx-auto mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {roadmapPhases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPhase(idx)}
              className={`p-4 rounded-xl text-left border transition-all ${
                selectedPhase === idx
                  ? "bg-[#18181c] border-fuchsia-500 shadow-[0_0_25px_rgba(217,70,239,0.25)]"
                  : "bg-[#111113] border-gray-800 hover:border-gray-700 text-gray-400"
              }`}
            >
              <div className="text-2xl mb-1">{phase.icon}</div>
              <div className="text-xs font-semibold text-fuchsia-400 uppercase tracking-wide">
                {phase.timeline}
              </div>
              <div className="text-sm font-bold text-white mt-1 line-clamp-1">
                {phase.phase.split(":")[1] || phase.phase}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active Phase Detailed View */}
      <div className="max-w-5xl mx-auto mt-8">
        {(() => {
          const active = roadmapPhases[selectedPhase];
          return (
            <div className="bg-[#111113] rounded-3xl p-6 sm:p-10 border border-fuchsia-500/20 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-800">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-fuchsia-400">
                    {active.timeline}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    {active.phase}
                  </h2>
                  <p className="text-gray-400 mt-1 text-sm sm:text-base">
                    {active.tagline}
                  </p>
                </div>
                <div className="text-5xl">{active.icon}</div>
              </div>

              {/* Topics Grid */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-purple-300 mb-4">
                  Core Focus Areas
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {active.topics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-[#161619] border border-gray-800 hover:border-purple-500/30 transition-all"
                    >
                      <h4 className="font-semibold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
                        {topic.name}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1 ml-4">
                        {topic.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Resources */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-lg font-semibold text-fuchsia-300 mb-3">
                  Recommended Learning Resources
                </h3>
                <div className="flex flex-wrap gap-3">
                  {active.resources.map((res, i) => (
                    <a
                      key={i}
                      href={res.url}
                      target={res.url.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-[#1b1b20] hover:bg-fuchsia-500/20 text-sm text-gray-300 hover:text-white border border-gray-700/60 transition-all flex items-center gap-2"
                    >
                      <span>🔗</span>
                      <span>{res.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Placement Preparation Checklist */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Pre-Placement Readiness Checklist
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {checklistItems.map((category, idx) => (
            <div
              key={idx}
              className="bg-[#111113] p-6 rounded-2xl border border-gray-800 hover:border-purple-500/30 transition-all shadow-lg"
            >
              <h3 className="text-lg font-bold text-fuchsia-400 mb-4 pb-2 border-b border-gray-800">
                {category.category}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlacementRoadmap;
