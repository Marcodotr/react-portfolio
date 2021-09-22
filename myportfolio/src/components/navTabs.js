import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Resume from '../asset/pdf/Resume.pdf'


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
    <nav className="nav mt-6 nav-tabs justify-content-center bg-dark text-decoration-none text-white">
    <div className='container-fluid'>
    <ul className="nav nav-tabs justify-content-center text-align-center bg-dark text-decoration-none text-white ">
      <li className='navbar-header'>
        <a className='navbar-brand text-white h1'>
          Marco Rodriguez
        </a>
      </li>

      <li className="nav-item mt-5  text-decoration-none text-white">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-white'}
          // style={styles.color}
        >
          About
        </a>
      </li>
      <li className="nav-item mt-5">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link text-white'}
          // style={styles.color}
        >
          Projects
        </a>
      </li>
      <li className="nav-item mt-5">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link text-white'}
          // style={styles.color}
        >
          Contact
        </a>
      </li>
      <li className="nav-item mt-5">
        <a href={Resume} className={'nav-link text-white'}>
          Resume
        </a>
      </li>
    </ul>
    </div>
    
    </nav>
  );
}

export default NavTabs;
