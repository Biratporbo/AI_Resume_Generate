import React from "react";
import { Link } from "react-router-dom";

function ATSResumeTemplates() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-6">
      
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          ATS-Friendly Resume Templates
        </h1>
        <h2 className="text-2xl text-gray-300 mt-4 font-semibold">
          Your Guide to Landing Interviews
        </h2>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed">
          In today's competitive job market, crafting a resume that passes through Applicant Tracking Systems (ATS) is crucial. ATS software scans resumes for keywords, formatting, and structure to filter candidates before a human recruiter reviews them. 
        </p>
      </div>

      {/* WHY CHOOSE ATS (Grid Pattern) */}
      <div className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-fuchsia-500 pl-4">
          Why Choose ATS-Friendly Templates?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Simple Structure", desc: "Avoid complex graphics, tables, or headers/footers that confuse ATS.", icon: "📄" },
            { title: "Standard Fonts", desc: "Use clean fonts like Arial, Times New Roman, or Garamond for readability.", icon: "🔤" },
            { title: "Keyword Optimization", desc: "Easily incorporate job-specific keywords from the job description.", icon: "🎯" },
            { title: "Clear Headings", desc: "Standard section titles like 'Work Experience' and 'Education'.", icon: "📑" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#111113] border border-purple-500/20 p-6 rounded-2xl hover:border-purple-500/60 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-purple-900/10">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h4 className="text-lg font-bold text-purple-300 mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION BANNER */}
      <div className="max-w-6xl mx-auto mt-16 relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <div className="relative bg-[#111113] border border-purple-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Curious about your current resume?</h3>
            <p className="text-gray-400 text-lg">Find out if your resume is optimized to pass the bots.</p>
          </div>
          <Link 
            to="/atsscore" 
            className="mt-6 md:mt-0 px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white font-bold rounded-full shadow-lg shadow-purple-500/30 transition-all hover:scale-105 whitespace-nowrap"
          >
            Check ATS Score Checker ➔
          </Link>
        </div>
      </div>

      {/* TOP LATEX TEMPLATES SECTION */}
      <div className="max-w-6xl mx-auto mt-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-4">Top LaTeX-Based Resume Templates</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            LaTeX templates produce clean, professional documents with consistent formatting, making them highly effective for ATS parsing.
          </p>
        </div>

        {/* ONE COLUMN TEMPLATES */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-fuchsia-400 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-fuchsia-500 rounded-full"></span>
            One-Column Resume Templates
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Entry Level */}
            <div className="bg-[#111113] p-8 rounded-3xl border border-gray-800 hover:border-fuchsia-500/50 transition-colors flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full group-hover:bg-fuchsia-500/20 transition-all"></div>
              <h4 className="text-xl font-bold text-white mb-3">Entry-Level Resume Template</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                This clean and simple one-column resume template is perfect for entry-level candidates or those transitioning to new industries. Its minimalist design ensures ATS compatibility while presenting your qualifications clearly.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Single-column layout for easy parsing.</li>
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Standard sections for education, experience, and skills.</li>
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Customizable for various industries.</li>
              </ul>
              <a href="https://www.overleaf.com/latex/templates/entry-level-resume-template/xzswwssvhvqr.pdf/" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 border border-fuchsia-500 text-fuchsia-400 rounded-xl hover:bg-fuchsia-500/10 font-semibold transition">
                View on Overleaf
              </a>
            </div>

            {/* Jake's Resume */}
            <div className="bg-[#111113] p-8 rounded-3xl border border-gray-800 hover:border-fuchsia-500/50 transition-colors flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full group-hover:bg-fuchsia-500/20 transition-all"></div>
              <h4 className="text-xl font-bold text-white mb-3">Jake's Resume (Anonymous)</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                A modern and minimalistic one-column resume template, ideal for professionals seeking a sleek design. This template balances aesthetics with functionality, ensuring ATS software can easily read your content.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Clear section headings for ATS parsing.</li>
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Professional yet simple design.</li>
                <li className="flex items-start gap-2"><span className="text-fuchsia-400">✓</span> Easy to customize for different career levels.</li>
              </ul>
              <a href="https://www.overleaf.com/latex/templates/jakes-resume-anonymous/cstpnrbkhndn.pdf/" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 border border-fuchsia-500 text-fuchsia-400 rounded-xl hover:bg-fuchsia-500/10 font-semibold transition">
                View on Overleaf
              </a>
            </div>
          </div>
        </div>

        {/* TWO COLUMN TEMPLATES */}
        <div>
          <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
            Two-Column Resume Templates
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Deedy CV */}
            <div className="bg-[#111113] p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-colors flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
              <h4 className="text-xl font-bold text-white mb-3">Deedy CV</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                This sleek and professional two-column template emphasizes readability. While two-column layouts can challenge ATS systems, this template is designed with simplicity in mind to maintain compatibility.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> Clean separation of sections for skills and experience.</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> ATS-friendly formatting with minimal graphics.</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> Ideal for tech professionals or creative industries.</li>
              </ul>
              <a href="https://www.overleaf.com/latex/templates/deedy-cv/bjryvfsjdyxz.pdf/" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500/10 font-semibold transition">
                View on Overleaf
              </a>
            </div>

            {/* PlushCV */}
            <div className="bg-[#111113] p-8 rounded-3xl border border-gray-800 hover:border-purple-500/50 transition-colors flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full group-hover:bg-purple-500/20 transition-all"></div>
              <h4 className="text-xl font-bold text-white mb-3">PlushCV</h4>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                A stylish and elegant two-column resume template with a modern design. PlushCV combines visual appeal with ATS-friendly formatting, making it suitable for a wide range of industries.
              </p>
              <ul className="space-y-2 mb-8 text-sm text-gray-300">
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> Balanced two-column structure for efficient space.</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> Clear, machine-readable fonts and headings.</li>
                <li className="flex items-start gap-2"><span className="text-purple-400">✓</span> Highly customizable color schemes.</li>
              </ul>
              <a href="https://www.overleaf.com/latex/templates/plushcv/jybpnsftmdkf.pdf/" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-3 border border-purple-500 text-purple-400 rounded-xl hover:bg-purple-500/10 font-semibold transition">
                View on Overleaf
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TIPS SECTION */}
      <div className="max-w-6xl mx-auto mt-24 bg-[#0d0d10] border-t border-gray-800 pt-16">
        <h3 className="text-3xl font-bold text-center text-white mb-10">Tips for Customizing Your ATS-Friendly Resume</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-[#131316] rounded-2xl border border-gray-800 hover:border-fuchsia-500/30 transition">
            <h4 className="text-fuchsia-400 font-bold mb-2">1. Tailor Keywords</h4>
            <p className="text-sm text-gray-400">Analyze the job description and incorporate relevant keywords directly into your resume and cover letter.</p>
          </div>
          <div className="p-6 bg-[#131316] rounded-2xl border border-gray-800 hover:border-purple-500/30 transition">
            <h4 className="text-purple-400 font-bold mb-2">2. Avoid Complex Formatting</h4>
            <p className="text-sm text-gray-400">Remove images, logos, or intricate designs that may confuse or break ATS parsing software.</p>
          </div>
          <div className="p-6 bg-[#131316] rounded-2xl border border-gray-800 hover:border-fuchsia-500/30 transition">
            <h4 className="text-fuchsia-400 font-bold mb-2">3. Standard File Formats</h4>
            <p className="text-sm text-gray-400">Save your resume as a standard PDF or .docx file to ensure 100% compatibility with most ATS systems.</p>
          </div>
          <div className="p-6 bg-[#131316] rounded-2xl border border-gray-800 hover:border-purple-500/30 transition">
            <h4 className="text-purple-400 font-bold mb-2">4. Test Your Resume</h4>
            <p className="text-sm text-gray-400">Use free online ATS resume checkers to verify that your layout and text are parsed correctly.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ATSResumeTemplates;