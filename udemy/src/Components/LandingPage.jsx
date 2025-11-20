// import React from 'react';
// //import img1 from "../Images/Screenshot 2025-11-19 155540.png";
// const LandingPage = () => {
//   return (
//     <div>
//       <div className="landingpage-container">
//         <div className="image-continer">
//               <img></img>
//         </div>
//         <div className="getstarted">

//             <article>
//                 <h1>Master skills</h1>
//                 <p>Power up your AI, career, and life skills with the most up-to-date, expert-led learning.</p>
//             </article>
//             <div className="getstarted-buttons">
//                 <button>get started</button>
//                 <button>learn AI</button>
//             </div>

//         </div>
      

//       </div>
//       <div className="maincontentcourses">
//         <h1>Skills to transform your career and life</h1>
//         <p>From critical skills to technical topics, Udemy supports your professional development.</p>
//         <div className="boxes">
//           <div className="box1">
//             <img src="/Images/Screenshot 2025-11-19 155540.png"alt="img1"/>
//             <h2>The AI Engineer Course 2025: Complete AI Engineer Bootcamp</h2>
//             <strong>399$</strong>
//           </div>
//           <div className="box2">
//                 <img src='/Images/Screenshot 2025-11-19 170801.png'/>
//             <h2>Intro to AI Agents and Agentic AI</h2>
//             <strong>299$</strong>
//           </div>
//           <div className="box3">
//               <img src='/Images/Screenshot 2025-11-19 170940.png'/>
//             <h2>Artificial Intelligence for Business + ChatGPT Prize [2025]</h2>
//             <strong>199$</strong>
//           </div>
//           <div className="box4">
//               <img src="/Images/Screenshot 2025-11-19 171101.png"/>
//             <h2>Data Science & AI Masters 2025 - From Python To Gen AI</h2>
//             <strong>99$</strong>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default LandingPage
// import React from "react";

// const LandingPage = () => {
//   return (
//     <div className="hero">

//       <div className="hero-text">
//         <h1>Master skills to build your future</h1>
//         <p>
//           Learn AI, coding, business, and thousands of other topics taught by real experts.
//         </p>

//         <div className="hero-buttons">
//           <button className="start-btn">Get Started</button>
//           <button className="ai-btn">Learn AI</button>
//         </div>
//       </div>

//       <div className="hero-image">
//         <img 
//           src="/src/Images/hero.png"
//           alt="learning illustration"
//         />
//       </div>

//     </div>
//   );
// };

// export default LandingPage;






// import React from 'react';


// const LandingPage = () => {
//   return (
//     <div>

//       {/* ================= HERO SECTION ================= */}
//       <div className="landingpage-container">

//         <div className="image-container">
//           <img src="/Images/hero.jpg" alt="hero" />
//         </div>

//         <div className="getstarted">
//           <article>
//             <h1>Master Skills for Your Future</h1>
//             <p>
//               Power up your AI, career, and life skills with the most up-to-date, expert-led learning.
//             </p>
//           </article>

//           <div className="getstarted-buttons">
//             <button className="primary-btn">Get Started</button>
//             <button className="secondary-btn">Learn AI</button>
//           </div>
//         </div>

//       </div>

//       {/* ================= COURSE SECTION ================= */}
//       <div className="maincontentcourses">

//         <h1>Skills to Transform Your Career and Life</h1>
//         <p>
//           From critical skills to technical topics, Udemy supports your professional development.
//         </p>

//         <div className="boxes">

//           <div className="box">
//             <img src="/Images/Screenshot 2025-11-19 155540.png" alt="" />
//             <h2>The AI Engineer Course 2025: Complete AI Engineer Bootcamp</h2>
//             <strong>$399</strong>
//           </div>

//           <div className="box">
//             <img src="/Images/Screenshot 2025-11-19 170801.png" alt="" />
//             <h2>Intro to AI Agents and Agentic AI</h2>
//             <strong>$299</strong>
//           </div>

//           <div className="box">
//             <img src="/Images/Screenshot 2025-11-19 170940.png" alt="" />
//             <h2>Artificial Intelligence for Business + ChatGPT Prize [2025]</h2>
//             <strong>$199</strong>
//           </div>

//           <div className="box">
//             <img src="/Images/Screenshot 2025-11-19 171101.png" alt="" />
//             <h2>Data Science & AI Masters 2025 - From Python To Gen AI</h2>
//             <strong>$99</strong>
//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default LandingPage;



import React, { useState } from "react";

const categories = ["AI", "Python", "Excel", "Agentic AI", "Marketing", "AWS"];

const courseData = {
  AI: [
    { title: "AI Engineer Bootcamp 2025", img: "/Images/Screenshot 2025-11-19 155540.png", price: "$399" },
    { title: "Intro to AI Agents", img: "/Images/Screenshot 2025-11-19 170801.png", price: "$299" },
    { title: "AI for Business + ChatGPT", img: "/Images/Screenshot 2025-11-19 170940.png", price: "$199" },
    { title: "Data Science & AI Masters 2025", img: "/Images/Screenshot 2025-11-19 171101.png", price: "$99" }
  ],
  Python: [
    { title: "Python for Beginners", img: "/Images/py.png", price: "$49" },
    { title: "Advanced Python", img: "/Images/py2.png", price: "$79" }
  ],
  Excel: [
    { title: "Excel Bootcamp 2025", img: "/Images/img3.png", price: "$39" },
  ],
  "Agentic AI": [
    { title: "Build AI Agents 2025", img: "/Images/img4.png", price: "$149" }
  ],
  Marketing: [
    { title: "Digital Marketing Course", img: "/Images/img3.png", price: "$59" }
  ],
  AWS: [
    { title: "AWS Cloud Practitioner", img: "/Images/img1.png", price: "$129" }
  ]
};

const LandingPage = () => {
  const [activeCategory, setActiveCategory] = useState("AI");
  const [fade, setFade] = useState(false);

  const changeCategory = (cat) => {
    setFade(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setFade(false);
    }, 300); // fade transition
  };

  return (
    <div className="maincontentcourses">

      <h1>Skills to transform your career and life</h1>
      <p>From critical skills to technical topics, Udemy supports your professional development.</p>

      {/* ----------------- CATEGORY TABS ---------------- */}
      <div className="tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "tab active" : "tab"}
            onClick={() => changeCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ----------------- COURSE LIST (Fades) ---------------- */}
      <div className={`course-list ${fade ? "fade-out" : "fade-in"}`}>
        {courseData[activeCategory].map((course, i) => (
          <div className="course-card" key={i}>
            <img src={course.img} alt="" />
            <h3>{course.title}</h3>
            <strong>{course.price}</strong>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LandingPage;
