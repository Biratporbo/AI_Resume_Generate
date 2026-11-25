import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Search,
  ExternalLink,
  Github,
  Brain,
  Globe,
  Cloud,
  BarChart3,
  Shield,
  Layers,
  Smartphone,
  Server,
  Blocks,
  Wrench,
  Star,
  X,
  ArrowRight
} from "lucide-react";

const repoCategories = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    icon: Brain,
    items: [
      { name: "LLaVA", desc: "Large Language and Vision Assistant", badge: "Editor's Pick", url: "https://github.com/haotian-liu/LLaVA" },
      { name: "CLIP", desc: "Contrastive Language–Image Pretraining", url: "https://github.com/openai/CLIP" },
      { name: "Transformers", desc: "State-of-the-art NLP & multimodal models", badge: "Featured", url: "https://github.com/huggingface/transformers" },
      { name: "Awesome Multimodal ML", desc: "Awesome multimodal ML papers & repos", url: "https://github.com/pliang279/awesome-multimodal-ml" },
      { name: "RAG from Scratch", desc: "Build RAG pipelines from scratch", url: "https://github.com/langchain-ai/rag-from-scratch" },
      { name: "Awesome LLM Apps", desc: "Collection of production LLM applications", url: "https://github.com/Shubhamsaboo/awesome-llm-apps" },
      { name: "Awesome Machine Learning", desc: "Curated list of ML frameworks & libraries", badge: "Featured", url: "https://github.com/josephmisiti/awesome-machine-learning" },
      { name: "Awesome Computer Vision", desc: "Curated list of computer vision resources", url: "https://github.com/jbhuang0604/awesome-computer-vision" },
      { name: "AI Engineering Hub", desc: "Resources for AI Engineers and ML practitioners", url: "https://github.com/patchy631/ai-engineering-hub" },
      { name: "Qwen", desc: "Official Qwen LLM repository", badge: "Editor's Pick", url: "https://github.com/QwenLM/Qwen3" },
      { name: "Qwen Fine Tuning Examples", desc: "Fine-tuning examples for Qwen models", url: "https://github.com/QwenLM/Qwen/tree/main/examples" },
      { name: "LLM Engineer Handbook", desc: "Complete handbook for LLM engineering", url: "https://github.com/SylphAI-Inc/LLM-engineer-handbook" },
      { name: "Spinning Up in Deep RL", desc: "OpenAI's deep reinforcement learning resource", url: "https://github.com/openai/spinningup" },
      { name: "Reinforcement Learning: An Introduction", desc: "Code for Sutton & Barto's RL book", url: "https://github.com/ShangtongZhang/reinforcement-learning-an-introduction" },
      { name: "PyTorch Deep Learning", desc: "Learn PyTorch for deep learning", url: "https://github.com/mrdbourke/pytorch-deep-learning" },
      { name: "MCP Python SDK", desc: "Model Context Protocol Python SDK", url: "https://github.com/modelcontextprotocol/python-sdk" },
      { name: "Awesome Generative AI Guide", desc: "Comprehensive guide to generative AI and LLMs", url: "https://github.com/aishwaryanr/awesome-generative-ai-guide" }
    ]
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    items: [
      { name: "Become A Full-Stack Web Developer", desc: "12-month full-stack roadmap & resources", url: "https://github.com/bmorelli25/Become-A-Full-Stack-Web-Developer" },
      { name: "Next.js Boilerplate", desc: "Production-ready Next.js 14+ boilerplate", badge: "Editor's Pick", url: "https://github.com/ixartz/Next-js-Boilerplate" },
      { name: "Next.js Examples", desc: "Official Next.js examples", badge: "Featured", url: "https://github.com/vercel/next.js/tree/canary/examples" },
      { name: "Awesome JavaScript", desc: "Curated awesome JavaScript libraries", badge: "Featured", url: "https://github.com/sorrycc/awesome-javascript" },
      { name: "Awesome Node.js", desc: "Curated awesome Node.js packages", badge: "Featured", url: "https://github.com/sindresorhus/awesome-nodejs" },
      { name: "Awesome PHP", desc: "Curated awesome PHP libraries", url: "https://github.com/ziadoz/awesome-php" },
      { name: "Awesome Fullstack", desc: "Resources for full-stack developers", url: "https://github.com/kevindeasis/awesome-fullstack" },
      { name: "Awesome Next.js", desc: "Curated awesome Next.js resources", url: "https://github.com/unicodeveloper/awesome-nextjs" },
      { name: "Awesome Shopify", desc: "Curated Shopify resources for developers", url: "https://github.com/julionc/awesome-shopify" },
      { name: "Awesome Codebases", desc: "Well-structured open source codebases", url: "https://github.com/alan2207/awesome-codebases" },
      { name: "n8n YouTube Channel Advanced RSS Feeds Generator", desc: "N8N workflow for YouTube automation", url: "https://github.com/Automations-Project/n8n-youtube-channel-advanced-rss-feeds-generator" }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    icon: Cloud,
    items: [
      { name: "DevOps Roadmap", desc: "Complete DevOps learning roadmap", badge: "Featured", url: "https://github.com/milanm/DevOps-Roadmap" },
      { name: "90DaysOfDevOps", desc: "Learn DevOps in 90 days with challenges", url: "https://github.com/MichaelCade/90DaysOfDevOps" },
      { name: "DevOps Exercises", desc: "1000+ DevOps practice exercises", badge: "Featured", url: "https://github.com/bregman-arie/devops-exercises" },
      { name: "Kubelabs", desc: "Kubernetes hands-on labs & workshops", url: "https://github.com/collabnix/kubelabs" },
      { name: "Terraform", desc: "Official Terraform repository", badge: "Editor's Pick", url: "https://github.com/hashicorp/terraform" },
      { name: "Awesome Terraform", desc: "Curated Terraform resources", url: "https://github.com/shuaibiyy/awesome-tf" },
      { name: "Azure Cloud Data Engineering", desc: "Azure Data Engineering projects & notes", url: "https://github.com/rritec/Azure-Cloud-Data-Engineering" },
      { name: "Awesome Kubernetes Resources", desc: "Curated Kubernetes resources", url: "https://github.com/tomhuang12/awesome-k8s-resources" },
      { name: "Awesome AWS", desc: "Curated AWS libraries & tools", url: "https://github.com/donnemartin/awesome-aws" },
      { name: "Terraform AWS Modules", desc: "Collection of Terraform AWS modules", url: "https://github.com/terraform-aws-modules" }
    ]
  },
  {
    id: "data-science",
    title: "Data Science",
    icon: BarChart3,
    items: [
      { name: "Developer Roadmap", desc: "Roadmap to becoming a developer (includes DS/ML)", badge: "Featured", url: "https://github.com/kamranahmedse/developer-roadmap" },
      { name: "Hands-On Machine Learning", desc: "Hands-On ML with Scikit-Learn & TensorFlow", badge: "Editor's Pick", url: "https://github.com/ageron/handson-ml2" },
      { name: "ML Datasets", desc: "Collection of datasets for ML practice", url: "https://github.com/jbrownlee/Datasets" },
      { name: "Data Science Projects", desc: "End-to-end data science projects", url: "https://github.com/ProjectProRepo/data-science-projects" },
      { name: "MLAlgorithms", desc: "ML algorithms from scratch in Python", url: "https://github.com/rushter/MLAlgorithms" },
      { name: "Hands-On Unsupervised Learning", desc: "Unsupervised learning notebooks", url: "https://github.com/aapatel09/handson-unsupervised-learning" },
      { name: "Stock Prediction using Deep Learning", desc: "Stock market prediction with LSTM", url: "https://github.com/DeepthiSudharsan/Stock-Prediction-using-Deep-Learning" },
      { name: "Awesome Public Real Time Datasets", desc: "Curated real-time datasets", url: "https://github.com/bytewax/awesome-public-real-time-datasets" },
      { name: "Awesome GIS", desc: "Awesome Geographic Information System resources", url: "https://github.com/sshuair/awesome-gis" },
      { name: "SCENT", desc: "Single-cell gene expression analysis tool", url: "https://github.com/immunogenomics/SCENT" },
      { name: "AWS Data Engineer Associate Notes", desc: "Study notes for AWS Data Engineer cert", url: "https://github.com/lauragalera/aws-data-engineer-associate-notes" },
      { name: "Data Analytics Projects", desc: "Collection of data analytics projects", url: "https://github.com/CICIFLY/Data-Analytics-Projects" },
      { name: "Awesome Data Science", desc: "Curated data science resources", url: "https://github.com/academic/awesome-datascience" },
      { name: "DSAI Gate", desc: "Data Science & AI resources for GATE exam", url: "https://github.com/DS-AI-GATE/dsai-gate" },
      { name: "Graph2Plan", desc: "Graph-based planning with GNNs", url: "https://github.com/HanHan55/Graph2plan" },
      { name: "Residential Floor Plan Generation using GNNs", desc: "Floor plan generation with GNNs", url: "https://github.com/mo7amed7assan1911/Floor_Plan_Generation_using_GNNs" }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: Shield,
    items: [
      { name: "Awesome Hacking", desc: "Awesome hacking resources list", badge: "Featured", url: "https://github.com/Hack-with-Github/Awesome-Hacking" },
      { name: "PayloadsAllTheThings", desc: "Payloads & bypasses for every scenario", url: "https://github.com/swisskyrepo/PayloadsAllTheThings" },
      { name: "Reverse Engineering", desc: "Complete reverse engineering tutorial", url: "https://github.com/mytechnotalent/Reverse-Engineering" },
      { name: "Awesome Ransomware", desc: "Curated ransomware resources", url: "https://github.com/bbbbbrie/awesome-ransomware" },
      { name: "Ethical Hacking Tutorials", desc: "Complete ethical hacking tutorials", url: "https://github.com/abhinavkakku/Ethical-Hacking-Tutorials" },
      { name: "Free Cybersecurity Resources", desc: "Free cybersecurity learning resources", url: "https://github.com/LetsDefend/Free-Cybersecurity-Resources" },
      { name: "The Art of Hacking (h4cker)", desc: "Ethical hacking & pentesting resources", url: "https://github.com/The-Art-of-Hacking/h4cker" }
    ]
  },
  {
    id: "system-design",
    title: "System Design & Interviews",
    icon: Layers,
    items: [
      { name: "System Design Primer", desc: "Learn how to design large-scale systems", badge: "Featured", url: "https://github.com/donnemartin/system-design-primer" },
      { name: "MERN Interview Sets", desc: "MERN stack interview questions", url: "https://github.com/shubhdhungana/mern-interview-sets-pdf" },
      { name: "CS Fundamentals for Interviews", desc: "Computer science video courses for interviews", url: "https://github.com/Developer-Y/cs-video-courses" }
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile Development",
    icon: Smartphone,
    items: [
      { name: "Awesome React Native", desc: "Awesome React Native tools & resources", url: "https://github.com/jondot/awesome-react-native" },
      { name: "Flutter Course Resources", desc: "Resources for learning Flutter", url: "https://github.com/londonappbrewery/Flutter-Course-Resources" }
    ]
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    icon: Server,
    items: [
      { name: "Awesome Spring Boot", desc: "Curated Spring Boot resources", url: "https://github.com/RameshMF/awesome-spring-boot" },
      { name: "Java Interview Questions", desc: "Comprehensive Java interview questions", url: "https://github.com/learning-zone/java-basics" },
      { name: "Spring Boot Interview Questions", desc: "Spring Boot interview Q&A", url: "https://github.com/anjitagargi/JavaSpringBoot_Interview_Questions" },
      { name: "SQL Interview Questions", desc: "SQL basics and interview questions", url: "https://github.com/learning-zone/sql-basics" },
      { name: "Awesome SQL", desc: "Curated SQL tools and resources", url: "https://github.com/danhuss/awesome-sql" }
    ]
  },
  {
    id: "web3",
    title: "Blockchain & Web3",
    icon: Blocks,
    items: [
      { name: "Awesome Solana", desc: "Curated Solana resources", url: "https://github.com/avareum/awesome-solana" },
      { name: "Awesome Blockchain", desc: "Curated blockchain resources and papers", url: "https://github.com/yjjnls/awesome-blockchain" },
      { name: "Free Web3 Resources", desc: "Free Web3 & blockchain learning resources", url: "https://github.com/FrancescoXX/free-Web3-resources" }
    ]
  },
  {
    id: "tools-oss",
    title: "Programming Tools & Open Source",
    icon: Wrench,
    items: [
      { name: "Crafting Interpreters", desc: "Build your own interpreter (classic book)", url: "https://github.com/munificent/craftinginterpreters" },
      { name: "Awesome Python", desc: "Curated awesome Python libraries", badge: "Featured", url: "https://github.com/vinta/awesome-python" },
      { name: "Bash Handbook", desc: "Bash scripting guide", url: "https://github.com/denysdovhan/bash-handbook" },
      { name: "Python for DevOps", desc: "Python concepts for DevOps engineers", url: "https://github.com/iam-veeramalla/python-for-devops" },
      { name: "Docker Cheat Sheet", desc: "Ultimate Docker cheat sheet", url: "https://github.com/wsargent/docker-cheat-sheet" },
      { name: "Awesome DSA Resource", desc: "Comprehensive DSA resources", url: "https://github.com/avinash201199/Awesome-DSA-Resource" },
      { name: "SystemVerilog Tutorial", desc: "SystemVerilog tutorial for hardware design", url: "https://github.com/ARC-Lab-UF/sv-tutorial" },
      { name: "Pytest", desc: "Official pytest framework", url: "https://github.com/pytest-dev/pytest" }
    ]
  }
];

function GitHubRepos() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const totalRepos = useMemo(
    () => repoCategories.reduce((sum, cat) => sum + cat.items.length, 0),
    []
  );

  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return repoCategories
      .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
      .map((cat) => {
        const filteredItems = query
          ? cat.items.filter(
              (item) =>
                item.name.toLowerCase().includes(query) ||
                item.desc.toLowerCase().includes(query) ||
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
            <Github className="w-4 h-4 text-fuchsia-400" />
            <span>Open-Source Directory • {totalRepos}+ Curated Repositories</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(217,70,239,0.35)]">
            Awesome GitHub Repositories for Developers
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Curated with care, this is your go-to resource for the best open-source GitHub repositories. Whether you're breaking into AI and machine learning, sharpening your DevOps skills, diving deep into data science, mastering web development, or exploring cybersecurity and system design, you'll find battle-tested, highly-starred projects and learning resources here.
          </p>

          <p className="mt-3 text-sm text-gray-400 max-w-2xl mx-auto">
            Grouped by category for easy navigation. Bookmark your favorites, star them on GitHub, fork to experiment, and contribute to give back to the community. Happy exploring! 🚀
          </p>

          {/* Hero CTA Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <Link
              to="/ultimate-developer-playlists"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_30px_rgba(217,70,239,0.35)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Explore Developer Playlists</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/placement-roadmap"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Placement Roadmap</span>
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
                placeholder="Search repositories by name, topic, or description (e.g., RAG, Next.js, Terraform, Spring Boot)..."
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
              Showing <span className="text-fuchsia-400 font-bold">{visibleCount}</span> of {totalRepos} repos
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
              All Categories ({totalRepos})
            </button>

            {repoCategories.map((cat) => {
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
                  <span className={`text-[10px] px-1.5 rounded-full ${isActive ? "bg-white/20 text-white" : "bg-white/5 text-gray-400"}`}>
                    {cat.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= REPOSITORY CATEGORIES GRID ================= */}
        {filteredCategories.length === 0 ? (
          <div className="p-12 rounded-3xl backdrop-blur-2xl bg-[#111116]/80 border border-white/10 text-center">
            <p className="text-lg font-bold text-white">No matching repositories found</p>
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
                      {category.items.length} Repositories
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {category.items.map((repo, idx) => (
                      <a
                        key={`${category.id}-${idx}`}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-5 rounded-2xl backdrop-blur-xl bg-white/[0.02] border border-white/[0.07] hover:border-fuchsia-500/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between gap-3 hover:-translate-y-0.5 shadow-md"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-fuchsia-500/30 flex items-center justify-center shrink-0 group-hover:from-purple-600 group-hover:to-fuchsia-600 transition-all">
                                <Github className="w-4 h-4 text-fuchsia-300 group-hover:text-white" />
                              </div>
                              <h3 className="text-sm font-bold text-white group-hover:text-fuchsia-300 transition-colors truncate">
                                {repo.name}
                              </h3>
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-fuchsia-300 shrink-0 transition-colors mt-1" />
                          </div>

                          <p className="mt-3 text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                            {repo.desc}
                          </p>
                        </div>

                        {repo.badge && (
                          <div className="pt-2 border-t border-white/[0.05]">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                                repo.badge === "Editor's Pick"
                                  ? "bg-fuchsia-500/15 border-fuchsia-500/40 text-fuchsia-300"
                                  : "bg-purple-500/15 border-purple-500/40 text-purple-300"
                              }`}
                            >
                              <Star className="w-2.5 h-2.5 fill-current" />
                              {repo.badge}
                            </span>
                          </div>
                        )}
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
            Enjoy the List & Keep Building Awesome Things!
          </h3>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-base sm:text-lg font-light">
            Turn your open-source contributions and side projects into standout interview stories with our AI Resume Builder.
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
              to="/atsscore"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl backdrop-blur-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 hover:border-purple-400/50 transition-all hover:-translate-y-0.5"
            >
              <span>Analyze Resume ATS Score</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubRepos;
