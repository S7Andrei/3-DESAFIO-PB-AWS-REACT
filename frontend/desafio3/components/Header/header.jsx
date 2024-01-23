import React from 'react';
import styles from '../../components/Header/header.module.css';  // Importe as classes do arquivo CSS como um objeto

import logo from '../../src/assets/header/Logo.svg';
import user from '../../src/assets/header/user-avatar.svg';
import bell from '../../src/assets/header/bell-icon.svg';
import separetor from '../../src/assets/header/seperator.svg';

const Header = () => {
  return (
    <>

      <nav className={styles.NavBar}>  

        <div className={styles.headerContainer}>

        <div className={styles.logo}>  
        <a href="#">
          <img src={logo} alt="logo" />
        </a>
        </div>

        <div className={styles['nav-links']}> 
          <a className={styles.target}>Home</a>
          <a>Getting a Taxi</a>
          <a>Mobile App</a>
          <a>Contact Us</a>
        </div>

        <div className={styles['user-section']}>  
          <img src={bell} alt="bell" />
          <img src={separetor} alt="seperator" />
          <img src={user} alt="avatar" />
        </div>

        </div>
      </nav>

    </>
  );
};

export default Header;
