import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {

  const styles = {
    color: {
      color:'black'
    },
    textDec: {
    textDecoration: 'none'
    }
  }

  return (
    <div className="nav nav-tabs justify-content-center bg-dark text-decoration-none text-white">
      <p className="nav-item justify-content-left"> Marco Rodriguez </p>
    <ul className="nav nav-tabs justify-content-center bg-dark text-decoration-none text-white">

      <li className="nav-item mt-4 text-decoration-none text-white">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          style={styles.color}
        >
          About
        </a>
      </li>
      <li className="nav-item mt-4">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>
      <li className="nav-item mt-4">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item mt-4">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
