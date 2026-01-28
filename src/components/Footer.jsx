// import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1E222B] text-gray-400 pt-20 pb-6">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* TOP GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
//           {/* LOGO + COMPANY */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 text-white font-semibold text-xl">
//               <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
//                 S
//               </div>
//               StudyNotion
//             </div>

//             <h4 className="text-white font-semibold">Company</h4>
//             <ul className="space-y-2 text-sm">
//               <li>About</li>
//               <li>Careers</li>
//               <li>Affiliates</li>
//             </ul>

//             <div className="flex gap-4 text-sm text-gray">
//               <FaFacebookF />
//               <FaGoogle />
//               <FaTwitter />
//               <FaYoutube />
//             </div>
//           </div>

//           {/* RESOURCES */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Resources</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Articles</li>
//               <li>Blog</li>
//               <li>Chart Sheet</li>
//               <li>Code challenges</li>
//               <li>Docs</li>
//               <li>Projects</li>
//               <li>Videos</li>
//               <li>Workspaces</li>
//             </ul>
//           </div>

//           {/* PLANS */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Plans</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Paid memberships</li>
//               <li>For students</li>
//               <li>Business solutions</li>
//             </ul>

//             <h4 className="text-white font-semibold mt-6 mb-4">Community</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Forums</li>
//               <li>Chapters</li>
//               <li>Events</li>
//             </ul>
//           </div>

//           {/* SUBJECTS */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Subjects</h4>
//             <ul className="space-y-2 text-sm">
//               <li>AI</li>
//               <li>Cloud Computing</li>
//               <li>Code Foundations</li>
//               <li>Computer Science</li>
//               <li>Cybersecurity</li>
//               <li>Data Analytics</li>
//               <li>Data Science</li>
//               <li>Data Visualization</li>
//               <li>Developer Tools</li>
//               <li>DevOps</li>
//               <li>Game Development</li>
//               <li>IT</li>
//               <li>Machine Learning</li>
//               <li>Math</li>
//               <li>Mobile Development</li>
//               <li>Web Design</li>
//               <li>Web Development</li>
//             </ul>
//           </div>

//           {/* LANGUAGES */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Languages</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Bash</li>
//               <li>C++</li>
//               <li>C#</li>
//               <li>Go</li>
//               <li>HTML & CSS</li>
//               <li>Java</li>
//               <li>JavaScript</li>
//               <li>Kotlin</li>
//               <li>PHP</li>
//               <li>Python</li>
//               <li>R</li>
//               <li>Ruby</li>
//               <li>SQL</li>
//               <li>Swift</li>
//             </ul>
//           </div>

//           {/* CAREER */}
//           <div>
//             <h4 className="text-white font-semibold mb-4">Career building</h4>
//             <ul className="space-y-2 text-sm">
//               <li>Career paths</li>
//               <li>Career services</li>
//               <li>Interview prep</li>
//               <li>Professional certification</li>
//               <li>Full Catalog</li>
//               <li>Beta Content</li>
//             </ul>
//           </div>
//         </div>

//         {/* DIVIDER */}
//         <div className="border-t border-gray-700 mt-16 pt-6 flex flex-col md:flex-row justify-between text-sm">
//           <div className="flex gap-4">
//             <span>Privacy Policy</span>
//             <span>Cookie Policy</span>
//             <span>Terms</span>
//           </div>

//           <div className="mt-4 md:mt-0">
//             Made with ❤️ by Shivani Chaurasiya © 2026 Studynotion
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E222B] text-gray-400 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">

          {/* LOGO + COMPANY */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-semibold text-xl">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                S
              </div>
              StudyNotion
            </div>

            <h4 className="text-white font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Affiliates</li>
            </ul>

            <div className="flex gap-4 text-lg text-gray-300">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaGoogle className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Articles</li>
              <li>Blog</li>
              <li>Cheat Sheet</li>
              <li>Code challenges</li>
              <li>Docs</li>
              <li>Projects</li>
              <li>Videos</li>
              <li>Workspaces</li>
            </ul>
          </div>

          {/* PLANS */}
          <div>
            <h4 className="text-white font-semibold mb-4">Plans</h4>
            <ul className="space-y-2 text-sm">
              <li>Paid memberships</li>
              <li>For students</li>
              <li>Business solutions</li>
            </ul>

            <h4 className="text-white font-semibold mt-6 mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>Forums</li>
              <li>Chapters</li>
              <li>Events</li>
            </ul>
          </div>

          {/* SUBJECTS */}
          <div className="hidden md:block">
            <h4 className="text-white font-semibold mb-4">Subjects</h4>
            <ul className="space-y-2 text-sm">
              <li>AI</li>
              <li>Cloud Computing</li>
              <li>Computer Science</li>
              <li>Cybersecurity</li>
              <li>Data Science</li>
              <li>DevOps</li>
              <li>Machine Learning</li>
              <li>Web Development</li>
            </ul>
          </div>

          {/* LANGUAGES */}
          <div className="hidden lg:block">
            <h4 className="text-white font-semibold mb-4">Languages</h4>
            <ul className="space-y-2 text-sm">
              <li>C++</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>PHP</li>
              <li>SQL</li>
              <li>Swift</li>
            </ul>
          </div>

          {/* CAREER */}
          <div className="hidden lg:block">
            <h4 className="text-white font-semibold mb-4">Career building</h4>
            <ul className="space-y-2 text-sm">
              <li>Career paths</li>
              <li>Interview prep</li>
              <li>Certification</li>
              <li>Full Catalog</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row gap-4 items-center justify-between text-sm text-center md:text-left">

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <span>Privacy Policy</span>
            <span>Cookie Policy</span>
            <span>Terms</span>
          </div>

          <div>
            Made with ❤️ by Shivani Chaurasiya © 2026 Studynotion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

