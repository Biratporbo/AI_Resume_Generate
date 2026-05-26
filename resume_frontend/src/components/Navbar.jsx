import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openModal, setOpenModal] = useState(false);

  // Helper function to close DaisyUI dropdowns and <details> tags on click
  const closeMenu = (e) => {
    const details = e.currentTarget.closest("details");
    if (details) {
      details.removeAttribute("open");
    }
    // This removes focus, which closes the main DaisyUI mobile dropdown
    if (document.activeElement) {
      document.activeElement.blur();
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-md border-b border-gray-800">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-purple-500/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-fuchsia-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Mobile Menu - Compact */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#0a0a0c] border border-purple-500/20 rounded-2xl z-50 mt-3 w-60 p-2 shadow-2xl shadow-purple-900/20 text-gray-300"
            >
              <li>
                <Link to={"/about"} onClick={closeMenu} className="hover:text-fuchsia-400 hover:bg-purple-500/10 py-2">About</Link>
              </li>
              <li>
                <Link to={"/services"} onClick={closeMenu} className="hover:text-fuchsia-400 hover:bg-purple-500/10 py-2">Services</Link>
              </li>
              
              {/* Mobile Placement Hub */}
              <li>
                <details>
                  <summary className="hover:text-fuchsia-400 py-2 font-medium transition-colors">
                    Placement Hub
                  </summary>
                  <ul className="p-1 bg-[#111113] rounded-lg border border-fuchsia-500/20 mt-1 shadow-inner">
                    <li>
                      <Link 
                        to={"/internship-calendar"} 
                        onClick={closeMenu}
                        className="flex items-center px-3 py-2 hover:bg-fuchsia-500/10 rounded-md transition-all"
                      >
                        <span className="text-fuchsia-300 font-medium text-sm">
                          Internship Calendar
                        </span>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              {/* Mobile Resume Toolkit */}
              <li>
                <details>
                  <summary className="hover:text-purple-400 py-2 font-medium transition-colors">
                    Resume Toolkit
                  </summary>
                  <ul className="p-1 bg-[#111113] rounded-lg border border-purple-500/20 mt-1 shadow-inner">
                    <li>
                      <Link 
                        to={"/atsscore"} 
                        onClick={closeMenu}
                        className="flex items-center px-3 py-2 hover:bg-purple-500/10 rounded-md transition-all"
                      >
                        <span className="text-purple-300 font-medium text-sm">
                          ATS Score Checker
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to={"/atsresumetemplates"} 
                        onClick={closeMenu}
                        className="flex items-center px-3 py-2 hover:bg-purple-500/10 rounded-md transition-all mt-1"
                      >
                        <span className="text-purple-300 font-medium text-sm">
                          ATS Resume Templates
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to={"/coldemailhub"} 
                        onClick={closeMenu}
                        className="flex items-center px-3 py-2 hover:bg-purple-500/10 rounded-md transition-all mt-1"
                      >
                        <span className="text-purple-300 font-medium text-sm">
                          Cold Email Hub
                        </span>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link to={"/contact"} onClick={closeMenu} className="hover:text-fuchsia-400 hover:bg-purple-500/10 py-2">Contact Us</Link>
              </li>
            </ul>
          </div>

          <Link to={"/"} className="btn btn-ghost text-xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            AI Resume Generator
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1 text-gray-300 font-medium">
            <li>
              <Link to={"/about"} className="hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors py-2 px-3">About</Link>
            </li>
            <li>
              <Link to={"/services"} className="hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors py-2 px-3">Services</Link>
            </li>

            {/* Desktop Placement Hub */}
            <li className="relative z-50">
              <details className="group">
                <summary className="hover:text-fuchsia-400 hover:bg-fuchsia-500/10 rounded-lg transition-colors cursor-pointer py-2 px-3">
                  Placement Hub
                </summary>
                <ul className="absolute top-full left-0 mt-4 w-52 p-2 bg-[#111113] border border-fuchsia-500/30 rounded-xl shadow-[0_10px_40px_-10px_rgba(217,70,239,0.3)] before:content-[''] before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 before:bg-[#111113] before:border-l before:border-t before:border-fuchsia-500/30 before:rotate-45">
                  <li>
                    <Link 
                      to={"/internship-calendar"} 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-fuchsia-500/10 rounded-lg transition-all duration-300 group/link"
                    >
                      <span className="text-fuchsia-300 font-medium text-sm group-hover/link:text-fuchsia-200 transition-colors">
                        Internship Calendar
                      </span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            {/* Desktop Resume Toolkit */}
            <li className="relative z-50">
              <details className="group">
                <summary className="hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-colors cursor-pointer py-2 px-3">
                  Resume Toolkit
                </summary>
                <ul className="absolute top-full left-0 mt-4 w-60 p-2 bg-[#111113] border border-purple-500/30 rounded-xl shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] before:content-[''] before:absolute before:-top-2 before:left-6 before:w-4 before:h-4 before:bg-[#111113] before:border-l before:border-t before:border-purple-500/30 before:rotate-45">
                  <li>
                    <Link 
                      to={"/atsscore"} 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-500/10 rounded-lg transition-all duration-300 group/link"
                    >
                      <span className="text-purple-300 font-medium text-sm group-hover/link:text-purple-200 transition-colors">
                        ATS Score Checker
                      </span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link 
                      to={"/atsresumetemplates"} 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-500/10 rounded-lg transition-all duration-300 group/link"
                    >
                      <span className="text-purple-300 font-medium text-sm group-hover/link:text-purple-200 transition-colors">
                        ATS Resume Templates
                      </span>
                    </Link>
                  </li>
                  <li className="mt-1">
                    <Link 
                      to={"/coldemailhub"} 
                      onClick={closeMenu}
                      className="flex items-center px-3 py-2 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-purple-500/10 rounded-lg transition-all duration-300 group/link"
                    >
                      <span className="text-purple-300 font-medium text-sm group-hover/link:text-purple-200 transition-colors">
                        Cold Email Hub
                      </span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <Link to={"/contact"} className="hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors py-2 px-3">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <button
            onClick={() => setOpenModal(true)}
            className="btn btn-sm md:btn-md px-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white border-none rounded-full shadow-lg shadow-purple-600/30 transition-all hover:scale-105"
          >
            Login
          </button>
        </div>
      </div>

      {/* ---------- MODAL ---------- */}
      {openModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100]">
          <div className="bg-[#111113] text-white p-8 rounded-3xl w-full max-w-md shadow-[0_0_50px_rgba(168,85,247,0.15)] border border-purple-500/40 relative mx-4">
            
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent text-center mb-6">
              Welcome Back
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full bg-[#0a0a0c] border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white transition-colors"
              />

              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full bg-[#0a0a0c] border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white transition-colors"
              />

              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-[#0a0a0c] border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 text-white transition-colors"
              />

              <button className="btn bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 w-full border-none rounded-xl text-lg mt-4 shadow-lg shadow-purple-600/20 text-white">
                Submit
              </button>
            </form>

            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;