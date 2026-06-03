import React, { useState } from "react";

function ColdEmailHub() {
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const templates = [
    {
      id: "job-inquiry",
      icon: "📧",
      title: "Job Inquiry Email",
      description: "Craft a concise, enthusiastic email to express interest in a specific role and demonstrate your fit. Research the company’s recent projects or values to make your enthusiasm authentic.",
      subject: "Inquiry About [Job Title] at [Company Name]",
      body: `Dear [Hiring Manager's Name],

I hope this message finds you well. I’m [Your Name], and I’m excited about the [Job Title] opportunity at [Company Name], which I discovered on [Job Board/Company Website]. With my background in [Your Field/Industry] and expertise in [Specific Skills/Relevant Experience], I’m confident in my ability to contribute to your team’s success.

I’m particularly inspired by [Company Name]’s [specific company value, project, or mission, e.g., "commitment to sustainable innovation"]. My experience in [specific skill or achievement] aligns closely with the role’s requirements, and I’m eager to bring my [specific quality, e.g., "problem-solving skills"] to [Company Name].

Please find my resume attached for your review. I’d welcome the opportunity to discuss how my skills can support [Company Name]’s goals. Thank you for your time and consideration.

Best regards,
[Your Full Name]
[Your Contact Information]
[LinkedIn Profile or Portfolio Link, if applicable]`
    },
    {
      id: "internship-inquiry",
      icon: "🎓",
      title: "Internship Inquiry Email",
      description: "Showcase your academic background and enthusiasm for learning. Highlight a specific course, project, or skill that directly relates to the internship, and emphasize transferable skills.",
      subject: "[Internship Title] Opportunity at [Company Name]",
      body: `Dear [Hiring Manager's Name],

I’m [Your Name], a [Your Year, e.g., "junior"] at [Your University], majoring in [Your Major]. I’m reaching out to inquire about potential [Internship Title] opportunities at [Company Name] for [desired time frame, e.g., "Summer 2026"].

I’m inspired by [Company Name]’s [specific project, value, or achievement, e.g., "innovative AI solutions"]. Through my coursework and projects, I’ve developed skills in [relevant skills, e.g., "data analysis and Python programming"], which I believe align with your team’s objectives.

My resume is attached for your review. I’d be thrilled to discuss how I can contribute to [Company Name]’s mission. Thank you for considering my inquiry.

Best regards,
[Your Full Name]
[Your Contact Information]
[LinkedIn Profile or Portfolio Link, if applicable]`
    },
    {
      id: "referral-request",
      icon: "🤝",
      title: "Referral Request Email",
      description: "Politely request a referral while showing appreciation and alignment with the role. Build rapport by referencing a shared connection or mutual interest.",
      subject: "Request for Referral: [Job Title] at [Company Name]",
      body: `Hi [Referrer's Name],

I hope you’re doing well! I’m exploring opportunities in [industry/field] and noticed that [Company Name] is hiring for a [Job Title] role. Given your experience with the company, I’d greatly appreciate it if you’d consider referring me for this position.

I’m excited about [specific aspect of the company/role, e.g., "their focus on user-centric design"], and my experience in [relevant experience or skill] makes me a strong fit. I’ve attached my resume for your reference.

If you’re comfortable, I’d also love to hear your insights about [Company Name]’s culture or the role. No pressure at all, and thank you for considering my request!

Best regards,
[Your Full Name]
[Your Contact Information]
[LinkedIn Profile or Portfolio Link, if applicable]`
    },
    {
      id: "linkedin-connection",
      icon: "🔗",
      title: "LinkedIn Connection Request",
      description: "Make a professional and concise connection request to grow your network. Personalize the message by referencing a specific post or achievement.",
      subject: "Connection Request (Leave blank if adding a note directly on LinkedIn)",
      body: `Hi [Recipient's Name],

I’m [Your Name], and I’m passionate about [industry/field]. I was impressed by your work in [specific area, e.g., "cloud computing solutions"] and would love to connect to learn from your insights.

I’m currently [briefly describe your role or goals, e.g., "a software developer exploring AI-driven projects"]. I look forward to staying in touch and potentially collaborating in the future.

Best regards,
[Your Full Name]`
    },
    {
      id: "follow-up",
      icon: "⏰",
      title: "Follow-Up Email for Job Inquiry",
      description: "Gently follow up to stay on the hiring manager’s radar while reinforcing your interest. Send this 7-10 days after your initial application.",
      subject: "Follow-Up on [Job Title] Application",
      body: `Dear [Hiring Manager's Name],

I hope this email finds you well. I’m following up on my application for the [Job Title] position at [Company Name], submitted on [date]. I remain enthusiastic about the opportunity to contribute to [specific company goal or project, e.g., "your mission to advance renewable energy solutions"].

Please let me know if there’s any additional information I can provide to assist in the decision-making process. I’d be happy to discuss my qualifications further.

Thank you for your time and consideration.

Best regards,
[Your Full Name]
[Your Contact Information]
[LinkedIn Profile or Portfolio Link, if applicable]`
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-white py-24 px-6">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
          Cold Email Hub
        </h1>
        <h2 className="text-2xl text-gray-300 mt-4 font-semibold">
          Cold Email Templates for Jobs, Referrals, & LinkedIn (2026-2027 Guide)
        </h2>
        <p className="text-gray-400 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
          In today’s fast-paced job market, effective communication is key to making a memorable first impression. Whether you're reaching out to a hiring manager, requesting a referral, connecting on LinkedIn, or following up on an application, how you craft your message matters.
        </p>
        <p className="text-fuchsia-400 mt-4 font-medium italic">
          * Always tailor your emails to the specific company, role, and recipient. Generic messages are less likely to stand out or pass ATS.
        </p>
      </div>

      {/* Guide Index Grid */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: "📧", title: "Job Inquiry Emails", desc: "Capture attention & showcase your enthusiasm." },
          { icon: "🎓", title: "Internship Inquiry", desc: "Highlight your academic & project experience." },
          { icon: "🤝", title: "Referral Requests", desc: "Request referrals professionally & tactfully." },
          { icon: "🔗", title: "LinkedIn Requests", desc: "Build meaningful professional connections." },
          { icon: "⏰", title: "Follow-Up Emails", desc: "Stay top-of-mind without being intrusive." },
          { icon: "📄", title: "Cover Letters", desc: "Present your skills and passion persuasively." }
        ].map((item, index) => (
          <div key={index} className="bg-[#111113] p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/60 transition-colors shadow-lg">
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Templates Section */}
      <div className="max-w-5xl mx-auto mt-24 space-y-12">
        {templates.map((template) => (
          <div key={template.id} className="bg-[#111113] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl transition hover:border-fuchsia-500/30">
            
            {/* Card Header */}
            <div className="p-8 border-b border-gray-800 bg-gradient-to-b from-[#16161a] to-transparent">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{template.icon}</span>
                <h3 className="text-2xl font-bold text-fuchsia-400">{template.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                {template.description}
              </p>
            </div>

            {/* Email Content Box */}
            <div className="p-8 bg-[#0a0a0c]">
              <div className="mb-6">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">Subject Line</span>
                <div className="bg-[#16161a] border border-purple-500/20 px-4 py-3 rounded-lg text-purple-300 font-medium">
                  {template.subject}
                </div>
              </div>

              <div className="relative group">
                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider block mb-2">Email Body</span>
                <div className="bg-[#16161a] border border-gray-800 rounded-xl p-6 relative">
                  
                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(template.body, template.id)}
                    className="absolute top-4 right-4 bg-gray-800 hover:bg-fuchsia-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md flex items-center gap-2"
                  >
                    {copiedId === template.id ? (
                      <><span className="text-green-400">✓</span> Copied!</>
                    ) : (
                      <>📋 Copy Text</>
                    )}
                  </button>

                  <pre className="text-gray-300 whitespace-pre-wrap font-sans text-base leading-relaxed pt-2">
                    {template.body}
                  </pre>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default ColdEmailHub;