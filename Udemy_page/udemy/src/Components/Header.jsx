// import React from 'react'

// const Header = () => {
//   return (
//     <div>
//       <div className='header'>
//             <div className='search-container'>
//             <input
//             type="text"
//             className="search-input"
//             placeholder="Search..."
//             />
//             <svg xmlns="http://www.w3.org/2000/svg" 
//                 fill="none" 
//                 viewBox="0 0 24 24" 
//                 strokeWidth="1.5" 
//                 stroke="currentColor" 
//                 className="search-icon">
//                 <path strokeLinecap="round" strokeLinejoin="round" 
//                     d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
//             </svg>

//             </div>

//             <div className="buttons-container">
//                 <button>
//                     explore
//                 </button>
//                 <button>
//                 plans&pricing
//                 </button>
//                 <button>
//                 udemy business
//                 </button>
//                 <button>
//                 teach on udemy
//                 </button>

//                 <button>
//                     cart
//                 </button>
//                 <button>
//                     login
//                 </button>

//                 <button>
//                     sign up
//                 </button>

//                 <button>
//                 language
//                 </button>
                
//             </div>
//       </div>
//       <div className="footer">
//         <div className="fbuttons">
//        <span> <strong>UDEMY </strong></span><span>&copy; 2025 Udemy ,inc</span><span>cookie settings</span> <span>langauge</span>
//        </div>
//       </div>
//     </div>
//   )
// }

// export default Header
import React from "react";


const Header = () => {
  return (
    <header className="udemy-header">

      {/* Logo */}
      <div className="logo">Udemy</div>

      {/* Search Box */}
      <div className="search-box">
        <input type="text" placeholder="Search for anything" />
        <span className="search-icon">🔍</span>
      </div>

      {/* Nav Buttons */}
      <nav className="nav-buttons">
        <button>Explore</button>
        <button>Plans & Pricing</button>
        <button>Udemy Business</button>
        <button>Teach on Udemy</button>
      </nav>

      {/* Right Side Buttons */}
      <div className="right-buttons">
        <button>Cart</button>
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>

    </header>
  );
};

export default Header;
