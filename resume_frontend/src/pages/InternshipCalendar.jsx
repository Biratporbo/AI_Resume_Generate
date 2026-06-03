import React, { useState } from "react";

// --- DATA ARRAYS ---
const winterInternships = [
  { company: "Google", role: "Application Engineering Intern", dates: "Sept 17, 2025", duration: "22–24 weeks", stipend: "Competitive", eligibility: "CS/IT students", link: "https://www.foundit.in/career-advice/google-winterinternshipapplication-engineeering-apply/" },
  { company: "Infosys Winternship", role: "Engineering Projects", dates: "Campus nomination", duration: "76 days", stipend: "Paid", eligibility: "CS/IT students", link: "https://www.infosys.com/careers/internships.html" },
  { company: "ISRO/IIRS", role: "Remote Sensing Internship", dates: "Aug–Oct 2025", duration: "45 days minimum", stipend: "Unpaid", eligibility: "UG/PG in Science/Tech", link: "https://www.iirs.gov.in/content/external-student-internship" },
  { company: "PM Internship Scheme", role: "Govt-backed internships", dates: "Sept 2025 onwards", duration: "Varies", stipend: "₹5,000/month + allowance", eligibility: "Age 21–24 years", link: "https://aicteinternshipupdates.com/pm-internship-scheme-2026-applyonline/" }
];

const summerInternships = [
  { company: "Google STEP", role: "Software Engineering", dates: "Oct–Nov 2025", duration: "8–10 weeks", stipend: "Competitive", eligibility: "CS/IT UG students", link: "https://thenewviews.com/google-step-internship/" },
  { company: "Microsoft India", role: "Tech / PM / Design", dates: "Dec 2025 – Jan 2026", duration: "8–12 weeks", stipend: "Competitive", eligibility: "Penultimate year students", link: "https://tnpofficer.com/internship/" },
  { company: "Amazon WOW", role: "Software Development", dates: "Oct 2025", duration: "6 months or summer", stipend: "Competitive", eligibility: "Women in tech", link: "https://jobsnet.in/2026-batch/" },
  { company: "Goldman Sachs", role: "Engineering Summer Analyst", dates: "Sept–Nov 2025", duration: "9–10 weeks", stipend: "Competitive", eligibility: "Final-year engineering students", link: "https://www.talentd.in/articles/goldman-sachs-summer-internship-program-2026-india-engineering-division" },
  { company: "Cisco", role: "Network & Software Intern", dates: "Aug 2025", duration: "6 months", stipend: "₹35,000/month + perks", eligibility: "≥70% marks, CSE/IT/ECE", link: "https://techinternshipnews.com/cisco-internship-eligibility-stipend-online-application-process" },
  { company: "PayPal", role: "Software Engineer Intern", dates: "Dec 2025 – Feb 2026", duration: "Summer 2026", stipend: "Paid", eligibility: "CS students graduating 2027", link: "https://www.foundit.in/career-advice/paypal-summer-internship-apply/" },
  { company: "Visa", role: "Payments & Tech Internship", dates: "Sept 2025 onwards", duration: "12 weeks", stipend: "Paid", eligibility: "UG/PG students", link: "https://thenewviews.com/visasummer-internship/" },
  { company: "Barclays", role: "Finance & Tech Roles", dates: "Jan–Feb 2026", duration: "8–12 weeks", stipend: "₹39,000–₹70,000/month", eligibility: "Finance/Tech grads", link: "https://www.coursejoiner.com/internship/free-summer-interns-2026-70k/" },
  { company: "TCS", role: "Research Internship", dates: "Rolling", duration: "6–18 weeks", stipend: "Varies", eligibility: "Final-year BE/BTech, MTech, PhD", link: "https://www.tcs.com/careers/india/internship" },
  { company: "Infosys InStep", role: "Global Internship", dates: "Rolling", duration: "8 weeks", stipend: "Paid", eligibility: "Engineering/Management students", link: "https://www.infosys.com/careers/internships.html" },
  { company: "ISRO", role: "Research/Space Science", dates: "March 2026", duration: "6 weeks", stipend: "Unpaid", eligibility: "UG/PG in Science/Tech", link: "https://www.isro.gov.in/InternshipAndProjects.html" },
  { company: "DRDO", role: "Research & Development", dates: "Feb–March 2026", duration: "6 weeks", stipend: "Unpaid", eligibility: "Engineering students", link: "https://www.drdo.gov.in" },
  { company: "Deloitte India", role: "Consulting, Audit", dates: "Jan–March 2026", duration: "6–8 weeks", stipend: "Paid", eligibility: "Management/Engineering", link: "https://thenewviews.com/summer-internship/" },
  { company: "BCG", role: "Consulting Intern", dates: "Campus cycles", duration: "8–10 weeks", stipend: "Competitive", eligibility: "UG/PG/MBA", link: "https://careers.bcg.com/global/en/internship-opportunities" },
  { company: "EY", role: "Advisory/Assurance Intern", dates: "Campus cycles", duration: "8 weeks", stipend: "Paid", eligibility: "Commerce/Finance/Tech", link: "https://www.ey.com/en_in/careers/student-entry-level-programs" },
  { company: "PwC", role: "Tech Consulting Intern", dates: "Campus cycles", duration: "8–10 weeks", stipend: "Paid", eligibility: "Engineering/Management", link: "https://in.linkedin.com/jobs/view/acceleration-center-advisory-b-tech-intern-2026-at-pwcacceleration-centerindia-4315953178" }
];

function InternshipCalendar() {
  // State to track which table to show: 'summer', 'winter', or null
  const [activeTable, setActiveTable] = useState(null);

  // Helper function to render the structured table
  const renderTable = (data, title) => (
    <div className="mt-12 w-full max-w-6xl bg-[#111113] p-6 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
      <h3 className="text-2xl font-bold text-white mb-6 pl-2 border-l-4 border-fuchsia-500">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-300">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800/50">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Company</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Application Dates</th>
              <th className="px-4 py-3">Duration</th>
              <th className="px-4 py-3">Stipend</th>
              <th className="px-4 py-3">Eligibility</th>
              <th className="px-4 py-3 rounded-tr-lg">Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors">
                <td className="px-4 py-4 font-semibold text-white">{item.company}</td>
                <td className="px-4 py-4">{item.role}</td>
                <td className="px-4 py-4">{item.dates}</td>
                <td className="px-4 py-4">{item.duration}</td>
                <td className="px-4 py-4">{item.stipend}</td>
                <td className="px-4 py-4">{item.eligibility}</td>
                <td className="px-4 py-4">
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-fuchsia-400 hover:text-fuchsia-300 underline underline-offset-2">
                    Apply Here
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-6 flex flex-col items-center">
      
      {/* Headings */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
        Internship Calendar
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-6 text-gray-200">
        2026 - India
      </h2>
      <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto text-lg md:text-xl">
        Comprehensive Guide: Summer & Winter Internships with Details
      </p>

      {/* PDF / Image Section */}
      <div className="mt-16 w-full max-w-4xl bg-[#111113] p-6 md:p-8 rounded-3xl border border-purple-500/30 flex flex-col items-center shadow-2xl shadow-purple-900/10">
        <h3 className="text-xl font-semibold text-purple-300 mb-6">
          Official Internship Guidelines
        </h3>
        <div className="w-full max-w-2xl rounded-xl overflow-hidden border border-gray-700 bg-white mb-8 flex justify-center">
          <img 
            src="/image_07284b.png" 
            alt="Internship Calendar 2026 India"
            className="w-full h-auto object-contain"
          />
        </div>
        <a 
          href="/1767765476510.pdf" 
          download="Internship_Guide_2026.pdf"
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-lg"
        >
          Download Full PDF
        </a>
      </div>

      {/* Clickable Information Cards */}
      <div className="max-w-5xl w-full mt-20 grid md:grid-cols-2 gap-8">
        {/* Summer Card */}
        <div 
          onClick={() => setActiveTable(activeTable === 'summer' ? null : 'summer')}
          className={`bg-[#111113] p-8 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 ${activeTable === 'summer' ? 'border-purple-500 shadow-lg shadow-purple-500/20' : 'border-purple-500/20 hover:border-purple-500/50'}`}
        >
          <h2 className="text-2xl font-bold text-purple-400">
            Summer Internship
          </h2>
          <p className="text-gray-400 mt-3">
            Applications generally open from January to March. <br/>
            <span className="text-purple-300/70 text-sm mt-2 inline-block font-medium">Click to {activeTable === 'summer' ? 'hide' : 'view'} details</span>
          </p>
        </div>

        {/* Winter Card */}
        <div 
          onClick={() => setActiveTable(activeTable === 'winter' ? null : 'winter')}
          className={`bg-[#111113] p-8 rounded-2xl border cursor-pointer transition-all transform hover:-translate-y-1 ${activeTable === 'winter' ? 'border-fuchsia-500 shadow-lg shadow-fuchsia-500/20' : 'border-fuchsia-500/20 hover:border-fuchsia-500/50'}`}
        >
          <h2 className="text-2xl font-bold text-fuchsia-400">
            Winter Internship
          </h2>
          <p className="text-gray-400 mt-3">
            Applications generally open from September to November. <br/>
            <span className="text-fuchsia-300/70 text-sm mt-2 inline-block font-medium">Click to {activeTable === 'winter' ? 'hide' : 'view'} details</span>
          </p>
        </div>
      </div>

      {/* Conditionally Render Tables based on State */}
      {activeTable === 'summer' && renderTable(summerInternships, "Summer Internships (May–July 2026)")}
      {activeTable === 'winter' && renderTable(winterInternships, "Winter Internships (Jan–April 2026)")}

    </div>
  );
}

export default InternshipCalendar;